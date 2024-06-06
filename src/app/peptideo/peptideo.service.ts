import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Peptideo } from './models/peptideo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeptideoService {
  private API = `http://${window.location.hostname}:8080/api/v1/peptideos`;
  
  constructor(private httpClient: HttpClient) {

  }

  save(peptideo: Peptideo): Observable<Peptideo> {
    return this.httpClient.post<Peptideo>(this.API, peptideo);
  }
  listarPeptideos(): Observable<any> {
    return this.httpClient.get(this.API);
  }
  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API}/${id}`);
  }
  update(id?: number, peptideo?: Peptideo): Observable<any> {
    return this.httpClient.put(`${this.API}/${id}`, peptideo);
  }
  buscarPorId(id: number): Observable<any> {
    return this.httpClient.get(`${this.API}/${id}`);
  }
}
