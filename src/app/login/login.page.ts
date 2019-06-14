import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    User=
    {
    usuario:"andres",
    password:"123", 
  }

  constructor(public loadingCtrl:LoadingController) { }

  ngOnInit() {
  }
  async login(forma: NgForm) {
    if (forma.valid) 
    {
      const loading = await this.loadingCtrl.create({
        message: 'Validando...',
        spinner: 'dots',
        duration: 2000,
      });
      loading.present();
      //this.User.usuario = forma.value.email;
      //this.User.password = forma.value.clave;
      this.loadingCtrl.dismiss();
 
    console.log('ingreso a login');
    if(this.User.usuario === forma.value.user){
      console.log("verdadero");
    }
    else{
      console.log("falso");
    }
  }
}
}
