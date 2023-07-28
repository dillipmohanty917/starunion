import { Component,OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../service/auth.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component  implements OnInit {
@ViewChild('navbarAdmin') navbarAdmin!: ElementRef;
  showMenu: boolean = false;
  SideMenu: boolean = false;
  showHeader = true;
  username: string="";
  loginauth: AuthService;
    // search option
    users: User[] = [];
    filteredUsers: User[] = [];
    searchTerm = '';
    table:boolean = false;

  constructor(private router: Router, loginauth: AuthService,private http:HttpClient,private fb: FormBuilder) {
    this.loginauth = loginauth;
  }
 
  ngOnInit() {

    window.addEventListener('click', (event) => {
      if (this.navbarAdmin.nativeElement.contains(event.target)) {
        // Clicked inside the navbar-admin element
        return;
      }
      // Clicked outside the navbar-admin element
      this.showMenu = false;
    });
      //fetch login user dynamically
      if(localStorage.getItem('userData')){
        let userstore=localStorage.getItem('userData');
        let userdata= userstore && JSON.parse(userstore);
        console.log('Parsed userdata:', userdata);
        this.username=userdata.name
        console.log(userdata)
      }
      // close login user fetching
       // search option
    this.loginauth.loginUser().subscribe(users => { 
      this.users = users;
      this.filteredUsers = users;
     
    });
  }

  toggleMenu() {
     this.showMenu = !this.showMenu;
  }

  sideMenu() {
    this.SideMenu = !this.SideMenu;
 }

 
 logsout() {
  this.loginauth.logout();
  this.router.navigate(['/login']);
}
searchUsers(){
  console.log('searchTerm:', this.searchTerm);
  if(this.searchTerm==null||this.searchTerm==undefined||this.searchTerm==""){
    this.table = false;
  }else{
    this.table = true;
  }
  this.filteredUsers = this.users.filter(user =>
    user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
  console.log('filteredUsers:', this.filteredUsers);
}


onSearchInput() {
  console.log('searchTerm:', this.searchTerm);
}

}
