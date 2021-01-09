import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TortasService {
  tortas: any[]=[];
  constructor(private http:HttpClient) { 
  http.get('https://api.github.com/users/ibuioli').subscribe(resp=>{
    console.log(resp);
  })


  }
}
