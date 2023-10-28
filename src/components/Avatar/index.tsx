import { HTMLAttributes, useMemo } from "react";

import classNames from "classnames";

import { GoPerson as Placeholder } from "react-icons/go";

import styles from "./index.module.scss";

import wrapper from "../../utils/wrapper";

export interface IAvatarOwnProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  alt?: string;
  height?: number;
  isFetching?: boolean;
  src?: string;
  width?: number;
}

export type TAvatarRef = HTMLDivElement;

const Avatar = wrapper<TAvatarRef, IAvatarOwnProps>(
  (
    {
      active,
      alt,
      height,
      isFetching,
      src,
      width,
      className,
      ...containerProps
    },
    ref
  ) => {
    const outlineWidth = useMemo(() => {
      if (width) {
        if (width >= 60) {
          return 3;
        } else if (width >= 36) {
          return 2;
        } else {
          return 1;
        }
      }
      return 1;
    }, [width]);

    return (
      <div
        ref={ref}
        className={classNames(
          styles.container,
          active && styles.active,
          isFetching && styles.isFetching,
          className
        )}
        {...containerProps}
        style={{
          height: height,
          width: width,
          outlineWidth: outlineWidth,
          outlineOffset: outlineWidth,
          ...containerProps.style,
        }}
      >
        {src ? (
          <img alt={alt} className={styles.image} src={src} />
        ) : (
          <Placeholder className={styles.image} />
        )}
      </div>
    );
  }
);

Avatar.defaultProps = {
  active: false,
  alt: "avatar",
  height: 44,
  isFetching: false,
  src: "",
  width: 44,
};

export interface IAvatarProps extends React.ComponentProps<typeof Avatar> {}

export default Avatar;
