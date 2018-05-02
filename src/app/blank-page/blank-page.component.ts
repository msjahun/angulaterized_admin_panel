import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var Chart: any;

@Component({
  selector: 'app-blank-page',
  templateUrl: './blank-page.component.html',
  styleUrls: ['./blank-page.component.css']
})
export class BlankPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.sidebar-menu').tree()
    })
    
    //$('.box').boxWidget(Option);
  }

}
