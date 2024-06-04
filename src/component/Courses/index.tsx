import { useCallback, useState } from "react";
import { CoursesData, CoursesProps, ListTypes } from "../../utils/types";
import "./index.scss";

type Props = {
  courses: CoursesProps;
};

export const Courses = (props: Props) => {
  const {
    courses: { coursesList, coursesData },
  } = props;
  const [selectedCoursesItem, setSelectedCoursesItem] = useState<string>(
    ListTypes.all
  );
  const [filteredCoursesData, setFilteredCoursesData] =
    useState<CoursesData[]>(coursesData);

  const selectItem = useCallback(
    (selectedItem: string) => {
      setSelectedCoursesItem(selectedItem);
      if (selectedItem === ListTypes.all) {
        setFilteredCoursesData([...coursesData]);
      } else {
        setFilteredCoursesData(
          coursesData.filter((item) => item.tags.includes(selectedItem))
        );
      }
    },
    [setSelectedCoursesItem, coursesData]
  );
  console.log("list render");
  return (
    <>
      <div className="courses-menu-wrapper">
        {coursesList?.map((item) => (
          <div
            key={item}
            className={
              selectedCoursesItem === item
                ? "courses-menu-item-active"
                : "courses-menu-item"
            }
            onClick={() => {
              selectItem(item);
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="courses-list-wrapper">
        {filteredCoursesData?.map((item) => {
          return (
            <div className="courses-list-item" key={item.id}>
              <div
                className="courses-list-item-image-wrapper"
                style={{ backgroundColor: item.bgColor }}
              >
                <img
                  src={item.image}
                  className="courses-list-item-image"
                  alt="img"
                />
              </div>

              <div className="courses-list-item-label">{item.name}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
