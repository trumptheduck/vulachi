import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

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
  @ViewChild('documentPage7', {static: false}) documentPage7: ElementRef;
  @ViewChild('documentPage8', {static: false}) documentPage8: ElementRef;
  documentElem: ElementRef[];
  documentContext: CanvasRenderingContext2D[] = [];
  documents: HTMLImageElement[] = [];
  drawInstruction: any[];
  constructor() { 
    this.drawInstruction = [
      { name: 'page1',
        instructions:[
          {
            name: "SoGDDT",
            x: 230,
            y: 75,
            content: "TP. HỒ CHÍ MINH"
          },
          {
            name: "SoGDDT_code_1",
            x: 600,
            y: 80,
            content: "1"
          },
          {
            name: "SoGDDT_code_2",
            x: 640,
            y: 80,
            content: "1"
          },
          {
            name: "FullName",
            x: 180,
            y: 390,
            content: "NGUYEN VAN A"
          },
          {
            name: "Gender",
            x: 1378,
            y: 392,
            content: "1"
          },
          {
            name: "DateOfBirth1",
            x: 980,
            y: 435,
            content: "1"
          },
          {
            name: "DateOfBirth2",
            x: 1040,
            y: 435,
            content: "1"
          },
          {
            name: "DateOfBirth3",
            x: 1140,
            y: 435,
            content: "1"
          },
          {
            name: "DateOfBirth4",
            x: 1198,
            y: 435,
            content: "1"
          },
          {
            name: "DateOfBirth5",
            x: 1315,
            y: 435,
            content: "1"
          },
          {
            name: "DateOfBirth6",
            x: 1375,
            y: 435,
            content: "1"
          },
          
          {
            name: "PlaceOfBirth",
            x: 595,
            y: 495,
            content: "TP. Ho Chi Minh"
          },
          {
            name: "Race",
            x: 1285,
            y: 495,
            content: "Kinh"
          },
          {
            name: "isForeign",
            x: 458,
            y: 532,
            content: "x"
          },
          {
            name: "provinceCode1",
            x: 440,
            y: 610,
            content: "1"
          },
          {
            name: "provinceCode2",
            x: 485,
            y: 610,
            content: "1"
          },
          {
            name: "districtCode1",
            x: 575,
            y: 610,
            content: "1"
          },
          {
            name: "districtCode2",
            x: 622,
            y: 610,
            content: "1"
          },
          {
            name: "communalCode1",
            x: 718,
            y: 610,
            content: "1"
          },
          {
            name: "communalCode2",
            x: 764,
            y: 610,
            content: "1"
          },
          {
            name: "CCCD1",
            x: 1004,
            y: 567,
            content: "1"
          },
          {
            name: "CCCD2",
            x: 1044,
            y: 567,
            content: "1"
          },
          {
            name: "CCCD3",
            x: 1084,
            y: 567,
            content: "1"
          },
          {
            name: "CCCD4",
            x: 1124,
            y: 567,
            content: "1"
          },
          {
            name: "CCCD5",
            x: 1164,
            y: 567,
            content: "1"
          },
          {
            name: "CCCD6",
            x: 1204,
            y: 567,
            content: "1"
          },
          {
            name: "CCCD7",
            x: 1244,
            y: 567,
            content: "1"
          },
          {
            name: "CCCD8",
            x: 1284,
            y: 567,
            content: "1"
          },
          {
            name: "CCCD9",
            x: 1324,
            y: 567,
            content: "1"
          },
          {
            name: "CCCD10",
            x: 1364,
            y: 567,
            content: "1"
          },
          {
            name: "CCCD11",
            x: 1404,
            y: 567,
            content: "1"
          },
          {
            name: "CCCD12",
            x: 1444,
            y: 567,
            content: "1"
          },
          {
            name: "Address",
            x: 235,
            y: 665,
            content: "Skylight Tower, 125D Minh Khai, Hai Ba Trung, Ha Noi"
          },
          {
            name: "is18MonthArea1",
            x: 705,
            y: 695,
            content: "x"
          },
          {
            name: "is18MonthHardCondition",
            x: 1455,
            y: 695,
            content: "x"
          },
          {
            name: "grade10_school",
            x: 330,
            y: 760,
            content: "THPT Yen Mo B, Yen Mac, Yen Mo, Ninh Binh"
          },
          {
            name: "grade10_dCode",
            x: 1210,
            y: 765,
            content: "1"
          },
          {
            name: "grade10_dCode",
            x: 1270,
            y: 765,
            content: "1"
          },
          {
            name: "grade10_sCode",
            x: 1331,
            y: 765,
            content: "1"
          },
          {
            name: "grade10_sCode",
            x: 1388,
            y: 765,
            content: "1"
          },
          {
            name: "grade10_sCode",
            x: 1448,
            y: 765,
            content: "1"
          },
          {
            name: "grade11_school",
            x: 330,
            y: 795,
            content: "THPT Yen Mo B, Yen Mac, Yen Mo, Ninh Binh"
          },
          {
            name: "grade11_dCode",
            x: 1210,
            y: 800,
            content: "1"
          },
          {
            name: "grade11_dCode",
            x: 1270,
            y: 800,
            content: "1"
          },
          {
            name: "grade11_sCode",
            x: 1331,
            y: 800,
            content: "1"
          },
          {
            name: "grade11_sCode",
            x: 1388,
            y: 800,
            content: "1"
          },
          {
            name: "grade11_sCode",
            x: 1448,
            y: 800,
            content: "1"
          },
          {
            name: "grade12_school",
            x: 330,
            y: 833,
            content: "THPT Yen Mo B, Yen Mac, Yen Mo, Ninh Binh"
          },
          {
            name: "grade12_dCode",
            x: 1210,
            y: 838,
            content: "1"
          },
          {
            name: "grade12_dCode",
            x: 1270,
            y: 838,
            content: "1"
          },
          {
            name: "grade12_sCode",
            x: 1331,
            y: 838,
            content: "1"
          },
          {
            name: "grade12_sCode",
            x: 1388,
            y: 838,
            content: "1"
          },
          {
            name: "grade12_sCode",
            x: 1448,
            y: 838,
            content: "1"
          },
          {
            name: "grade12_name",
            x: 330,
            y: 868,
            content: "12A1"
          },
          {
            name: "Phone",
            x: 330,
            y: 900,
            content: "0333 082 897"
          },
          {
            name: "Email",
            x: 775,
            y: 900,
            content: "nhat.bh160802@gmail.com"
          },
          {
            name: "Contact",
            x: 220,
            y: 972,
            content: "Nguyen Van B, 0123 345 789, Xom Thuong, Yen Tu, Yen Mo, Ninh Binh"
          },
          {
            name: "isTHPT",
            x: 882,
            y: 1050,
            content: "x"
          },
          {
            name: "isTHPT",
            x: 662,
            y: 1088,
            content: "x"
          },
          {
            name: "isGDTX",
            x: 1390,
            y: 1088,
            content: "x"
          },
          {
            name: "isFree",
            x: 664,
            y: 1128,
            content: "x"
          },
          {
            name: "isFreeTHPT",
            x: 1392,
            y: 1128,
            content: "x"
          },
          {
            name: "testCouncil",
            x: 480,
            y: 1165,
            content: "TP. Ho Chi Minh"
          },
          {
            name: "testCouncilCode",
            x: 1354,
            y: 1168,
            content: "1"
          },
          {
            name: "testCouncilCode",
            x: 1394,
            y: 1168,
            content: "1"
          },
          {
            name: "testLocation",
            x: 330,
            y: 1205,
            content: "TP. Ho Chi Minh"
          },
          {
            name: "testLocationCode",
            x: 1355,
            y: 1208,
            content: "1"
          },
          {
            name: "testLocationCode",
            x: 1395,
            y: 1208,
            content: "1"
          },
          {
            name: "testLocationCode",
            x: 1436,
            y: 1208,
            content: "1"
          },
          {
            name: "testMath",
            x: 332,
            y: 1379,
            content: "x"
          },
          {
            name: "testLiterature",
            x: 490,
            y: 1379,
            content: "x"
          },
          {
            name: "testForeignLang",
            x: 688,
            y: 1382,
            content: "N1"
          },
          {
            name: "testKHTN",
            x: 870,
            y: 1379,
            content: "x"
          },
          {
            name: "testKHXH",
            x: 1035,
            y: 1379,
            content: "x"
          },
          {
            name: "testFreePhysics",
            x: 332,
            y: 1450,
            content: "x"
          },
          {
            name: "testFreeChemistry",
            x: 510,
            y: 1450,
            content: "x"
          },
          {
            name: "testFreeBiology",
            x: 708,
            y: 1450,
            content: "x"
          },
          {
            name: "testFreeHistory",
            x: 865,
            y: 1450,
            content: "x"
          },
          {
            name: "testFreeGeography",
            x: 1030,
            y: 1450,
            content: "x"
          },
          {
            name: "testFreeCivilEdu",
            x: 1215,
            y: 1450,
            content: "x"
          },
          {
            name: "forLangCertificate",
            x: 1245,
            y: 1563,
            content: "IELTS"
          },
          {
            name: "forLangCertificateGrade",
            x: 910,
            y: 1600,
            content: "8.0"
          },
          /////////////////////
          {
            name: "gradeMath",
            x: 360,
            y: 1727,
            content: "8.0"
          },
          {
            name: "gradeLiterature",
            x: 630,
            y: 1727,
            content: "8.0"
          },
          {
            name: "gradeHistory",
            x: 897,
            y: 1727,
            content: "8.0"
          },
          {
            name: "gradeGeography",
            x: 1165,
            y: 1727,
            content: "8.0"
          },
          {
            name: "gradeCivilEdu",
            x: 1395,
            y: 1727,
            content: "8.0"
          },
          {
            name: "gradePhysics",
            x: 360,
            y: 1767,
            content: "8.0"
          },
          {
            name: "gradeChemistry",
            x: 630,
            y: 1767,
            content: "8.0"
          },
          {
            name: "gradeBiology",
            x: 897,
            y: 1767,
            content: "8.0"
          },
          {
            name: "gradeForLang",
            x: 1165,
            y: 1767,
            content: "8.0"
          },
        ]
      },
      {
        name: 'page2', 
        instructions: [

        ]
      },
      { name: 'page3',
        instructions:[
          {
            name: "SoGDDT",
            x: 280,
            y: 75,
            content: "TP. HỒ CHÍ MINH"
          },
          {
            name: "SoGDDT_code_1",
            x: 660,
            y: 80,
            content: "1"
          },
          {
            name: "SoGDDT_code_2",
            x: 700,
            y: 80,
            content: "1"
          },
          {
            name: "FullName",
            x: 180,
            y: 73 +390,
            content: "NGUYEN VAN A"
          },
          {
            name: "Gender",
            x: 1378,
            y:75 + 392,
            content: "1"
          },
          {
            name: "DateOfBirth1",
            x: 980,
            y: 80 +435,
            content: "1"
          },
          {
            name: "DateOfBirth2",
            x: 1040,
            y: 80 +435,
            content: "1"
          },
          {
            name: "DateOfBirth3",
            x: 1140,
            y: 80 +435,
            content: "1"
          },
          {
            name: "DateOfBirth4",
            x: 1198,
            y: 80 +435,
            content: "1"
          },
          {
            name: "DateOfBirth5",
            x: 1315,
            y: 80 +435,
            content: "1"
          },
          {
            name: "DateOfBirth6",
            x: 1375,
            y: 80 +435,
            content: "1"
          },
          
          {
            name: "PlaceOfBirth",
            x: 595,
            y: 93 +495,
            content: "TP. Ho Chi Minh"
          },
          {
            name: "Race",
            x: 1285,
            y: 93 +495,
            content: "Kinh"
          },
          {
            name: "isForeign",
            x: 486,
            y: 95 +532,
            content: "x"
          },
          {
            name: "provinceCode1",
            x: 440,
            y: 105 +610,
            content: "1"
          },
          {
            name: "provinceCode2",
            x: 485,
            y: 105 +610,
            content: "1"
          },
          {
            name: "districtCode1",
            x: 575,
            y: 105 +610,
            content: "1"
          },
          {
            name: "districtCode2",
            x: 622,
            y: 105 +610,
            content: "1"
          },
          {
            name: "communalCode1",
            x: 718,
            y: 105 +610,
            content: "1"
          },
          {
            name: "communalCode2",
            x: 764,
            y: 105 +610,
            content: "1"
          },
          {
            name: "CCCD1",
            x: 1004,
            y: 100 +567,
            content: "1"
          },
          {
            name: "CCCD2",
            x: 1044,
            y: 100 +567,
            content: "1"
          },
          {
            name: "CCCD3",
            x: 1084,
            y: 100 +567,
            content: "1"
          },
          {
            name: "CCCD4",
            x: 1124,
            y: 100 +567,
            content: "1"
          },
          {
            name: "CCCD5",
            x: 1164,
            y: 100 +567,
            content: "1"
          },
          {
            name: "CCCD6",
            x: 1204,
            y: 100 +567,
            content: "1"
          },
          {
            name: "CCCD7",
            x: 1244,
            y: 100 +567,
            content: "1"
          },
          {
            name: "CCCD8",
            x: 1284,
            y: 100 +567,
            content: "1"
          },
          {
            name: "CCCD9",
            x: 1324,
            y: 100 +567,
            content: "1"
          },
          {
            name: "CCCD10",
            x: 1364,
            y: 100 +567,
            content: "1"
          },
          {
            name: "CCCD11",
            x: 1404,
            y: 100 +567,
            content: "1"
          },
          {
            name: "CCCD12",
            x: 1444,
            y: 100 +567,
            content: "1"
          },
          {
            name: "Address",
            x: 235,
            y: 140 +665,
            content: "Skylight Tower, 125D Minh Khai, Hai Ba Trung, Ha Noi"
          },
          {
            name: "is18MonthArea1",
            x: 705,
            y: 160 +695,
            content: "x"
          },
          {
            name: "is18MonthHardCondition",
            x: 1455,
            y: 160 +695,
            content: "x"
          },
          {
            name: "grade10_school",
            x: 330,
            y: 185 +760,
            content: "THPT Yen Mo B, Yen Mac, Yen Mo, Ninh Binh"
          },
          {
            name: "grade10_dCode",
            x: 1210,
            y: 185 +765,
            content: "1"
          },
          {
            name: "grade10_dCode",
            x: 1270,
            y: 185 +765,
            content: "1"
          },
          {
            name: "grade10_sCode",
            x: 1331,
            y: 185 +765,
            content: "1"
          },
          {
            name: "grade10_sCode",
            x: 1388,
            y: 185 +765,
            content: "1"
          },
          {
            name: "grade10_sCode",
            x: 1448,
            y: 185 +765,
            content: "1"
          },
          {
            name: "grade11_school",
            x: 330,
            y: 192 +795,
            content: "THPT Yen Mo B, Yen Mac, Yen Mo, Ninh Binh"
          },
          {
            name: "grade11_dCode",
            x: 1210,
            y: 192 +800,
            content: "1"
          },
          {
            name: "grade11_dCode",
            x: 1270,
            y: 192 +800,
            content: "1"
          },
          {
            name: "grade11_sCode",
            x: 1331,
            y: 192 +800,
            content: "1"
          },
          {
            name: "grade11_sCode",
            x: 1388,
            y: 192 +800,
            content: "1"
          },
          {
            name: "grade11_sCode",
            x: 1448,
            y: 192 +800,
            content: "1"
          },
          {
            name: "grade12_school",
            x: 330,
            y: 195 +833,
            content: "THPT Yen Mo B, Yen Mac, Yen Mo, Ninh Binh"
          },
          {
            name: "grade12_dCode",
            x: 1210,
            y: 195 +838,
            content: "1"
          },
          {
            name: "grade12_dCode",
            x: 1270,
            y: 195 +838,
            content: "1"
          },
          {
            name: "grade12_sCode",
            x: 1331,
            y: 195 +838,
            content: "1"
          },
          {
            name: "grade12_sCode",
            x: 1388,
            y: 195 +838,
            content: "1"
          },
          {
            name: "grade12_sCode",
            x: 1448,
            y: 195 +838,
            content: "1"
          },
          {
            name: "grade12_name",
            x: 330,
            y: 200 +868,
            content: "12A1"
          },
          {
            name: "Phone",
            x: 330,
            y: 210 +900,
            content: "0333 082 897"
          },
          {
            name: "Email",
            x: 775,
            y: 210 +900,
            content: "nhat.bh160802@gmail.com"
          },
          {
            name: "Contact",
            x: 220,
            y: 230 +972,
            content: "Nguyen Van B, 0123 345 789, Xom Thuong, Yen Tu, Yen Mo, Ninh Binh"
          },
          {
            name: "isTHPT",
            x: 882+5,
            y: 262 +1050,
            content: "x"
          },
          {
            name: "isTHPT",
            x: 662+5,
            y: 270 +1088,
            content: "x"
          },
          {
            name: "isGDTX",
            x: 1390+2,
            y: 270 +1088,
            content: "x"
          },
          {
            name: "isFree",
            x: 664,
            y: 275 +1128,
            content: "x"
          },
          {
            name: "isFreeTHPT",
            x: 1392,
            y: 275 +1128,
            content: "x"
          },
          {
            name: "testCouncil",
            x: 480,
            y: 280 +1165,
            content: "TP. Ho Chi Minh"
          },
          {
            name: "testCouncilCode",
            x: 1354 +40,
            y: 280 +1168,
            content: "1"
          },
          {
            name: "testCouncilCode",
            x: 1394 +40,
            y: 280 +1168,
            content: "1"
          },
          {
            name: "testLocation",
            x: 330,
            y: 285 +1205,
            content: "TP. Ho Chi Minh"
          },
          {
            name: "testLocationCode",
            x: 1355-5,
            y: 285 +1208,
            content: "1"
          },
          {
            name: "testLocationCode",
            x: 1395-5,
            y: 285 +1208,
            content: "1"
          },
          {
            name: "testLocationCode",
            x: 1436-5,
            y: 285 +1208,
            content: "1"
          },
          {
            name: "testMath",
            x: 332,
            y: 315 +1379,
            content: "x"
          },
          {
            name: "testLiterature",
            x: 490+5,
            y: 315 +1379,
            content: "x"
          },
          {
            name: "testForeignLang",
            x: 688+10,
            y: 315 +1382,
            content: "N1"
          },
          {
            name: "testKHTN",
            x: 870+15,
            y: 315 +1379,
            content: "x"
          },
          {
            name: "testKHXH",
            x: 1035+20,
            y: 315 +1379,
            content: "x"
          },
          {
            name: "testFreePhysics",
            x: 332,
            y: 323 +1450,
            content: "x"
          },
          {
            name: "testFreeChemistry",
            x: 510+10,
            y: 323 +1450,
            content: "x"
          },
          {
            name: "testFreeBiology",
            x: 708+15,
            y: 323 +1450,
            content: "x"
          },
          {
            name: "testFreeHistory",
            x: 865+20,
            y: 323 +1450,
            content: "x"
          },
          {
            name: "testFreeGeography",
            x: 1030+25,
            y: 323 +1450,
            content: "x"
          },
          {
            name: "testFreeCivilEdu",
            x: 1215+30,
            y: 323 +1450,
            content: "x"
          },
          {
            name: "forLangCertificate",
            x: 1245,
            y: 337 +1563,
            content: "IELTS"
          },
          {
            name: "forLangCertificateGrade",
            x: 910-10,
            y: 345 +1600,
            content: "8.0"
          },
          /////////////////////
          {
            name: "gradeMath",
            x: 360,
            y: 325 +1727,
            content: "8.0"
          },
          {
            name: "gradeLiterature",
            x: 630,
            y: 325 +1727,
            content: "8.0"
          },
          {
            name: "gradeHistory",
            x: 897,
            y: 325 +1727,
            content: "8.0"
          },
          {
            name: "gradeGeography",
            x: 1165,
            y: 325 +1727,
            content: "8.0"
          },
          {
            name: "gradeCivilEdu",
            x: 1395,
            y: 325 +1727,
            content: "8.0"
          },
          {
            name: "gradePhysics",
            x: 360,
            y: 330 +1767,
            content: "8.0"
          },
          {
            name: "gradeChemistry",
            x: 630,
            y: 330 +1767,
            content: "8.0"
          },
          {
            name: "gradeBiology",
            x: 897,
            y: 330 +1767,
            content: "8.0"
          },
          {
            name: "gradeForLang",
            x: 1165,
            y: 330 +1767,
            content: "8.0"
          },
        ]
      },
      {
        name: 'page4', 
        instructions: [
          
        ]
      },
      { name: 'page5',
        instructions:[
          {
            name: "SoGDDT",
            x: 280,
            y: 95,
            content: "TP. HỒ CHÍ MINH"
          },
          {
            name: "SoGDDT_code_1",
            x: 645,
            y: 100,
            content: "1"
          },
          {
            name: "SoGDDT_code_2",
            x: 685,
            y: 100,
            content: "1"
          },
          {
            name: "FullName",
            x: 180,
            y: 73 +390,
            content: "NGUYEN VAN A"
          },
          {
            name: "Gender",
            x: 1378,
            y:75 + 392,
            content: "1"
          },
          {
            name: "DateOfBirth1",
            x: 980,
            y: 83 +435,
            content: "1"
          },
          {
            name: "DateOfBirth2",
            x: 1040,
            y: 83 +435,
            content: "1"
          },
          {
            name: "DateOfBirth3",
            x: 1140,
            y: 83 +435,
            content: "1"
          },
          {
            name: "DateOfBirth4",
            x: 1198,
            y: 83 +435,
            content: "1"
          },
          {
            name: "DateOfBirth5",
            x: 1315,
            y: 83 +435,
            content: "1"
          },
          {
            name: "DateOfBirth6",
            x: 1375,
            y: 83 +435,
            content: "1"
          },
          
          {
            name: "PlaceOfBirth",
            x: 595,
            y: 93 +495,
            content: "TP. Ho Chi Minh"
          },
          {
            name: "Race",
            x: 1285,
            y: 93 +495,
            content: "Kinh"
          },
          {
            name: "isForeign",
            x: 486,
            y: 95 +532,
            content: "x"
          },
          {
            name: "provinceCode1",
            x: 440,
            y: 115 +610,
            content: "1"
          },
          {
            name: "provinceCode2",
            x: 485,
            y: 115 +610,
            content: "1"
          },
          {
            name: "districtCode1",
            x: 575,
            y: 115 +610,
            content: "1"
          },
          {
            name: "districtCode2",
            x: 622,
            y: 115 +610,
            content: "1"
          },
          {
            name: "communalCode1",
            x: 718,
            y: 115 +610,
            content: "1"
          },
          {
            name: "communalCode2",
            x: 764,
            y: 115 +610,
            content: "1"
          },
          {
            name: "CCCD1",
            x: 1004,
            y: 100 +567,
            content: "1"
          },
          {
            name: "CCCD2",
            x: 1044,
            y: 100 +567,
            content: "1"
          },
          {
            name: "CCCD3",
            x: 1084,
            y: 100 +567,
            content: "1"
          },
          {
            name: "CCCD4",
            x: 1124,
            y: 100 +567,
            content: "1"
          },
          {
            name: "CCCD5",
            x: 1164,
            y: 100 +567,
            content: "1"
          },
          {
            name: "CCCD6",
            x: 1204,
            y: 100 +567,
            content: "1"
          },
          {
            name: "CCCD7",
            x: 1244,
            y: 100 +567,
            content: "1"
          },
          {
            name: "CCCD8",
            x: 1284,
            y: 100 +567,
            content: "1"
          },
          {
            name: "CCCD9",
            x: 1324,
            y: 100 +567,
            content: "1"
          },
          {
            name: "CCCD10",
            x: 1364,
            y: 100 +567,
            content: "1"
          },
          {
            name: "CCCD11",
            x: 1404,
            y: 100 +567,
            content: "1"
          },
          {
            name: "CCCD12",
            x: 1444,
            y: 100 +567,
            content: "1"
          },
          {
            name: "Address",
            x: 235,
            y: 140 +665,
            content: "Skylight Tower, 125D Minh Khai, Hai Ba Trung, Ha Noi"
          },
          {
            name: "is18MonthArea1",
            x: 705,
            y: 160 +695,
            content: "x"
          },
          {
            name: "is18MonthHardCondition",
            x: 1455,
            y: 160 +695,
            content: "x"
          },
          {
            name: "grade10_school",
            x: 330,
            y: 174 +760,
            content: "THPT Yen Mo B, Yen Mac, Yen Mo, Ninh Binh"
          },
          {
            name: "grade10_dCode",
            x: 1210,
            y: 174 +765,
            content: "1"
          },
          {
            name: "grade10_dCode",
            x: 1270,
            y: 174 +765,
            content: "1"
          },
          {
            name: "grade10_sCode",
            x: 1331,
            y: 174 +765,
            content: "1"
          },
          {
            name: "grade10_sCode",
            x: 1388,
            y: 174 +765,
            content: "1"
          },
          {
            name: "grade10_sCode",
            x: 1448,
            y: 174 +765,
            content: "1"
          },
          {
            name: "grade11_school",
            x: 330,
            y: 185 +795,
            content: "THPT Yen Mo B, Yen Mac, Yen Mo, Ninh Binh"
          },
          {
            name: "grade11_dCode",
            x: 1210,
            y: 185 +800,
            content: "1"
          },
          {
            name: "grade11_dCode",
            x: 1270,
            y: 185 +800,
            content: "1"
          },
          {
            name: "grade11_sCode",
            x: 1331,
            y: 185 +800,
            content: "1"
          },
          {
            name: "grade11_sCode",
            x: 1388,
            y: 185 +800,
            content: "1"
          },
          {
            name: "grade11_sCode",
            x: 1448,
            y: 185 +800,
            content: "1"
          },
          {
            name: "grade12_school",
            x: 330,
            y: 192 +833,
            content: "THPT Yen Mo B, Yen Mac, Yen Mo, Ninh Binh"
          },
          {
            name: "grade12_dCode",
            x: 1210,
            y: 192 +838,
            content: "1"
          },
          {
            name: "grade12_dCode",
            x: 1270,
            y: 192 +838,
            content: "1"
          },
          {
            name: "grade12_sCode",
            x: 1331,
            y: 192 +838,
            content: "1"
          },
          {
            name: "grade12_sCode",
            x: 1388,
            y: 192 +838,
            content: "1"
          },
          {
            name: "grade12_sCode",
            x: 1448,
            y: 192 +838,
            content: "1"
          },
          {
            name: "grade12_name",
            x: 330,
            y: 200 +868,
            content: "12A1"
          },
          {
            name: "Phone",
            x: 330,
            y: 210 +900,
            content: "0333 082 897"
          },
          {
            name: "Email",
            x: 775,
            y: 210 +900,
            content: "nhat.bh160802@gmail.com"
          },
          {
            name: "Contact",
            x: 220,
            y: 230 +972,
            content: "Nguyen Van B, 0123 345 789, Xom Thuong, Yen Tu, Yen Mo, Ninh Binh"
          },
          {
            name: "isTHPT",
            x: 882+5,
            y: 258 +1050,
            content: "x"
          },
          {
            name: "isTHPT",
            x: 662+5,
            y: 260 +1088,
            content: "x"
          },
          {
            name: "isGDTX",
            x: 1390+2,
            y: 260 +1088,
            content: "x"
          },
          {
            name: "isFree",
            x: 664,
            y: 265 +1128,
            content: "x"
          },
          {
            name: "isFreeTHPT",
            x: 1392,
            y: 265 +1128,
            content: "x"
          },
          {
            name: "testCouncil",
            x: 480,
            y: 265 +1165,
            content: "TP. Ho Chi Minh"
          },
          {
            name: "testCouncilCode",
            x: 1354,
            y: 265 +1168,
            content: "1"
          },
          {
            name: "testCouncilCode",
            x: 1394,
            y: 265 +1168,
            content: "1"
          },
          {
            name: "testLocation",
            x: 330,
            y: 273 +1205,
            content: "TP. Ho Chi Minh"
          },
          {
            name: "testLocationCode",
            x: 1355,
            y: 273 +1208,
            content: "1"
          },
          {
            name: "testLocationCode",
            x: 1395,
            y: 273 +1208,
            content: "1"
          },
          {
            name: "testLocationCode",
            x: 1436,
            y: 273 +1208,
            content: "1"
          },
          {
            name: "testMath",
            x: 332,
            y: 290 +1379,
            content: "x"
          },
          {
            name: "testLiterature",
            x: 490+5,
            y: 290 +1379,
            content: "x"
          },
          {
            name: "testForeignLang",
            x: 688+10,
            y: 290 +1382,
            content: "N1"
          },
          {
            name: "testKHTN",
            x: 870+15,
            y: 290 +1379,
            content: "x"
          },
          {
            name: "testKHXH",
            x: 1035+20,
            y: 290 +1379,
            content: "x"
          },
          {
            name: "testFreePhysics",
            x: 332,
            y: 300 +1450,
            content: "x"
          },
          {
            name: "testFreeChemistry",
            x: 510+10,
            y: 300 +1450,
            content: "x"
          },
          {
            name: "testFreeBiology",
            x: 708+15,
            y: 300 +1450,
            content: "x"
          },
          {
            name: "testFreeHistory",
            x: 865+20,
            y: 300 +1450,
            content: "x"
          },
          {
            name: "testFreeGeography",
            x: 1030+25,
            y: 300 +1450,
            content: "x"
          },
          {
            name: "testFreeCivilEdu",
            x: 1215+30,
            y: 300 +1450,
            content: "x"
          },
          {
            name: "forLangCertificate",
            x: 1245,
            y: 290 +1563,
            content: "IELTS"
          },
          {
            name: "forLangCertificateGrade",
            x: 910-10,
            y: 300 +1600,
            content: "8.0"
          },
          /////////////////////
          {
            name: "gradeMath",
            x: 360,
            y: 300 +1727,
            content: "8.0"
          },
          {
            name: "gradeLiterature",
            x: 630,
            y: 300 +1727,
            content: "8.0"
          },
          {
            name: "gradeHistory",
            x: 897,
            y: 300 +1727,
            content: "8.0"
          },
          {
            name: "gradeGeography",
            x: 1165,
            y: 300 +1727,
            content: "8.0"
          },
          {
            name: "gradeCivilEdu",
            x: 1395,
            y: 300 +1727,
            content: "8.0"
          },
          {
            name: "gradePhysics",
            x: 360,
            y: 305 +1767,
            content: "8.0"
          },
          {
            name: "gradeChemistry",
            x: 630,
            y: 305 +1767,
            content: "8.0"
          },
          {
            name: "gradeBiology",
            x: 897,
            y: 305 +1767,
            content: "8.0"
          },
          {
            name: "gradeForLang",
            x: 1165,
            y: 305 +1767,
            content: "8.0"
          },
        ]
      },
      {
        name: 'page6', 
        instructions: [
          
        ]
      },
    ]
  }
  drawFromInstruction(instructionList:any[],contexts:CanvasRenderingContext2D[]):void {
    for (let i = 0; i< instructionList.length; i++) {
      instructionList[i].instructions.forEach((instruction:any) => {
        contexts[i].fillText(instruction.content,instruction.x,instruction.y);
      })
    }
  }
  ngOnInit(): void {
  }
  ngAfterViewInit():void {
    this.documentElem = [this.documentPage1, this.documentPage2, this.documentPage3, this.documentPage4, this.documentPage5, this.documentPage6, this.documentPage7, this.documentPage8];
    for (let i = 0; i < this.documentElem.length; i++) {
      this.documentContext.push(this.documentElem[i].nativeElement.getContext('2d'));
      this.documents.push(new Image());
      this.documents[i].src = `../../../assets/documents/page${i+1}.png`
      this.documents[i].onload = () => {
        this.documentContext[i].drawImage(this.documents[i],0,0);
        this.documentContext[i].font = "28px Arial";
      }
    }
  }
}
