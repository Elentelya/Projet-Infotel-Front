import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../service/back-end.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect(route){
    this.router.navigate([route]);
  }

}
