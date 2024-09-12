import Image from "next/image";
import kelvin from "@/app/images/kelvin.jpg";
// import Icon from "./icon";

const Hero = () => {
	return (
		<div className="text-center m-4 flex flex-col items-center justify-center">
			<Image src={kelvin} alt="Kelvin" className="rounded-full w-72 h-72 object-cover mb-4" />
			<div className="space-y-4">
				<h1 className="text-3xl font-semibold">
					Hey, i am <br /> <span className="text-primary">Kelvin.</span>
				</h1>
				<p>
					I am a student from SMPN 1 Gedangan Sidoarjo, Im just started learning
					about Frontend about last year started with html and css, just started
					learning JavaScript and TypeScript
				</p>
				{/* <div className="flex space-x-2 items-center justify-center">
					<Icon name="github" size={40} />
					<Icon name="instagram" size={40} />
				</div> */}
			</div>
		</div>
	);
};

export default Hero;
