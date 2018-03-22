import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../service/back-end.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout(){
    
  }

}
