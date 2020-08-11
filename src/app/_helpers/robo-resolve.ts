import { RoboService } from './../_services/robo.service';
import { RoboResponse } from './../_models/robo-response';
import { Injectable } from "@angular/core";  
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";  
import { Observable } from "rxjs";  
  
@Injectable()  
export class RoboResolve implements Resolve<RoboResponse> {  
  constructor(private roboService: RoboService) {}  
  
  resolve(route: ActivatedRouteSnapshot): Observable<RoboResponse> {  
    return this.roboService.getRobo();  
  }  
}  