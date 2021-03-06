import { Component, Input, SimpleChange } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { timer } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  @Input() lang = "";
  @Input() sidenavStatus = true;
  fontWeightIntercept = 0;
  fontWeightRatio = 0;
  source = timer(0, 100 * 1000);
  subscribe: any;
  marginTop = this.sidenavStatus ? "0" : "70px";

  ngOnChanges(change: SimpleChange) {
    this.marginTop = this.sidenavStatus ? "0" : "70px";
    if (window.innerWidth > 800 || !this.sidenavStatus) {
      this.changeWords();
    }
  }

  joinTagList = [
    "Data Science",
    "Machine Learning",
    "Python",
    "JavaScript",
    "C++",
    "R",
    "Front-End",
    "Back-End",
    "SVM",
    "Computer Science",
    "Jupyter Notebook",
    "Deep Learning",
    "DFT",
    "Angular",
    "Time Series Forecasting",
    "Compiler",
    "XGBoost",
    "Decision Tree",
    "NLP",
    "Clustering",
    "Classification",
    "K-Means",
    "Assembly Language",
    "Nearest Neighbour",
    "Random Forest",
    "MLP",
    "AI",
    "CNN",
    "DNN",
    "RNN",
    "C",
    "HTML",
    "CSS",
    "Spark",
    "Hadoop",
    "TypeScript",
    "Java",
    "Probability",
    "Linear Regression",
    "Robust Regression",
    "Cross Validation",
    "SQL",
    "MySQL",
    "Postgres",
    "NoSql",
    "MongoDB",
    "AWS",
    "Azure",
    "Pandas",
    "TensorFlow",
    "Keras",
    "Jupyter Lab",
    "NLTK",
    "Sentiment Analysis",
    "Perdiction",
    "Sklearn",
    "Anaconda",
    "NodeJs",
    "NPM",
    "Bootstrap",
    "Github",
    "Numpy",
    "Web Scrap",
    "Django",
    "Flask",
    "ARIMA",
    "EM",
    "FFT",
    "Divide and Conquer",
    "Dynamic Programming",
    "Operating System",
    "Linux",
    "Bash",
    "Git",
    "Waterloo",
    "UW",
    "Toronto",
    "Mean Shift",
    "Regex",
    "Power BI",
    "Tableau",
    "Excel",
    "BI",
    "Homebrew",
    "High GPA",
    "Database",
    "Algorithms",
    "Data Structure",
    "Object-Oriented Programming ",
    "Design Pattern",
    "ER Modeling",
    "OOP",
    "Dimensional Modeling",
    "Fast Fourier Transform",
    "Graph Theory",
    "Optimization",
    "Gradient Descent",
    "Snowflake",
    "DBT",
    "Distributive System",
    "MapReduce",
    "SSH",

    // soft skills
    "Effective Communication",
    "Critical Thinker",
    "Fast Learner",
    "Time Management",
    "Multi-Tasking",
    "Work Under Pressure",
    "Creative",
    "Optimistic",
    "Efficient",
    "Leadership",
    "Teamwork",
    "Collaboration",
    "Patient",
    "Hard Working",
    "Independent",
  ];

  zhTagList = [
    ...this.joinTagList,

    // technical skills
    "????????????",
    "???????????????",
    "????????????",
    "????????????",
    "??????",
    "??????",
    "??????",
    "?????????",
    "?????????",
    "????????????",
    "??????",
    "???????????????",
    "?????????",
    "????????????",
    "????????????",
    "????????????",
    "?????????",
    "????????????",
    "????????????",
    "??????????????????",
    "??????????????????",
    "????????????",
    "????????????",
    "?????????",
    "?????????",
    "????????????",
    "???????????????",
    "????????????",
    "????????????",
    "????????????",
    "????????????",
    "????????????",
    "????????????",
    "????????????",
    "????????????",
    "????????????(NLP)",
    "????????????",
    "???????????????",
    "????????????",
    "??????",
    "???????????????",
    "??????????????????",
    "?????????",
    "????????????",

    // soft skills
    "????????????",
    "??????????????????",
    "??????????????????",
    "?????????",
    "????????????",
    "??????????????????",
    "????????????",
    "?????????",
    "????????????",
    "?????????",
    "?????????",
    "??????",
    "????????????",
    "???????????????",
    "????????????",
    "??????",
    "??????",
    "???????????????",
    "",
  ];

  enTags: any = [];
  zhTags: any = [];

  width = 0;
  height = 0;

  constructor(private translate: TranslateService) {
    this.subscribe = this.source.subscribe((val) => this.changeWords());
    this.setTagCloudDim();
    this.setTags();
  }

  changeWords() {
    if (window.innerWidth > 800) {
      this.fontWeightIntercept = 20;
      this.fontWeightRatio = 50;
    } else {
      this.fontWeightIntercept = 10;
      this.fontWeightRatio = 20;
    }
    this.setTags();
    this.setTagCloudDim();
  }

  shuffleArray(array: any) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  doShuffle(array: any[]) {
    this.shuffleArray(array);
    return array.map((d) => {
      return {
        text: d,
        value: this.fontWeightIntercept + Math.random() * this.fontWeightRatio,
      };
    });
  }

  setTagCloudDim() {
    this.width = window.innerWidth - (this.sidenavStatus ? 160 : 25);
    this.height = window.innerHeight - (this.sidenavStatus ? 0 : 60);
  }

  setTags() {
    this.enTags = this.doShuffle(this.joinTagList);
    this.zhTags = this.doShuffle(this.zhTagList);
  }
}
