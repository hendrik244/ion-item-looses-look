import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WorkerProfileEditResumePage } from "./worker-profile-edit-resume.page";

const routes: Routes = [
  {
    path: "",
    component: WorkerProfileEditResumePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerProfileEditResumePageRoutingModule {}
