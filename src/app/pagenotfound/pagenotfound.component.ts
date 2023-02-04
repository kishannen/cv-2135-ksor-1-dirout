import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css'],
})
export class PagenotfoundComponent implements OnInit {
  
  headColor = 'brown';
  showItem = true;
  
  message = '';
  onButtonClick() {
    this.message = 'kisses.reyes010@gmail.com';
  }

  constructor() {}

  ngOnInit() {}
}
