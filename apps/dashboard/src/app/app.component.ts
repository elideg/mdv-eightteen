import { Component } from '@angular/core';
import { AuthService } from '@mdv-eighteen/core-data';

@Component({
  selector: 'mdv-eighteen-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'dashboard';

  links = [
    { path: '/cars', icon: 'work', title: 'Cars' }
  ]

  userIsAuthenticated = this.authService.isAuthenticated;
  constructor(private authService: AuthService) {}
}
