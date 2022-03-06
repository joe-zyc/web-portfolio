import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class ContactComponent {
    @Input() lang = "";
    @Input() sidenavStatus = true;
    
    faGithub = faGithub;
    faEnvelope = faEnvelope;
    faLinkedin = faLinkedin;

    constructor(
        private translate: TranslateService) {
    }
}