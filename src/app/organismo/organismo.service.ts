import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Organismo } from "./models/organismo.model";

@Injectable({
    providedIn: 'root'
})

export class OrganismoService {
    private API = `http://${window.location.hostname}:8080/api/v1/organismos`;

    constructor(private httpClient: HttpClient) {

    }

    save(organismo: Organismo): Observable<Organismo> {
        return this.httpClient.post<Organismo>(this.API, organismo);
    }

    listarOrganismos(): Observable<any> {
        return this.httpClient.get(this.API);
    }

    delete(id: number): Observable<any> {
        return this.httpClient.delete(`${this.API}/${id}`);
    }
    update(id?: number, organismo?: Organismo): Observable<any> {
        return this.httpClient.put(`${this.API}/${id}`, organismo);
    }
    buscarPorId(id: number): Observable<any> {
        return this.httpClient.get(`${this.API}/${id}`);
    }
    
}