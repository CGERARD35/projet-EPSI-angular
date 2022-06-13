import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faShareFromSquare} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-logout',
  templateUrl: './icon-logout.component.html',
  styleUrls: ['./icon-logout.component.scss']
})
export class IconLogoutComponent implements OnInit {

  public myIcon: IconDefinition = faShareFromSquare

    constructor() { }

  ngOnInit(): void {
  }

}
