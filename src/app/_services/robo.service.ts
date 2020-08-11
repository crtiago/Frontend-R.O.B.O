import { RoboResponse } from './../_models/robo-response';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RoboService {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    getRobo() {
        return this.http.get<RoboResponse>(`${environment.apiUrl}/robo`).pipe(delay(500));
    }

    changeInclinationHead(idInclination: number) {
        return this.http.put<RoboResponse>(`${environment.apiUrl}/head-inclination/${idInclination}`, this.httpOptions)
            .pipe(
                map(response => {
                    if (response.Success) {
                        return response;
                    } else {
                        throw new Error(response.Message);
                    }
                }
                )
            )
    };

    changeRotationHead(idRotation: number) {
        return this.http.put<RoboResponse>(`${environment.apiUrl}/head-rotation/${idRotation}`, this.httpOptions)
            .pipe(
                map(response => {
                    if (response.Success) {
                        return response;
                    } else {
                        throw new Error(response.Message);
                    }
                }
                )
            )
    }

    changeStateElbow(id: number, side: string) {
        return this.http.put<RoboResponse>(`${environment.apiUrl}/arm-elbow/${id}/${side}`, this.httpOptions)
            .pipe(
                map(response => {
                    if (response.Success) {
                        return response;
                    } else {
                        throw new Error(response.Message);
                    }
                }
                )
            )
    }

    changeStatePulse(id: number, side: string) {
        return this.http.put<RoboResponse>(`${environment.apiUrl}/arm-pulse/${id}/${side}`, this.httpOptions)
            .pipe(
                map(response => {
                    if (response.Success) {
                        return response;
                    } else {
                        throw new Error(response.Message);
                    }
                }
                )
            )
    }
}
