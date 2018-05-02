import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var CKEDITOR: any;
@Component({
  selector: 'app-editors-page',
  templateUrl: './editors-page.component.html',
  styleUrls: ['./editors-page.component.css']
})
export class EditorsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(function () {
      // Replace the <textarea id="editor1"> with a CKEditor
      // instance, using default configuration.
      CKEDITOR.replace('editor1')
      //bootstrap WYSIHTML5 - text editor
      $('.textarea').wysihtml5()
    })

  }

}
