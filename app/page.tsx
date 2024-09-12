import AboutMe from "./components/aboutMe";
import Hero from "./components/hero";
import Nav from "./components/nav";

export default function Home() {
	return (
		<main>
			<Nav />
			<Hero />
			<AboutMe />
		</main>
	);
}
