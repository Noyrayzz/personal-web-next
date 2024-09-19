import Image, { StaticImageData } from "next/image";

interface CardType {
	image: string | StaticImageData;
	imageAlt: string;
	title: string;
	desc: string;
	width?: number;
	height?: number;
}

const Card = (props: CardType) => {
	return (
		<a href="#" className="transition duration-150 ease-out hover:ease-in hover:translate-x-2 hover:-translate-y-2">
			<div className="flex flex-col w-64 border border-black rounded-md lg:w-96 ">
				<Image
					src={props.image}
					alt={props.imageAlt}
					width={props.width}
					height={props.height}
					className="rounded-t-md object-cover"
				/>
				<div className="flex flex-col divide-y divide-black p-2">
					<h1 className="text-2xl font-semibold m-2 text-center">{props.title}</h1>
					<p className="text-pretty text-center m-2">{props.desc}</p>
				</div>
			</div>
		</a>
	);
};

export default Card;
