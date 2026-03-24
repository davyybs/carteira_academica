import { Component } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonButton, IonCardSubtitle, IonRouterLink } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonButton, IonCardSubtitle, IonRouterLink],
})
export class HomePage {
  constructor() {}
}
