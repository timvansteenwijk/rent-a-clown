import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  bookingReceived(bookingData) {
    alert(
      'Name: ' + bookingData.name + ', Date: ' + bookingData.date + ', Clown: ' + bookingData.clown
    );
  }

}
