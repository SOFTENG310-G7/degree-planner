import { useState } from "react";

export interface SearchBarProps {
  onSearchClick: (searchValue: string) => void;
}

const SearchBar = ({ onSearchClick }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearchClick(searchValue);
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
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          id="default-search"
          className="block w-full p-4 pl-10 text-sm bg-transparent rounded-full focus:outline-none"
          placeholder="Search for courses..."
          onChange={handleSearchChange}
          value={searchValue}
          required
        />
        <button
          type="button"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2"
          onClick={() => onSearchClick(searchValue)}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
