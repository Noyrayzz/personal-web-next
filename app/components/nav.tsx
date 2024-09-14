import ThemeChanger from "./themeChanger";

const Nav = () => {
	return (
		<nav className="flex px-14 space-x-20 lg:justify-around">
			<div className="lg:text-xl">
				<h1>Kelvin</h1>
			</div>
			<div className="flex space-x-3 l lg:text-xl">
				<h2 className="">About Me</h2>
				<ThemeChanger />
			</div>
		</nav>
	);
};

export default Nav;
