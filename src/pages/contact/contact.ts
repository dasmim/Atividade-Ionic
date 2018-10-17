import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RespostaPage } from '../resposta/resposta';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
  entrar(){
    this.navCtrl.push(RespostaPage);
  }
}
