import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  daysOfTheWeek = [
    {
      day: 'Monday',
      times: '8AM - 5PM'
    },
    {
      day: 'Tuesday',
      times: '8AM - 5PM'
    },
    {
      day: 'Wednesday',
      times: '8AM - 5PM'
    },
    {
      day: 'Thursday',
      times: '8AM - 5PM'
    },
    {
      day: 'Friday',
      times: '8AM - 5PM'
    },
    {
      day: 'Saturday',
      times: '8AM - 5PM'
    },
    {
      day: 'Sunday',
      times: '8AM - 5PM'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
