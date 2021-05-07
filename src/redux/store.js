import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth';
import testReducer from './qa-tests/test-slice';

const userPersistConfig = {
  key: 'users',
  storage,
};
const testPersistConfig = {
  key: 'qaTest',
  storage,
};

const store = configureStore({
  reducer: {
    users: persistReducer(userPersistConfig, authReducer),
    qaTest: persistReducer(testPersistConfig, testReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export { store, persistor };
