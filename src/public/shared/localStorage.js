import { ACCESS_TOKEN, REFRESH_TOKEN } from '../api/elements';


export function getToken() {
    return localStorage.getItem(ACCESS_TOKEN);
}
  
export function removeToken() {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
}

