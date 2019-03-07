import React from 'react';

const Sprite = ({ type, id }) => {
  const path = `/${window.SvgLookup[type]}#${id}`;
  return (
    <svg>
      <use xlinkHref={path}></use>
    </svg>
  );
};

export default () => (
  <main>
    <Sprite type="banner" id="hero" />
    <Sprite type="logo" id="app-hollow" />
    <Sprite type="logo" id="app-subtract" />
    <Sprite type="logo" id="social-facebook" />
    <Sprite type="logo" id="social-instagram" />
  </main>
);
