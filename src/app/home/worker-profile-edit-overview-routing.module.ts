import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { WorkerProfileEditOverviewPage } from "./worker-profile-edit-overview.page";
import { WorkerProfileEditResumePage } from "./worker-profile-edit-resume/worker-profile-edit-resume.page";

const routes: Routes = [
  {
    path: "",
    component: WorkerProfileEditOverviewPage,
  },
  {
    path: "worker-profile-edit-resume",
    component: WorkerProfileEditResumePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerProfileEditOverviewPageRoutingModule {}
