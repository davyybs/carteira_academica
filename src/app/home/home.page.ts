import { Component } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonButton, IonCardSubtitle, IonRouterLink, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonTitle, IonToolbar, IonHeader, IonCard, IonCardHeader, IonCardTitle, IonButton, IonCardSubtitle, RouterLink],
})
export class HomePage {
  constructor() {}
}
