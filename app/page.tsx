import AboutMe from "./components/aboutMe";
import CardHolder from "./components/cardHolder";
import Hero from "./components/hero";
import Nav from "./components/nav";

export default function Home() {
	return (
		<main>
			<Nav />
			<Hero />
			<AboutMe />
			<CardHolder/>
		</main>
	);
}
