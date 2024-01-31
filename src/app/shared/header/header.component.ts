import { Component } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

  menuItems: any[];
  constructor(headerService: HeaderService){

    this.menuItems = headerService.menu
    console.log(this.menuItems)

  }

}
