import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import configureStore from './configureStore';

const initialState = {};
// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };
// const persistedReducer = persistReducer(persistConfig);
export const store = configureStore(initialState);
