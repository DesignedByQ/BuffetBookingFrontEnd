import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuffetBookingService } from '../buffet-booking-service';
import { BuffetBooking } from '../buffet-booking';
import {NgForm} from '@angular/forms';
import { HttpErrorResponse, HttpResponse, HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-add-booking',
  templateUrl: './buffet-booking.component.html',
  styleUrls: ['./buffet-booking.component.css']
})
export class AddBookingComponent implements OnInit {
  
  Successful: String;
  Error1: String;
  Error2: String;
  Error3: String;
  Error4: String;
  
  ErrorMsg: String;
  
  public employees: BuffetBooking[] | null = null;
 

  constructor(private bbs: BuffetBookingService) {}

 

  addBooking=new FormGroup ({
    
    buffetName: new FormControl( '', [Validators.required ]),
    emailId: new FormControl( '', [Validators.required, Validators.email]),
    plateCount: new FormControl( '', [Validators.required, Validators.min(1)]),
    bookedOn: new FormControl( '', [Validators.required])

  });

  
  
  ngOnInit() {
   // throw new Error('Method not implemented.');
   /*this.addBooking = this.fb.group({
    buffetName: ['', Validators.required],
    emailId: ['', [Validators.required, Validators.email]],
    plateCount: ['', [Validators.required, Validators.min(1)]],
    bookedOn: ['', Validators.required]
   });*/
  }

  bookBuffet(){

    //console.log( this.addStudent.value )
    this.bbs.bookBuffet(this.addBooking.value).subscribe(
      (result: BuffetBooking) => {
        console.log(result);

        if(result.bookingId != null) {
          this.Successful = result.message;
          
        }
        
      }, (err) => {

        this.ErrorMsg = "Buffet is already booked on this date";//err.message;
      }
      
    );
  }

  getBookings(){

    this.bbs.getBookings().subscribe(
      (Response: BuffetBooking[]) => {
        console.log(Response);
      }
    )
  }
  


}
