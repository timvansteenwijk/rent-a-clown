import { Injectable } from '@angular/core';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  bookingList: Booking[] = [];

  addBooking(name: string, date: string, clown: string) {
    this.bookingList.push({name, date, clown});
  }

  constructor() { }
}
