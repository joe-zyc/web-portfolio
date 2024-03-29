import { Component, Input } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.css"],
})
export class ExperienceComponent {
  @Input() lang = "";

  EXPs: string[] = [
    "exp_rakuten",
    "exp_babylist",
    "exp_kpmg",
    "exp_highhope",
    "exp_rop",
    "exp_overbond",
  ];

  onPhone: boolean = false;

  constructor(private translate: TranslateService) {
    this.onPhone = window.innerWidth < 800;
  }
}
