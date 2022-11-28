import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  dog_img: any = [];

  constructor(public router:Router,private http: HttpClient) { 
    setTimeout(()=>{
      this.router.navigateByUrl('home');
    },4000);
  }

  ngOnInit() {
    this.http.get("https://dog.ceo/api/breeds/image/random")
        .subscribe(data => {
          let tmp_data = JSON.stringify(data);
          let img_url = JSON.parse(tmp_data)["message"];
          this.dog_img.push(img_url);
        })
    
  }
}