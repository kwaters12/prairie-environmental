import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import WeedReportFormReducer from './WeedReportFormReducer';

export default combineReducers({
    auth: AuthReducer,
    weedReportForm: WeedReportFormReducer
});
