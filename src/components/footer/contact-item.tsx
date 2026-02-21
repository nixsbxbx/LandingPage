interface Props {
    text: string,
    inconUrl: string;
    alt : string;
}

export const ContactItem = ({text, inconUrl, alt} : Props) => {
    return (
        <div className="flex items-center gap-6">
            <img src={inconUrl} alt="location" />
            <p>{text}</p>
        </div>
    )
}
