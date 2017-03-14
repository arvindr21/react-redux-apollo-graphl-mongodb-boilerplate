import {
    FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILED
} from '../actions/types';

export default function (users = {users: null, loading: false}, action) {
    switch (action.type) {
        case FETCH_USERS:
            console.log('******* users *********')
            return Object.assign({}, users, {
                loading: true
            })
        case FETCH_USERS_SUCCESS:
            console.log('******* success *********')
            return Object.assign({}, users, {
                loading: false,
                users: action.result.data?action.result.data:null
            })
        case FETCH_USERS_FAILED:
            console.log('******* failed *********')
            return Object.assign({}, users, {
                loading: false
            })
        default:
            return users
    }

}
