"use client";
import CourseBlock from "@/components/CourseBlock";
import { useEffect, useState } from "react";

type Course = {
  id: string;
  title: string;
  description: string;
  course_code: string;
  academic_group: string;
  subject: string;
  catalog_number: string;
  requirement_description: string;
};

export default function Courses() {
  const [searchValue, setSearchValue] = useState("");
  const [courses, setCourses] = useState<Course[]>([]);
  const [results, setResults] = useState<Course[]>([]);

  const [opened, setOpened] = useState(false);
  const [openedData, setOpenedData] = useState<Course>();

  const handleChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  const handleClick = (course: any) => {
    setOpenedData(course);
    setOpened(true);
  };

  const closePopup = () => {
    setOpened(false);
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const fetchdata = await fetch("http://localhost:3000/api/courses");
      const data = await fetchdata.json();
      console.log(data);

      setCourses(data);
      setResults(data);
    };

    fetchAPI();
  }, []);

  useEffect(() => {
    const filteredArr = courses.filter((c) =>
      c.course_code.toLowerCase().includes(searchValue.toLowerCase())
    );

    setResults(filteredArr);
  }, [searchValue]);

  return (
    <div className="flex flex-col items-center">
      <div>
        {opened && openedData != null ? (
          <div
            id="popup"
            className="fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center w-2/3 m-auto"
          >
            <div className="border-2 border-grey-300 rounded-lg mx-[200px] my-[300px] bg-white">
              <button className="text-right w-full p-2" onClick={closePopup}>
                x
              </button>
              <div className="flex flex-col px-10 pb-10">
                <div className="text-[26px] font-bold pt-10">
                  {openedData.course_code}
                </div>
                <div className="text-[18px] italic text-[#3d3d3d] pb-2">
                  {openedData.title}
                </div>
                <hr className="py-2" />
                <div className="pb-10">{openedData.description}</div>
                <div className="pb-10 italic text-grey-300 ">
                  {openedData.requirement_description}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="font-bold text-[40px] pt-[80px]">Courses</div>
      <div className=" w-1/2 border-2 border-grey-400 px-2 py-4 rounded-full my-[80px] flex">
        <div className="px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="grey"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />{" "}
          </svg>
        </div>

        <input
          type="search"
          className="search-bar outline-none w-full bg-transparent"
          placeholder="Search for a course..."
          onChange={handleChange}
        ></input>
      </div>

      <div className="mb-[200px]">
        {results.length != 0 ? (
          <div>
            {results.map((c) => (
              <div key={c.id} onClick={() => handleClick(c)}>
                <CourseBlock
                  code={c.course_code}
                  name={c.title}
                  desc={c.description}
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
