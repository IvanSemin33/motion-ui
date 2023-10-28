/**
 * @description Convert FileList to Array
 * @param files FileList | undefined | null
 * @return File[]
 */
export const fileListToArray = (files?: FileList | null): File[] => {
  if (!files) {
    return [];
  }

  return Array.from(files);
};

/**
 * @description Convert Array to FileList
 * @param files File[]
 * @return FileList
 * @example
 * const files = fileListToArray(event.target.files)
 * const fileList = arrayToFileList(files)
 **/
export const arrayToFileList = (files: File[]): FileList => {
  const dataTransfer = new DataTransfer();

  files.forEach((file) => dataTransfer.items.add(file));

  return dataTransfer.files;
};

/**
 * @description Check file format
 * @param file File
 * @param formats string[]
 * @return boolean
 * @example
 * import { FILE_IMAGE_FORMATS } from '@motion-ui/design-system/constants'
 * const isCorrectFormat = checkFileFormat(file, FILE_IMAGE_FORMATS)
 **/
export const checkFileFormat = (file: File, formats: string[]): boolean => {
  const fileFormat = file.type.split("/")[1];

  return formats.includes(fileFormat);
};

/**
 * @description Check file size
 * @param file File
 * @param size number
 * @return boolean
 * @example
 * const size = 1024 * 1024 * 5 // 5MB
 * const isCorrectSize = checkFileSize(file, size)
 * @note
 * 1MB = 1024 * 1024 * 1B
 **/
export const checkFileSize = (file: File, size: number): boolean => {
  return file.size <= size;
};
