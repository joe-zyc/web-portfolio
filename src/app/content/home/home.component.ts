import { Component, Input, SimpleChange } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { timer } from 'rxjs';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    @Input() lang = "";
    @Input() sidenavStatus = true;
    source = timer(0, 20 * 1000);
    subscribe : any;
    show = true;
    marginTop = this.sidenavStatus ? '0' : '70px';

    ngOnChanges(change : SimpleChange){
        this.marginTop = this.sidenavStatus ? '0' : '70px';
        this.changeWords();
    }

    enList = [
        // technical terms
        'Data Science', 'Machine Learning', 'Python', 'JavaScript', 'C++', 'R', 'Frontend', 'Backend',
        'SVM', 'Statistic', 'Math', 'Linear Algebra', 'Calculus', 'Computer Science', 'Cosmos', 'Jupyter Notebook',
        'Deep Learning', 'Image Processing', 'DFT', 'Angular', 'Time Series', 'Forecasting', 'Compiler', 'ASCII',
        'XGBoost', 'Decision Tree', 'NLP', 'Clustering', 'Classification', 'K-Means', 'Bag of Word', 'Assembly Language', 
        'Nearest Neighbour', 'Random Forest', 'MLP', 'AI', 'CNN', 'DNN', 'RNN', 'C', 'HTML', 'CSS', 'Spark', 'Hadoop',
        'TypeScript', 'Java', 'Probability', 'Linear Regression', 'Robust Regression', 'Cross Validation', 
        'SQL', 'MySQL', 'Postgres', 'NoSql', 'MongoDB', 'AWS', 'Azure', 'Pandas', 'TensorFlow', 'Keras', 'Jupyter Lab',
        'NLTK', 'Sentiment Analysis', 'Perdiction', 'Sklearn', 'Anaconda', 'NodeJs', 'NPM', 'Bootstrap', 'Github',
        'Numpy', 'Web Scrap', 'Django', 'Flask', 'ARIMA', 'EM', 'FFT', 'Divide and Conquer', 'Dynamic Programming',
        'Greedy Algorithm', 'Big O Notation', 'Concurrency', 'Threading', 'Operating System', 'Linux', 'Bash', 'Git', 
        'Exponential Smoothing', 'Statistical Testing', 'Waterloo', 'Canada', 'UW', 'Toronto', 'Mandarin', 'Mean Shift',
        'Regex', 'Power BI', 'Tableau', 'Excel',

        // soft skills
        'Effective Communication', 'Critical Thinking', 'Fast Learner', 'Time Management', 'Multitasking', 'Work Under Pressure',
    ].map(function (d) {
        return { text: d, value: 10 + Math.random() * 60};
    })
    zhList = this.enList;
    width = window.innerWidth - (this.sidenavStatus ? 130 : 0);
    height = window.innerHeight - (this.sidenavStatus ? 20 : 80);

    constructor(
        private translate: TranslateService) {
            this.subscribe = this.source.subscribe(val => this.changeWords());
    }

    changeWords(){
        if (this.show) {
            this.shuffleArray(this.enList);
            this.shuffleArray(this.zhList);
            this.width = window.innerWidth - (this.sidenavStatus ? 160 : 20) + 1;
            this.height = window.innerHeight - (this.sidenavStatus ? 20 : 80);
        } else {
            this.width = window.innerWidth - (this.sidenavStatus ? 160 : 20) - 1;
            this.height = window.innerHeight - (this.sidenavStatus ? 20 : 80);
        }
        this.show = !this.show;
    }

    shuffleArray(array: any) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}