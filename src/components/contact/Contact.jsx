import { useState } from "react";
import "./contact.scss"

export default function Contact() {

    const [message, setMessage] = useState(false);
    const handleSubmit = (enter) =>
    {
        enter.preventDefault();
        setMessage(true);
    }

    return (
        <div className ="contact" id="contact" alt="the section of the website that contains a contact form to contact the developer for professional uses.">
            <div className="left">
                <img src="/Portfolio/assets/handshake.svg" alt="icon source https://freeicons.io/start-up-set-2/handshake-icon-30877" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I will get back to you ASAP :D</span>}
                </form>
            </div>
        </div>
    )
}
