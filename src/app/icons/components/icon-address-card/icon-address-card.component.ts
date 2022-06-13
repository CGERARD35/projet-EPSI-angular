import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faAddressCard} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-address-card',
  templateUrl: './icon-address-card.component.html',
  styleUrls: ['./icon-address-card.component.scss']
})
export class IconAddressCardComponent implements OnInit {

  public myIcon: IconDefinition = faAddressCard


    constructor() { }

  ngOnInit(): void {
  }

}
