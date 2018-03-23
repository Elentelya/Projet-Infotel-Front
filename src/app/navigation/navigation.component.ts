import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../service/back-end.service';
import { DatashareService } from '../service/datashare.service';
import { InfosMember } from '../model/InfosMember';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  user : InfosMember;

  constructor(private dss: DatashareService) { }

  ngOnInit() {
    this.user = this.dss.loggedMember;
  }

  logout(){
    
  }

}
