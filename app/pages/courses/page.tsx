'use client';
import CourseBlock from '@/components/CourseBlock';
import Popup from '@/components/Popup';
import CourseFilter from '@/components/CourseFilter';
import { useEffect, useState } from 'react';
import { usePromiseTracker, trackPromise } from 'react-promise-tracker';
import BeatLoader from 'react-spinners/BeatLoader';

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
  const [searchValue, setSearchValue] = useState('');
  const [courses, setCourses] = useState<Course[]>([]);
  const [results, setResults] = useState<Course[]>([]);
  const [opened, setOpened] = useState(false);
  const [openedData, setOpenedData] = useState<Course>();
  const { promiseInProgress } = usePromiseTracker();

  const handleChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  const handleClick = (course: any) => {
    setOpenedData(course);
    setOpened(true);
  };

  const closePopup = () => {
    setOpened(false);
    document.body.style.overflow = ''; // Enable scrolling
  };

  // Getting course data from database
  useEffect(() => {
    const fetchAPI = async () => {
      const fetchdata = await fetch('http://localhost:3000/api/courses');
      const data = await fetchdata.json();
      setCourses(data);
      setResults(data);
    };

    trackPromise(fetchAPI());
  }, []);

  useEffect(() => {
    const filteredArr = courses.filter((c) =>
      c.course_code.toLowerCase().includes(searchValue.toLowerCase())
    );

    setResults(filteredArr);
  }, [searchValue]);

  // Controlling scrolling depending on if the popup is open
  useEffect(() => {
    if (opened) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = ''; // Enable scrolling
    }
  }, [opened]);

  // Filtering Courses depending on the category chosen
  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      setResults(courses);
    } else {
      const filteredArr = courses.filter((c) => c.subject === category);
      setResults(filteredArr);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {opened && openedData != null && (
        <>
          {/* Overlay */}
          <div
            className="fixed left-0 right-0 top-0 bottom-0 bg-black opacity-50"
            onClick={closePopup}
          ></div>

          {/* Popup */}
          <Popup openedData={openedData} closePopup={closePopup} />
        </>
      )}
      <h1 className="font-semibold text-4xl my-16">Courses</h1>
      <div className="w-1/2 border-2 border-slate-400 px-2 py-4 rounded-full mb-4 flex focus-within:border-cyan-600 transition-colors">
        <div className="px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="slate"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />{' '}
          </svg>
        </div>

        <input
          type="search"
          className="search-bar caret-cyan-600 outline-none w-full bg-transparent"
          placeholder="Search for a course…"
          onChange={handleChange}
        ></input>
      </div>
      <CourseFilter handleCategoryChange={handleCategoryChange} />
      {promiseInProgress && <BeatLoader size={20} color="#0891b2" />}
      <div className="mb-20">
        {results.length !== 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ml-10 mr-10">
            {results.map((c) => (
              <div key={c.id} onClick={() => handleClick(c)}>
                <CourseBlock code={c.course_code} name={c.title} desc={c.description} />
              </div>
            ))}
          </div>
        ) : (
          !promiseInProgress && (
            <div className="flex flex-col text-center w-full">
              <h2 className="font-bold text-xl">No courses found</h2>
              <p className="text-slate-600 text-base">Please try again with another keyword</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
