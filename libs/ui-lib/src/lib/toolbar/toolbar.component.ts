import { Component, OnInit, Input } from '@angular/core';
import { AuthService, NotifyService } from '@mdv-eighteen/core-data';
import { Router } from '@angular/router';

@Component({
  selector: 'mdv-eighteen-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() title
  @Input() sidenav
  @Input() isAuthenticated

  constructor(
    private auth: AuthService,
    private notify: NotifyService,
    private route: Router
  ) { }

  ngOnInit() {
  }


  logout() {
    this.auth.logout();
    this.notify.notify('Successfully Logged Out');
    this.route.navigate(['/login'])
    }

  login() {
    this.notify.notify('Redirecting to login')
    this.route.navigate(['/login'])
  }

}
