import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    @Input() lang = "";
    enList = [
        'Data Science', 'Machine Learning', 'Python', 'JavaScript', 'C++', 'R',
        'SVM', 'Statistic', 'Math', 'Linear Algebra', 'Calculus', 'Computer Science',
        'Deep Learning', 'Image Processing', 'DFT', 'Angular', 'Time Series', 'Forecasting',
        'XGBoost', 'Decision Tree', 'NLP', 'Clustering', 'Classification', 'K-Means', 'Bag of Word',
        'Nearest Neighbour', 'Random Forest', 'MLP', 'AI', 'GAN', 'LSTM', 'CNN', 'DNN', 'RNN', 'C',
        'TypeScript', 'Java', 'Probability', 'Linear Regression', 'Robust Regression', 'Cross Validation',
        'SQL', 'MySQL', 'Postgres', 'NoSql', 'MongoDB', 'AWS', 'Azure', 'Pandas', 'TensorFlow', 'Keras',
        'NLTK', 'Sentiment Analysis', 'Perdiction', 'Sklearn', 'Anaconda', 'NodeJS', 'NPM', 'Bootstrap'
    ];
    zhList = this.enList;

    styles = [
        {'position': 'absolute', 'top': '90%', 'right': '54%', 'font-size' : '20px'},
        {'position': 'absolute', 'top': '20%', 'right': '30%', 'font-size' : '40px'},
        {'position': 'absolute', 'top': '22%', 'right': '77%', 'font-size' : '46px'},
        {'position': 'absolute', 'top': '44%', 'right': '98%', 'font-size' : '20px'},
        {'position': 'absolute', 'top': '37%', 'right': '47%', 'font-size' : '16px'},
        {'position': 'absolute', 'top': '35%', 'right': '42%', 'font-size' : '33px'},
        {'position': 'absolute', 'top': '66%', 'right': '33%', 'font-size' : '40px'},
        {'position': 'absolute', 'top': '24%', 'right': '52%', 'font-size' : '45px'},
        {'position': 'absolute', 'top': '73%', 'right': '26%', 'font-size' : '33px'},
        {'position': 'absolute', 'top': '83%', 'right': '60%', 'font-size' : '18px'},
        {'position': 'absolute', 'top': '55%', 'right': '45%', 'font-size' : '25px'},
        {'position': 'absolute', 'top': '11%', 'right': '90%', 'font-size' : '36px'},
        {'position': 'absolute', 'top': '34%', 'right': '23%', 'font-size' : '28px'},
        {'position': 'absolute', 'top': '83%', 'right': '29%', 'font-size' : '18px'},
        {'position': 'absolute', 'top': '70%', 'right': '46%', 'font-size' : '25px'},
        {'position': 'absolute', 'top': '90%', 'right': '55%', 'font-size' : '40px'},
        {'position': 'absolute', 'top': '54%', 'right': '62%', 'font-size' : '14px'},
        {'position': 'absolute', 'top': '21%', 'right': '11%', 'font-size' : '16px'},
        {'position': 'absolute', 'top': '39%', 'right': '33%', 'font-size' : '30px'},
        {'position': 'absolute', 'top': '35%', 'right': '10%', 'font-size' : '20px'},
        {'position': 'absolute', 'top': '32%', 'right': '81%', 'font-size' : '40px'},
        {'position': 'absolute', 'top': '42%', 'right': '85%', 'font-size' : '46px'},
        {'position': 'absolute', 'top': '48%', 'right': '37%', 'font-size' : '20px'},
        {'position': 'absolute', 'top': '38%', 'right': '74%', 'font-size' : '16px'},
        {'position': 'absolute', 'top': '67%', 'right': '10%', 'font-size' : '33px'},
        {'position': 'absolute', 'top': '64%', 'right': '62%', 'font-size' : '40px'},
        {'position': 'absolute', 'top': '71%', 'right': '28%', 'font-size' : '45px'},
        {'position': 'absolute', 'top': '76%', 'right': '70%', 'font-size' : '33px'},
        {'position': 'absolute', 'top': '28%', 'right': '33%', 'font-size' : '18px'},
        {'position': 'absolute', 'top': '82%', 'right': '27%', 'font-size' : '25px'},
        {'position': 'absolute', 'top': '57%', 'right': '29%', 'font-size' : '36px'},
        {'position': 'absolute', 'top': '89%', 'right': '78%', 'font-size' : '28px'},
        {'position': 'absolute', 'top': '57%', 'right': '79%', 'font-size' : '18px'},
        {'position': 'absolute', 'top': '89%', 'right': '43%', 'font-size' : '25px'},
        {'position': 'absolute', 'top': '85%', 'right': '21%', 'font-size' : '40px'},
        {'position': 'absolute', 'top': '88%', 'right': '40%', 'font-size' : '14px'},
        {'position': 'absolute', 'top': '10%', 'right': '72%', 'font-size' : '16px'},
        {'position': 'absolute', 'top': '81%', 'right': '80%', 'font-size' : '30px'},
        {'position': 'absolute', 'top': '0%', 'right': '80%', 'font-size' : '15px'},
        {'position': 'absolute', 'top': '0%', 'right': '10%', 'font-size' : '28px'},
        {'position': 'absolute', 'top': '10%', 'right': '50%', 'font-size' : '32px'},
        {'position': 'absolute', 'top': '14%', 'right': '67%', 'font-size' : '27px'},
        {'position': 'absolute', 'top': '0%', 'right': '69%', 'font-size' : '15px'},
        {'position': 'absolute', 'top': '0%', 'right': '20%', 'font-size' : '20px'},
        {'position': 'absolute', 'top': '2%', 'right': '47%', 'font-size' : '33px'},
    ];

    constructor(
        private translate: TranslateService) {
    }
}