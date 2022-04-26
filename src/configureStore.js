import { createStore, compose, applyMiddleware } from 'redux';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger';

import createReducer from './reducers';

export default (initialState = {}) => {
  const composeEnhancers = compose;
  const sagaMiddleware = createSagaMiddleware({});
  const runSaga = sagaMiddleware.run;

  const injectEnhancer = createInjectorsEnhancer({
    createReducer,
    runSaga,
  });
  const middlewares = [sagaMiddleware /* logger */];
  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers, injectEnhancer),
  );

  store.injectedReducers = {};
  store.injectedSagas = {};

  return store;
};

// import { createStore, compose, applyMiddleware } from 'redux';
// import { createInjectorsEnhancer } from 'redux-injectors';
// import createSagaMiddleware from 'redux-saga';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// // import logger from 'redux-logger';

// import createReducer from './reducers';

// export default (initialState = {}) => {
//   const composeEnhancers = compose;
//   const sagaMiddleware = createSagaMiddleware({});
//   const runSaga = sagaMiddleware.run;

//   const injectEnhancer = createInjectorsEnhancer({
//     createReducer,
//     runSaga,
//   });
//   const middlewares = [sagaMiddleware /* logger */];
//   const enhancers = [applyMiddleware(...middlewares)];
//   const persistConfig = {
//     key: 'root',
//     storage,
//   };
//   const persistedReducer = persistReducer(persistConfig, createReducer);

//   const store = createStore(
//     createReducer(),
//     initialState,
//     composeEnhancers(...enhancers, injectEnhancer),
//     persistedReducer,
//   );

//   const persistor = persistStore(store);

//   store.injectedReducers = {};
//   store.injectedSagas = {};

//   return { persistor, store };
// };
