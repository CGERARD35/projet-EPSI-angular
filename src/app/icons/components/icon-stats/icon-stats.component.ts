import { Component, OnInit } from '@angular/core';
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {faChartPie} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-stats',
  templateUrl: './icon-stats.component.html',
  styleUrls: ['./icon-stats.component.scss']
})
export class IconStatsComponent implements OnInit {

  public myIcon: IconDefinition = faChartPie

    constructor() { }

  ngOnInit(): void {
  }

}
