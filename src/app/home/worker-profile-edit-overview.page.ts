import { Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
@Component({
  selector: "app-worker-profile-edit-overview",
  templateUrl: "./worker-profile-edit-overview.page.html",
  styleUrls: ["./worker-profile-edit-overview.page.scss"],
})
export class WorkerProfileEditOverviewPage implements OnInit {
  constructor(public platform: Platform) {}

  ngOnInit() {}
}
