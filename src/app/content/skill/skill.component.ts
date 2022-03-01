import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.css']
})

export class SkillComponent {
    @Input() lang = "";

    constructor(
        private translate: TranslateService) {
    }
}