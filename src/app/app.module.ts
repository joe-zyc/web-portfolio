import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { BarComponent } from './bars/bars.component';
import { ContentComponent } from './content/content.component';
import { ContactComponent } from './content/contact/contact.component';
import { ExperienceComponent } from './content/experience/experience.component';
import { ProjectComponent } from './content/project/project.component'
import { AboutComponent } from './content/about/about.component';
import { EducationComponent } from './content/education/education.component';
import { HomeComponent } from './content/home/home.component';
import { PanelComponent } from './content/project/panel/panel.component'

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule} from '@angular/common/http';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularD3CloudModule } from 'angular-d3-cloud'

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    ContentComponent,
    ContactComponent,
    ExperienceComponent,
    ProjectComponent,
    AboutComponent,
    EducationComponent,
    HomeComponent,
    PanelComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    AngularD3CloudModule,

    // ngx-translate and the loader module
    HttpClientModule,

    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}