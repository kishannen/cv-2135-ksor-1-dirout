import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css'],
})
export class PagenotfoundComponent implements OnInit {
  headColor = 'brown';
  showItem = true;
  elements = [
    'Sorry, the content of this page is missing.',
    'I am still constructing my website for better experience.',
    'Thank you for your kind understanding',
  ];

  message = '';
  onButtonClick() {
    this.message = 'kisses.reyes010@gmail.com';
  }

  constructor() {}

  ngOnInit() {}
}
