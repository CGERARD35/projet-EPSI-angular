import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-user',
  templateUrl: './icon-user.component.html',
  styleUrls: ['./icon-user.component.scss']
})
export class IconUserComponent implements OnInit {

  public myIcon: IconDefinition = faUser

    constructor() { }

  ngOnInit(): void {
  }

}
