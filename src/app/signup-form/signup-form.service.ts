import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class SignupFormService{

    constructor(private http: Http){}

    enviarFirebase(user: any){
        return this.http.post('https://servicesangular.firebaseio.com/data.json', user);
    }
}