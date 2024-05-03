export interface DocumentData {
  document: {
    id: string;
    date: string;
    term: string;
  };
  staff: {
    student_affairs_dean: string;
    academic_dean: string;
    head_of_venue: string;
    esc_president: string;
  };
  project: {
    id: string;
    from: string;
    name: string;
    objective: string;
    activity: string;
  };
  request: {
    date: string;
    item_type: string;
    time_frame: string;
    locations: string[];
    items: string[];
    purposes: string[];
  };
  responsible_student: {
    during: {
      name: string;
      tel: string;
    };
    venue: {
      name: string;
      tel: string;
    };
  };
}
