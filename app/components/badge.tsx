interface badgeTypes {
    text: string;
    className: string;
}

const Badge = (props:badgeTypes) => {
    return (
        <p className={` w-11 h-9 text-center inline-flex justify-center items-center rounded-md px-8 mb-4 ${props.className} `}>{props.text}</p>
    )
}


export default Badge;
