import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-edit',
  templateUrl: './icon-edit.component.html',
  styleUrls: ['./icon-edit.component.scss']
})
export class IconEditComponent implements OnInit {

  public myIcon: IconDefinition = faPenToSquare

    constructor() { }

  ngOnInit(): void {
  }

}
