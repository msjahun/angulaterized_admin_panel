import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var Chart: any;

@Component({
  selector: 'app-error-internal-server-page',
  templateUrl: './error-internal-server-page.component.html',
  styleUrls: ['./error-internal-server-page.component.css']
})
export class ErrorInternalServerPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.box').boxWidget(Option);
  }

}
