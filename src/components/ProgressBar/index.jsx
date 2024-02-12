import React, { useCallback } from "react";
import css from "./Progress.module.scss";

const Progress = (props) => {
  const {
    emoji,
    title,
    data: { percentage, days },
    showDiff,
    outbreak,
  } = props;

  const displayDiff = useCallback(() => {
    if (showDiff) {
      if (typeof days !== "number") {
        return `${days} Left`;
      }

      const daySpan = `Day${days === -1 || days === 1 ? "" : "s"}`;
      if (days === 0) {
        return `Today!`;
      } else if (days < 0) {
        return `${Math.abs(days)} ${daySpan} Over`;
      }
      return `${days} ${daySpan} Left`;
    } else {
      return `${percentage}%`;
    }
  }, [showDiff, percentage, days]);

  return (
    <div className={`${css.element} ${outbreak ? css.outbreak : ""}`}>
      <div className={css.title}>
        <div className={css.progressTitle}>
          <span role="img" aria-labelledby="emoji">
            {emoji}
          </span>{" "}
          {title}
        </div>
        <div>{displayDiff()}</div>
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
