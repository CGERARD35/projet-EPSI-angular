import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-clients-list',
  templateUrl: './page-clients-list.component.html',
  styleUrls: ['./page-clients-list.component.scss']
})
export class PageClientsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('../../../../assets/searchbar.js');
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
