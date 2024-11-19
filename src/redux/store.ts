import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  expenses  from './slices/handleexpenses';

const persistConfig = {
  key: 'root',
  storage : AsyncStorage,
  whitelist: ['expenses'], 
};

const rootReducer = combineReducers({
  expenses: expenses,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], 
        ignoredActionPaths: ['expenses'],
        ignoredPaths: ['expenses'], 
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;