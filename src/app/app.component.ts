import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'joe-zhang-portfolio';
  lang = this.translate.currentLang
  
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    const browerLang = navigator.language.split('-')[0];
    if (browerLang === 'zh') {
      translate.use('zh');
    } else {
      translate.use(translate.defaultLang);
    }
    localStorage.setItem("lang", translate.currentLang);
  }

  changeLanguage(){
    this.lang = this.lang === "en" ? "zh" : "en"
    this.translate.use(this.lang);
  }
}
