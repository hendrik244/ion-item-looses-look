import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { WorkerProfileEditResumePage } from "./worker-profile-edit-resume.page";
import { ResumeEmploymentComponent } from "./resume-employment/resume-employment.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, IonicModule, CommonModule],
  declarations: [ResumeEmploymentComponent, WorkerProfileEditResumePage],
})
export class WorkerProfileEditResumePageModule {}
