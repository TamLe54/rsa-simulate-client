import { combineReducers } from '@reduxjs/toolkit';

import staffInformationReducer from './staff-information.store';
import themeReducer from './theme.store';
import userReducer from './user.store';

const rootReducer = combineReducers({
  user: userReducer,
  global: themeReducer,
  staffInfo: staffInformationReducer,
});

export default rootReducer;
