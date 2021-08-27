import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})
export class LookupComponent implements OnInit {

  minValue: number = 10;
  maxValue: number = 22;
  options: Options = {
    floor: 0,
    ceil: 30
  };
  allData
  filtered:any;
  constructor(private API: ApiService) { }
  getSchools(callback:()=>void) {
    this.API.get("/apis/school/getall").subscribe({next: (response)=>{
        this.allData = response;
        this.filtered = this.allData.slice();
        return callback();
    }});
}
  ngOnInit(): void {
  }

}
