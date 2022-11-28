import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: String = "";
  dog_img: any = [];
  constructor(private router: Router, private http: HttpClient) {}
  
  showPrediction() {
    if (this.name != "") {
      this.router.navigate(["/display"], { state: { name: this.name } });
    }
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
