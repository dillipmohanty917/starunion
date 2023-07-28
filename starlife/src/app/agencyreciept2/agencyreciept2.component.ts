import { Component } from '@angular/core';

@Component({
  selector: 'app-agencyreciept2',
  templateUrl: './agencyreciept2.component.html',
  styleUrls: ['./agencyreciept2.component.css']
})
export class Agencyreciept2Component {
  constructor(){}
  isChecked: boolean = true;

  toggleSwitch(): void {
    this.isChecked = !this.isChecked;
  }
  
}
