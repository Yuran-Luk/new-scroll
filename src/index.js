import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import { store } from './redux/store'
import './index.css';
import Dev from './Dev';
import reportWebVitals from './reportWebVitals';

const App = () => (
  <Provider store={store}>
      <Dev />
  </Provider>
)

render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
