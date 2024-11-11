import Hero from "./(components)/Herosection";
import About from "./(components)/About";
import Skills from "./(components)/Skills";
import Projects from "./(components)/Projects";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
