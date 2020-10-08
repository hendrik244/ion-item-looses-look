import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ViewChild,
} from "@angular/core";
import { Platform, NavController, IonBackButtonDelegate } from "@ionic/angular";
import { WorkerEmployment } from "src/Models/WorkerEmployment";
import { ResumeEmploymentComponent } from "./resume-employment/resume-employment.component";

@Component({
  selector: "app-worker-profile-edit-resume",
  templateUrl: "./worker-profile-edit-resume.page.html",
  styleUrls: ["./worker-profile-edit-resume.page.scss"],
})
export class WorkerProfileEditResumePage implements OnInit {
  worker = {
    _id: "5f60c246d7a49edb256d27dd",
    account_type: "worker",
    email: "hendrik.kuehnel@melantech.de",
    first_name: "Hendrik",
    last_name: "Kühnel",
    profession: "Testberuf",
    street: "Bucherstr.",
    house_number: "86",
    city: "Nürnberg",
    country: "IR",
    phone: "015735795457",
    date_of_birth: "1995-07-29T14:41:15.484Z",
    job_offer_subscription: "searching_job",
    employment_type: "full_time",
    employment_type_duration: "unlimited",
    career_changer: false,
    cv: {
      employments: [
        {
          category: "full_time",
          period_start: "2020-07-16T11:54:55.208Z",
          description: "Maler bei Malerbetrieb",
        },
        {
          category: "part_time",
          period_start: "2018-02-16T15:42:14.663Z",
          period_end: "2020-07-16T14:42:10.008Z",
          description: "Maler bei anderem Malerbetrieb",
        },
      ],
    },
    profile_progress: 0.7894736842105263,
  };
  ngOnInit() {}

  @ViewChildren("employmentComponent") employmentComponents: QueryList<
    ResumeEmploymentComponent
  >;
  @ViewChild(IonBackButtonDelegate, { static: false })
  backButton: IonBackButtonDelegate;

  infosChanged: boolean = false;

  constructor(public platform: Platform, private navCtrl: NavController) {}

  resumeDidChange() {
    console.log("resume changed!!");
    this.infosChanged = true;
  }

  saveButtonClicked() {
    let compArray = this.employmentComponents.toArray();
    let employmentArray: WorkerEmployment[] = [];
    // for (let comp of compArray) {
    //   employmentArray.push(comp.getWorkerEmploymentObject());
    // }
    console.log("All valid!");
  }
}
