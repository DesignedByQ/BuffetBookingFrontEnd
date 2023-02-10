import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuffetBookingService } from '../buffet-booking-service';
import { BuffetBooking } from '../buffet-booking';

@Component({
  selector: 'app-add-booking',
  templateUrl: './buffet-booking.component.html',
  styleUrls: ['./buffet-booking.component.css']
})
export class AddBookingComponent implements OnInit {
  
  Successful: String;
  Error: String;
  //fb: FormBuilder;
  

  constructor(private bbs: BuffetBookingService) {}

  addBooking=new FormGroup ({
    
    buffetName: new FormControl( '', [Validators.required ]),
    emailId: new FormControl( '', [Validators.required, Validators.email]),
    plateCount: new FormControl( '', [Validators.required, Validators.min(1)]),
    bookedOn: new FormControl( '', [Validators.required])

  });

  
  
  ngOnInit(): void {
   // throw new Error('Method not implemented.');

  }

  bookBuffet(){

    //console.log( this.addStudent.value )
    this.bbs.bookBuffet(this.addBooking.value).subscribe(
      (result) => { console.log(result) }
    );
  }



}