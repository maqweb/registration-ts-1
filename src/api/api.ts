import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://dry-forest-56016.herokuapp.com/auth/'
});

export const api = {
    sendData(email: string, password: string, rememberMe: boolean) {
        return instance.post('login', {email, password, rememberMe} )
    }
};