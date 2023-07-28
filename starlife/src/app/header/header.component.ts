import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('navbarAdmin') navbarAdmin!: ElementRef;
  showMenu: boolean = false;
  SideMenu: boolean = false;
  showHeader = true;
  isCollapsed = false;


  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    // if (this.router.url === '/login') {
    //   this.showHeader = false;
    // };

    window.addEventListener('click', (event) => {
      if (this.navbarAdmin.nativeElement.contains(event.target)) {
        // Clicked inside the navbar-admin element
        return;
      }

      // Clicked outside the navbar-admin element
      this.showMenu = false;
    });

   
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  sideMenu() {
    this.SideMenu = !this.SideMenu;
  }

 
}
