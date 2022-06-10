import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-close',
  templateUrl: './icon-close.component.html',
  styleUrls: ['./icon-close.component.scss']
})
export class IconCloseComponent implements OnInit {

  public myIcon: IconDefinition = faTimes

  constructor() { }

  ngOnInit(): void {
  }

}
