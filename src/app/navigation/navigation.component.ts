import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../service/back-end.service';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
import { DatashareService } from '../service/datashare.service';
import { InfosMember } from '../model/InfosMember';
>>>>>>> a12f5776ac693635c253e8307a2f75963057ac85

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  user : InfosMember;

<<<<<<< HEAD
  constructor(private router: Router) { }
=======
  constructor(private dss: DatashareService) { }
>>>>>>> a12f5776ac693635c253e8307a2f75963057ac85

  ngOnInit() {
    this.user = this.dss.loggedMember;
  }

  redirect(route){
    this.router.navigate([route]);
  }

}
