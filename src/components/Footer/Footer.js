import React from 'react';

import './Footer.module.css';

const footer = (props) => (
  <footer>
    <ul>
      <li onClick={() => props.page(1)}>1</li>
      <li>•</li>
      <li onClick={() => props.page(2)}>2</li>
      <li>•</li>
      <li onClick={() => props.page(3)}>3</li>
      <li>•</li>
      <li onClick={() => props.page(4)}>4</li>
      <li>•</li>
      <li onClick={() => props.page(5)}>5</li>
      <li>•</li>
      <li onClick={() => props.page(6)}>6</li>
      <li>•</li>
      <li onClick={() => props.page(7)}>7</li>
    </ul>
  </footer>
);

export default footer;
