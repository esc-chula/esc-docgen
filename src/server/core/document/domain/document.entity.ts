import type {
  DocumentData,
  DocumentHeading,
  Project,
  Request,
  ResponsibleStudent,
  Staff,
} from "./document.model";

/*
  @class Document
  @classdesc Document class
  @param {DocumentData}
*/
export class Document implements DocumentData {
  heading: DocumentHeading;
  project: Project;
  request: Request;
  responsible_student: ResponsibleStudent;
  staff: Staff;

  constructor(data: DocumentData) {
    this.heading = data.heading;
    this.staff = data.staff;
    this.project = data.project;
    this.request = data.request;
    this.responsible_student = data.responsible_student;
  }

  // behaviour goes here
  // e.g. approveDocument() {}
}
