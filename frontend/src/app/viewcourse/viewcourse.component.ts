import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../core/models/course.model';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.scss']
})
export class ViewcourseComponent implements OnInit {
  courseId:string = "";
  courseData:Course;
  //NGX Chart
  xAxisLabel: string = 'Năm học';
  yAxisLabel: string = 'Điểm chuẩn';
  multi: any[];
  dataReversed: any[];

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private API: ApiService
  )  {
    this.multi = [];
    this.dataReversed = []
    this.courseData = {
      name: "",
      code: "",
      schoolCode: "",
      school: "",
      data: [
        {
          year: 2020,
          requirements: [
            {
              group: "A",
              grade: 20,
            },               
          ],
          amount: 200
        }
      ],
      desc: "Lorem ipsum"
  }
    this.route.queryParams
      .subscribe({next: (params) => {
        if (params.id === undefined||params.id === null) {
          this.router.navigate(['home']);
        }
        this.courseId = params.id;
    this.getCourseData(()=>{
      this.dataReversed = this.courseData.data.reverse();
    });
    }})
   }
  getCourseData(callback:()=>void=()=>{}):void {
    this.API.get(`/apis/course/get/${this.courseId}`).subscribe({next: (res)=>{
      console.log(res);
      this.courseData = res;
      this.multi = this.generateChartData(this.courseData)
      return callback();
    }});
  }
  generateChartData(course:Course):any {
    var columns: string[] = [];
    var result: any[] = [];
    course.data.forEach(year => {
      year.requirements.forEach(requirement => {
        var isExisted = false;
        for (let i = 0; i < columns.length; i++) {
          if (requirement.group === columns[i]) {
            isExisted = true;
            break;
          }
        }
        if (!isExisted) {
          columns.push(requirement.group)
        }
      })
    })
    columns.forEach(column => {
      var resSeries: any[] = [];
      this.courseData.data.forEach(year => {
        for (let i = 0; i < year.requirements.length; i++) {
          if (year.requirements[i].group === column) {
            resSeries.push({
              name: year.year.toString(),
              value: year.requirements[i].grade
            })
            break;
          }
        }
      })
      result.push({
        name: column,
        series: resSeries
      })
    })
    return result;
  }
  ngOnInit(): void {
  }
}
