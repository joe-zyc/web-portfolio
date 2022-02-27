import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web_portfolio';
  lang = 'en'
  
  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.lang);
    translate.use(translate.defaultLang);
    localStorage.setItem("lang", translate.currentLang);
  }

  changeLanguage(){
    this.lang = this.lang === "en" ? "zh" : "en"
    this.translate.use(this.lang);
  }
}
