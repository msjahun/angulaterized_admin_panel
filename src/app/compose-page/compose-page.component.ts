import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-compose-page',
  templateUrl: './compose-page.component.html',
  styleUrls: ['./compose-page.component.css']
})
export class ComposePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    $(function () {
      //Add text editor
      $("#compose-textarea").wysihtml5();
    });
  }

}
