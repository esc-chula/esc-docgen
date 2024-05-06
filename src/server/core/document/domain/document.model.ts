import { z } from "zod";

export const DocumentHeadingModel = z.object({
  id: z.string(),
  date: z.string(),
  term: z.string(),
});

export const StaffModel = z.object({
  student_affairs_dean: z.string(),
  academic_dean: z.string(),
  head_of_venue: z.string(),
  esc_president: z.string(),
});

export const ProjectModel = z.object({
  id: z.string(),
  from: z.string(),
  name: z.string(),
  objective: z.string(),
  activity: z.string(),
});

export const RequestModel = z.object({
  date: z.string(),
  item_type: z.string(),
  time_frame: z.string(),
  locations: z.array(z.string()),
  items: z.array(z.string()),
  purposes: z.array(z.string()),
});

export const StudentContactModel = z.object({
  name: z.string(),
  tel: z.string(),
});

export const ResponsibleStudentModel = z.object({
  during: StudentContactModel,
  venue: StudentContactModel,
});

export const DocumentDataModel = z.object({
  heading: DocumentHeadingModel,
  staff: StaffModel,
  project: ProjectModel,
  request: RequestModel,
  responsible_student: ResponsibleStudentModel,
});

type DocumentData = z.infer<typeof DocumentDataModel>;

type DocumentHeading = z.infer<typeof DocumentHeadingModel>;
type Staff = z.infer<typeof StaffModel>;
type Project = z.infer<typeof ProjectModel>;
type Request = z.infer<typeof RequestModel>;
type StudentContact = z.infer<typeof StudentContactModel>;
type ResponsibleStudent = z.infer<typeof ResponsibleStudentModel>;

export type {
  DocumentData,
  DocumentHeading,
  Project,
  Staff,
  Request,
  ResponsibleStudent,
  StudentContact,
};
