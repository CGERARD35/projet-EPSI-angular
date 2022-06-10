import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faFolderOpen} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-folder-open',
  templateUrl: './icon-folder-open.component.html',
  styleUrls: ['./icon-folder-open.component.scss']
})
export class IconFolderOpenComponent implements OnInit {

  public myIcon: IconDefinition = faFolderOpen

  constructor() { }

  ngOnInit(): void {
  }

}
