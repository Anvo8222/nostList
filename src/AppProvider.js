import React from 'react';
import { LogBox } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import App from './containers/App';
import { store } from './store';

LogBox.ignoreAllLogs();

function AppProvider() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null}> */}
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
      {/* </PersistGate> */}
    </Provider>
  );
}

AppProvider.propTypes = {};

export default AppProvider;
