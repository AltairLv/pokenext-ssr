import Link from "next/link";

export const Card = ({ name }: { name: string }) => {
  return (
    <Link
      href={`/pokemon/${name.charAt(0).toUpperCase() + name.slice(1)}`}
      className="text-center w-5/6 md:w-4/5 py-2 border rounded-md"
    >
      <h2 className="capitalize">{name}</h2>
    </Link>
  );
};
