"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

export const Search = ({ search }: { search?: string }) => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState(search);
  const [query] = useDebounce(inputValue, 750);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (!query) router.push("/pokemon");
    else router.push(`pokemon?search=${query}`);
  }, [query]);

  return (
    <input
      type="text"
      placeholder="Search a Pokémon, Pikachu..."
      onChange={handleSearch}
      value={inputValue}
      className="input w-full bg-base-300 max-w-xs dark:text-white text-black"
    />
  );
};
