import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-sliders-page',
  templateUrl: './sliders-page.component.html',
  styleUrls: ['./sliders-page.component.css']
})
export class SlidersPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(function () {
      /* BOOTSTRAP SLIDER */
      $('.slider').slider()
    })
  }

}
