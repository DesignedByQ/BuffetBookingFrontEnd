import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  //alternative service method for posting with headers
  /*bookBuffet(data: {buffetName: String, emailId: String, plateCount: Number, bookedOn: Date}): Observable<BuffetBooking>{

    const headerings = new HttpHeaders({'myheader': 'mockprj'});

    return this.http.post<BuffetBooking>(`${this.url}`, data, {headers: headerings});
  }*/

}
