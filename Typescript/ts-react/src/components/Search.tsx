import React, { useState } from "react";

interface SearchProps {
  onSearch: (city: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-5">
        <input
          type="text"
          placeholder="Enter city "
          value={city}
          onChange={handleChange}
          className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-lg px-4 py-1 shadow-md focus:shadow-lg focus:shadow-rose-400"
        />
        <button
          type="submit"
          className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-4 py-1 text-base hover:border-[#fff] cursor-pointer transition ml-3"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
