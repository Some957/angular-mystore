import { Component, OnInit } from '@angular/core';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-backbutton',
  templateUrl: './backbutton.component.html',
  styleUrls: ['./backbutton.component.css']
})
export class BackbuttonComponent implements OnInit {

  faLongArrowAltLeft = faLongArrowAltLeft;
  constructor() { }

  ngOnInit(): void {
  }

}
