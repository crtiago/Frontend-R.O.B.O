import { UtilsEnuns } from './../../_enuns/utils-enuns';
import { Pulse } from './../../_enuns/pulse';
import { Elbow } from './../../_enuns/elbow';
import { Robo } from './../../_models/robo';
import { Inclination } from './../../_enuns/inclination';
import { Rotation } from './../../_enuns/rotation';
import { RoboService } from './../../_services/robo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-page-robo',
  templateUrl: './page-robo.component.html',
  styleUrls: ['./page-robo.component.css']
})
export class PageRoboComponent implements OnInit {

  //Lists Values
  listValuesElbow = UtilsEnuns.getValues(Elbow);
  listValuesPulse = UtilsEnuns.getValues(Pulse);
  listValuesRotation = UtilsEnuns.getValues(Rotation);
  listValuesInclination = UtilsEnuns.getValues(Inclination);

  //Robo
  robo: Robo;
  //Head
  rotation: string;
  inclination: string;
  //Left Arm
  elbowLeft: string;
  pulseLeft: string;
  //Right Arm
  elbowRight: string;
  pulseRight: string;

  //Useful Variables
  idOption: number;
  erro = '';
  success = '';

  constructor(private roboService: RoboService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.robo = this.route.snapshot.data.response.Data;

    //Head 
    this.rotation = Rotation[this.robo.Head.idRotation];
    this.inclination = Inclination[this.robo.Head.idInclination];

    //Left Arm
    this.elbowLeft = Elbow[this.robo.LeftArm.idElbow];
    this.pulseLeft = Pulse[this.robo.LeftArm.idPulse];

    //Right Arm
    this.elbowRight = Elbow[this.robo.RightArm.idElbow];
    this.pulseRight = Pulse[this.robo.RightArm.idPulse];
  }

  changeInclinationHead(event: any) {

    this.idOption = this.convertStringToNumber(event.target.value);

    this.roboService.changeInclinationHead(this.idOption)
      .pipe(first()).subscribe(
        data => {
          this.inclination = Inclination[data.Data.idInclination];
          this.success = data.Message;
          this.erro = '';
        },
        error => {
          this.adjustErrorMessage(error);
          this.success = '';
        });
  }

  changeRotationHead(event: any) {
    this.idOption = this.convertStringToNumber(event.target.value);

    this.roboService.changeRotationHead(this.idOption)
      .pipe(first()).subscribe(
        data => {
          this.rotation = Rotation[data.Data.idRotation];
          this.success = data.Message;
          this.erro = '';
        },
        error => {
          this.adjustErrorMessage(error);
          this.success = '';
        });
  }

  changeStateElbow(event: any, side: string) {
    this.idOption = this.convertStringToNumber(event.target.value);

    this.roboService.changeStateElbow(this.idOption, side)
      .pipe(first()).subscribe(
        data => {
          if (side == "esquerdo") {
            this.elbowLeft = Elbow[data.Data.idElbow];
            this.success = data.Message;
            this.erro = '';
          } else {
            this.elbowRight = Elbow[data.Data.idElbow];
            this.success = data.Message;
            this.erro = '';
          }
        },
        error => {
          this.adjustErrorMessage(error);
          this.success = '';
        });
  }

  changeStatePulse(event: any, side: string) {
    this.idOption = this.convertStringToNumber(event.target.value);

    this.roboService.changeStatePulse(this.idOption, side)
      .pipe(first()).subscribe(
        data => {
          if (side == "esquerdo") {
            this.pulseLeft = Pulse[data.Data.idPulse];
            this.success = data.Message;
            this.erro = '';
          } else {
            this.pulseRight = Pulse[data.Data.idPulse];
            this.success = data.Message;
            this.erro = '';
          }
        },
        error => {
          this.adjustErrorMessage(error);
          this.success = '';
        });
  }

  convertStringToNumber(valor: string) {
    return Number(valor);
  }

  adjustErrorMessage(valor: Error) {
    this.erro = valor.toString().replace("Error:", "");
  }

}
