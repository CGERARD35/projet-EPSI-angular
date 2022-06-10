import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-phone',
  templateUrl: './icon-phone.component.html',
  styleUrls: ['./icon-phone.component.scss']
})
export class IconPhoneComponent implements OnInit {

  public myIcon: IconDefinition = faPhone

  constructor() { }

  ngOnInit(): void {
  }

}
