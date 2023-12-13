import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl text-yellow-300 tracking-tight drop-shadow-originalBlue">
              Pokénext
            </h1>
            <p className="py-6">
              Explore the world of Pokémon with a tiny Pokédex companion.
              Discover different species, from iconic to elusive.
            </p>
            <Link href={"/pokemon"} className="group btn btn-primary font-sans">
              Get Started{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="group-hover:translate-x-1 ease-in-out duration-100 w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
