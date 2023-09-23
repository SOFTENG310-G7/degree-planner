import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import type { CourseDTO } from "@/types/CourseDTO";

export interface SearchBarProps {
  onSearchClick: (searchValue: string, courseList: CourseDTO[]) => void;
}

const SearchBar = ({ onSearchClick }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [text, setText] = useState("");
  const [courses, setCourses] = useState<CourseDTO[]>([]);
  const [list, setList] = useState<CourseDTO[]>([]);

  const handleSearchChange = (event: any) => {
    const currentValue = event.target.value
    setSearchValue(currentValue);
    setText(currentValue);

    const res = courses.filter((c) =>
      c.course_code.toLowerCase().includes(currentValue.toLowerCase())
    ).slice(0, 12);
    setList([...res]);
  };

  const onEnter = (searchValue: string) => {
    setText("");
    setSearchValue(searchValue);
    onSearchClick(searchValue, list);
  };

  const onSelect = (searchSuggestedValue: string) => {
    setText("");
    setSearchValue(searchSuggestedValue);
    onSearchClick(searchSuggestedValue, list);
  };

  const onSelectClear = (searchValue: string) => {
    setSearchValue(searchValue);
    setText("");
  };

  // Getting course data from database
  useEffect(() => {
    fetch(
      "/api/courses?",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      if (response.ok) {
        response.json().then((data: CourseDTO[]) => {
          setCourses(data);
        });
      }
    });
  }, []);

  return (
    <div className="search-bar">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onEnter(searchValue);
        }}
        className="w-full border-2 border-black rounded-full bg-transparent px-2"
      >
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            {text ? (
              <button type="button" onClick={() => onSelectClear(searchValue)} className="hover:cursor-pointer">
                <AiOutlineClose size={20} />
              </button>
            ) : (
              <AiOutlineSearch size={20} />
            )}
          </div>
          <input
            id="default-search"
            className="block w-full p-4 pl-10 text-sm bg-transparent rounded-full focus:outline-none"
            placeholder="Search for courses..."
            onChange={handleSearchChange}
            value={text}
            autoComplete="off"
            required
          />
          <button
            type="submit"
            className="text-white absolute items-center top-2 right-1 bg-[#3d74ff] hover:bg-[#2853bf] font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
      <motion.div layout className="absolute bg-white ml-10 mt-1 w-48 max-h-[150px] overflow-hidden overflow-y-auto rounded-md shadow-lg shadow-black-200/50">
        {text ? (
          <>
            {list.map((c) => (
              <motion.div layout key={c.id} onClick={() => onSelect(c.course_code)} className="hover:bg-gray-200 p-2.5 text-sm">
                {c.course_code}
              </motion.div>
            ))}
          </>
        ) : null}
      </motion.div>
    </div>
  );
};

export default SearchBar;
