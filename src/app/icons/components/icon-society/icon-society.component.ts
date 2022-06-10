import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-society',
  templateUrl: './icon-society.component.html',
  styleUrls: ['./icon-society.component.scss']
})
export class IconSocietyComponent implements OnInit {

  public myIcon: IconDefinition = faBriefcase

  constructor() { }

  ngOnInit(): void {
  }

}
