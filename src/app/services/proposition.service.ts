import { ValidatorModel } from './../models/user';
import { PropositionModel, AddPropositionModel } from './../models/proposition';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface DownloadedFile {
  blob: Blob;
  fileName: string;
}
@Injectable({ providedIn: 'root' })
export class PropositionService {
  private apiUrl = 'https://localhost:44332';

  constructor(private http: HttpClient) { }

  getPropositions() {
    return this.http.get<PropositionModel[]>(`${this.apiUrl}/api/Proposition/GetPropositions`);
  }

  create(proposition: AddPropositionModel): Observable<AddPropositionModel> {
    return this.http.post<AddPropositionModel>(`${this.apiUrl}/api/Proposition/AddProposition`, proposition);
  }

  getProposition(id: number) {
    return this.http.get<PropositionModel>(`${this.apiUrl}/api/Proposition/GetProposition/${id}`);
  }

  update(proposition: AddPropositionModel): Observable<AddPropositionModel> {
    return this.http.put<AddPropositionModel>(`${this.apiUrl}/api/Proposition/UpdateProposition`, proposition);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/api/Proposition/DeleteProposition/${id}`);
  }

  getPropositionQuote(id: number) {
    return this.http.get<any>(`${this.apiUrl}/api/Proposition/GetPropositionQuote/${id}`);
  }

  validate(id: number, validator: ValidatorModel) {
    return this.http.put<AddPropositionModel>(`${this.apiUrl}/api/Proposition/ValidateProposition/${id}`, validator);
  }

  AddPropositionWithDevis(proposition: AddPropositionModel, file: any): Observable<any> {
    const propositionModel = JSON.stringify(proposition);
    const formData = new FormData();
    formData.append('data', propositionModel);
    if (file) {
      formData.append('file', file, file.name);
    }
    return this.http.post(`${this.apiUrl}/api/Proposition/AddProposition`, formData);
  }

  getFile(id: string) {
    return this.http.get(`${this.apiUrl}/api/Proposition/GetPropositionQuote/${id}`, { responseType: 'blob' });
  }

  updateDevis(proposition: PropositionModel, file: any): Observable<any> {
    const propositionModel = JSON.stringify(proposition);
    const formData = new FormData();
    formData.append('data', propositionModel);
    if (file) {
      formData.append('file', file, file.name);
    }
    return this.http.put(`${this.apiUrl}/api/Proposition/UpdateQuote`, formData);
  }

}
