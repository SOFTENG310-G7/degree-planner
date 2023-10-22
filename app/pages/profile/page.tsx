'use client';
import { useState, useEffect, useRef } from 'react';
import LogoutButton from '@/components/LogoutButton';
import Popup from '@/components/Popup';
import { CourseDTO } from '@/types/CourseDTO';
import { FaStar } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

interface CourseRating {
  courses: CourseDTO;
  rating: number;
}

interface SavedCourse {
  course: CourseDTO[];
}

export default function Profile() {
  const [courses, setCourses] = useState<CourseRating[]>([]);
  const [savedCourses, setSavedCourses] = useState<SavedCourse>({
    course: [],
  });
  const prevSavedCourses = useRef(savedCourses);
  const [opened, setOpened] = useState(false);
  const [openedData, setOpenedData] = useState<CourseDTO>();

  const handleClick = (course: any) => {
    setOpenedData(course);
    setOpened(true);
  };

  const closePopup = () => {
    fetchUserCourses();
    setOpened(false);
    document.body.style.overflow = ''; // Enable scrolling
  };

  useEffect(() => {
    // Fetching data from API
    fetchUserCourses();
    handleGetCourses();
  }, []);

  useEffect(() => {
    if (prevSavedCourses.current !== savedCourses) {
      handleCourseUpdate();
      prevSavedCourses.current = savedCourses;
    }
  }, [savedCourses]);

  // Controlling scrolling depending on if the popup is open
  useEffect(() => {
    if (opened) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = ''; // Enable scrolling
    }
  }, [opened]);

  const fetchUserCourses = async () => {
    const response = await fetch(`http://localhost:3000/api/ratings/GET_user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // Storing the ratings associated with the user
      const ratingData = await response.json();
      setCourses(ratingData.ratings);
    }
  };

  const handleGetCourses = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/saveCourses/GET', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const courses = await response.json();
        setSavedCourses({ course: courses.courses[0].saved_courses });
      }
    } catch (error) {
      console.error('Error while getting saved courses:', error);
    }
  };

  const handleRemoveCourse = async (course_code: string) => {
    const updatedCourses = savedCourses.course.filter((c) => c.course_code !== course_code);
    setSavedCourses({ course: updatedCourses });
  };

  const handleCourseUpdate = async () => {
    try {
      const data = {
        courses: savedCourses.course,
      };

      const response = await fetch('http://localhost:3000/api/saveCourses/PUT', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Successfully updated the review
        console.log('Courses updated successfully');
      } else {
        console.error('Failed to update courses');
      }
    } catch (error) {
      console.error('Error while saving:', error);
    }
  };

  return (
    <div className="flex flex-col mb-12">
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
      <div className="flex flex-row justify-between mt-6 text-left mx-12">
        <h1 className="font-semibold text-3xl">Welcome to your profile</h1>
        <LogoutButton />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2 mr-10">
          {courses.length !== 0 ? (
            <div className="mt-12 text-left ml-12">
              <p className="mb-5 font-semibold text-2xl">Course ratings</p>
              {courses.map((c) => (
                <div
                  key={c.courses.id}
                  onClick={() => handleClick(c.courses)}
                  className="flex flex-row justify-between mt-4 mb-4 rounded-md py-5 px-5 border-2 border-slate-500
                  hover:cursor-pointer shadow hover:shadow-lg transition-shadow bg-white"
                >
                  <p className="pr-6 text-slate-600 text-xl">
                    <span className="font-semibold text-slate-800">{c.courses.course_code}</span>{' '}
                    {c.courses.title}
                  </p>
                  <div className="flex">
                    {[...Array(5)].map((star, index) => {
                      const id = index;
                      const ratingValue = index + 1;
                      return (
                        <FaStar
                          key={id}
                          className="star"
                          color={ratingValue <= (c.rating ?? 0) ? '#ffc107' : '#e4e5e9'}
                          size={30}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="flex flex-col w-1/2 mr-12">
          {savedCourses ? (
            <div className="mt-12 text-left ml-12">
              <p className="mb-5 font-semibold text-2xl">Degree plan</p>
              {savedCourses.course.map((c) => (
                <div key={c.course_code}>
                  <div className="absolute right-0 mt-[25px] mr-16">
                    <button
                      type="button"
                      onClick={() => handleRemoveCourse(c.course_code)}
                      className="hover:cursor-pointer"
                    >
                      <AiOutlineClose size={20} className="hover:fill-cyan-600" />
                    </button>
                  </div>
                  <div
                    key={c.course_code}
                    onClick={() => handleClick(c)}
                    className="flex flex-row justify-between mt-4 mb-4 rounded-md py-5 px-5 border-2 
                    border-slate-500 hover:cursor-pointer shadow hover:shadow-lg transition-shadow bg-white"
                  >
                    <p className="pr-6 text-slate-600 text-xl">
                      <span className="font-semibold text-slate-800">{c.course_code}</span>{' '}
                      {c.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
