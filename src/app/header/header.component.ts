import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToHome(){
    this.router.navigateByUrl('dashboard/home');
  }

  redirectToAbout(){
    this.router.navigateByUrl('dashboard/about');
  }

  redirectToReports(){
    this.router.navigateByUrl('dashboard/reports');
  }

  redirectToContacts(){
    this.router.navigateByUrl('dashboard/contacts');
  }


  logMeOut(){
    this.router.navigateByUrl('login');
  }

}
