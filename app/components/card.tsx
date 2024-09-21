import Image, { StaticImageData } from "next/image";
import Badge from "./badge";
import { ReactNode } from "react";

interface CardType {
	image: string | StaticImageData;
	imageAlt: string;
	title: string;
	desc: string;
	width?: number;
	height?: number;
	tech?: ReactNode;
}

const Card = (props: CardType) => {
	return (
		<div className="flex flex-col max-w-sm border justify-center items-center border-black rounded-lg dark:bg-white dark:text-black">
			<Image
				src={props.image}
				alt={props.imageAlt}
				width={props.width}
				height={props.height}
				className="rounded-t-lg object-cover"
			/>
			<div className="flex flex-col tracking-tight divide-y divide-black p-5">
				<h1 className="text-2xl font-semibold m-2 text-center capitalize">
					{props.title}
				</h1>
				<p className="text-pretty text-center m-2">{props.desc}</p>
			</div>
			<div className="flex justify-center items-center space-x-4">
				<Badge text="HTML" className= "bg-orange-400 text-black"/>
				<Badge text="CSS" className="bg-blue-600 text-white" />

				{props.tech}
			</div>
		</div>

		// <a
		// 	href="#"
		// 	className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
		// 	<Image
		// 		className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
		// 		src={props.image}
		// 		alt={props.imageAlt}
		// 		width={props.width}
		// 		height={props.height}
		// 	/>
		// 	<div className="flex flex-col justify-between p-4 leading-normal">
		// 		<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		// 			{props.title}
		// 		</h5>
		// 		<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
		// 			{props.desc}
		// 		</p>
		// 	</div>
		// </a>
	);
};

export default Card;
