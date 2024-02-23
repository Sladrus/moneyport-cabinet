import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as ErrorIcon } from '../../assets/icons/input/rejection.svg';
import { ReactComponent as ClosedEyeIcon } from '../../assets/icons/input/closed-eye.svg';
import { ReactComponent as OpenedEyeIcon } from '../../assets/icons/input/opened-eye.svg';
import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrows/select-arrow-down.svg';
import { ReactComponent as ArrowUpIcon } from '../../assets/icons/arrows/select-arrow-up.svg';

import './TextSelect.css';
import Popup from 'reactjs-popup';
import Badge from '../Badge';

const TextSelect = ({
  className = 'popup',
  value,
  errors,
  onClick,
  onChange,
  placeholder,
  type,
  disabled,
  options,
  badgeText,
  badgeColor,
}) => {
  const [showPass, setShowPass] = useState(false);
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState();

  const ref = useRef();
  const observedDiv = useRef();

  const closeTooltip = () => ref.current.close();

  useEffect(() => {
    if (!observedDiv?.current) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      if (observedDiv?.current?.offsetWidth !== width) {
        setWidth(observedDiv?.current?.offsetWidth);
      }
    });

    resizeObserver.observe(observedDiv.current);
    return function cleanup() {
      resizeObserver.disconnect();
    };
  }, [observedDiv?.current]);

  return (
    <div className="input" ref={observedDiv}>
      <div
        onClick={onClick}
        className={`input-body ${open ? 'open' : ''} ${
          errors ? 'reject' : ''
        } ${disabled ? 'disabled' : ''}`}
      >
        <div style={{ width: '100%', display: 'flex' }}>
          <div
            style={{
              width: '100%',
              minWidth: '120px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'start',
            }}
          >
            <Popup
              className={className}
              ref={ref}
              position="bottom left"
              on="click"
              onOpen={() => setOpen(true)}
              onClose={() => setOpen(false)}
              offsetY={1}
              contentStyle={{
                borderRadius: 0,
                padding: 0,
                width: width,
              }}
              arrow={false}
              trigger={
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <div className="input-value">{value}</div>
                  <div className="input-icon">
                    {open ? <ArrowDownIcon /> : <ArrowUpIcon />}
                  </div>
                </div>
              }
            >
              <div className="input-menu">
                {options?.map((item) => {
                  return (
                    <div
                      className="input-menu-item"
                      onClick={() => {
                        onChange(item);
                        setOpen(false);
                        closeTooltip();
                      }}
                    >
                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>
            </Popup>

            <label className={value && 'filled'}>{placeholder}</label>
          </div>
        </div>
        <div className="input-badge">
          {badgeText && (
            <Badge
              className="badge-instance"
              color={badgeColor}
              text={badgeText}
            />
          )}
        </div>
        {!errors && type === 'password' && (
          <>
            {showPass ? (
              <OpenedEyeIcon
                className="input-body-eye"
                onClick={() => setShowPass(!showPass)}
              />
            ) : (
              <ClosedEyeIcon
                className="input-body-eye"
                onClick={() => setShowPass(!showPass)}
              />
            )}
          </>
        )}
        {errors && <ErrorIcon />}
      </div>
      {errors &&
        errors.map((error, index) => (
          <span key={index} className="input-error">
            {error}
          </span>
        ))}
    </div>
  );
};

export default TextSelect;
