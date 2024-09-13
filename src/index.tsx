import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PersistConfig,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {thunk} from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from '@redux/reducer';
import rootSaga from './redux/sagas';
import App from './App';
import {RootState} from '@redux/rootInterface';

const sagaMiddleware = createSagaMiddleware();

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['core'],
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(thunk, sagaMiddleware),
});

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

function Root() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}

export default Root;
