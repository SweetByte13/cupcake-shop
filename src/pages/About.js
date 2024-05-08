import NavBar from "../components/NavBar";


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
                Since 2022, Crazy Good Cupcake Shop has been one of America’s most-cherished bakeshops and set the standard for tried-and-true desserts and baked goods.
                Learn more about our journey from neighborhood gem to sweet success.
            </div>
            <br></br>
            <div>
                <h2>Our Products</h2>
                Crazy Good Cupcake Shop has been making America’s favorite baked goods the old-fashioned way: from scratch, in small batches, and using the finest ingredients.
                Our assortment includes our world-famous cupcakes, seasonal flavors, devine icing, and fan-favorite toppings.
            </div>
            <br></br>
            <div>
                <h2>Locations</h2>
                <p>
                    <div>
                        <div>Crazy Good Cupcakes - Sweetville, FL</div>
                        <div>Address: 1234 Sugar Lane, Sweetville, FL 33101</div>
                        <div>Phone Number: (305) 555-0123</div>
                        <div>Email: Email: sweettreats@crazygoodcupcakes.com</div>
                        <div> Hours of Operation: Mon-Fri: 8am - 8pm, Sat-Sun: 9am - 5pm</div>
                    </div>
                </p>

                <p>
                    <div>
                        <div>Crazy Good Cupcakes - Dessert Town, FL</div>
                        <div>Address: 5678 Treats Avenue, Dessert Town, FL 32801</div>
                        <div>Phone Number: (407) 555-0456</div>
                        <div>Email: bestbites@crazygoodcupcakes.com</div>
                        <div>Hours of Operation: Mon-Fri: 7am - 7pm, Sat: 8am - 6pm, Sun: Closed</div>
                    </div>
                </p>
            </div>
        </div>
    </div>
    )
}

export default About;