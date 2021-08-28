import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/core/models/course.model';
import { School } from 'src/app/core/models/school.model';
import { ApiService } from 'src/app/core/services/api.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  schoolId:string = '';
  schoolData: School;
  coursesData:any;
  searchQuery:string ='';
  courseDrawer:Drawer;

  public Editor:any = ClassicEditor;
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private API: ApiService
  ) {
    this.courseDrawer = new Drawer(this.API,this);
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
        this.courseDrawer.emptyData.school = params.id;
        this.getSchoolData();
    }})
  }
  setHeight(editor:any) {
    editor.editing.view.change((writer:any) => {
      writer.setStyle(
          "height",
          "200px",
          editor.editing.view.document.getRoot()
      );
    });
  }
  getSchoolData(callback:()=>void=()=>{}):void {
    this.API.get(`/apis/school/get?id=${this.schoolId}`).subscribe({next: (res)=>{
      console.log(res);
      this.schoolData = res;
      return callback();
    }});
  }
  searchData(query:string,data:any):any {
    var results:any[] = [];
    
    for (let i = 0; i< data.length; i++) {
      if (data[i].name.search(new RegExp(query,"i")) !== -1) {
          results.push(data[i]);
          continue;
      }
      if (data[i].code.search(new RegExp(query,"i")) !== -1) {
          results.push(data[i]);
          continue;
      }
      if (data[i].desc.search(new RegExp(query,"i")) !== -1) {
          results.push(data[i]);
          continue;
      }
    }
    return results;
  }
  onSearch(query:string) {
    this.coursesData = this.searchData(query,this.schoolData.courses);
  }
  ngOnInit(): void {
  }

}

class Drawer {
  isVisible:boolean;
  data: Course;
  emptyData: Course;
  isNew: boolean = false;
  API:ApiService;
  component:CoursesComponent;
  constructor(API:ApiService,component:CoursesComponent) {
      this.API = API;
      this.component = component;
      this.isVisible = false;
      this.emptyData = {
          name: "",
          code: "",
          schoolCode: "",
          school: component.schoolId,
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
      this.data = this.copyData(this.emptyData);
  }
  private copyData(object:Course):Course {
      return JSON.parse(JSON.stringify(object));
  }
  private refreshData():void {
      this.data = this.copyData(this.emptyData);
  }
  newCourse() {
      this.isNew = true;
      this.refreshData();
      this.data.schoolCode = this.component.schoolData.code;
      this.open();
  }
  editCourse(course:Course):void {
      this.isNew = false;
      this.data = this.copyData(course);
      this.open();
  }
  addData():void {
    this.data.data.push({
      year: 2020,
      requirements: [
        {
          group: "",
          grade: 0,
        },
      ],
      amount: 0,
    })
  }
  removeData(index:number) {
    this.data.data.splice(index,1);
  }
  addGroup(index:number) {
    this.data.data[index].requirements.push(
      {
        group: "",
        grade: 0,
      }
    )
  }
  removeGroup(dIndex:number,index:number) {
    this.data.data[dIndex].requirements.splice(index,1);
  }
  updateGroupData(field:string,dIndex:number,index:number,event:any) {
    if (field === "group") {
      this.data.data[dIndex].requirements[index].group = event.target.value;
    } else if (field === "grade") {
      this.data.data[dIndex].requirements[index].grade = event.target.value;
    }
  }
  save():void {
    console.log(this.data)
      this.API.post("/apis/course/update",this.data).subscribe({next: (response) => {
        this.component.getSchoolData(()=>{
          console.log(response);
            this.close();
        });
      }});
  }
  create():void {
    console.log(this.data)
      this.API.post("/apis/course/create",this.data).subscribe({next: (response) => {
          this.component.getSchoolData(()=>{
            console.log(response);
              this.close();
          });
      }});
  }
  delete():void {
      this.API.post("/apis/school/delete",this.data).subscribe({next: (response) => {
        this.component.getSchoolData(()=>{
          console.log(response);
            this.close();
        });
      }});
  }
  open():void {
      this.isVisible = true;
  }
  close():void {
      this.isVisible = false;
  }
}