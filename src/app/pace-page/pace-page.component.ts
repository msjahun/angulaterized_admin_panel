import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var Chart: any;
declare var Pace: any;

@Component({
  selector: 'app-pace-page',
  templateUrl: './pace-page.component.html',
  styleUrls: ['./pace-page.component.css']
})
export class PacePageComponent implements OnInit {
code:string;
  constructor() {
    this.code="$(document).ajaxStart(function() { Pace.restart(); });";
   }

  ngOnInit() {

     // To make Pace works on Ajax calls
  $(document).ajaxStart(function () {
    Pace.restart()
  })
  $('.ajax').click(function () {
    $.ajax({
      url: '#', success: function (result) {
        $('.ajax-content').html('<hr>Ajax Request Completed !')
      }
    })
  })


  $('.box').boxWidget(Option);
  }

}
