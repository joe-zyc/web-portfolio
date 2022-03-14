import { Component, Input, SimpleChange} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css']
})

export class PanelComponent {
    @Input() lang = "";
    imgStyle = innerWidth < 800 ? {'height':'255px','width':'300px'} : {};

    ngOnChanges(change : SimpleChange){
        this.imgStyle = innerWidth < 800 ? {'height':'255px','width':'300px'} : {};
    }

    constructor(
        private translate: TranslateService) {
    }
}