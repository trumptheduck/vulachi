export interface BasicProfile {
  DOEduName: string;
  DOEduCode: string;
  fullname: string,
  gender: string,
  birthDate: string,
  birthPlace: string,
  race: string,
  isForeign: boolean,
  socialSecurity: string,
  settlementCode: string,
  settlementAddress: string,
  is18MArea1: boolean,
  is18MSpecialArea: boolean,
  highschool: {
    grade10: {
      address: string,
      provinceCode: string,
      schoolCode:string,
    },
    grade11: {
      address: string,
      provinceCode: string,
      schoolCode:string,
    },
    grade12: {
      address: string,
      provinceCode: string,
      schoolCode:string,
    },
    gradeName: string,
  }
  phone: string,
  email:string,
  contact: string,
}

export interface ExamProfile {
  isForUniAdmission: boolean,
  isHighSchool: boolean,
  isTrainCamp: boolean,
  isFreeNoHighSchool: boolean,
  isFreeHighSchool: boolean,
  councilName: string,
  councilCode: string,
  examLocationAddress: string,
  examLocationCode: string,
  tests : {
    math: boolean,
    literature: boolean,
    forLang: string,
    isSocialScience: boolean,
  },
  testsFree : {
    physics: boolean,
    chemistry: boolean,
    biology: boolean,
    history: boolean,
    geography: boolean,
    civilEdu: boolean
  },
  forLangCertificate: string,
  forLangGrades: string,
  retained: {
    math: string,
    literature: string,
    history: string,
    geography: string,
    civilEdu: string
    physics: string,
    chemistry: string,
    biology: string,
    forLang: string,
  }
  priorityTarget: number,
  admissionArea: string,
  gradYear: number,
  connectionAdmission: number,
}

export interface Wish {
  universityCode: string,
  courseCode: string,
  courseName: string,
  examiningGroup: string
}