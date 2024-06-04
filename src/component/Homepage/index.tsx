import { useEffect, useState } from "react";
import { Courses } from "../Courses";
import { CoursesProps, ListTypes } from "../../utils/types";
import "./index.css";

export const Homepage = () => {
  const [courses, setCourses] = useState<CoursesProps>();
  const fetchData = async () => {
    await fetch("https://logiclike.com/docs/courses.json")
      .then((data) => data.json())
      .then((data) => {
        const uniqueListItems = new Set<string>();
        data.forEach((coursesDataItem) => {
          coursesDataItem.tags.forEach((item) => {
            uniqueListItems.add(item);
          });
        });
        setCourses({
          coursesData: data,
          coursesList: [ListTypes.all, ...uniqueListItems],
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("home render");

  return (
    <div className="homepage-wrapper">
      {!!courses && <Courses courses={courses} />}
    </div>
  );
};
