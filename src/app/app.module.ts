import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injectable, Injector } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Pro } from '@ionic/pro';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


Pro.init("0f4e0fe2", { appVersion: "0.0.1" });
@Injectable()

export class MyErrorHandler implements ErrorHandler{
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector){


    try{
      this.ionicErrorHandler = injector.get(IonicErrorHandler);

    }catch(e){
      console.log(e);

    }

  }

  handleError(error: any): void {
    Pro.monitoring.handleNewError(error);
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(error);
  }

}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IonicErrorHandler,
    {provide: ErrorHandler, useClass: MyErrorHandler}
  ]
})
export class AppModule {}
