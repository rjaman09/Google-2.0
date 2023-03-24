import Link from "next/link";

export default async function WebSearchPage({ searchParams }) {
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`);

  if (!response.ok) {
    throw new Error("Something went wrong !!!");
  }

  const data = await response.json();

  const results = data.items;

  if (!results) {
    return <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="font-light text-2xl mb-4 tracking-wider text-gray-700">No results found !!</h1>
      <p className="font-light text-md tracking-wide text-gray-700">Try searching for something else or go back to the homepage{" "}
        <Link className="text-blue-500 tracking-wide cursor-pointer font-medium" href="/">Home</Link>
      </p>
    </div>
  }

  return (
    <>
      {results && results.map((result) => (
        <h1>{result.title}</h1>
      ))}
    </>
  );
};
