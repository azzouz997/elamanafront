import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    public token: string;
    public role: string;
    apiUrl = 'https://localhost:44332';

    constructor(private http: HttpClient) {
        this.token = localStorage.getItem('token');
        this.role = localStorage.getItem('role');
    }

    login(login: string, password: string) {
        return this.http.post<any>(`${this.apiUrl}/api/Authentication`, { login, password })
            .pipe(map(res => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', res); // JSON.stringify(user)
                localStorage.setItem('role', res.role); // JSON.stringify(user)
                localStorage.setItem('token', res.token); // JSON.stringify(user)
                localStorage.setItem('login', res.login); // JSON.stringify(user)
                return res;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('login');
    }
}
