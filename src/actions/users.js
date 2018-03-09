import {
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED
} from './types';

export function fetchUsers() {
    return {
        types: [FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILED],
        promise: client => client.post('/users')
    };
}