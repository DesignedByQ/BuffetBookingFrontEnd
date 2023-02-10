import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BuffetBooking } from './buffet-booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuffetBookingService {
  url='http://localhost:1111/api/booking';
  
  constructor( private http: HttpClient ) { }

  bookBuffet(data: any): Observable<BuffetBooking>{
    //console.log(data);
    return this.http.post<BuffetBooking>(`${this.url}`, data);
  }

    //bookBuffet(data: BuffetBooking): Observable<BuffetBooking>{

    //return this.http.post<BuffetBooking>(`${this.url}`, data);}

}
