import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonButton, IonCardHeader, IonCardTitle, IonInput,IonCardContent, IonItem, IonLabel } from '@ionic/angular/standalone';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  standalone: true,
  imports: [IonLabel, IonInput, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonCard,IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel],
})
export class LoginPage {
  constructor() {}

  onLogin() {

  }
}
