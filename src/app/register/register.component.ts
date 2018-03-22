import { Component, OnInit } from '@angular/core';
import { InfosMember } from '../model/InfosMember';
import { Router } from '@angular/router';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { DatashareService } from '../service/datashare.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newMember: InfosMember = {
    "firstname": "",
    "lastname": "",
    "email": "",
    "password": "",
    "phone": "",
    "address": "",
    "admin": false,
    "active": false
  }

  constructor(
    private backService: BackEndService,
    private messageService: MessagesService,
    private dss: DatashareService,
    private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.backService.Register(this.newMember).subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          //cache the logged member in datashare service
          this.dss.loggedMember = data.payload;
          //navigate to home and display navbar or the hidden tabs
          //navigate to home and display navbar or the hidden tabs
          this.router.navigate(['/account']);
        }
      },
      error => {
        console.error(error.message);
        //messageService.displayFailureMessage(error.message);
      }
    );
  }
}
