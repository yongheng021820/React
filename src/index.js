import React, { Suspense } from 'react';
// Suspense 组件是异步加载，可能导入失败，
// Suspense 做包裹，fallback='loading' 或组件
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux'

import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';
import 'normalize.css'
import './assets/css/index.less'

import { ThemeProvider } from 'styled-components';
import theme from './assets/theme';


// @ => src: webpack  别名
// 问题：react脚手架隐藏webpack
// 解决办法一：npm run eject
// 解决二：craco => create-react-app  npm install @craco/craco@alpha -D  创建craco.config.js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Suspense fallback='loading'>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter >
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
