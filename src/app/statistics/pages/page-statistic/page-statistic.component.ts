import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-statistic',
  templateUrl: './page-statistic.component.html',
  styleUrls: ['./page-statistic.component.scss']
})
export class PageStatisticComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('https://cdn.jsdelivr.net/npm/chart.js');
    this.loadScript('../../../../assets/statistique.js');
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
