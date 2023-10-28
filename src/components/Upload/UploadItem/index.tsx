import { Fragment, useState } from "react";

import classNames from "classnames";
import { AnimatePresence, DragHandlers, motion } from "framer-motion";

import {
  GoTrash as DeleteOutlineIcon,
  GoFileMedia as PhotoIcon,
} from "react-icons/go";

import styles from "./index.module.scss";

import wrapper from "../../../utils/wrapper";
import CircularProgress, {
  ECircularProgressSize,
} from "../../CircularProgress";
import { TFile } from "..";

export enum EUploadItemType {
  FILE = "file",
  IMAGE = "image",
}

export interface IUploadItemOwnProps {
  file: TFile;
  type: EUploadItemType;
  onDelete: (file: TFile) => void;
  onSelect: (file: TFile) => void;
  onDeselect: (file: TFile) => void;
  selected: boolean;
  selectable: boolean;
  mainLabel?: string;
  onDragStart?: DragHandlers["onDragStart"];
  onDrop?: React.DragEventHandler<HTMLDivElement>;
}

export type TUploadItemRef = HTMLDivElement;

const UploadItem = wrapper<TUploadItemRef, IUploadItemOwnProps>(
  (
    {
      file,
      type,
      onDelete,
      onSelect,
      selected,
      onDeselect,
      selectable,
      mainLabel,
      onDragStart,
      onDrop,
    },
    ref
  ) => {
    const { file: localFile, url, id, loading } = file;
    const isLocal = !!localFile && !url;
    const fileSrc = isLocal ? URL.createObjectURL(localFile) : url;

    const [hovered, setHovered] = useState(false);

    const renderImage = () => (
      <Fragment>
        <img src={fileSrc} alt={id} className={styles.image} />
        {mainLabel && <div className={styles.mainLabel}>{mainLabel}</div>}
        {loading && (
          <div className={styles.loader}>
            <CircularProgress size={ECircularProgressSize.SMALL} />
          </div>
        )}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className={styles.delete}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <DeleteOutlineIcon size={20} onClick={() => onDelete(file)} />
            </motion.div>
          )}
        </AnimatePresence>
      </Fragment>
    );

    const renderFile = () => (
      <Fragment>
        {loading ? (
          <CircularProgress className={styles.loader} />
        ) : (
          <PhotoIcon className={styles.icon} />
        )}
        <div className={styles.name}>{id}</div>
        <DeleteOutlineIcon
          className={styles.delete}
          onClick={() => onDelete(file)}
        />
      </Fragment>
    );

    return (
      <motion.div
        ref={ref}
        id={id}
        className={classNames(
          styles.container,
          type === EUploadItemType.FILE ? styles.typeFile : styles.typeImage,
          hovered && styles.hovered,
          selectable && styles.selectable,
          selected && styles.selected,
          loading && styles.loading
        )}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        draggable
        onDragStart={onDragStart}
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => {
          if (selected) {
            onDeselect(file);
          } else {
            onSelect(file);
          }
        }}
      >
        {type === EUploadItemType.IMAGE ? renderImage() : renderFile()}
      </motion.div>
    );
  }
);

UploadItem.defaultProps = {};

export interface IUploadItemProps
  extends React.ComponentProps<typeof UploadItem> {}

export default UploadItem;
