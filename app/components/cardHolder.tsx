import Card from "./card";
import quoteApi from "@/app/images/quoteApi.jpg";
import faqAccordion from "@/app/images/faqAccordion.jpg";
import Badge from "./badge";

const CardHolder = () => {
	return (
		<div className="flex flex-col space-y-4 justify-center items-center m-4 lg:m-0 lg:flex-row lg:space-y-0 lg:justify-evenly">
			<a
				href="https://github.com/Noyrayzz/advice-generator-app-main"
				target="_blank"
				className="transition duration-150 ease-out hover:ease-in hover:translate-x-2 hover:-translate-y-2">
				<Card
					image={quoteApi}
					imageAlt="quoteApiImg"
					title="Advice Generator"
					desc="Hello there One of my recent projects is an advice generator, which I built using HTML, CSS, and JavaScript. I also integrated an API to retrieve the advice."
					tech={<Badge text="JS" className="bg-yellow-300 text-black" />}
				/>
			</a>
			<a
				href="https://github.com/Noyrayzz/faq-accordion-main"
				target="_blank"
				className="transition duration-150 ease-out hover:ease-in hover:translate-x-2 hover:-translate-y-2">
				<Card
					image={faqAccordion}
					imageAlt="AccordionImg"
					title="faq accordion"
					desc=" Another one of my recent projects is an FAQ section that I created as an accordion, which I built using HTML, CSS, and JavaScript."
					tech={<Badge text="JS" className="bg-yellow-300 text-black" />}
				/>
			</a>
			{/* <a href="https://github.com/Noyrayzz/advice-generator-app-main" target="_blank" className="transition duration-150 ease-out hover:ease-in hover:translate-x-2 hover:-translate-y-2">

            <Card
                image={quoteApi}
                imageAlt="quoteApi"
                title="card1"
                desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit saepe ex nemo repellendus natus eius officia porro sint voluptate ratione error, aliquam facere, reprehenderit labore? Minima laborum blanditiis dolor temporibus."
            />
            </a> */}
		</div>
	);
};

export default CardHolder;
