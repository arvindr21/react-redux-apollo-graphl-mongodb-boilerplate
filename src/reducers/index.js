import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import counter from './counter';
import auth from './auth';
import user from './user';
import users from './users';

export default (apolloClient) => {
    return combineReducers({
        counter,
        auth,
        user,
        users,
        routing,
        form: formReducer,
        apollo: apolloClient.reducer()
    });
}
