'use client';
import CourseBlock from '@/components/CourseBlock';
import SearchBar from '@/components/SearchBar';
import type { CourseDTO } from '@/types/CourseDTO';
import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useSpring, animated } from 'react-spring';

const reorderDraggables = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const moveDraggables = (
  source: any,
  destination: any,
  droppableSource: any,
  droppableDestination: any
) => {
  const sourceClone = JSON.parse(JSON.stringify(Array.from(source)));
  const destClone = JSON.parse(JSON.stringify(Array.from(destination)));
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result: any = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

interface CourseDraggableProps {
  course: CourseDTO;
  index: number;
}

function CourseDraggable({ course, index }: CourseDraggableProps) {
  return (
    <Draggable draggableId={course.id.toString()} index={index}>
      {(provided) => (
        <div
          className="mb-2"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CourseBlock code={course.course_code} name={course.title} desc={course.description} />
        </div>
      )}
    </Draggable>
  );
}

const CourseList = React.memo(function QuoteList({ courses }: { courses: CourseDTO[] }) {
  return courses.map((course: CourseDTO, index: number) => (
    <CourseDraggable course={course} index={index} key={course.id} />
  ));
});

export default function Planner() {
  const droppableIds = {
    allCourses: 'all_courses',
    selected: 'selected',
  };

  interface CourseState {
    course: CourseDTO[];
  }
  const [allCourses, setAllCourses] = useState<CourseState>({
    course: [],
  });
  const [selected, setSelected] = useState<CourseState>({
    course: [],
  });
  const [isBrowser, setIsBrowser] = useState(false);
  const [numSelectedCourses, setNumSelectedCourses] = useState(0);

  const [hasSaved, setHasSaved] = useState<boolean>(false);
  const [called, setCalled] = useState<boolean>(true);
  const [show, setShow] = useState<boolean>(false);

  const animationProps = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? 'transformX(0)' : 'transformX(-100%)',
    onRest: () => setShow(false),
    marginTop: '3px',
  });

  // Required for SSR bug in react-beautiful-dnd
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsBrowser(true);
    }
  }, []);

  useEffect(() => {
    if (called) {
      handleGetCourses();
      setCalled(false);
    }
  }, [called]);

  //this pulls from backend and sets the hasSaved state to true if there is a saved course
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
        console.log(courses);
        setSelected({ course: courses.courses[0].saved_courses });
        setNumSelectedCourses(courses.courses[0].saved_courses.length);
        setHasSaved(true);
      }
    } catch (error) {
      console.error('Error while getting the rating:', error);
    }
  };

  const handleCourseSaving = async () => {
    try {
      // Create a data object with the required information
      const data = {
        courses: selected.course,
      };

      if (hasSaved) {
        //update the saved courses instead of posting new one
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
          setShow(true);
        } else {
          console.error('Failed to update courses');
        }
      } else {
        // Send a POST request to api/saveCourse route using fetch
        const response = await fetch('http://localhost:3000/api/saveCourses/POST', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          // Successfully added the review
          console.log('Courses saved successfully');
          setShow(true);
        } else {
          console.error('Failed to save');
        }
      }
    } catch (error) {
      console.error('Error while saving:', error);
    }
  };

  const onSearchClick = (searchValue: string, courseList: CourseDTO[]) => {
    // Filter out courses that are already selected
    const res = courseList.filter((c) =>
      c.course_code.toLowerCase().includes(searchValue.toLowerCase())
    );
    let outputData = [];
    for (const element of res) {
      if (!selected.course.filter((c: CourseDTO) => c.id === element.id).length) {
        outputData.push(element);
      }
    }
    setAllCourses({ course: outputData });
  };

  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    // Moving within the same list
    if (source.droppableId === destination.droppableId) {
      const items = reorderDraggables(
        source.droppableId === droppableIds.selected ? selected.course : allCourses.course,
        source.index,
        destination.index
      );

      if (source.droppableId === droppableIds.selected) {
        setSelected({ course: items });
      } else {
        setAllCourses({ course: items });
      }
    }
    // Moving across to another list
    else {
      const result = moveDraggables(
        source.droppableId === droppableIds.selected ? selected.course : allCourses.course,
        source.droppableId === droppableIds.selected ? allCourses.course : selected.course,
        source,
        destination
      );

      // If a course is dragged to selected
      if (droppableIds.selected === destination.droppableId) {
        if (numSelectedCourses < 12) {
          setNumSelectedCourses(numSelectedCourses + 1);
          setAllCourses({ course: result[droppableIds.allCourses] });
          setSelected({ course: result[droppableIds.selected] });
        }
      }
      if (destination.droppableId === droppableIds.allCourses) {
        if (numSelectedCourses > 0) {
          setNumSelectedCourses(numSelectedCourses - 1);
          setAllCourses({ course: result[droppableIds.allCourses] });
          setSelected({ course: result[droppableIds.selected] });
        }
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center my-5">
      <section className="flex flex-col gap-3">
        <SearchBar onSearchClick={onSearchClick} />
        {isBrowser ? (
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex flex-row justify-between gap-5">
              <div className="flex flex-col items-center gap-5 bg-slate-100 rounded-lg px-16 pt-10">
                <div className="text-2xl font-bold">Available Courses</div>
                <Droppable droppableId={droppableIds.allCourses}>
                  {(provided) => (
                    <div
                      className="w-80 h-full"
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      <CourseList courses={allCourses.course} />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
              <div className="flex flex-col items-center gap-5 bg-slate-100 rounded-lg pt-10">
                <div className="flex flex-row justify-between gap-3 pl-16">
                  <div style={{ width: 30, height: 30 }}>
                    {numSelectedCourses < 12 ? (
                      <>
                        <CircularProgressbar
                          value={numSelectedCourses}
                          maxValue={12}
                          text={`${numSelectedCourses}`}
                          styles={buildStyles({
                            textSize: '3rem',
                            pathColor: '#3d74ff',
                            textColor: '#3d74ff',
                          })}
                        />
                      </>
                    ) : (
                      <CircularProgressbar
                        value={numSelectedCourses}
                        maxValue={12}
                        text={`${numSelectedCourses}`}
                        styles={buildStyles({
                          textSize: '3rem',
                          pathColor: '#FF3D74',
                          textColor: '#FF3D74',
                        })}
                      />
                    )}
                  </div>
                  <div className="text-2xl font-bold">Selected Courses</div>
                  <div>
                    <button
                      className="text-white bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-base px-2 py-1"
                      type="button"
                      onClick={() => {
                        handleCourseSaving();
                      }}
                    >
                      Save
                    </button>
                  </div>
                  <animated.div style={animationProps}>Saved!</animated.div>
                </div>
                <Droppable droppableId={droppableIds.selected}>
                  {(provided) => (
                    <div
                      className="w-80 h-full"
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      <CourseList courses={selected.course} />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
          </DragDropContext>
        ) : null}
      </section>
    </div>
  );
}
