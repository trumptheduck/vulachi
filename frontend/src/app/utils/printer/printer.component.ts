import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { BasicProfile, ExamProfile, Wish } from 'src/app/core/models/profile.model';
import { InstructionService } from 'src/app/core/services/instruction.service';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.scss']
})
export class PrinterComponent implements OnInit,AfterViewInit {
  @ViewChild('documentPage1', {static: false}) documentPage1: ElementRef;
  @ViewChild('documentPage2', {static: false}) documentPage2: ElementRef;
  @ViewChild('documentPage3', {static: false}) documentPage3: ElementRef;
  @ViewChild('documentPage4', {static: false}) documentPage4: ElementRef;
  @ViewChild('documentPage5', {static: false}) documentPage5: ElementRef;
  @ViewChild('documentPage6', {static: false}) documentPage6: ElementRef;
  documentElem: ElementRef[];
  documentContext: CanvasRenderingContext2D[] = [];
  documents: HTMLImageElement[] = [];
  drawInstruction: any[];
  basicProfile: BasicProfile;
  examProfile: ExamProfile;
  wishes: Wish[];
  images:any[]=[];
  doc:jsPDF = new jsPDF({
    unit: "cm",
  });
  constructor(private InsService: InstructionService) { 
    this.basicProfile = {
      DOEduName: "Ninh Binh",
      DOEduCode: "32",
      fullname: "BUI HOANG NHAT",
      gender: "0",
      birthDate: "160802",
      birthPlace: "Ninh Binh",
      race: "Kinh",
      isForeign: false,
      socialSecurity: "037202005175",
      settlementCode: "123245",
      settlementAddress: "Xom Thuong, Yen Tu, Yen Mo, Ninh Binh",
      is18MArea1: false,
      is18MSpecialArea: false,
      highschool: {
        grade10: {
          address: "Truong THPT Yen Mo B, Yen Mac, Yen Mo, Ninh Binh",
          provinceCode: "23",
          schoolCode: "012",
        },
        grade11: {
          address: "Truong THPT Yen Mo B, Yen Mac, Yen Mo, Ninh Binh",
          provinceCode: "23",
          schoolCode: "012",
        },
        grade12: {
          address: "Truong THPT Yen Mo B, Yen Mac, Yen Mo, Ninh Binh",
          provinceCode: "23",
          schoolCode: "012",
        },
        gradeName: "12A1",
      },
      phone: "0333082897",
      email:"nhatyt123@gmail.com",
      contact: "Bui Van Chien, 0947909606, Xom Thuong, Yen Tu, Yen Mo, Ninh Binh",
    }
    this.examProfile = {
      isForUniAdmission: true,
      isHighSchool: true,
      isTrainCamp: false,
      isFreeNoHighSchool: false,
      isFreeHighSchool: false,
      councilName: "So GD&DT Ninh Binh",
      councilCode: "23",
      examLocationAddress: "Truong THPT Yen Mo B",
      examLocationCode: "012",
      tests : {
        math: true,
        literature: true,
        forLang: "N1",
        isSocialScience: false,
      },
      testsFree : {
        physics: false,
        chemistry: false,
        biology: false,
        history: false,
        geography: false,
        civilEdu: false
      },
      forLangCertificate: "",
      forLangGrades: "",
      retained: {
        math: "",
        literature: "",
        history: "",
        geography: "",
        civilEdu: "",
        physics: "",
        chemistry: "",
        biology: "",
        forLang: "",
      },
      priorityTarget: 0,
      admissionArea: "3",
      gradYear: 2020,
      connectionAdmission: -1,
    }
    this.wishes = [
      {
        universityCode: "HUST",
        courseCode: "IT1",
        courseName: "IT: Computer Science",
        examiningGroup: "A1"
      },
      {
        universityCode: "HUST",
        courseCode: "IT1",
        courseName: "IT: Computer Science",
        examiningGroup: "A1"
      },
      {
        universityCode: "HUST",
        courseCode: "IT1",
        courseName: "IT: Computer Science",
        examiningGroup: "A1"
      },
      {
        universityCode: "HUST",
        courseCode: "IT1",
        courseName: "IT: Computer Science",
        examiningGroup: "A1"
      },
      {
        universityCode: "HUST",
        courseCode: "IT1",
        courseName: "IT: Computer Science",
        examiningGroup: "A1"
      },
      {
        universityCode: "HUST",
        courseCode: "IT1",
        courseName: "IT: Computer Science",
        examiningGroup: "A1"
      },
      {
        universityCode: "HUST",
        courseCode: "IT1",
        courseName: "IT: Computer Science",
        examiningGroup: "A1"
      },
      {
        universityCode: "HUST",
        courseCode: "IT1",
        courseName: "IT: Computer Science",
        examiningGroup: "A1"
      },
      {
        universityCode: "HUST",
        courseCode: "IT1",
        courseName: "IT: Computer Science",
        examiningGroup: "A1"
      },
      {
        universityCode: "HUST",
        courseCode: "IT1",
        courseName: "IT: Computer Science",
        examiningGroup: "A1"
      },
      {
        universityCode: "HUST",
        courseCode: "IT1",
        courseName: "IT: Computer Science",
        examiningGroup: "A1"
      },
      {
        universityCode: "HUST",
        courseCode: "IT1",
        courseName: "IT: Computer Science",
        examiningGroup: "A1"
      },
            {
        universityCode: "HUST",
        courseCode: "IT1",
        courseName: "IT: Computer Science",
        examiningGroup: "A1"
      },
      {
        universityCode: "HUST",
        courseCode: "IT1",
        courseName: "IT: Computer Science",
        examiningGroup: "A1"
      },
      {
        universityCode: "HUST",
        courseCode: "IT1",
        courseName: "IT: Computer Science",
        examiningGroup: "A1"
      },
      {
        universityCode: "HUST",
        courseCode: "IT1",
        courseName: "IT: Computer Science",
        examiningGroup: "A1"
      },
      {
        universityCode: "HUST",
        courseCode: "IT1",
        courseName: "IT: Computer Science",
        examiningGroup: "A1"
      },
    ]
  }
  getImagesFromUrlArray(urls:any[], callback:any):void {
    var resultImages: HTMLImageElement[] = [];
    var checkForLoading = () => {
      if (resultImages.length === urls.length) {
        callback(resultImages)
      }
    }
    urls.forEach(url=>{
      var img: HTMLImageElement = new Image();

      img.onerror = function() {
          alert('Cannot load image: "'+url+'"');
      };
      img.onload = function() {
          resultImages.push(img);
          checkForLoading();
      };
      img.src = url;
    })
    
}
  drawFromInstruction(contexts:CanvasRenderingContext2D[]):void {
    this.drawInstruction = this.InsService.getInstruction(this.basicProfile,this.examProfile,this.wishes);
    for (let i = 0; i< this.drawInstruction.length; i++) {
      this.drawInstruction[i].instructions.forEach((instruction:any) => {
        switch (instruction.content) {
          case '$smallEllipse':
            contexts[i].beginPath();
            contexts[i].ellipse(instruction.x, instruction.y, 40, 20, 0, 0, 2 * Math.PI);
            contexts[i].stroke();
            contexts[i].closePath();
          break;
          case '$bigEllipse':
            contexts[i].beginPath();
            contexts[i].ellipse(instruction.x, instruction.y, 60, 20, 0, 0, 2 * Math.PI);
            contexts[i].stroke();
            contexts[i].closePath();
          break;
          case '$smallCircle':
            contexts[i].beginPath();
            contexts[i].ellipse(instruction.x, instruction.y, 20, 20, 0, 0, 2 * Math.PI);
            contexts[i].stroke();
            contexts[i].closePath();
          break;
          default: contexts[i].fillText(instruction.content,instruction.x,instruction.y);
        }
      })
    }
  }
  savePDF() :void {
    this.images = [];
    this.documentElem.forEach(canvas => {
      this.images.push(canvas.nativeElement.toDataURL())
    })
    this.getImagesFromUrlArray(this.images,(imageArray:HTMLImageElement[])=>{
      console.log(imageArray.length);
      imageArray.forEach(image=> {
        this.doc.addImage(image, 'PNG', 0, 0, 21, 29.7);
        this.doc.addPage();
      })
      this.doc.save("a4.pdf");
    })
  }
  ngOnInit(): void {
  }
  ngAfterViewInit():void {
    this.documentElem = [this.documentPage1, this.documentPage2, this.documentPage3, this.documentPage4, this.documentPage5, this.documentPage6];
    for (let i = 0; i < this.documentElem.length; i++) {
      this.documentContext.push(this.documentElem[i].nativeElement.getContext('2d'));
      this.documents.push(new Image());
      this.documents[i].src = `../../../assets/documents/page${i+1}.png`
      this.documents[i].onload = () => {
        this.documentContext[i].drawImage(this.documents[i],0,0);
        this.documentContext[i].font = "28px Arial";
        this.documentContext[i].lineWidth = 3;
      }
    }
  }
}
