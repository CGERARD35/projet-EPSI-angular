import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faProductHunt} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-icon-product-menu',
  templateUrl: './icon-product-menu.component.html',
  styleUrls: ['./icon-product-menu.component.scss']
})
export class IconProductMenuComponent implements OnInit {

  public myIcon: IconDefinition = faProductHunt

    constructor() { }

  ngOnInit(): void {
  }

}
