import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faClipboard} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-product',
  templateUrl: './icon-product.component.html',
  styleUrls: ['./icon-product.component.scss']
})
export class IconProductComponent implements OnInit {

  public myIcon: IconDefinition = faClipboard

  constructor() { }

  ngOnInit(): void {
  }

}
