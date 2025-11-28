import Footer from "../components/Footer";
import BlogList from "./Blog/Bloglist";
import Hero from "./Blog/Hero";



function Blog() {
    return (
        <>
            <div className="relative overflow-x-hidden">
                <Hero />
                <BlogList/>
              

                <Footer />

            </div>
        </>

    );
}

export default Blog;