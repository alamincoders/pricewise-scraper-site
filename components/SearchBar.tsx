"use client";

import React, { FormEvent, useState } from "react";

const isValidAmazonProductUrl = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;

    // check if hostname contains amazon
    if (hostname.includes("amazon.com") || hostname.includes("amazon.") || hostname.endsWith("amazon")) {
      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
};

const SearchBar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductUrl(searchPrompt);

    if (!isValidLink) {
      alert("Please enter a valid Amazon product link");
    }

    try {
      setIsLoading(true);
      // Scrape the product page
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        type="text"
        name="search"
        placeholder="Enter product link"
        id=""
        className="searchbar-input"
      />
      <button type="submit" className="searchbar-btn" disabled={searchPrompt === ""}>
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default SearchBar;
