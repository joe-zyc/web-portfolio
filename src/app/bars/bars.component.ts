import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { MatSidenav } from '@angular/material/sidenav';

const LANG : any = {
  "en": "ENG",
  "zh": "中文"
}

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})

export class BarComponent {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  @Input() lang = ""; 
  @Output() changeLang = new EventEmitter();
  langPrompt = ""; 
  
  ngOnInit(){
    this.langPrompt = LANG[this.lang];
  }

  constructor(
    private translate: TranslateService,
    private breakpointObserver: BreakpointObserver) {
  }

  ngAfterViewInit() {
    this.breakpointObserver.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
  
  changeLanguage() {
    this.langPrompt = LANG[this.lang === "en" ? "zh" : "en"];
    this.changeLang.emit();  
  }
}