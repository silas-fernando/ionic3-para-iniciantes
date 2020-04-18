import { Component, OnInit } from '@angular/core';
import { CartolaService } from '../cartola.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-atletas',
  templateUrl: './atletas.page.html',
  styleUrls: ['./atletas.page.scss'],
  providers: [
    CartolaService,
    Camera
  ]
})
export class AtletasPage implements OnInit {
  img = "";
  constructor(
    private cartolaService: CartolaService,
    private camera: Camera
  ) {
  }

  ngOnInit() {
    /*this.cartolaService.atletas().subscribe(data=>{
      console.log(data);
    })*/
  }

  tirarFoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.img = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
}
