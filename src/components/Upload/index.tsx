import {
  ChangeEvent,
  DragEvent,
  Fragment,
  HTMLAttributes,
  useRef,
  useState,
} from "react";

import classNames from "classnames";
import { isArray } from "lodash";

import {
  GoPlus as AddIcon,
  GoDownload as CloudUploadIcon,
} from "react-icons/go";

import styles from "./index.module.scss";

import { checkFileFormat, checkFileSize, fileListToArray } from "../../utils";
import wrapper from "../../utils/wrapper";
import Button, { EButtonColors, EButtonVariants } from "../Button";
import IconButton, {
  EIconButtonColors,
  EIconButtonVariants,
} from "../IconButton";

import UploadItem, { EUploadItemType, IUploadItemProps } from "./UploadItem";

export type TFile = {
  id: string;
  file?: File;
  loading?: boolean;
  url?: string;
};

export type TUploadValue = TFile[];

export type EUploadType = EUploadItemType;
export const EUploadType = EUploadItemType;

export interface IUploadOwnProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "onSelect"> {
  buttonText?: string;
  description?: string;
  disabled?: boolean;
  format?: string[];
  isFetching?: boolean;
  label?: string;
  multiple?: boolean;
  onChange?: (value: TUploadValue) => void;
  onSelect?: (value: TUploadValue) => void;
  selected?: TUploadValue;
  size?: number;
  type?: EUploadType;
  value: TUploadValue;
  mainLabel?: string;
}

export type TUploadRef = HTMLDivElement;

const Upload = wrapper<TUploadRef, IUploadOwnProps>(
  (
    {
      buttonText,
      className,
      description,
      disabled,
      format,
      isFetching,
      label,
      multiple,
      onChange,
      onSelect,
      selected,
      size,
      type,
      value,
      mainLabel,
      ...cotainerProps
    },
    ref
  ) => {
    const [dragActive, setDragActive] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const [dragId, setDragId] = useState<string | null>(null);

    const onDragStart: IUploadItemProps["onDragStart"] = (event) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const id = event.currentTarget?.id;
      setDragId(id);
    };

    const onDrop: IUploadItemProps["onDrop"] = (event) => {
      event.preventDefault();

      const dropId = event.currentTarget.id || null;

      if (dropId && onChange) {
        const dropIndex = value.findIndex((item) => item.id === dropId);
        const dragIndex = value.findIndex((item) => item.id === dragId);

        if (dropIndex !== dragIndex) {
          const newValue = [...value];
          const [dragItem] = newValue.splice(dragIndex, 1);
          newValue.splice(dropIndex, 0, dragItem);
          onChange(newValue);
        }
      }
      // setDraggingId(null)
    };

    const getValidFiles = (files: TUploadValue): TUploadValue => {
      if (size || format?.length) {
        return files.filter(({ file }) => {
          if (!file) {
            return true;
          }

          if (size) {
            return checkFileSize(file, size);
          }
          if (format?.length) {
            return checkFileFormat(file, format);
          }
          return true;
        });
      }

      return files;
    };

    const handleChange = (files: TUploadValue) => {
      if (onChange) {
        const validFiles = getValidFiles(files);
        onChange(validFiles);
      }
    };

    const handleDrag = (e: DragEvent<HTMLDivElement>) => {
      if (disabled) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
      if (disabled) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const files: TUploadValue = fileListToArray(e.dataTransfer.files).map(
          (file) => ({
            id: file.name,
            file,
          })
        );

        handleChange(files);
      }
    };

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      if (disabled) {
        return;
      }

      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
        const files: TUploadValue = fileListToArray(e.target.files).map(
          (file) => ({
            id: file.name,
            file,
          })
        );

        handleChange(files);
      }
    };

    const onButtonClick = () => {
      if (!disabled && inputRef.current) {
        inputRef.current.value = "";
        inputRef.current.click();
      }
    };

    const isSelectable = !!onSelect && isArray(selected);
    const isMinimal = !!value.length && type === EUploadType.IMAGE;

    const renderUploadArea = () => (
      <div
        ref={ref}
        className={classNames(
          styles.upload,
          dragActive && styles.draging,
          isMinimal && styles.minimal
        )}
        onDragEnter={handleDrag}
        onSubmit={(e) => e.preventDefault()}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          id="input-file-upload"
          ref={inputRef}
          className={styles.input}
          type="file"
          multiple={multiple}
          onChange={onChangeInput}
          disabled={disabled}
          accept={format?.join(",")}
        />
        <label className={styles.label} htmlFor="input-file-upload">
          <CloudUploadIcon className={styles.icon} />
          <div className={styles.labelText}>{label}</div>
          <div className={styles.description}>{description}</div>
          {isMinimal ? (
            <IconButton
              Icon={AddIcon}
              className={styles.button}
              onClick={onButtonClick}
              variant={EIconButtonVariants.LINK}
              color={EIconButtonColors.SECONDARY}
              disabled={disabled}
            />
          ) : (
            <Button
              className={styles.button}
              onClick={onButtonClick}
              variant={EButtonVariants.LINK}
              color={EButtonColors.PRIMARY}
              disabled={disabled}
            >
              {buttonText}
            </Button>
          )}
        </label>
      </div>
    );

    const renderFiles = () => (
      <div className={styles.files}>
        {isMinimal && renderUploadArea()}
        {value.map((fileObj, i) => {
          const isSelected =
            isSelectable && !!selected?.some((f) => f.id === fileObj.id);
          // FIXME: not working with selectable
          const isMain = i === 0;

          return (
            <UploadItem
              file={fileObj}
              key={fileObj.id}
              type={type || EUploadType.FILE}
              onDelete={(deletedFile) => {
                const newFiles = value.filter((f) => f.id !== deletedFile.id);
                handleChange(newFiles);
              }}
              selectable={isSelectable}
              selected={isSelected}
              onDeselect={(deselectedFile) => {
                if (isSelectable) {
                  const newFiles = selected.filter(
                    (f) => f.id !== deselectedFile.id
                  );
                  onSelect(newFiles);
                }
              }}
              onSelect={(selectedFile) => {
                if (isSelectable) {
                  onSelect([...selected, selectedFile]);
                }
              }}
              mainLabel={isMain ? mainLabel : undefined}
              onDragStart={onDragStart}
              onDrop={onDrop}
            />
          );
        })}
      </div>
    );

    const renderTypeImage = () => {
      if (isMinimal) {
        return renderFiles();
      } else {
        return renderUploadArea();
      }
    };

    const renderTypeIFile = () => (
      <Fragment>
        {renderUploadArea()}
        {renderFiles()}
      </Fragment>
    );

    return (
      <div
        className={classNames(
          styles.container,
          className,
          type === EUploadType.IMAGE ? styles.typeImage : styles.typeFile,
          isFetching && styles.isFetching,
          disabled && styles.disabled
        )}
        {...cotainerProps}
      >
        {type === EUploadType.IMAGE ? renderTypeImage() : renderTypeIFile()}
      </div>
    );
  }
);

Upload.defaultProps = {
  disabled: false,
  isFetching: false,
  multiple: false,
  type: EUploadType.FILE,
};

export interface IUploadProps extends React.ComponentProps<typeof Upload> {}

export default Upload;
