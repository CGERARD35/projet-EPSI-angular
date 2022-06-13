import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-cart-shopping',
  templateUrl: './icon-cart-shopping.component.html',
  styleUrls: ['./icon-cart-shopping.component.scss']
})
export class IconCartShoppingComponent implements OnInit {

  public myIcon: IconDefinition = faCartShopping

    constructor() { }

  ngOnInit(): void {
  }

}
