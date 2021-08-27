import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { BasicProfile, ExamProfile, Wish } from '../models/profile.model';
import { School } from '../models/school.model';

@Injectable({
  providedIn: 'root'
})
export class InstructionService {
  data:any[];
  constructor() { 
    //This is the coordinates map of the png documents
    this.data =[{name:"page1",instructions:[{name:"SoGDDT",x:230,y:75,content:"TP. HỒ CHÍ MINH"},{name:"SoGDDT_code_1",x:600,y:80,content:"1"},{name:"SoGDDT_code_2",x:640,y:80,content:"1"},{name:"FullName",x:180,y:390,content:"NGUYEN VAN A"},{name:"Gender",x:1378,y:392,content:"1"},{name:"DateOfBirth1",x:980,y:435,content:"1"},{name:"DateOfBirth2",x:1040,y:435,content:"1"},{name:"DateOfBirth3",x:1140,y:435,content:"1"},{name:"DateOfBirth4",x:1198,y:435,content:"1"},{name:"DateOfBirth5",x:1315,y:435,content:"1"},{name:"DateOfBirth6",x:1375,y:435,content:"1"},{name:"PlaceOfBirth",x:595,y:495,content:"TP. Ho Chi Minh"},{name:"Race",x:1285,y:495,content:"Kinh"},{name:"isForeign",x:458,y:532,content:"x"},{name:"provinceCode1",x:440,y:610,content:"1"},{name:"provinceCode2",x:485,y:610,content:"1"},{name:"districtCode1",x:575,y:610,content:"1"},{name:"districtCode2",x:622,y:610,content:"1"},{name:"communalCode1",x:718,y:610,content:"1"},{name:"communalCode2",x:764,y:610,content:"1"},{name:"CCCD1",x:1004,y:567,content:"1"},{name:"CCCD2",x:1044,y:567,content:"1"},{name:"CCCD3",x:1084,y:567,content:"1"},{name:"CCCD4",x:1124,y:567,content:"1"},{name:"CCCD5",x:1164,y:567,content:"1"},{name:"CCCD6",x:1204,y:567,content:"1"},{name:"CCCD7",x:1244,y:567,content:"1"},{name:"CCCD8",x:1284,y:567,content:"1"},{name:"CCCD9",x:1324,y:567,content:"1"},{name:"CCCD10",x:1364,y:567,content:"1"},{name:"CCCD11",x:1404,y:567,content:"1"},{name:"CCCD12",x:1444,y:567,content:"1"},{name:"Address",x:235,y:665,content:"Skylight Tower, 125D Minh Khai, Hai Ba Trung, Ha Noi"},{name:"is18MonthArea1",x:705,y:695,content:"x"},{name:"is18MonthHardCondition",x:1455,y:695,content:"x"},{name:"grade10_school",x:330,y:760,content:"THPT Yen Mo B, Yen Mac, Yen Mo, Ninh Binh"},{name:"grade10_dCode",x:1210,y:765,content:"1"},{name:"grade10_dCode",x:1270,y:765,content:"1"},{name:"grade10_sCode",x:1331,y:765,content:"1"},{name:"grade10_sCode",x:1388,y:765,content:"1"},{name:"grade10_sCode",x:1448,y:765,content:"1"},{name:"grade11_school",x:330,y:795,content:"THPT Yen Mo B, Yen Mac, Yen Mo, Ninh Binh"},{name:"grade11_dCode",x:1210,y:800,content:"1"},{name:"grade11_dCode",x:1270,y:800,content:"1"},{name:"grade11_sCode",x:1331,y:800,content:"1"},{name:"grade11_sCode",x:1388,y:800,content:"1"},{name:"grade11_sCode",x:1448,y:800,content:"1"},{name:"grade12_school",x:330,y:833,content:"THPT Yen Mo B, Yen Mac, Yen Mo, Ninh Binh"},{name:"grade12_dCode",x:1210,y:838,content:"1"},{name:"grade12_dCode",x:1270,y:838,content:"1"},{name:"grade12_sCode",x:1331,y:838,content:"1"},{name:"grade12_sCode",x:1388,y:838,content:"1"},{name:"grade12_sCode",x:1448,y:838,content:"1"},{name:"grade12_name",x:330,y:868,content:"12A1"},{name:"Phone",x:330,y:900,content:"0333 082 897"},{name:"Email",x:775,y:900,content:"nhat.bh160802@gmail.com"},{name:"Contact",x:220,y:972,content:"Nguyen Van B, 0123 345 789, Xom Thuong, Yen Tu, Yen Mo, Ninh Binh"},{name:"isTHPT",x:882,y:1050,content:"x"},{name:"isTHPT",x:662,y:1088,content:"x"},{name:"isGDTX",x:1390,y:1088,content:"x"},{name:"isFree",x:664,y:1128,content:"x"},{name:"isFreeTHPT",x:1392,y:1128,content:"x"},{name:"testCouncil",x:480,y:1165,content:"TP. Ho Chi Minh"},{name:"testCouncilCode",x:1354,y:1168,content:"1"},{name:"testCouncilCode",x:1394,y:1168,content:"1"},{name:"testLocation",x:330,y:1205,content:"TP. Ho Chi Minh"},{name:"testLocationCode",x:1355,y:1208,content:"1"},{name:"testLocationCode",x:1395,y:1208,content:"1"},{name:"testLocationCode",x:1436,y:1208,content:"1"},{name:"testMath",x:332,y:1379,content:"x"},{name:"testLiterature",x:490,y:1379,content:"x"},{name:"testForeignLang",x:688,y:1382,content:"N1"},{name:"testKHTN",x:870,y:1379,content:"x"},{name:"testKHXH",x:1035,y:1379,content:"x"},{name:"testFreePhysics",x:332,y:1450,content:"x"},{name:"testFreeChemistry",x:510,y:1450,content:"x"},{name:"testFreeBiology",x:708,y:1450,content:"x"},{name:"testFreeHistory",x:865,y:1450,content:"x"},{name:"testFreeGeography",x:1030,y:1450,content:"x"},{name:"testFreeCivilEdu",x:1215,y:1450,content:"x"},{name:"forLangCertificate",x:1245,y:1563,content:"IELTS"},{name:"forLangCertificateGrade",x:910,y:1600,content:"8.0"},{name:"gradeMath",x:360,y:1727,content:"8.0"},{name:"gradeLiterature",x:630,y:1727,content:"8.0"},{name:"gradeHistory",x:897,y:1727,content:"8.0"},{name:"gradeGeography",x:1165,y:1727,content:"8.0"},{name:"gradeCivilEdu",x:1395,y:1727,content:"8.0"},{name:"gradePhysics",x:360,y:1767,content:"8.0"},{name:"gradeChemistry",x:630,y:1767,content:"8.0"},{name:"gradeBiology",x:897,y:1767,content:"8.0"},{name:"gradeForLang",x:1165,y:1767,content:"8.0"}]},{name:"page2",instructions:[{name:"Circle",x:1e3,y:147,content:"$smallCircle"},{name:"Circle",x:1042,y:147,content:"$smallCircle"},{name:"Circle",x:1083,y:147,content:"$smallCircle"},{name:"Circle",x:1124,y:147,content:"$smallCircle"},{name:"Circle",x:1165,y:147,content:"$smallCircle"},{name:"Circle",x:1206,y:147,content:"$smallCircle"},{name:"Circle",x:1247,y:147,content:"$smallCircle"},{name:"priority",x:1415,y:160,content:"1"},{name:"priority",x:1455,y:160,content:"1"},{name:"Ellipse",x:1085,y:215,content:"$smallEllipse"},{name:"Ellipse",x:1180,y:215,content:"$bigEllipse"},{name:"Ellipse",x:1280,y:215,content:"$smallEllipse"},{name:"Ellipse",x:1355,y:215,content:"$smallEllipse"},{name:"area",x:1422,y:225,content:"2NT"},{name:"year",x:1335,y:300,content:"2"},{name:"year",x:1375,y:300,content:"2"},{name:"year",x:1415,y:300,content:"2"},{name:"year",x:1455,y:300,content:"2"},{name:"TC",x:1105,y:340,content:"x"},{name:"CD",x:1270,y:340,content:"x"},{name:"DH",x:1450,y:340,content:"x"},{name:"amount",x:690,y:520,content:"20"},{name:"uCode",x:310,y:715,content:""},{name:"cCode",x:530,y:715,content:""},{name:"cName",x:780,y:715,content:""},{name:"group",x:1420,y:715,content:""},{name:"uCode",x:310,y:756.8,content:""},{name:"cCode",x:530,y:756.8,content:""},{name:"cName",x:780,y:756.8,content:""},{name:"group",x:1420,y:756.8,content:""},{name:"uCode",x:310,y:798.6,content:""},{name:"cCode",x:530,y:798.6,content:""},{name:"cName",x:780,y:798.6,content:""},{name:"group",x:1420,y:798.6,content:""},{name:"uCode",x:310,y:840.4,content:""},{name:"cCode",x:530,y:840.4,content:""},{name:"cName",x:780,y:840.4,content:""},{name:"group",x:1420,y:840.4,content:""},{name:"uCode",x:310,y:882.2,content:""},{name:"cCode",x:530,y:882.2,content:""},{name:"cName",x:780,y:882.2,content:""},{name:"group",x:1420,y:882.2,content:""},{name:"uCode",x:310,y:924,content:""},{name:"cCode",x:530,y:924,content:""},{name:"cName",x:780,y:924,content:""},{name:"group",x:1420,y:924,content:""},{name:"uCode",x:310,y:965.8,content:""},{name:"cCode",x:530,y:965.8,content:""},{name:"cName",x:780,y:965.8,content:""},{name:"group",x:1420,y:965.8,content:""},{name:"uCode",x:310,y:715+41.8*7,content:""},{name:"cCode",x:530,y:715+41.8*7,content:""},{name:"cName",x:780,y:715+41.8*7,content:""},{name:"group",x:1420,y:715+41.8*7,content:""},{name:"uCode",x:310,y:1049.4,content:""},{name:"cCode",x:530,y:1049.4,content:""},{name:"cName",x:780,y:1049.4,content:""},{name:"group",x:1420,y:1049.4,content:""},{name:"No.",x:183,y:1085.2,content:""},{name:"uCode",x:310,y:1091.2,content:""},{name:"cCode",x:530,y:1091.2,content:""},{name:"cName",x:780,y:1091.2,content:""},{name:"group",x:1420,y:1091.2,content:""},{name:"No.",x:183,y:1127,content:""},{name:"uCode",x:310,y:1133,content:""},{name:"cCode",x:530,y:1133,content:""},{name:"cName",x:780,y:1133,content:""},{name:"group",x:1420,y:1133,content:""},{name:"No.",x:183,y:1168.8,content:""},{name:"uCode",x:310,y:1174.8,content:""},{name:"cCode",x:530,y:1174.8,content:""},{name:"cName",x:780,y:1174.8,content:""},{name:"group",x:1420,y:1174.8,content:""},{name:"No.",x:183,y:1210.6,content:""},{name:"uCode",x:310,y:1216.6,content:""},{name:"cCode",x:530,y:1216.6,content:""},{name:"cName",x:780,y:1216.6,content:""},{name:"group",x:1420,y:1216.6,content:""},{name:"No.",x:183,y:1252.4,content:""},{name:"uCode",x:310,y:1258.4,content:""},{name:"cCode",x:530,y:1258.4,content:""},{name:"cName",x:780,y:1258.4,content:""},{name:"group",x:1420,y:1258.4,content:""},{name:"No.",x:183,y:709+41.8*14,content:""},{name:"uCode",x:310,y:715+41.8*14,content:""},{name:"cCode",x:530,y:715+41.8*14,content:""},{name:"cName",x:780,y:715+41.8*14,content:""},{name:"group",x:1420,y:715+41.8*14,content:""},{name:"No.",x:183,y:1336,content:""},{name:"uCode",x:310,y:1342,content:""},{name:"cCode",x:530,y:1342,content:""},{name:"cName",x:780,y:1342,content:""},{name:"group",x:1420,y:1342,content:""},{name:"No.",x:183,y:1377.8,content:""},{name:"uCode",x:310,y:1383.8,content:""},{name:"cCode",x:530,y:1383.8,content:""},{name:"cName",x:780,y:1383.8,content:""},{name:"group",x:1420,y:1383.8,content:""},{name:"No.",x:183,y:1419.6,content:""},{name:"uCode",x:310,y:1425.6,content:""},{name:"cCode",x:530,y:1425.6,content:""},{name:"cName",x:780,y:1425.6,content:""},{name:"group",x:1420,y:1425.6,content:""},{name:"No.",x:183,y:1461.4,content:""},{name:"uCode",x:310,y:1467.4,content:""},{name:"cCode",x:530,y:1467.4,content:""},{name:"cName",x:780,y:1467.4,content:""},{name:"group",x:1420,y:1467.4,content:""},{name:"No.",x:183,y:709+41.8*19,content:""},{name:"uCode",x:310,y:715+41.8*19,content:""},{name:"cCode",x:530,y:715+41.8*19,content:""},{name:"cName",x:780,y:715+41.8*19,content:""},{name:"group",x:1420,y:715+41.8*19,content:""}]},{name:"page3",instructions:[{name:"SoGDDT",x:280,y:75,content:"TP. HỒ CHÍ MINH"},{name:"SoGDDT_code_1",x:660,y:80,content:"1"},{name:"SoGDDT_code_2",x:700,y:80,content:"1"},{name:"FullName",x:180,y:463,content:"NGUYEN VAN A"},{name:"Gender",x:1378,y:467,content:"1"},{name:"DateOfBirth1",x:980,y:515,content:"1"},{name:"DateOfBirth2",x:1040,y:515,content:"1"},{name:"DateOfBirth3",x:1140,y:515,content:"1"},{name:"DateOfBirth4",x:1198,y:515,content:"1"},{name:"DateOfBirth5",x:1315,y:515,content:"1"},{name:"DateOfBirth6",x:1375,y:515,content:"1"},{name:"PlaceOfBirth",x:595,y:588,content:"TP. Ho Chi Minh"},{name:"Race",x:1285,y:588,content:"Kinh"},{name:"isForeign",x:486,y:627,content:"x"},{name:"provinceCode1",x:440,y:715,content:"1"},{name:"provinceCode2",x:485,y:715,content:"1"},{name:"districtCode1",x:575,y:715,content:"1"},{name:"districtCode2",x:622,y:715,content:"1"},{name:"communalCode1",x:718,y:715,content:"1"},{name:"communalCode2",x:764,y:715,content:"1"},{name:"CCCD1",x:1004,y:667,content:"1"},{name:"CCCD2",x:1044,y:667,content:"1"},{name:"CCCD3",x:1084,y:667,content:"1"},{name:"CCCD4",x:1124,y:667,content:"1"},{name:"CCCD5",x:1164,y:667,content:"1"},{name:"CCCD6",x:1204,y:667,content:"1"},{name:"CCCD7",x:1244,y:667,content:"1"},{name:"CCCD8",x:1284,y:667,content:"1"},{name:"CCCD9",x:1324,y:667,content:"1"},{name:"CCCD10",x:1364,y:667,content:"1"},{name:"CCCD11",x:1404,y:667,content:"1"},{name:"CCCD12",x:1444,y:667,content:"1"},{name:"Address",x:235,y:805,content:"Skylight Tower, 125D Minh Khai, Hai Ba Trung, Ha Noi"},{name:"is18MonthArea1",x:705,y:855,content:"x"},{name:"is18MonthHardCondition",x:1455,y:855,content:"x"},{name:"grade10_school",x:330,y:945,content:"THPT Yen Mo B, Yen Mac, Yen Mo, Ninh Binh"},{name:"grade10_dCode",x:1210,y:950,content:"1"},{name:"grade10_dCode",x:1270,y:950,content:"1"},{name:"grade10_sCode",x:1331,y:950,content:"1"},{name:"grade10_sCode",x:1388,y:950,content:"1"},{name:"grade10_sCode",x:1448,y:950,content:"1"},{name:"grade11_school",x:330,y:987,content:"THPT Yen Mo B, Yen Mac, Yen Mo, Ninh Binh"},{name:"grade11_dCode",x:1210,y:992,content:"1"},{name:"grade11_dCode",x:1270,y:992,content:"1"},{name:"grade11_sCode",x:1331,y:992,content:"1"},{name:"grade11_sCode",x:1388,y:992,content:"1"},{name:"grade11_sCode",x:1448,y:992,content:"1"},{name:"grade12_school",x:330,y:1028,content:"THPT Yen Mo B, Yen Mac, Yen Mo, Ninh Binh"},{name:"grade12_dCode",x:1210,y:1033,content:"1"},{name:"grade12_dCode",x:1270,y:1033,content:"1"},{name:"grade12_sCode",x:1331,y:1033,content:"1"},{name:"grade12_sCode",x:1388,y:1033,content:"1"},{name:"grade12_sCode",x:1448,y:1033,content:"1"},{name:"grade12_name",x:330,y:1068,content:"12A1"},{name:"Phone",x:330,y:1110,content:"0333 082 897"},{name:"Email",x:775,y:1110,content:"nhat.bh160802@gmail.com"},{name:"Contact",x:220,y:1202,content:"Nguyen Van B, 0123 345 789, Xom Thuong, Yen Tu, Yen Mo, Ninh Binh"},{name:"isTHPT",x:887,y:1312,content:"x"},{name:"isTHPT",x:667,y:1358,content:"x"},{name:"isGDTX",x:1392,y:1358,content:"x"},{name:"isFree",x:664,y:1403,content:"x"},{name:"isFreeTHPT",x:1392,y:1403,content:"x"},{name:"testCouncil",x:480,y:1445,content:"TP. Ho Chi Minh"},{name:"testCouncilCode",x:1394,y:1448,content:"1"},{name:"testCouncilCode",x:1434,y:1448,content:"1"},{name:"testLocation",x:330,y:1490,content:"TP. Ho Chi Minh"},{name:"testLocationCode",x:1350,y:1493,content:"1"},{name:"testLocationCode",x:1390,y:1493,content:"1"},{name:"testLocationCode",x:1431,y:1493,content:"1"},{name:"testMath",x:332,y:1694,content:"x"},{name:"testLiterature",x:495,y:1694,content:"x"},{name:"testForeignLang",x:698,y:1697,content:"N1"},{name:"testKHTN",x:885,y:1694,content:"x"},{name:"testKHXH",x:1055,y:1694,content:"x"},{name:"testFreePhysics",x:332,y:1773,content:"x"},{name:"testFreeChemistry",x:520,y:1773,content:"x"},{name:"testFreeBiology",x:723,y:1773,content:"x"},{name:"testFreeHistory",x:885,y:1773,content:"x"},{name:"testFreeGeography",x:1055,y:1773,content:"x"},{name:"testFreeCivilEdu",x:1245,y:1773,content:"x"},{name:"forLangCertificate",x:1245,y:1900,content:"IELTS"},{name:"forLangCertificateGrade",x:900,y:1945,content:"8.0"},{name:"gradeMath",x:360,y:2052,content:"8.0"},{name:"gradeLiterature",x:630,y:2052,content:"8.0"},{name:"gradeHistory",x:897,y:2052,content:"8.0"},{name:"gradeGeography",x:1165,y:2052,content:"8.0"},{name:"gradeCivilEdu",x:1395,y:2052,content:"8.0"},{name:"gradePhysics",x:360,y:2097,content:"8.0"},{name:"gradeChemistry",x:630,y:2097,content:"8.0"},{name:"gradeBiology",x:897,y:2097,content:"8.0"},{name:"gradeForLang",x:1165,y:2097,content:"8.0"}]},{name:"page4",instructions:[{name:"Circle",x:1e3,y:157,content:"$smallCircle"},{name:"Circle",x:1042,y:157,content:"$smallCircle"},{name:"Circle",x:1083,y:157,content:"$smallCircle"},{name:"Circle",x:1124,y:157,content:"$smallCircle"},{name:"Circle",x:1165,y:157,content:"$smallCircle"},{name:"Circle",x:1206,y:157,content:"$smallCircle"},{name:"Circle",x:1247,y:157,content:"$smallCircle"},{name:"priority",x:1415,y:170,content:"1"},{name:"priority",x:1455,y:170,content:"1"},{name:"Ellipse",x:1085,y:237,content:"$smallEllipse"},{name:"Ellipse",x:1180,y:237,content:"$bigEllipse"},{name:"Ellipse",x:1280,y:237,content:"$smallEllipse"},{name:"Ellipse",x:1355,y:237,content:"$smallEllipse"},{name:"area",x:1422,y:247,content:"2NT"},{name:"year",x:1335,y:328,content:"2"},{name:"year",x:1375,y:328,content:"2"},{name:"year",x:1415,y:328,content:"2"},{name:"year",x:1455,y:328,content:"2"},{name:"TC",x:1105,y:382,content:"x"},{name:"CD",x:1270,y:382,content:"x"},{name:"DH",x:1450,y:382,content:"x"},{name:"amount",x:690,y:571,content:"20"},{name:"uCode",x:310,y:760,content:""},{name:"cCode",x:530,y:760,content:""},{name:"cName",x:780,y:760,content:""},{name:"group",x:1420,y:760,content:""},{name:"uCode",x:310,y:801.8,content:""},{name:"cCode",x:530,y:801.8,content:""},{name:"cName",x:780,y:801.8,content:""},{name:"group",x:1420,y:801.8,content:""},{name:"uCode",x:310,y:843.6,content:""},{name:"cCode",x:530,y:843.6,content:""},{name:"cName",x:780,y:843.6,content:""},{name:"group",x:1420,y:843.6,content:""},{name:"uCode",x:310,y:885.4,content:""},{name:"cCode",x:530,y:885.4,content:""},{name:"cName",x:780,y:885.4,content:""},{name:"group",x:1420,y:885.4,content:""},{name:"uCode",x:310,y:927.2,content:""},{name:"cCode",x:530,y:927.2,content:""},{name:"cName",x:780,y:927.2,content:""},{name:"group",x:1420,y:927.2,content:""},{name:"uCode",x:310,y:969,content:""},{name:"cCode",x:530,y:969,content:""},{name:"cName",x:780,y:969,content:""},{name:"group",x:1420,y:969,content:""},{name:"uCode",x:310,y:1010.8,content:""},{name:"cCode",x:530,y:1010.8,content:""},{name:"cName",x:780,y:1010.8,content:""},{name:"group",x:1420,y:1010.8,content:""},{name:"uCode",x:310,y:1052.6,content:""},{name:"cCode",x:530,y:1052.6,content:""},{name:"cName",x:780,y:1052.6,content:""},{name:"group",x:1420,y:1052.6,content:""},{name:"uCode",x:310,y:1094.4,content:""},{name:"cCode",x:530,y:1094.4,content:""},{name:"cName",x:780,y:1094.4,content:""},{name:"group",x:1420,y:1094.4,content:""},{name:"No.",x:183,y:1130.2,content:""},{name:"uCode",x:310,y:1136.2,content:""},{name:"cCode",x:530,y:1136.2,content:""},{name:"cName",x:780,y:1136.2,content:""},{name:"group",x:1420,y:1136.2,content:""},{name:"No.",x:183,y:1172,content:""},{name:"uCode",x:310,y:1178,content:""},{name:"cCode",x:530,y:1178,content:""},{name:"cName",x:780,y:1178,content:""},{name:"group",x:1420,y:1178,content:""},{name:"No.",x:183,y:1213.8,content:""},{name:"uCode",x:310,y:1219.8,content:""},{name:"cCode",x:530,y:1219.8,content:""},{name:"cName",x:780,y:1219.8,content:""},{name:"group",x:1420,y:1219.8,content:""},{name:"No.",x:183,y:1255.6,content:""},{name:"uCode",x:310,y:1261.6,content:""},{name:"cCode",x:530,y:1261.6,content:""},{name:"cName",x:780,y:1261.6,content:""},{name:"group",x:1420,y:1261.6,content:""},{name:"No.",x:183,y:1297.4,content:""},{name:"uCode",x:310,y:1303.4,content:""},{name:"cCode",x:530,y:1303.4,content:""},{name:"cName",x:780,y:1303.4,content:""},{name:"group",x:1420,y:1303.4,content:""},{name:"No.",x:183,y:754+41.8*14,content:""},{name:"uCode",x:310,y:760+41.8*14,content:""},{name:"cCode",x:530,y:760+41.8*14,content:""},{name:"cName",x:780,y:760+41.8*14,content:""},{name:"group",x:1420,y:760+41.8*14,content:""},{name:"No.",x:183,y:1381,content:""},{name:"uCode",x:310,y:1387,content:""},{name:"cCode",x:530,y:1387,content:""},{name:"cName",x:780,y:1387,content:""},{name:"group",x:1420,y:1387,content:""},{name:"No.",x:183,y:1422.8,content:""},{name:"uCode",x:310,y:1428.8,content:""},{name:"cCode",x:530,y:1428.8,content:""},{name:"cName",x:780,y:1428.8,content:""},{name:"group",x:1420,y:1428.8,content:""},{name:"No.",x:183,y:1464.6,content:""},{name:"uCode",x:310,y:1470.6,content:""},{name:"cCode",x:530,y:1470.6,content:""},{name:"cName",x:780,y:1470.6,content:""},{name:"group",x:1420,y:1470.6,content:""},{name:"No.",x:183,y:1506.4,content:""},{name:"uCode",x:310,y:1512.4,content:""},{name:"cCode",x:530,y:1512.4,content:""},{name:"cName",x:780,y:1512.4,content:""},{name:"group",x:1420,y:1512.4,content:""},{name:"No.",x:183,y:754+41.8*19,content:""},{name:"uCode",x:310,y:760+41.8*19,content:""},{name:"cCode",x:530,y:760+41.8*19,content:""},{name:"cName",x:780,y:760+41.8*19,content:""},{name:"group",x:1420,y:760+41.8*19,content:""}]},{name:"page5",instructions:[{name:"SoGDDT",x:280,y:95,content:"TP. HỒ CHÍ MINH"},{name:"SoGDDT_code_1",x:645,y:100,content:"1"},{name:"SoGDDT_code_2",x:685,y:100,content:"1"},{name:"FullName",x:180,y:463,content:"NGUYEN VAN A"},{name:"Gender",x:1378,y:467,content:"1"},{name:"DateOfBirth1",x:980,y:518,content:"1"},{name:"DateOfBirth2",x:1040,y:518,content:"1"},{name:"DateOfBirth3",x:1140,y:518,content:"1"},{name:"DateOfBirth4",x:1198,y:518,content:"1"},{name:"DateOfBirth5",x:1315,y:518,content:"1"},{name:"DateOfBirth6",x:1375,y:518,content:"1"},{name:"PlaceOfBirth",x:595,y:588,content:"TP. Ho Chi Minh"},{name:"Race",x:1285,y:588,content:"Kinh"},{name:"isForeign",x:486,y:627,content:"x"},{name:"provinceCode1",x:440,y:725,content:"1"},{name:"provinceCode2",x:485,y:725,content:"1"},{name:"districtCode1",x:575,y:725,content:"1"},{name:"districtCode2",x:622,y:725,content:"1"},{name:"communalCode1",x:718,y:725,content:"1"},{name:"communalCode2",x:764,y:725,content:"1"},{name:"CCCD1",x:1004,y:667,content:"1"},{name:"CCCD2",x:1044,y:667,content:"1"},{name:"CCCD3",x:1084,y:667,content:"1"},{name:"CCCD4",x:1124,y:667,content:"1"},{name:"CCCD5",x:1164,y:667,content:"1"},{name:"CCCD6",x:1204,y:667,content:"1"},{name:"CCCD7",x:1244,y:667,content:"1"},{name:"CCCD8",x:1284,y:667,content:"1"},{name:"CCCD9",x:1324,y:667,content:"1"},{name:"CCCD10",x:1364,y:667,content:"1"},{name:"CCCD11",x:1404,y:667,content:"1"},{name:"CCCD12",x:1444,y:667,content:"1"},{name:"Address",x:235,y:805,content:"Skylight Tower, 125D Minh Khai, Hai Ba Trung, Ha Noi"},{name:"is18MonthArea1",x:705,y:855,content:"x"},{name:"is18MonthHardCondition",x:1455,y:855,content:"x"},{name:"grade10_school",x:330,y:934,content:"THPT Yen Mo B, Yen Mac, Yen Mo, Ninh Binh"},{name:"grade10_dCode",x:1210,y:939,content:"1"},{name:"grade10_dCode",x:1270,y:939,content:"1"},{name:"grade10_sCode",x:1331,y:939,content:"1"},{name:"grade10_sCode",x:1388,y:939,content:"1"},{name:"grade10_sCode",x:1448,y:939,content:"1"},{name:"grade11_school",x:330,y:980,content:"THPT Yen Mo B, Yen Mac, Yen Mo, Ninh Binh"},{name:"grade11_dCode",x:1210,y:985,content:"1"},{name:"grade11_dCode",x:1270,y:985,content:"1"},{name:"grade11_sCode",x:1331,y:985,content:"1"},{name:"grade11_sCode",x:1388,y:985,content:"1"},{name:"grade11_sCode",x:1448,y:985,content:"1"},{name:"grade12_school",x:330,y:1025,content:"THPT Yen Mo B, Yen Mac, Yen Mo, Ninh Binh"},{name:"grade12_dCode",x:1210,y:1030,content:"1"},{name:"grade12_dCode",x:1270,y:1030,content:"1"},{name:"grade12_sCode",x:1331,y:1030,content:"1"},{name:"grade12_sCode",x:1388,y:1030,content:"1"},{name:"grade12_sCode",x:1448,y:1030,content:"1"},{name:"grade12_name",x:330,y:1068,content:"12A1"},{name:"Phone",x:330,y:1110,content:"0333 082 897"},{name:"Email",x:775,y:1110,content:"nhat.bh160802@gmail.com"},{name:"Contact",x:220,y:1202,content:"Nguyen Van B, 0123 345 789, Xom Thuong, Yen Tu, Yen Mo, Ninh Binh"},{name:"isTHPT",x:887,y:1308,content:"x"},{name:"isTHPT",x:667,y:1348,content:"x"},{name:"isGDTX",x:1392,y:1348,content:"x"},{name:"isFree",x:664,y:1393,content:"x"},{name:"isFreeTHPT",x:1392,y:1393,content:"x"},{name:"testCouncil",x:480,y:1430,content:"TP. Ho Chi Minh"},{name:"testCouncilCode",x:1354,y:1433,content:"1"},{name:"testCouncilCode",x:1394,y:1433,content:"1"},{name:"testLocation",x:330,y:1478,content:"TP. Ho Chi Minh"},{name:"testLocationCode",x:1355,y:1481,content:"1"},{name:"testLocationCode",x:1395,y:1481,content:"1"},{name:"testLocationCode",x:1436,y:1481,content:"1"},{name:"testMath",x:332,y:1669,content:"x"},{name:"testLiterature",x:495,y:1669,content:"x"},{name:"testForeignLang",x:698,y:1672,content:"N1"},{name:"testKHTN",x:885,y:1669,content:"x"},{name:"testKHXH",x:1055,y:1669,content:"x"},{name:"testFreePhysics",x:332,y:1750,content:"x"},{name:"testFreeChemistry",x:520,y:1750,content:"x"},{name:"testFreeBiology",x:723,y:1750,content:"x"},{name:"testFreeHistory",x:885,y:1750,content:"x"},{name:"testFreeGeography",x:1055,y:1750,content:"x"},{name:"testFreeCivilEdu",x:1245,y:1750,content:"x"},{name:"forLangCertificate",x:1245,y:1853,content:"IELTS"},{name:"forLangCertificateGrade",x:900,y:1900,content:"8.0"},{name:"gradeMath",x:360,y:2027,content:"8.0"},{name:"gradeLiterature",x:630,y:2027,content:"8.0"},{name:"gradeHistory",x:897,y:2027,content:"8.0"},{name:"gradeGeography",x:1165,y:2027,content:"8.0"},{name:"gradeCivilEdu",x:1395,y:2027,content:"8.0"},{name:"gradePhysics",x:360,y:2072,content:"8.0"},{name:"gradeChemistry",x:630,y:2072,content:"8.0"},{name:"gradeBiology",x:897,y:2072,content:"8.0"},{name:"gradeForLang",x:1165,y:2072,content:"8.0"}]},{name:"page6",instructions:[{name:"Circle",x:1e3,y:193,content:"$smallCircle"},{name:"Circle",x:1042,y:193,content:"$smallCircle"},{name:"Circle",x:1083,y:193,content:"$smallCircle"},{name:"Circle",x:1124,y:193,content:"$smallCircle"},{name:"Circle",x:1165,y:193,content:"$smallCircle"},{name:"Circle",x:1206,y:193,content:"$smallCircle"},{name:"Circle",x:1247,y:193,content:"$smallCircle"},{name:"priority",x:1415,y:206,content:"1"},{name:"priority",x:1455,y:206,content:"1"},{name:"Ellipse",x:1085,y:273,content:"$smallEllipse"},{name:"Ellipse",x:1180,y:273,content:"$bigEllipse"},{name:"Ellipse",x:1280,y:273,content:"$smallEllipse"},{name:"Ellipse",x:1355,y:273,content:"$smallEllipse"},{name:"area",x:1422,y:283,content:"2NT"},{name:"year",x:1325,y:364,content:"2"},{name:"year",x:1367,y:364,content:"2"},{name:"year",x:1409,y:364,content:"2"},{name:"year",x:1451,y:364,content:"2"},{name:"TC",x:1115,y:406,content:"x"},{name:"CD",x:1275,y:406,content:"x"},{name:"DH",x:1450,y:406,content:"x"},{name:"amount",x:690,y:591,content:"20"},{name:"uCode",x:310,y:796,content:""},{name:"cCode",x:530,y:796,content:""},{name:"cName",x:780,y:796,content:""},{name:"group",x:1420,y:796,content:""},{name:"uCode",x:310,y:837.8,content:""},{name:"cCode",x:530,y:837.8,content:""},{name:"cName",x:780,y:837.8,content:""},{name:"group",x:1420,y:837.8,content:""},{name:"uCode",x:310,y:879.6,content:""},{name:"cCode",x:530,y:879.6,content:""},{name:"cName",x:780,y:879.6,content:""},{name:"group",x:1420,y:879.6,content:""},{name:"uCode",x:310,y:921.4,content:""},{name:"cCode",x:530,y:921.4,content:""},{name:"cName",x:780,y:921.4,content:""},{name:"group",x:1420,y:921.4,content:""},{name:"uCode",x:310,y:963.2,content:""},{name:"cCode",x:530,y:963.2,content:""},{name:"cName",x:780,y:963.2,content:""},{name:"group",x:1420,y:963.2,content:""},{name:"uCode",x:310,y:1005,content:""},{name:"cCode",x:530,y:1005,content:""},{name:"cName",x:780,y:1005,content:""},{name:"group",x:1420,y:1005,content:""},{name:"uCode",x:310,y:1046.8,content:""},{name:"cCode",x:530,y:1046.8,content:""},{name:"cName",x:780,y:1046.8,content:""},{name:"group",x:1420,y:1046.8,content:""},{name:"uCode",x:310,y:1088.6,content:""},{name:"cCode",x:530,y:1088.6,content:""},{name:"cName",x:780,y:1088.6,content:""},{name:"group",x:1420,y:1088.6,content:""},{name:"uCode",x:310,y:1130.4,content:""},{name:"cCode",x:530,y:1130.4,content:""},{name:"cName",x:780,y:1130.4,content:""},{name:"group",x:1420,y:1130.4,content:""},{name:"No.",x:183,y:1166.2,content:""},{name:"uCode",x:310,y:1172.2,content:""},{name:"cCode",x:530,y:1172.2,content:""},{name:"cName",x:780,y:1172.2,content:""},{name:"group",x:1420,y:1172.2,content:""},{name:"No.",x:183,y:1208,content:""},{name:"uCode",x:310,y:1214,content:""},{name:"cCode",x:530,y:1214,content:""},{name:"cName",x:780,y:1214,content:""},{name:"group",x:1420,y:1214,content:""},{name:"No.",x:183,y:1249.8,content:""},{name:"uCode",x:310,y:1255.8,content:""},{name:"cCode",x:530,y:1255.8,content:""},{name:"cName",x:780,y:1255.8,content:""},{name:"group",x:1420,y:1255.8,content:""},{name:"No.",x:183,y:1291.6,content:""},{name:"uCode",x:310,y:1297.6,content:""},{name:"cCode",x:530,y:1297.6,content:""},{name:"cName",x:780,y:1297.6,content:""},{name:"group",x:1420,y:1297.6,content:""},{name:"No.",x:183,y:1333.4,content:""},{name:"uCode",x:310,y:1339.4,content:""},{name:"cCode",x:530,y:1339.4,content:""},{name:"cName",x:780,y:1339.4,content:""},{name:"group",x:1420,y:1339.4,content:""},{name:"No.",x:183,y:790+41.8*14,content:""},{name:"uCode",x:310,y:796+41.8*14,content:""},{name:"cCode",x:530,y:796+41.8*14,content:""},{name:"cName",x:780,y:796+41.8*14,content:""},{name:"group",x:1420,y:796+41.8*14,content:""},{name:"No.",x:183,y:1417,content:""},{name:"uCode",x:310,y:1423,content:""},{name:"cCode",x:530,y:1423,content:""},{name:"cName",x:780,y:1423,content:""},{name:"group",x:1420,y:1423,content:""},{name:"No.",x:183,y:1458.8,content:""},{name:"uCode",x:310,y:1464.8,content:""},{name:"cCode",x:530,y:1464.8,content:""},{name:"cName",x:780,y:1464.8,content:""},{name:"group",x:1420,y:1464.8,content:""},{name:"No.",x:183,y:1500.6,content:""},{name:"uCode",x:310,y:1506.6,content:""},{name:"cCode",x:530,y:1506.6,content:""},{name:"cName",x:780,y:1506.6,content:""},{name:"group",x:1420,y:1506.6,content:""},{name:"No.",x:183,y:1542.4,content:""},{name:"uCode",x:310,y:1548.4,content:""},{name:"cCode",x:530,y:1548.4,content:""},{name:"cName",x:780,y:1548.4,content:""},{name:"group",x:1420,y:1548.4,content:""},{name:"No.",x:183,y:790+41.8*19,content:""},{name:"uCode",x:310,y:796+41.8*19,content:""},{name:"cCode",x:530,y:796+41.8*19,content:""},{name:"cName",x:780,y:796+41.8*19,content:""},{name:"group",x:1420,y:796+41.8*19,content:""}]}];
  }
  //Get non existence data without getting an exception
  safeGet(data:any,result:any):string {
    if (data === null||data === undefined) {
      return ''
    } else {
      return result;
    }
  }
  addTick(isTrue:boolean):string {
    if (isTrue) {
      return "x";
    } else {
      return "";
    }
  }
  condition(istrue:boolean,content:string) {
    if (istrue) {
      return content;
    } else {
      return '';
    }
  }
  generateWishData(wishes:Wish[]):any[] {
    var result:any[] = [];
    for (let i = 0; i< wishes.length; i++) {
      if (i < 9) {
        result.push(wishes[i].universityCode)
        result.push(wishes[i].courseCode)
        result.push(wishes[i].courseName)
        result.push(wishes[i].examiningGroup)
      } else {
        result.push((i+1).toString());
        result.push(wishes[i].universityCode)
        result.push(wishes[i].courseCode)
        result.push(wishes[i].courseName)
        result.push(wishes[i].examiningGroup)
      }
    }
    return result;
  }
  getInstruction(basic:BasicProfile,exam:ExamProfile,wishes:Wish[]) {
    var contentArray1 = [
      basic.DOEduName
      , basic.DOEduCode.charAt(0)
      , basic.DOEduCode.charAt(1)
      , basic.fullname
      , basic.gender
      , basic.birthDate.charAt(0)
      , basic.birthDate.charAt(1)
      , basic.birthDate.charAt(2)
      , basic.birthDate.charAt(3)
      , basic.birthDate.charAt(4)
      , basic.birthDate.charAt(5)
      , basic.birthPlace
      , basic.race
      , this.addTick(basic.isForeign)
      , basic.settlementCode.charAt(0)
      , basic.settlementCode.charAt(1)
      , basic.settlementCode.charAt(2)
      , basic.settlementCode.charAt(3)
      , basic.settlementCode.charAt(4)
      , basic.settlementCode.charAt(5)
      , basic.socialSecurity.charAt(0)
      , basic.socialSecurity.charAt(1)
      , basic.socialSecurity.charAt(2)
      , basic.socialSecurity.charAt(3)
      , basic.socialSecurity.charAt(4)
      , basic.socialSecurity.charAt(5)
      , basic.socialSecurity.charAt(6)
      , basic.socialSecurity.charAt(7)
      , basic.socialSecurity.charAt(8)
      , basic.socialSecurity.charAt(9)
      , basic.socialSecurity.charAt(10)
      , basic.socialSecurity.charAt(11)
      , basic.settlementAddress
      , this.addTick(basic.is18MArea1)
      , this.addTick(basic.is18MSpecialArea)
      , basic.highschool.grade10.address
      , basic.highschool.grade10.provinceCode.charAt(0)
      , basic.highschool.grade10.provinceCode.charAt(1)
      , basic.highschool.grade10.schoolCode.charAt(0)
      , basic.highschool.grade10.schoolCode.charAt(1)
      , basic.highschool.grade10.schoolCode.charAt(2)
      , basic.highschool.grade11.address
      , basic.highschool.grade11.provinceCode.charAt(0)
      , basic.highschool.grade11.provinceCode.charAt(1)
      , basic.highschool.grade11.schoolCode.charAt(0)
      , basic.highschool.grade11.schoolCode.charAt(1)
      , basic.highschool.grade11.schoolCode.charAt(2)
      , basic.highschool.grade12.address
      , basic.highschool.grade12.provinceCode.charAt(0)
      , basic.highschool.grade12.provinceCode.charAt(1)
      , basic.highschool.grade12.schoolCode.charAt(0)
      , basic.highschool.grade12.schoolCode.charAt(1)
      , basic.highschool.grade12.schoolCode.charAt(2)
      , basic.highschool.gradeName
      , basic.phone
      , basic.email
      , basic.contact
      , this.addTick(exam.isForUniAdmission)
      , this.addTick(exam.isHighSchool)
      , this.addTick(exam.isTrainCamp)
      , this.addTick(exam.isFreeNoHighSchool)
      , this.addTick(exam.isFreeHighSchool)
      , exam.councilName
      , exam.councilCode.charAt(0)
      , exam.councilCode.charAt(1)
      , exam.examLocationAddress
      , exam.examLocationCode.charAt(0)
      , exam.examLocationCode.charAt(1)
      , exam.examLocationCode.charAt(2)
      , this.addTick(exam.tests.math)
      , this.addTick(exam.tests.literature)
      , exam.tests.forLang
      , this.addTick(!exam.tests.isSocialScience)
      , this.addTick(exam.tests.isSocialScience)
      , this.addTick(exam.testsFree.physics)
      , this.addTick(exam.testsFree.chemistry)
      , this.addTick(exam.testsFree.biology)
      , this.addTick(exam.testsFree.history)
      , this.addTick(exam.testsFree.geography)
      , this.addTick(exam.testsFree.civilEdu)
      , exam.forLangCertificate
      , exam.forLangGrades
      , exam.retained.math
      , exam.retained.literature
      , exam.retained.history
      , exam.retained.geography
      , exam.retained.civilEdu
      , exam.retained.physics
      , exam.retained.chemistry
      , exam.retained.biology
      , exam.retained.forLang
    ]
    var contentArray2 = [
       this.condition(exam.priorityTarget === 1,"$smallCircle") 
      , this.condition(exam.priorityTarget === 2,"$smallCircle") 
      , this.condition(exam.priorityTarget === 3,"$smallCircle") 
      , this.condition(exam.priorityTarget === 4,"$smallCircle") 
      , this.condition(exam.priorityTarget === 5,"$smallCircle") 
      , this.condition(exam.priorityTarget === 6,"$smallCircle") 
      , this.condition(exam.priorityTarget === 7,"$smallCircle") 
      , this.condition(exam.priorityTarget !== 0,"0") 
      , this.condition(exam.priorityTarget !== 0,"exam.priorityTarget") 
      , this.condition(exam.admissionArea === "1","$smallEllipse")
      , this.condition(exam.admissionArea === "2NT","$bigEllipse")
      , this.condition(exam.admissionArea === "2","$smallEllipse")
      , this.condition(exam.admissionArea === "3","$smallEllipse")
      , exam.admissionArea
      , exam.gradYear.toString().charAt(0)
      , exam.gradYear.toString().charAt(1)
      , exam.gradYear.toString().charAt(2)
      , exam.gradYear.toString().charAt(3)
      , this.addTick(exam.connectionAdmission === 0)
      , this.addTick(exam.connectionAdmission === 1)
      , this.addTick(exam.connectionAdmission === 2)
      , wishes.length
    ]
    contentArray2 = contentArray2.concat(this.generateWishData(wishes));
    var result = this.data;
    for (let i = 0; i < contentArray1.length; i++) {
      result[0].instructions[i].content = contentArray1[i];
      result[2].instructions[i].content = contentArray1[i];
      result[4].instructions[i].content = contentArray1[i];
    }
    for (let i = 0; i < contentArray2.length; i++) {
      result[1].instructions[i].content = contentArray2[i];
      result[3].instructions[i].content = contentArray2[i];
      result[5].instructions[i].content = contentArray2[i];
    }
    return result;
  }
}
