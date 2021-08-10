import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Proyect } from '../interfaces/proyect.interface';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {

  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  newProyect(body: any){
    return this.http.post(`${this.baseUrl}/proyects`, body).pipe(
      take(1)
    )
  }

  getProyectById(id: string) {
    return this.http.get<Proyect>(`${this.baseUrl}/proyects/${id}`);
  }

  updateProyect(body: any) {
    return this.http.put<Proyect>(`${this.baseUrl}/proyects`, body);
  }


}
