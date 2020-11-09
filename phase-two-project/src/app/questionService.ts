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

    sayHi():string{
        return "HI"
    }

}
        export class question{
            constructor(
                public id:number,
                public prompt:string,
                public a:string,
                public b:string,
                public c:string,
                public d:string,
                public answer:string){}
        }