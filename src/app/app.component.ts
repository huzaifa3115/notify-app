import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '#', icon: 'mail' },
    { title: 'Profile', url: '#', icon: 'paper-plane' },
    { title: 'Subscription', url: '#', icon: 'heart' },
    { title: 'Subscribers', url: '#', icon: 'archive' },
    { title: 'Send Notification', url: '#', icon: 'trash' },
    { title: 'Notification Sent', url: '#', icon: 'warning' },
    { title: 'Messages', url: '#', icon: 'warning' },
    { title: 'Settings', url: '#', icon: 'warning' },
    { title: 'Logout', url: '#', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }
}
