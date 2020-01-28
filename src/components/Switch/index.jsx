import React from 'react';
import css from './Switch.module.scss';

const Switch = props => {
  const { isChecked, toggleSwitch } = props;

  return (
    <div className={`stom-control custom-switch ${css.switchDiv}`}>
      <input
        type="checkbox"
        className="custom-control-input"
        id="customSwitch1"
        checked={isChecked}
        onChange={toggleSwitch}
      />
      <label
        className={`custom-control-label ${css.label}`}
        htmlFor="customSwitch1"
      ></label>
    </div>
  );
};

export default React.memo(Switch);
