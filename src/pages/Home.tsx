import React, { useEffect, useState } from "react";
import { useDebounce } from "../hooks/debounce";
import { useSearchUsersQuery } from "../store/github/github.api";
import { CardItem } from "../shared/CardItem";

export function Home() {
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search, 500);
  const {
    data: items,
    isLoading,
    isError,
  } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 2,
  });

  return (
    <article className="flex justify-center pt-9 mx-auto">
      <div className="relative w-[600px]">
        <input
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Search users"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <ul className="list-none bg-white">
          {items?.map((item) => (
            <li
              className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-4"
              key={item.id}
            >
              <CardItem
                avatarUrl={item.avatar_url}
                login={item.login}
                type={item.type}
                htmlUrl={item.html_url}
              />
            </li>
          ))}
        </ul>
      </div>
      {isError && (
        <p className="text-center text-red-300">Something went wrong</p>
      )}
    </article>
  );
}
