import {Component, OnInit} from '@angular/core';
import {IUser} from '../../interfaces';
import {UserService} from '../../services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user: IUser;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(value => this.user = value);
  }

}
