import Card from "./card";
import macbook from "@/app/images/macbook.jpg";

const CardHolder = () => {
	return (
        <div className="flex flex-col space-y-4 justify-center items-center  lg:flex-row lg:space-y-0 lg:justify-evenly">
            <Card
                image={macbook}
                imageAlt="macbook"
                title="card1"
                desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit saepe ex nemo repellendus natus eius officia porro sint voluptate ratione error, aliquam facere, reprehenderit labore? Minima laborum blanditiis dolor temporibus."
            />
            <Card
                image={macbook}
                imageAlt="macbook"
                title="card1"
                desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit saepe ex nemo repellendus natus eius officia porro sint voluptate ratione error, aliquam facere, reprehenderit labore? Minima laborum blanditiis dolor temporibus."
            />
            <Card
                image={macbook}
                imageAlt="macbook"
                title="card1"
                desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit saepe ex nemo repellendus natus eius officia porro sint voluptate ratione error, aliquam facere, reprehenderit labore? Minima laborum blanditiis dolor temporibus."
            />
		</div>
	);
};

export default CardHolder;
