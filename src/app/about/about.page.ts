import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonCard, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonCardSubtitle, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, IonCard, IonCardTitle]
})
export class AboutPage implements OnInit {

  constructor() {
    addIcons({arrowBackOutline});
  }

  ngOnInit() {
  }

}
