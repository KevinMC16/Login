import { Component,  } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  constructor(private authService: AuthService,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController) { }

  form = new FormGroup({
    usuario: new FormControl('',[Validators.required, Validators.minLength(5)]),
    nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
    contrasena: new FormControl('',[Validators.required, Validators.minLength(8)]),

  });

  async onSubmit(){

    const loading = await this.loadingCtrl.create({ message: 'Registrando'});
    await loading.present();
    this.authService.registrar(this.form.value).subscribe(
      // Si se da el acceso
    async () => {
      const toast = await this.toastCtrl.create({message: 'Usuario Registrado', duration: 2000, color: 'dark'});
      await toast.present();
      loading.dismiss();
      this.form.reset();
    },
    // Si existe un error
    async () => {
      const alert = await this.alertCtrl.create({ message: 'Ha ocurrido un error', buttons: ['OK'] });
      loading.dismiss();
      await alert.present();
      
    }
    );
    
  }

}
