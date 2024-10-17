import { Component } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  userDetail: IUser[] = [];

  constructor(private userDTO: UserService, private router: Router) {}

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

  gotoDetail(id: number) {
    this.router.navigate(['dettagli', id]); 
  }
}
