import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USERS_MOCK } from './usersMockData';
import { UserDataInterface } from '../components/user-details/user-details.component';

@Injectable()
export class UserService {
  public userData!: UserDataInterface;
  private mockData = USERS_MOCK;
  constructor() {}

  public getAllUserData(): Observable<UserDataInterface[]> {
    return of(this.mockData);
  }

  public getUser(id: number): UserDataInterface {
    return this.mockData.find((item) => item.id === id) as UserDataInterface;
  }
}
