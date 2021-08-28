import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../core/models/course.model';
import { ApiService } from '../core/services/api.service';
import { WishesService } from '../core/services/wishes.service';

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
  screenWidth: any;
  groups:string[] = [];
  group: string = '';
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private API: ApiService,
    private $wish: WishesService,
    private _snackBar: MatSnackBar
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
    this.groups = columns;
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
  getWidth():number {
    var ratio = 1;
    if (this.screenWidth < 1200) {
      ratio = this.screenWidth/1500;
    } 
    return 1000*ratio
  }
  getHeight():number {
    var ratio = 1;
    if (this.screenWidth < 1200) {
      ratio = this.screenWidth/1500;
      return 700*ratio
    }
    return 450
  }
  addWish(): void {
    if (this.group === "") {
      this._snackBar.open("Hãy chọn khối thi!","",{
        duration: 1000
      });
    } else {
      this.$wish.addWish({
        universityCode: this.courseData.schoolCode,
        courseCode: this.courseData.code,
        courseName: this.courseData.name,
        examiningGroup: this.group
      })
      var snackBarRef = this._snackBar.open("Thêm nguyện vọng thành công!","Xem",{
        duration: 1000
      });
      snackBarRef.onAction().subscribe(
        () => {
          this.router.navigate(['home/wishes']);
        }
      );
    }
  }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
   
  }
}
