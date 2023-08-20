export default function Courses() {
  return (
    <div className="flex flex-col items-center">
      <div className=" w-1/2 border-2 border-black px-2 py-4 rounded-full my-[130px] flex">
        <div className="px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />{" "}
          </svg>
        </div>

        <input
          className="search-bar outline-none w-full"
          placeholder="Seach for a course..."
        ></input>
      </div>
    </div>
  );
}
