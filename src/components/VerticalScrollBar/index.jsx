import React, { useEffect } from 'react';
import css from './VerticalScrollBar.module.scss';

const VerticalScrollBar = props => {
  useEffect(() => {
    window.addEventListener('scroll', updateVerticalScrollBar);
    updateVerticalScrollBar();
    return () => {
      window.removeEventListener('scroll', updateVerticalScrollBar);
    };
  }, []);

  const updateVerticalScrollBar = () => {
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

export default React.memo(VerticalScrollBar);
