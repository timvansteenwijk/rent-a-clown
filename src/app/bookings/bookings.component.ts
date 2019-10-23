import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from '../bookings/booking-service.service';
import { Booking } from '../bookings/booking';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  bookingList: Booking [] = this.bookingService.bookingList;

  displayedColumns: string[] = ['name', 'date', 'clown'];

  onBack() {
    this.router.navigateByUrl('/home');
  }

  constructor(private bookingService: BookingServiceService, private router: Router) { }

  ngOnInit() {
  }

}
