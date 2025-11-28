import Footer from "../components/Footer";
import Direction from "./Contact/Direction";
import Form from "./Contact/Form";
import Hero from "./Contact/Hero";



function Contact() {
    return (
        <>
            <div className="relative overflow-x-hidden">
                <Hero />
                <Form />
                <Direction />

                <Footer />

            </div>
        </>

    );
}

export default Contact;