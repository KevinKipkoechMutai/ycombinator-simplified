import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home( {searchParams}: {
  searchParams: Promise<{ query?: string }>
} ) {

  const query = (await searchParams).query

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'Kevin K.' },
      _id: 1,
      description: 'This is a description',
      image: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      category: 'Lizards',
      title: 'Cool Lizard'
    }
  ]

  return (
    <>
      <section className="pink_container">

        <h1 className="heading">
          Pitch Your Startup, <br/> Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>

        <SearchForm query={query}/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {
            query ? `Search results for "${query}"` : "All Startups"
          }
        </p>

        <ul className="mt-7 card_grid">
          {
            posts?.length > 0 ? (
              posts.map((post: StartupCardType, index: number) => (
                <StartupCard key={post._id} post={post}/>
              ))
              ) : (
              <p className="no-results">No Startups Found</p>
            )
          }
        </ul>
      </section>
      
    </>
  );
}
