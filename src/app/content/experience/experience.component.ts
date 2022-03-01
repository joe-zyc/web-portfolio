import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css']
})

export class ExperienceComponent {
    @Input() lang = "";

    constructor(
        private translate: TranslateService) {
    }
}