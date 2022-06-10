import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faDollarSign} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-price',
  templateUrl: './icon-price.component.html',
  styleUrls: ['./icon-price.component.scss']
})
export class IconPriceComponent implements OnInit {

  public myIcon: IconDefinition = faDollarSign

  constructor() { }

  ngOnInit(): void {
  }

}
