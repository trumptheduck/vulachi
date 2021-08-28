import { Options } from '@angular-slider/ngx-slider/options';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../core/models/course.model';
import { School } from '../core/models/school.model';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})
export class UniversityComponent implements OnInit {
  schoolId: string = "";
  schoolData: School;
  searchQuery:string='';
  minValue: number = 0;
  maxValue: number = 30;
  options: Options = {
    floor: 0,
    ceil: 30
  };
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private API: ApiService
  ) { 
    this.schoolData = {
      phones: [],
      hotlines: [],
      faxes: [],
      emails: [],
      courses: [],
      _id: "",
      name: "",
      code: "",
      region: "NORTH",
      address: "",
      desc: ""
  }
    this.route.queryParams
      .subscribe({next: (params) => {
        if (params.id === undefined||params.id === null) {
          this.router.navigate(['home']);
        }
        this.schoolId = params.id;
    this.getSchoolData(()=>{
      this.onSearch()
    });
    }})
  }
  filteredCourseData:Course[]=[];
 searchCourseData():any {
    var results:any[] = [];
    var isFilterOk:boolean = false;
    for (let i = 0; i< this.schoolData.courses.length; i++) {
      for (let j = 0; j < this.schoolData.courses[i]?.data.reverse()[0]?.requirements.length; j++) {
        if (this.schoolData.courses[i]?.data.reverse()[0]?.requirements[j]?.grade > this.minValue&&this.schoolData.courses[i]?.data.reverse()[0]?.requirements[j]?.grade < this.maxValue) {
          isFilterOk = true;
          break;
        }
      }
      if (!isFilterOk) {
        continue
      }
      if (this.schoolData.courses[i].name.search(new RegExp(this.searchQuery,"i")) !== -1) {
          results.push(this.schoolData.courses[i]);
          continue;
      }
      if (this.schoolData.courses[i].code.search(new RegExp(this.searchQuery,"i")) !== -1) {
          results.push(this.schoolData.courses[i]);
          continue;
      }
      if (this.schoolData.courses[i].schoolCode.search(new RegExp(this.searchQuery,"i")) !== -1) {
        results.push(this.schoolData.courses[i]);
        continue;
    }
    }
    return results;
    }
  onSearch() {
  this.filteredCourseData = this.searchCourseData();
  }
  getSchoolData(callback:()=>void=()=>{}):void {
    this.API.get(`/apis/school/get?id=${this.schoolId}`).subscribe({next: (res)=>{
      console.log(res);
      this.schoolData = res;
      return callback();
    }});
  }
  ngOnInit(): void {
  }

}
