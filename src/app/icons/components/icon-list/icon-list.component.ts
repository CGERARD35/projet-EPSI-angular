import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faListUl} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.scss']
})
export class IconListComponent implements OnInit {

  public myIcon: IconDefinition = faListUl

  constructor() { }

  ngOnInit(): void {
  }

}
