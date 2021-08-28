import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { ApiService } from '../core/services/api.service';
import { School } from '../core/models/school.model';
import { Course } from '../core/models/course.model';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})
export class LookupComponent implements OnInit {
  searchQuery:string='';
  minValue: number = 0;
  maxValue: number = 30;
  regionQuery: string="ALL";
  options: Options = {
    floor: 0,
    ceil: 30
  };
  allSchoolData:School[]=[];
  filteredSchoolData:School[]=[];
  allCourseData:Course[]=[];
  filteredCourseData:Course[]=[];
  constructor(private API: ApiService) { }
  getSchools(callback:(params:any)=>void) {
    this.API.get("/apis/school/getall").subscribe({next: (response)=>{
        this.allSchoolData = response;
        this.filteredSchoolData = this.allSchoolData.slice();
        return callback(response);
    }});
}
  getCourses(callback:(params:any)=>void) {
    this.API.get("/apis/course/getall").subscribe({next: (response)=>{
        this.allCourseData = response;
        this.filteredCourseData = this.allCourseData.slice();
        return callback(response);
    }});
    }

searchSchoolData():any {
  var results:any[] = [];
  
  for (let i = 0; i< this.allSchoolData.length; i++) {
    if (this.regionQuery!=="ALL"&&this.allSchoolData[i].region !== this.regionQuery) {
      continue;
    }
    if (this.allSchoolData[i].name.search(new RegExp(this.searchQuery,"i")) !== -1) {
        results.push(this.allSchoolData[i]);
        continue;
    }
    if (this.allSchoolData[i].code.search(new RegExp(this.searchQuery,"i")) !== -1) {
        results.push(this.allSchoolData[i]);
        continue;
    }
  }
  return results;
  }
  searchCourseData():any {
    var results:any[] = [];
    var isFilterOk:boolean = false;
    for (let i = 0; i< this.allCourseData.length; i++) {
      for (let j = 0; j < this.allCourseData[i]?.data.reverse()[0]?.requirements.length; j++) {
        if (this.allCourseData[i]?.data.reverse()[0]?.requirements[j]?.grade > this.minValue&&this.allCourseData[i]?.data.reverse()[0]?.requirements[j]?.grade < this.maxValue) {
          isFilterOk = true;
          break;
        }
      }
      if (!isFilterOk) {
        continue
      }
      if (this.allCourseData[i].name.search(new RegExp(this.searchQuery,"i")) !== -1) {
          results.push(this.allCourseData[i]);
          continue;
      }
      if (this.allCourseData[i].code.search(new RegExp(this.searchQuery,"i")) !== -1) {
          results.push(this.allCourseData[i]);
          continue;
      }
      if (this.allCourseData[i].schoolCode.search(new RegExp(this.searchQuery,"i")) !== -1) {
        results.push(this.allCourseData[i]);
        continue;
    }
    }
    return results;
    }
  onSearch() {
  this.filteredSchoolData = this.searchSchoolData();
  this.filteredCourseData = this.searchCourseData();
  }
  ngOnInit(): void {
    this.getSchools((res)=>{ console.log(res)})
    this.getCourses((res)=>{ console.log(res)})
  }

}
