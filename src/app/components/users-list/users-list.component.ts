import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { UserDataInterface } from '../user-details/user-details.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit, OnDestroy {
  userData!: UserDataInterface[];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private readonly _userService: UserService) {}

  ngOnInit(): void {
    this._userService
      .getAllUserData()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.userData = data;
      });
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
