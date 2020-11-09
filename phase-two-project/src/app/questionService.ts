import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class questionService{

    constructor(private httpClient:HttpClient){

    }
    loadData():Observable<question[]>{
        return this.httpClient.get<question[]>("http://localhost:3000/questionBank");
    }

    sayHi():String{
        return "HI"
    }

}
        export class question{
            constructor(
                public id:number,
                public prompt:String,
                public a:String,
                public b:String,
                public c:String,
                public d:String,
                public answer:boolean){}
        }