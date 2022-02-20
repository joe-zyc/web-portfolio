import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web_portfolio';
  
  language = "ENG";

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  changeLanguage() {
    if (this.translate.currentLang === "en"){
      this.translate.use('zh');
      this.language = "中文";
    }else{
      this.translate.use('en');
      this.language = "ENG";
    }
  }
}
