import 'whatwg-fetch';
import {get, del} from './api';

export function getUsers() {
  return get('users');
}

export function getUserById(id) {
  return get(`users/${id}`);
}

export function deleteUserById(id) {
  return del(`users/${id}`);
}
