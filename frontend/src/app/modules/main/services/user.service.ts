import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URL} from '../../../config';
import {Observable} from 'rxjs';
import {IUser} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getCurrentUser(): Observable<IUser> {
    return this.httpClient.get<IUser>(`${URL}/users/current`);
  }

  getAllUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(`${URL}/users`);
  }
}
