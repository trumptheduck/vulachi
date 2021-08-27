import { Course } from "./course.model";

export interface School {
    _id?: string,
    name: string,
    code: string,
    region: string,
    address: string,
    phones: string[],
    hotlines: string[],
    faxes: string[],
    emails: string[],
    website?: string,
    desc?: string,
    courses?: Course[]
}