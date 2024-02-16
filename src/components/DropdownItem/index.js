import React, { useContext, useEffect, useState } from 'react';
import { ReactComponent as UploadIcon } from '../../assets/icons/dropdown/document-upload.svg';

import './DropdownItem.css';
import FileButton from '../FileButton';
import { DataContext } from '../../context/context';
import Badge from '../Badge';
import { useDropzone } from 'react-dropzone';

const DropdownItem = ({
  text,
  files,
  multiple = false,
  badgeText,
  badgeColor,
  onChange,
  onDelete,
  onDrop,
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      onDrop(acceptedFiles);
    },
    multiple,
  });

  const renderForm = () => {
    return (
      <div
        {...getRootProps()}
        onSubmit={(e) => e.preventDefault()}
        className="upload-wrapper"
      >
        <UploadIcon />
        <div className="text-wrapper-2">
          <span>
            <label className="upload-text">Выберите файл</label> или перетащите
            сюда
          </span>
        </div>
        <input
          {...getInputProps()}
          multiple={multiple}
          type="file"
          onChange={onChange}
        />
      </div>
    );
  };

  return (
    <div className="dropdown">
      <div className="dropdown-wrapper">
        <div className="text-wrapper">
          <span>{text}</span>
          {badgeText && (
            <Badge
              className="badge-instance"
              color={badgeColor}
              text={badgeText}
            />
          )}
        </div>
        {!multiple ? !files && renderForm() : renderForm()}
        <div className="files">
          {multiple
            ? files &&
              files?.map((file, index) => {
                return (
                  <FileButton
                    key={index}
                    text={file?.name || file}
                    onDelete={onDelete}
                  />
                );
              })
            : files && (
                <FileButton text={files?.name || files} onDelete={onDelete} />
              )}
        </div>
      </div>
    </div>
  );
};

export default DropdownItem;
