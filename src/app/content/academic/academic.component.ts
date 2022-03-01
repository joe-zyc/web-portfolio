import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-academic',
    templateUrl: './academic.component.html',
    styleUrls: ['./academic.component.css']
})

export class AcademicComponent {
    @Input() lang = "";

    constructor(
        private translate: TranslateService) {
    }
}