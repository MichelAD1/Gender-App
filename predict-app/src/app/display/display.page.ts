import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class DisplayPage implements OnInit {
  full_name: any = "";
  age: any = 0;
  gender: any = "";
  natio: any = [];

  constructor(private router: Router, private location: Location,private http: HttpClient) {
  }
  ngOnInit() {
    let name = this.router.getCurrentNavigation()?.extras.state;
    let tmp_name = JSON.stringify(name)
    name = JSON.parse(tmp_name)["name"];
    this.full_name = name;

    this.http.get(`https://api.genderize.io?name=${this.full_name}`)
      .subscribe(data => {
        let tmp_data = JSON.stringify(data);
        this.gender = JSON.parse(tmp_data)["gender"];
      })

    this.http.get(`https://api.agify.io/?name=${this.full_name}`)
      .subscribe(data => {
        let tmp_data = JSON.stringify(data);
        this.age = JSON.parse(tmp_data)["age"];
      })
    this.http.get(`https://api.nationalize.io/?name=${this.full_name}`)
      .subscribe(data => {
        let tmp_data = JSON.stringify(data);
        this.natio = JSON.parse(tmp_data)["country"];
        console.log(this.natio);
      })
  }

  getBack() {
    this.location.back();
  }

}
