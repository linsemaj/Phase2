import { Component, OnInit } from '@angular/core';
import { question, questionService } from '../questionService';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  qNum: number = 0;
  questionObject:question[];
  answers: string[];
  realAnswers:string[];
  constructor(private Qservice:questionService) {
    
  }
  setQNum(a:number){
    this.qNum=a;
  }
  qUp() {
    if (this.qNum < 10)
    this.qNum++;
  }
  qDown() {
    if (this.qNum > 0)
    this.qNum--;
  }
  storeAns(qNum){
    this.answers[qNum]='a';
  }
  grade(){
    let count=0;
    // for(let i=0; i<11; i++){
    //   if(this.answers[this.qNum]==this.realAnswers[this.qNum]){
    //     count++;
    //   }
    // }
    alert(count+"/10")
  }
  ngOnInit(): void {
    this.Qservice.loadData().subscribe(data=>this.questionObject=data);

  }
  
  
}
