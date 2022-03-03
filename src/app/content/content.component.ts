import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})

export class ContentComponent {
    @Input() lang = "";
    @Input() sidenavStatus = true;
    constructor(
        private translate: TranslateService) {
    }
}