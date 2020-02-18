import React from 'react';
import css from './Progress.module.scss';

const Progress = props => {
  const {
    title,
    data: { percentage, days },
    showDiff,
  } = props;

  return (
    <div className={css.element}>
      <div className={css.title}>
        <div>{title}</div>
        <div>{`${showDiff ? days + ' Left' : percentage + '%'}`}</div>
      </div>
      <div className={`${css.progressbar} progress`}>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{
            width: `${percentage}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default React.memo(Progress);
