import { useState } from 'react';

type CourseFilterProps = {
  handleCategoryChange: (category: string) => void;
};

const CourseFilter: React.FC<CourseFilterProps> = ({ handleCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSelectChange = (category: string) => {
    setSelectedCategory(category);
    handleCategoryChange(category);
  };

  return (
    <div className="w-1/2 mb-20">
      <select
        className="w-full border-2 border-slate-400 p-2 rounded-full focus-within:border-cyan-600 transition-colors"
        value={selectedCategory}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleSelectChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="CHEMMAT">Chemical and Materials Engineering</option>
        <option value="ELECTENG">Electrical and Electronic Engineering</option>
        <option value="SOFTENG">Software Engineering</option>
        <option value="BIOMENG">Biomedical Engineering</option>
        <option value="CIVIL">Civil Engineering</option>
        <option value="COMPSYS">Computer Systems Engineering</option>
        <option value="ENGSCI">Engineering Science</option>
        <option value="MECHENG">Mechanical Engineering</option>
        <option value="STRCTENG">Structural Engineering</option>
      </select>
    </div>
  );
};

export default CourseFilter;
