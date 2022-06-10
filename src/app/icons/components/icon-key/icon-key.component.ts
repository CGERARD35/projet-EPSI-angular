import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faC, faFolderOpen} from "@fortawesome/free-solid-svg-icons";
import {faKey} from "@fortawesome/free-solid-svg-icons/faKey";

@Component({
  selector: 'app-icon-key',
  templateUrl: './icon-key.component.html',
  styleUrls: ['./icon-key.component.scss']
})
export class IconKeyComponent implements OnInit {

  public myIcon: IconDefinition = faKey

  constructor() { }

  ngOnInit(): void {
  }

}
