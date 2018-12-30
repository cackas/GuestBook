import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private token = null
    constructor(private http: HttpClient) {

    }
    
    register() {}

    login(user: User): Observable<{api_token: string}> {
        return this.http.post<{api_token: string}>('http://pusher.cpl.by/api/v1/auth/login', user)
            .pipe(
                tap(
                    ({api_token}) => {
                        localStorage.setItem('auth-token', api_token)
                        this.setToken(api_token)
                    }
                )
            )        
    }

    setToken(api_token: string) {
        this.token = api_token
    }

    getToken(): string {
        return this.token
    }

    isAuthenticated(): boolean {
        return !!this.token
    }

    logout() {
        this.setToken(null)
        localStorage.clear()
    }
}