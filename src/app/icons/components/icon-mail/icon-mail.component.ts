import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-mail',
  templateUrl: './icon-mail.component.html',
  styleUrls: ['./icon-mail.component.scss']
})
export class IconMailComponent implements OnInit {

  public myIcon: IconDefinition = faEnvelope

  constructor() { }

  ngOnInit(): void {
  }

}
