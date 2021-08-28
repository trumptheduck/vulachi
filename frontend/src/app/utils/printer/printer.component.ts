import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { BasicProfile, ExamProfile, Wish } from 'src/app/core/models/profile.model';
import { InstructionService } from 'src/app/core/services/instruction.service';
import { jsPDF } from "jspdf";
import { WishesService } from 'src/app/core/services/wishes.service';

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
  constructor(private InsService: InstructionService, private $wish: WishesService) { 
    this.basicProfile = {
      DOEduName: "",
      DOEduCode: "",
      fullname: "",
      gender: "0",
      birthDate: "",
      birthPlace: "",
      race: "",
      isForeign: false,
      socialSecurity: "",
      settlementCode: "",
      settlementAddress: "",
      is18MArea1: false,
      is18MSpecialArea: false,
      highschool: {
        grade10: {
          address: "",
          provinceCode: "",
          schoolCode: "",
        },
        grade11: {
          address: "",
          provinceCode: "",
          schoolCode: "",
        },
        grade12: {
          address: "",
          provinceCode: "",
          schoolCode: "",
        },
        gradeName: "",
      },
      phone: "",
      email:"",
      contact: "",
    }
    this.examProfile = {
      isForUniAdmission: false,
      isHighSchool: false,
      isTrainCamp: false,
      isFreeNoHighSchool: false,
      isFreeHighSchool: false,
      councilName: "",
      councilCode: "",
      examLocationAddress: "",
      examLocationCode: "",
      tests : {
        math: false,
        literature: false,
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
      connectionAdmission: 0,
    }
    var JSONdata = window.localStorage.getItem("profile");
    if (JSONdata !== null) {
      var data = JSON.parse(JSONdata);
      this.basicProfile = data.basicProfile;
      this.examProfile = data.examProfile;
    }
    this.wishes = []
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
  drawFromInstruction(contexts:CanvasRenderingContext2D[],callback=()=>{}):void {
    this.wishes = this.$wish.getWishes()
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
    return callback();
  }
  savePDF() :void {
    this.drawFromInstruction(this.documentContext,()=>{
      var thisDoc:jsPDF = new jsPDF({
        unit: "cm",
      });
      var images:any[] = [];
      this.documentElem.forEach(canvas => {
        images.push(canvas.nativeElement.toDataURL())
      })
      this.getImagesFromUrlArray(images,(imageArray:HTMLImageElement[])=>{
        console.log(imageArray.length);
        imageArray.forEach(image=> {
          thisDoc.addImage(image, 'PNG', 0, 0, 21, 29.7);
          thisDoc.addPage();
        })
        thisDoc.save("HoSoTHPTQG.pdf");
      })
    });
  }
  saveLocal():void {
    window.localStorage.setItem("profile",JSON.stringify({basicProfile: this.basicProfile,examProfile:this.examProfile}))
  }
  sameAs10() {
    this.basicProfile.highschool.grade11.address = this.basicProfile.highschool.grade10.address;
    this.basicProfile.highschool.grade11.schoolCode = this.basicProfile.highschool.grade10.schoolCode;
    this.basicProfile.highschool.grade11.provinceCode = this.basicProfile.highschool.grade10.provinceCode;
  }
  sameAs11() {
    this.basicProfile.highschool.grade12.address = this.basicProfile.highschool.grade11.address;
    this.basicProfile.highschool.grade12.schoolCode = this.basicProfile.highschool.grade11.schoolCode;
    this.basicProfile.highschool.grade12.provinceCode = this.basicProfile.highschool.grade11.provinceCode;
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
        this.documentContext[i].font = "28px Handwriting";
        this.documentContext[i].lineWidth = 3;
      }
    }
  }
}
