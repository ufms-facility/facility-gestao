import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Organismo } from "./models/organismo.model";

@Injectable({
    providedIn: 'root'
})

export class OrganismoService {
    private API = 'http://matheus@200.130.152.123:8080/api/v1/organismos';
    
    constructor(private httpClient: HttpClient) {
    
    }

    save(organismo: Organismo): Observable<Organismo> {
        return this.httpClient.post<Organismo>(this.API, organismo);
    }
}