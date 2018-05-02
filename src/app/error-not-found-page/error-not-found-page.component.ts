import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var Chart: any;

@Component({
  selector: 'app-error-not-found-page',
  templateUrl: './error-not-found-page.component.html',
  styleUrls: ['./error-not-found-page.component.css']
})
export class ErrorNotFoundPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    $('.box').boxWidget(Option);
/*End Page: page/chartjs*/
  }

}
