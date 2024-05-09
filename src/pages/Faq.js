import MDBanner from "../components/MDBanner";
import NavBar from "../components/NavBar";


function Faq() {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <h1 className="headerfaq">FAQ</h1>
            <div class="banner-faq-header">
                <img src="https://media.istockphoto.com/id/1186285652/photo/close-up-of-freshly-baked-cakes-and-cupcakes-in-a-row-at-food-market.jpg?s=612x612&w=0&k=20&c=XB4JproUQxHGELi1GzOQYSMoC3WrWk1BJZSd5FHIBZk=" alt=""></img>
            </div>
            <div className="faqtitles">
                <div className="top-title"> Below are some frequently asked questions about our delightful cupcakes and services:</div>
                <div className="bottom-title">If you have further questions, please reach out to our team!</div>
            </div>
            <div className="faq">

                <div className="questions">
                    What flavors of cupcakes do you offer ?
                </div>
                <div className="faq-answers">We offer a variety of six delicious cupcake flavors to satisfy your sweet tooth:</div>
                <div className="answers">
                    <div>
                        <span className="answer-intro">Classic Vanilla:</span> A timeless favorite with a fluffy vanilla cake base.
                    </div>
                    <div>
                        <span className="answer-intro">Rich Chocolate:</span> Decadent chocolate cake topped with luscious frosting.
                    </div>
                    <div>
                        <span className="answer-intro">Key Lime:</span> Refreshing key lime flavored cake for a zesty and zingy treat.
                    </div>
                    <div>
                        <span className="answer-intro">Cinnamon:</span> Sweet and spicy cinnamon cake topped with creamy horchada frosting.
                    </div>
                    <div>
                        <span className="answer-intro"> Red Velvet:</span> A velvety red cake with cream cheese frosting.
                    </div>
                    <div>
                        <span className="answer-intro">Carrot Cake:</span> Moist carrot cake cake topped with luscious cream cheese frosting.
                    </div>
                    <div>
                        <span className="answer-intro">Seasonal Flavors:</span> Check our menu for rotating seasonal cupcake options!
                    </div>
                </div>
                <div className="questions">
                    What types of frostings can I choose from ?
                </div>
                <div className="faq-answers"> We have four delightful frostings to complement your cupcakes:
                </div>
                <div className="answers">
                    <div>
                        <span className="answer-intro">Buttercream:</span> Classic and smooth, perfect for any occasion.
                    </div>
                    <div>
                        <span className="answer-intro">Cream Cheese:</span> Tangy and rich, pairs well with red velvet and carrot cake.
                    </div>
                    <div>
                        <span className="answer-intro">Chocolate Ganache:</span> Luxurious chocolate topping for the chocoholics.
                    </div>
                    <div>
                        <span className="answer-intro"> Whipped Cream:</span> Light and fluffy, ideal for fruit - flavored cupcakes.
                    </div>
                </div>
                <div className="questions">
                    What toppings are available ?
                </div>
                <div className="faq-answers">Customize your cupcakes with our selection of six delightful toppings
                </div>
                <div className="answers">
                    <div>
                        <span className="answer-intro">Sprinkles:</span> Colorful and fun!
                    </div>
                    <div>
                        <span className="answer-intro">Chopped Nuts:</span> Add a crunchy texture.
                    </div>
                    <div>
                        <span className="answer-intro">Fresh Berries:</span>Perfect for a fruity twist.
                    </div>
                    <div>
                        <span className="answer-intro">Mini Chocolate Chips:</span> For the chocolate lovers.
                    </div>
                    <div>
                        <span className="answer-intro">Toasted Coconut:</span> Tropical vibes in every bite.
                    </div>
                    <div>
                        <span className="answer-intro"> Homemade Marshmallows:</span> chewy sweet marshmallows.
                        <div>Ask and we will torch them for you, so you can enjoy that toasty flavor!</div>
                    </div>
                </div>
                <div className="questions">
                    Do you offer seasonal flavors ?
                </div>
                <div className="answers">
                    Absolutely! We love celebrating the seasons. Keep an eye on our menu for special cupcake flavors that change throughout the year.
                    From pumpkin spice in fall to refreshing citrus in summer, there’s always something new to try!
                </div>
                <div className="questions">
                    How can I place an order ?
                </div>
                <div className="faq-answers">You have three convenient options:</div>
                <div className="answers">
                    <div>Give us a call at <span className="phonenumber">(305) 555-0123</span></div>
                    <div>Send your order details to <span className="phonenumber">sweettreats@crazygoodcupcakes.com</span></div>
                    <div>Place your order online on our website.</div>
                </div>
                <div className="questions">
                    Can I order gluten - free cupcakes ?
                </div>
                <div className="answers">
                    Certainly! We make gluten-free cupcakes to order.
                    Please place your order at least 48 hours in advance to ensure we can prepare them just right.
                </div>
            </div>
            <h3 className="bottom-banner-faq">Thank you for choosing Crazy Good Cupcake Shop!
                We can’t wait to sweeten your day with our delightful treats! 🧁🍰
            </h3>
            <MDBanner />
        </div>
    )
}

export default Faq;
