import { CarCard, CustomButton, CustomFilter, Hero, SearchBar } from "@/Components";
import { fetchCars } from "@/Utils/Index";

export default async function Home() {
  const allCars = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main>
      <Hero />
      <CustomButton />
      <div className="mt-12 padding-x padding-y max-width" id="disover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
        </div>
        <div className="home__filter-container">
          <CustomFilter title="fuel" />
          <CustomFilter title="year" />
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home_error-container">
            <h2 className="text-xl text-black fonb-bold">
              Oops! no result found
            </h2>
            <p className="text-xl text-red-500">{allCars.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
