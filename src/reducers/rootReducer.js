import {combineReducers} from 'redux';
import contestReducer from './contestReducer';

const rootReducer = combineReducers({
    contests: contestReducer
});

export default rootReducer;