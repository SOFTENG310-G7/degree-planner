import "../globals.css";

export default async function About() {
    return (
        <div className="flex justify-center items-center px-8 py-8">
            <div className="flex-1 flex flex-col w-full max-w-md-custom px-8 py-8 bg-white rounded-lg shadow-md">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">About Us</h1>
                    <br/>
                    <p className="text-gray-600 font-bold">Welcome to the University of Auckland Degree Planner.</p>
                    <p className="text-gray-600 font-bold">A place for secondary and tertiary students to find their path.</p>
                    <br/>
                </div>
                <div className="mt-4">
                    <p className="text-gray-600 text-justify">Starting in 2023, we are The G7s under the University of Auckland SOFTENG310 course who were tasked to design a state of the art website for students to plan their future education.</p>
                    <br/>
                    <p className="text-gray-600 text-justify">Our website features a complete list of courses available for Bachelor of Science and Bachelor of Engineering at the university for potential and current University of Auckland students to view and plan their degree or trial other potential degrees in their interest.</p>
                    <br/>
                    <p className="text-gray-600 text-justify">Our website encourages students to create and share degree plans and rate courses based on past experiences to allow everyone to embrace the culture at UoA. Students are also able to view university entrance requirements and recommended plans for essential courses to aspire for a specific occupation.</p>
                </div>
            </div>
        </div>
    );
}