import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const LANG : any = {
  "en": "ENG",
  "zh": "中文"
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {

  constructor(private translate: TranslateService) {
  }

  langPrompt = "ENG";
  lang = this.translate.currentLang;
  
  changeLanguage() {
    this.lang = this.lang === "en" ? "zh" : "en"
    this.translate.use(this.lang);
    this.langPrompt = LANG[this.lang];
  }
}