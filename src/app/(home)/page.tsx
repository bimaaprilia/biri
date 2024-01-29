import { Hero } from './_components/hero';
import { Mission } from './_components/mission';
import Portfolio from './_components/portfolio';
import { Projects } from './_components/projects';
import { StartingPoint } from './_components/starting-point';
import { Vision } from './_components/vision';
import { Welcome } from './_components/welcome';

export default function Home() {
  return (
    <>
      <Hero />

      <main>
        <Welcome />

        <Vision />

        <Mission />

        <Portfolio />

        <StartingPoint />

        <Projects />
      </main>
    </>
  );
}
