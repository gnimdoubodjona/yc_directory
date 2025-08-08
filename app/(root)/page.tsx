import Image from "next/image";
import SearchForm from "../../components/SearchForm";


export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container magicpattern">
        <h1 className="heading">Pitch your startup, <br /> Connect With Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, anf Get Noticed in Virtual Competitions
        </p>
        <br />
        <SearchForm query={query}/>
      </section>

    </>
  );
}
