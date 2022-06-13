import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faBriefcase, faUserGear} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-user-gear',
  templateUrl: './icon-user-gear.component.html',
  styleUrls: ['./icon-user-gear.component.scss']
})
export class IconUserGearComponent implements OnInit {

  public myIcon: IconDefinition = faUserGear

  constructor() { }

  ngOnInit(): void {
  }

}
