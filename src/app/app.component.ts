import { Component } from '@angular/core';

import { Platform, Config } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ConfigService } from './config.service';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers:[ConfigService]
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public configService: ConfigService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      let config = this.configService.getConfigData();
      if(config == null){
        this.router.navigate(['/intro']);
        this.configService.setConfigData(false);
      }
      else{
        this.router.navigate(['/tabs']);
      }

      console.log(config);

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
