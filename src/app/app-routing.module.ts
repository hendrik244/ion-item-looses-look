import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { WorkerProfileEditOverviewPageModule } from "./home/worker-profile-edit-overview.module";
import { WorkerProfileEditOverviewPage } from "./home/worker-profile-edit-overview.page";
import { WorkerProfileEditResumePageModule } from "./home/worker-profile-edit-resume/worker-profile-edit-resume.module";
import { WorkerProfileEditResumePage } from "./home/worker-profile-edit-resume/worker-profile-edit-resume.page";

const routes: Routes = [
  {
    path: "",
    redirectTo: "worker-profile-edit-overview",
    pathMatch: "full",
  },
  {
    path: "worker-profile-edit-overview",
    component: WorkerProfileEditOverviewPage,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    WorkerProfileEditOverviewPageModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
