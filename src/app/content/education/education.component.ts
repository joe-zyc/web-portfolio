import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css']
})

export class EducationComponent {
    @Input() lang = "";

    constructor(
        private translate: TranslateService) {
    }
}