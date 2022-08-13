import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private apiUrl = 'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/cardlist.json'

  constructor(private httpClient: HttpClient) { }
  
  getCards(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(this.apiUrl)
  }

}
