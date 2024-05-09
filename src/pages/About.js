import NavBar from "../components/NavBar";
import MDBanner from "../components/MDBanner";


function About() {
    return (<div>
        <header>
            <NavBar />
        </header>
        <div class="top-of-page-banner">
            <h1>About Us</h1>
        </div>

        <div class="content-block-wrapper">
            <img src="https://media.timeout.com/images/105935609/750/422/image.jpg" alt=""></img>
        </div>
        <div class="content-block-text">
            <h2>
                Our Story
            </h2>
            <div class="content-block-story-paragraph">
            Nestled on 1234 Sugar Lane in the charming town of Sweetville, Florida, Crazy Good Cupcakes beckons with its whimsical facade and tantalizing aromas. The bakery, run by the passionate baker, Evelyn, has become a beloved local treasure. As the sun rises over the pastel-painted storefront, the scent of freshly baked cupcakes wafts through the air, drawing in patrons from all walks of life.
Evelyn, with her flour-dusted apron and twinkling eyes, has a story as sweet as her confections. She inherited the bakery from her grandmother, who used to whip up cupcakes for the neighborhood kids. Evelyn’s love for baking blossomed as she stood on a stool, her tiny hands stirring batter in the same mixing bowl that now graces her kitchen. She vowed to honor her grandmother’s legacy by creating cupcakes that would make hearts skip a beat.
Inside Crazy Good Cupcakes, the air is filled with warmth and laughter. The walls are adorned with vintage cake tins, sepia-toned photographs, and handwritten recipes. The wooden counter showcases an array of cupcakes, each a miniature work of art. Customers gather around, their eyes wide with anticipation, as Evelyn unveils her daily creations.
            </div>
            <br></br>
            <div>
                <h2 class="content-block-story-paragraph">Our Products</h2>
                At Crazy Good Cupcakes, we believe in the art of sweet indulgence. Our bakery is a canvas, and our cupcakes are the masterpieces. We offer an eclectic mix of flavors that are as diverse as our beloved community in Sweetville. From the simplicity of vanilla to the richness of chocolate, each cupcake is a celebration of flavor. Our seasonal selections are a nod to the rhythms of nature, bringing the essence of each season into our bakery.
Our toppings and frostings are the final touch, the flourish that turns a cupcake into a statement. Whether it’s the classic elegance of buttercream or the rich tang of cream cheese, we craft each topping to complement the cupcake it graces. For those seeking a twist, our array of sprinkles, nuts, and fresh berries add texture and bursts of flavor, making every bite a new discovery.
Crazy Good Cupcakes isn’t just about the individual flavors, but the experience they create together. It’s a place where tradition meets innovation, and every visit is an opportunity to taste something wonderfully unexpected. 🧁✨
            </div>
            <br></br>
            <h2 className="location-title">Locations</h2>
            <div className="locations">
                <p>
                    <div>
                        <h5>Crazy Good Cupcakes - Sweetville, FL</h5>
                        <div>1234 Sugar Lane, Sweetville, FL 33101</div>
                        <div className="phonenumber">(305) 555-0123</div>
                        <div>sweettreats@crazygoodcupcakes.com</div>
                        <div> Hours of Operation: Mon-Fri: 8am - 8pm, Sat-Sun: 9am - 5pm</div>
                    </div>
                </p>

                <p>
                    <div>
                        <h5>Crazy Good Cupcakes - Dessert Town, FL</h5>
                        <div>5678 Treats Avenue, Dessert Town, FL 32801</div>
                        <div className="phonenumber">(407) 555-0456</div>
                        <div>bestbites@crazygoodcupcakes.com</div>
                        <div>Hours of Operation: Mon-Fri: 7am - 7pm, Sat: 8am - 6pm, Sun: Closed</div>
                    </div>
                </p>
            </div>
        </div>
        <MDBanner />
    </div>
    )
}

export default About;