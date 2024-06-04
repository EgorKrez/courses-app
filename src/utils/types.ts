export type CoursesData = {
  bgColor: string;
  id: string;
  image: string;
  name: string;
  tags: string[];
};

export type CoursesProps = {
  coursesData: CoursesData[];
  coursesList: string[];
};

export enum ListTypes {
  all = "Все темы",
}
