import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  url = 'http://localhost:3000/';
  dataById: any;
  id: any;
  


  constructor(private http: HttpClient) { }

postApiCall(endPoint: string, formData: any) {
  let url = this.url + endPoint;
  return this.http.post(url, formData);

}
getApiCall(endPoint:string){
  let url = this.url + endPoint ;
  return this.http.get(url);
}

deleteApiCall(endPoint:string,id:number){
  let url = this.url + endPoint + '/' + id;
  return this.http.delete(url) 
  }
  editApiCall(endpoint:any , id? : any){
    let url = id? this.url + endpoint + '/' + id : this.url + endpoint ;
    return this.http .get(url);
  }
}