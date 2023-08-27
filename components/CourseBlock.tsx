export default function CourseBlock(props: any) {
  return (
    <div className="border-2 border-grey-300 rounded-md py-5 px-5 w-[300px] h-[120px] flex items-center hover:cursor-pointer hover:shadow-lg my-2">
      <div className="flex flex-col">
        <div className="courseCode text-xl font-semibold text-left w-full">
          {props.code}
        </div>
        <div id="courseName">{props.name}</div>
      </div>
    </div>
  );
}
