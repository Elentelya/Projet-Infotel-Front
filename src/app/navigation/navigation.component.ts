import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../service/back-end.service';
import { DatashareService } from '../service/datashare.service';
import { InfosMember } from '../model/InfosMember';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  user: InfosMember;

  constructor(
    private dss: DatashareService,
    private router: Router) { }

  ngOnInit() {
    this.user = this.dss.loggedMember;
  }

  redirect(route) {
    this.router.navigate([route]);
  }

  logout() {

  }

}
