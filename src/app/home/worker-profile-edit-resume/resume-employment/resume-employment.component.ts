import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AlertController, AnimationController } from "@ionic/angular";
import { WorkerEmployment } from "src/Models/WorkerEmployment";

const FADE_IN_OR_FADE_OUT_ANIMATION_DURATION = 800;

@Component({
  selector: "app-resume-employment",
  templateUrl: "./resume-employment.component.html",
  styleUrls: ["./resume-employment.component.scss"],
})
export class ResumeEmploymentComponent implements OnInit {
  @Input() employmentItem: WorkerEmployment;
  minyearmonth: string;

  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  @Output() onChange: EventEmitter<boolean> = new EventEmitter();

  isCurrentEmployment: boolean;
  periodEndDisabled: boolean = false;
  maxDate: String;

  constructor(
    private alertCtrl: AlertController,
    private animationCtrl: AnimationController
  ) {}

  ngOnInit() {
    this.maxDate = new Date().toISOString();
    if (!this.employmentItem?.period_end) {
      this.isCurrentEmployment = true;
      this.periodEndDisabled = true;
    }

    this.animateComponent();
  }

  deleteResume(resumeId) {
    this.alertCtrl
      .create({
        message: "Bist du sicher, dass du die Anstellung löschen willst?",
        animated: true,
        buttons: [
          { text: "Abbrechen", role: "cancel" },
          {
            text: "Löschen",
            handler: () => {
              this.employmentChanged();
              this.onDelete.emit({ resume: resumeId });
            },
          },
        ],
      })
      .then((alertElement) => {
        alertElement.present();
      });
  }

  getMinDate($event) {
    this.minyearmonth =
      $event.detail.value.year.value + "-" + $event.detail.value.month.value;
  }

  employmentChanged() {
    this.onChange.emit(true);
  }

  changeValueCurrentEmployement(event, value: boolean = null) {
    if (value) {
      this.isCurrentEmployment = value;
    } else {
      this.isCurrentEmployment = event.detail.checked;
    }

    if (this.isCurrentEmployment) {
      this.periodEndDisabled = true;
      this.employmentItem.period_end = null;
    } else {
      this.periodEndDisabled = false;
    }
  }

  get isCurrent() {
    return this.isCurrentEmployment;
  }

  async animateComponent(fadeIn: boolean = true) {
    let comps = document.querySelectorAll(".this-component");
    if (comps.length <= 0) {
      return;
    }
    let animationStartOpacity = "0";
    let animationEndOpacity = "1";
    if (!fadeIn) {
      animationStartOpacity = "1";
      animationEndOpacity = "0";
    }
    let newComp = comps[comps.length - 1];
    this.animationCtrl
      .create()
      .addElement(newComp)
      .duration(FADE_IN_OR_FADE_OUT_ANIMATION_DURATION)
      .fromTo("opacity", animationStartOpacity, animationEndOpacity)
      .play();
  }
}
