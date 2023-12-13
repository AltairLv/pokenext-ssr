"use client";

import Link from "next/link";
import { Search } from "@/components/Search";

export const Navbar = ({ search }: { search?: string }) => {
  return (
    <nav className="sticky top-0 backdrop-blur">
      <div className="flex flex-col md:flex-row navbar">
        <div className="flex-1">
          <Link href={"/"} className="text-2xl text-yellow-300">
            PokéNext
          </Link>
        </div>
        <Search search={search} />
      </div>
    </nav>
  );
};
