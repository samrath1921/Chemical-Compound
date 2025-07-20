import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Compound, CompoundResponse } from '../types/compound';

@Injectable({
  providedIn: 'root'
})
export class CompoundService {
  private apiUrl = "http://localhost:3000/compound";

  constructor(private http: HttpClient) { }

  private getAuthHeaders() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzUzMDIxNzg0LCJleHAiOjQ5MDg3ODE3ODR9.KPTbV4VUfJdKBDnoZaFqO_Rp_3YSZcQVF8vrKwW31PM';
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  getOneCompound(id: any): Observable<Compound> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Compound>(url, { headers: this.getAuthHeaders() });
  }

  getCompound(page: number, limit: number): Observable<CompoundResponse> {
    const url = `${this.apiUrl}?page=${page}&limit=${limit}`;
    return this.http.get<CompoundResponse>(url, { headers: this.getAuthHeaders() });
  }

  addCompound(obj: Compound): Observable<Compound> {
    return this.http.post<Compound>(this.apiUrl, obj, { headers: this.getAuthHeaders() });
  }

  editCompound(obj: any, id: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, obj, { headers: this.getAuthHeaders() });
  }

  deleteCompound(id: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, { headers: this.getAuthHeaders() });
  }
}
