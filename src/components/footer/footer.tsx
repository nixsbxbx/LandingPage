import { ContactItem } from "./contact-item"

export const Footer = () => {
    return (
        <footer className="pt-[260px] pb-[300px] px-6">
            <img src="/images/logo.svg" alt="Logo" /> 

            <div className="flex items-center gap-6">
                <img src="/images/icon-location.svg" alt="location"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque voluptates quo sint eligendi perferendis est in debitis consequuntur consequatur dignissimos, minus rem voluptatibus iure incidunt, qui eaque labore cumque? Sed?</p>
            </div>

            <div className="flex items-center gap-6">
                <img src="/images/icon-phone.svg" alt="location"/>
                <p>+1-543-123-4567</p>
            </div>
            
            <ContactItem text=""/>

        </footer>
    )
}
