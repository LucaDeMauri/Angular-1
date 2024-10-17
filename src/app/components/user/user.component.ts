import { Component } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  constructor(private userDTO: UserService) {}

  userDetail: IUser[] = [];

  ngOnInit() {
    this.userDTO.getUser(1, 10).subscribe({
      next: (res: any) => {
        this.userDetail = res.data;
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }
}
