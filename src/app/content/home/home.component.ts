import { Component, Input } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  @Input() lang = "";
  @Input() sidenavStatus = true;
  subscribe: any;
  marginTop = this.sidenavStatus ? "0" : "70px";

  constructor(private translate: TranslateService) {
  }
}
