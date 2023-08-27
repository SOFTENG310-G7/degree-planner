export default function CourseBlock(props: any) {
  return (
    <div className="border-2 border-black rounded-md py-5 px-5 w-full h-32 flex items-center hover:cursor-pointer hover:shadow-lg bg-white">
      <div className="flex flex-col my-2">
        <div className="courseCode text-xl font-bold text-left w-full">
          {props.code}
        </div>
        <div id="courseName">{props.name}</div>
      </div>
    </div>
  );
}
