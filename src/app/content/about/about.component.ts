import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})

export class AboutComponent {
    @Input() lang = "";
    @Input() sidenavStatus = true;

    constructor(
        private translate: TranslateService) {
    }
}