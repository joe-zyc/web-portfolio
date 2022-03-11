import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css']
})

export class ExperienceComponent {
    @Input() lang = "";

    EXPs: string[] = [
        "exp_kpmg",
        "exp_highhope",
        "exp_rop",
        "exp_overbond"
    ]

    constructor(
        private translate: TranslateService) {
    }
}