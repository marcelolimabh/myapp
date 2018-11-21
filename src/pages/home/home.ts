import { Pro } from '@ionic/pro';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  onMyLog(){
    Pro.monitoring.log('Clicked in my button', {level: 'info'});
  }

}
