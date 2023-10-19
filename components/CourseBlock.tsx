export default function CourseBlock(props: any) {
  return (
    <div className="border-2 border-slate-500 flex flex-col items-stretch rounded-lg py-4 px-6 w-full h-32 hover:cursor-pointer shadow hover:shadow-lg transition-shadow bg-white">
      <h2 className="courseCode text-lg text-slate-700 font-semibold tracking-wide">
        {props.code}
      </h2>
      <p className="text-slate-900" id="courseName">
        {props.name}
      </p>
    </div>
  );
}
