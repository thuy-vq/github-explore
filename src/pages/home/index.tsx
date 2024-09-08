import React from 'react';
import OTable from "../../components/OTable";
import SearchInput from "../../components/SearchInput";

const Home = () => {
  const handleChange = (value) => {
    // e.preventDefault();
    console.log(value);
  };

  return (
    <div className='flex gap-8 flex-col w-full p-4'>
      <SearchInput
        placeholder="Search a github's username"
        label='Search'
        onChange={handleChange}
      />

      <OTable />
    </div>
  );
};

export default Home;
