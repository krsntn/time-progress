import React, { useEffect } from 'react';
import css from './VerticalProgressBar.module.scss';

const VerticalProgressBar = props => {
  useEffect(() => {
    window.addEventListener('scroll', updateVerticalProgressBar);
    updateVerticalProgressBar();
    return () => {
      window.removeEventListener('scroll', updateVerticalProgressBar);
    };
  }, []);

  const updateVerticalProgressBar = () => {
    const scrollPosition =
      document.body.scrollTop || document.documentElement.scrollTop;
    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrollPosition / totalHeight) * 100;

    document.querySelector(`.${css.progress}`).style.height = `${scrolled}%`;
  };

  return (
    <div className={css.bar}>
      <div className={`${css.progress} bg-danger`} />
    </div>
  );
};

export default React.memo(VerticalProgressBar);
