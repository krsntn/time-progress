import React from 'react';
import css from './Switch.module.scss';

const Switch = props => {
  const { isChecked, toggleSwitch } = props;

  return (
    <div className={`custom-control custom-switch ${css.switchDiv}`} size="3">
      <input
        type="checkbox"
        className="custom-control-input"
        id="customSwitch1"
        checked={isChecked}
        onChange={toggleSwitch}
      />
      <label className="custom-control-label" htmlFor="customSwitch1"></label>
    </div>
  );
};

export default React.memo(Switch);
