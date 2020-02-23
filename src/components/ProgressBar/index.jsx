import React from 'react';
import css from './Progress.module.scss';

const Progress = props => {
  const {
    emoji,
    title,
    data: { percentage, days },
    showDiff,
  } = props;

  return (
    <div className={css.element}>
      <div className={css.title}>
        <div className={css.progressTitle}>
          <span role="img" aria-labelledby="emoji">
            {emoji}
          </span>{' '}
          {title}
        </div>
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
