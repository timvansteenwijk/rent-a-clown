import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BookingServiceService } from '../bookings/booking-service.service';
import { Booking } from '../bookings/booking';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Review } from './review';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  name: string;
  date: string;
  clown: string;

  bookingData: Booking;

  @Output() bookingEmitter = new EventEmitter<{name: string, date: string, clown: string}>();

  reviews: Review[] = [
    {
      review: 'Krusty was great and the burgers gave me stomach aches for weeks after the party!',
      author: 'Tim v S'
    },
    {
      review: 'IT 2017 was great could never go back to the old one.',
      author: 'Wouter P'
    },
    {
      review: 'IT by Curry is the only one for me, the new IT is a joke.',
      author: 'Ivar P'
    },
    {
      review: 'Insane Clown Posse gave the best performance ever at my party!',
      author: 'Anthony M'
    }
  ];

  dataForm = new FormGroup({
    name: new FormControl('name', Validators.required),
    date: new FormControl('date', Validators.required),
    clown: new FormControl('clown', Validators.required)
  });

  clowns: string[] = [
    'IT (2017)',
    'IT (1990)',
    'Krusty the Clown',
    'Insane Clown Posse'
  ];

  onBook(name, date, clown) {
    if (name === undefined || date === undefined || clown === undefined) {
      alert('Please fill all fields.');
    } else {
      this.bookingService.addBooking(name, date, clown);
      this.onBookingEmit();
      this.router.navigateByUrl('/bookings');
      this.onReset();
    }
  }

  onBookingEmit() {
    this.bookingEmitter.emit({
      name: this.name,
      date: this.date,
      clown: this.clown,
    });
  }

  onReset() {
    this.name = '';
    this.date = '';
    this.clown = '';
  }

  constructor(
    private bookingService: BookingServiceService,
    private router: Router
  ) {}

  ngOnInit() {}
}
