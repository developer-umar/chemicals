import Navbar from "./components/Navbar";


export default function HomePage() {
  return (
    <main>
      <Navbar/>
      

      <section className="h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold">
          FH Chemicals
        </h1>
      </section>
    </main>
  );
}