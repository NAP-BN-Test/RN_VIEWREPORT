/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// e.g in your index.js
import {
  en,
  // nl,
  registerTranslation,
} from 'react-native-paper-dates';
registerTranslation('en', en);
// registerTranslation('nl', nl)

AppRegistry.registerComponent(appName, () => App);
