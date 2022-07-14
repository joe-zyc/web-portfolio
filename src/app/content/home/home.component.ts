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
    "数据科学",
    "计算机科学",
    "软件工程",
    "软件开发",
    "前端",
    "后端",
    "全栈",
    "大数据",
    "数据库",
    "数据结构",
    "算法",
    "多元微积分",
    "微积分",
    "线性代数",
    "人工智能",
    "深度学习",
    "编译器",
    "汇编语言",
    "图像处理",
    "自然语言处理",
    "面向对象编程",
    "机器学习",
    "统计模型",
    "阿里云",
    "腾讯云",
    "数据分析",
    "数据可视化",
    "商业分析",
    "梯度下降",
    "分类算法",
    "聚类算法",
    "线性回归",
    "统计模型",
    "时间序列",
    "序列预测",
    "情感分析(NLP)",
    "逻辑思维",
    "数据库管理",
    "操作系统",
    "网络",
    "监督式学习",
    "非监督式学习",
    "虚拟机",
    "数据仓库",

    // soft skills
    "英文流利",
    "多年海外经历",
    "多年工作经验",
    "善沟通",
    "成绩优异",
    "专业知识扎实",
    "团队协同",
    "责任心",
    "时间把控",
    "多任务",
    "效率高",
    "乐观",
    "思维活泼",
    "学习能力强",
    "强适应力",
    "认真",
    "细心",
    "强抗压能力",
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
    this.width = window.innerWidth - (this.sidenavStatus ? 160 : 5);
    this.height = window.innerHeight - (this.sidenavStatus ? 0 : 60);
  }

  setTags() {
    this.enTags = this.doShuffle(this.joinTagList);
    this.zhTags = this.doShuffle(this.zhTagList);
  }
}
