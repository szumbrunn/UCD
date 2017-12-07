import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { ChallengePage } from '../pages/challenge/challenge';

import {RoommatesSortPipe} from '../pipes/sort.pipe';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { JoinPage } from '../pages/join/join';
import { SettingsPage } from '../pages/settings/settings';
import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AccountPage,
    LoginPage,
    JoinPage,
    ChallengePage,
    SettingsPage,
    RoommatesSortPipe
  ],
  imports: [
    BrowserModule,
    QRCodeModule,
    IonicModule.forRoot(MyApp, {mode: 'ios'}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AccountPage,
    LoginPage,
    JoinPage,
    SettingsPage,
    ChallengePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
