import { Component, OnInit } from '@angular/core';
import { School } from 'src/app/core/models/school.model';
import { ApiService } from 'src/app/core/services/api.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})
export class SchoolsComponent implements OnInit {
  allData:School[];
  schoolData:any;
  searchQuery:string='';
  schoolDrawer:Drawer;

  public Editor:any = ClassicEditor;
  constructor(private API: ApiService) { 
      this.schoolDrawer = new Drawer(this.API,this);
    this.allData = []
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
    getSchools(callback:()=>void) {
        this.API.get("/apis/school/getall").subscribe({next: (response)=>{
            this.allData = response;
            this.schoolData = this.allData.slice();
            return callback();
        }});
    }
  getRegion(region: string): string {
    var vnRegion:string = "NULL";
    switch (region) {
        case "NORTH":
         vnRegion = "Mien Bac";
        break;
        case "MIDDLE":
         vnRegion = "Mien Trung";
        break;
        case "SOUTH":
         vnRegion = "Mien Nam";
        break;
    }
    return vnRegion;
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
        if (data[i].region.search(new RegExp(query,"i")) !== -1) {
            results.push(data[i]);
            continue;
        }
      }
    return results;
  }
  onSearch(query:string) {
    this.schoolData = this.searchData(query,this.allData);
  }
  setValueOnChange(target:any,event:any) {
      target = event.target.value;
  }
  ngOnInit(): void {
    this.getSchools(()=>{});
  }

}
class Drawer {
    isVisible:boolean;
    data: School;
    emptyData: School;
    isNew: boolean = false;
    API:ApiService;
    component:SchoolsComponent;
    constructor(API:ApiService,component:SchoolsComponent) {
        this.API = API;
        this.component = component;
        this.isVisible = false;
        this.emptyData = {
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
            thumbnail: "",
            desc: ""
        }
        this.data = this.copyData(this.emptyData);
    }
    private copyData(object:School):School {
        return JSON.parse(JSON.stringify(object));
    }
    private refreshData():void {
        this.data = this.copyData(this.emptyData);
    }
    newSchool() {
        this.isNew = true;
        this.refreshData();
        this.open();
    }
    editSchool(school:School):void {
        this.isNew = false;
        this.data = this.copyData(school);
        this.open();
    }
    updateArrayData(field:string,index:number,event:any):void {
        switch (field) {
            case "phones":
                this.data.phones[index] = event.target.value;
            break;
            case "hotlines":
                this.data.hotlines[index] = event.target.value;
            break;
            case "faxes":
                this.data.faxes[index] = event.target.value;
            break;
            case "emails":
                this.data.emails[index] = event.target.value;
            break;
        }
    }
    addArrayData(field:string):void {
        switch (field) {
            case "phones":
                this.data.phones.push('');
            break;
            case "hotlines":
                this.data.hotlines.push('');
            break;
            case "faxes":
                this.data.faxes.push('');
            break;
            case "emails":
                this.data.emails.push('');
            break;
        }
    }
    deleteArrayData(field:string,index:number):void {
        switch (field) {
            case "phones":
                this.data.phones.splice(index,1);
            break;
            case "hotlines":
                this.data.hotlines.splice(index,1);
            break;
            case "faxes":
                this.data.faxes.splice(index,1);
            break;
            case "emails":
                this.data.emails.splice(index,1);
            break;
        }
    }
    save():void {
        this.API.post("/apis/school/update",this.data).subscribe({next: (response) => {
            this.component.getSchools(()=>{
                this.close();
            });
        }});
    }
    create():void {
        this.API.post("/apis/school/create",this.data).subscribe({next: (response) => {
            this.component.getSchools(()=>{
                this.close();
            });
        }});
    }
    delete():void {
        if (confirm("Do you really want to delete this? Changes are permanent")) {
            this.API.post("/apis/school/delete",this.data).subscribe({next: (response) => {
                this.component.getSchools(()=>{
                    this.close();
                });
            }});
        }
    }
    open():void {
        this.isVisible = true;
    }
    close():void {
        this.isVisible = false;
    }
}