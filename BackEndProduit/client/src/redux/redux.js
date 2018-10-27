/*-----------------------------------------------------
-> Import Librairies
-----------------------------------------------------*/
import { createStore, applyMiddleware, compose } from 'redux';
/*-----------------------------------------------------
-> Import Reducers
-----------------------------------------------------*/
import reducer from 'src/redux/reducers';
/*-----------------------------------------------------
-> Import Middleware
-----------------------------------------------------*/
import request from 'src/redux/middlewares/request';
/*-----------------------------------------------------
-> Others
-----------------------------------------------------*/
const middlewares = [
  request,
];
const libMiddlewares = applyMiddleware(...middlewares);

const devTools = [
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
];

const enhancers = compose(libMiddlewares, ...devTools);

const store = createStore(
  reducer,
  enhancers,
);

/*-----------------------------------------------------
-> Exports
-----------------------------------------------------*/
export default store;
