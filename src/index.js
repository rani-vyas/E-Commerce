import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { Counter } from './counter/count';
import store from './app/store';
import { Provider } from 'react-redux';
//import { CounterReducers, ReduxStore } from './react-store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

/*import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import formReducer from './reducers/formReducer';
import Form from './component/Form';

const store = createStore(formReducer);

ReactDOM.render(
  <Provider store={store}>
    <Form />
  </Provider>,
  document.getElementById('root')
);*/