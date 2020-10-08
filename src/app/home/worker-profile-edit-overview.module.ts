import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { WorkerProfileEditOverviewPageRoutingModule } from "./worker-profile-edit-overview-routing.module";
import { WorkerProfileEditOverviewPage } from "./worker-profile-edit-overview.page";
import { WorkerProfileEditResumePage } from "./worker-profile-edit-resume/worker-profile-edit-resume.page";
import { ResumeEmploymentComponent } from "./worker-profile-edit-resume/resume-employment/resume-employment.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    WorkerProfileEditOverviewPageRoutingModule,
  ],
  declarations: [
    WorkerProfileEditOverviewPage,
    WorkerProfileEditResumePage,
    ResumeEmploymentComponent,
  ],
  providers: [],
})
export class WorkerProfileEditOverviewPageModule {}
