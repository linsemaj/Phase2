import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { question, questionService } from '../questionService';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  qNum: number = 0;
  message:string;
  questionObject: question[];
  answers: string[] = new Array(10);
  realAnswers: string[] = new Array(10);
  // @ViewChild('1') a1: ElementRef;
  constructor(private Qservice: questionService) {

  }
  ngOnInit(): void {
    this.Qservice.loadData().subscribe(data => this.questionObject = data);
  }
 
  setQNum(a: number) {
    this.qNum = a;
    this.message=""
  }
  qUp() {
    if (this.qNum < 10)
      this.qNum++;
      this.message=""
  }
  qDown() {
    if (this.qNum > 0)
      this.qNum--;
      this.message=""
  }
  saveAns(qNum, ans: string) {
    if (ans == ""){
      this.message= "Please select an option"
      return false;
    }
    this.answers[qNum] = ans;
    this.qNum++;
    this.message=""
    return true;
  }
  grade() {
    if (this.realAnswers[0] == undefined || this.realAnswers[0] === "") {
      for (let index = 0; index < this.realAnswers.length; index++) {
        this.realAnswers[index] = this.questionObject[index].answer;
      }
    }
    let count = 0;
    for (let i = 0; i < 10; i++) {
      if (this.answers[i] == this.realAnswers[i]) {
        count++;
      }
    }
    alert(count + "/10")
  }

}
