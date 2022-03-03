import { Component, Input, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HostListener } from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    @Input() lang = "";
    @Input() sidenavStatus = true;
    @HostListener('window:resize', ['$event'])

    onResize() {
        this.width = window.innerWidth - (this.sidenavStatus ? 130 : 20);
        this.width = window.innerHeight - 20;
        console.log(this.width)
    }

    enList = [
        'Data Science', 'Machine Learning', 'Python', 'JavaScript', 'C++', 'R',
        'SVM', 'Statistic', 'Math', 'Linear Algebra', 'Calculus', 'Computer Science',
        'Deep Learning', 'Image Processing', 'DFT', 'Angular', 'Time Series', 'Forecasting',
        'XGBoost', 'Decision Tree', 'NLP', 'Clustering', 'Classification', 'K-Means', 'Bag of Word',
        'Nearest Neighbour', 'Random Forest', 'MLP', 'AI', 'GAN', 'LSTM', 'CNN', 'DNN', 'RNN', 'C',
        'TypeScript', 'Java', 'Probability', 'Linear Regression', 'Robust Regression', 'Cross Validation',
        'SQL', 'MySQL', 'Postgres', 'NoSql', 'MongoDB', 'AWS', 'Azure', 'Pandas', 'TensorFlow', 'Keras',
        'NLTK', 'Sentiment Analysis', 'Perdiction', 'Sklearn', 'Anaconda', 'NodeJS', 'NPM', 'Bootstrap'
    ].map(function (d) {
        return { text: d, value: 10 + Math.random() * 80};
    })
    zhList = this.enList;
    width = window.innerWidth - (this.sidenavStatus ? 130 : 0);
    height = window.innerHeight - 20;

    constructor(
        private translate: TranslateService) {
    }

    show = true;
    changeWords(){
        if (this.show) {
            this.width = window.innerWidth - (this.sidenavStatus ? 130 : 0) + 1;
        } else {
            this.width = window.innerWidth - (this.sidenavStatus ? 130 : 0) - 1;
        }
        this.show = !this.show;
    }
}