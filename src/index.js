import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RecoilRoot} from "recoil/dist";

ReactDOM.render(
  <React.StrictMode>
      <RecoilRoot>
      <App />
      </RecoilRoot>

  </React.StrictMode>,
  document.getElementById('root')
);

