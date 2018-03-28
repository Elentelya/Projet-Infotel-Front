import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../service/messages.service';
import { Router } from '@angular/router';
import { BackEndService } from '../service/back-end.service';
import { IdentifiantsVM } from '../model/IdentifiantsVM';
import { DatashareService } from '../service/datashare.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  identifiants: IdentifiantsVM = {
    email: "",
    password: ""
  };

  constructor(
    private backService: BackEndService,
    private messageService: MessagesService,
    private router: Router,
    private storage: LocalStorageService) { }

  ngOnInit() {
  }

  login() {
    this.backService.Login(this.identifiants).subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          //cache the logged member in datashare service
          this.storage.store('me', data.payload)
          //this.storage.clear('me');
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
