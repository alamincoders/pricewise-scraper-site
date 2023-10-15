"use client";

import React from "react";

const SearchBar = () => {
  const handleSubmit = () => {};

  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input type="text" name="search" placeholder="Enter product link" id="" className="searchbar-input" />
      <button type="submit" className="searchbar-btn">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
