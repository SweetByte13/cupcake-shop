import MDBanner from "../components/MDBanner";
import NavBar from "../components/NavBar";


function Careers() {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <div className="career-header">
                <h4 className="our-team">Join Our Sweet Team...</h4>
                <h4 className="our-saying">Come For The Cupcakes, Stay For The Comradery!</h4>
            </div>
            <div className="career-container">
                <img className="career-photo"
                    src="https://media.gettyimages.com/id/1212674749/photo/smiling-hispanic-bakers-satisfied-with-their-vegan-cupcakes.jpg?s=612x612&w=0&k=20&c=IBQjKH0iNWuG01XmDJw-7DxJksPkaFGi7N7KHewTMjE="
                    alt="smiling coworkers happily working together" />
                <br></br>

                <div className="titles-career-page">Join Our Sweet Team at Crazy Good Cupcakes!</div>
                <p className="career-container">
                    <p className="career-para"> At Crazy Good Cupcakes, we don’t just bake cupcakes; we create moments of joy. Our bakery isn’t just a workplace; it’s a community of passionate bakers, artists, and dreamers.
                        We encourage our team members to experiment, innovate, and infuse their unique flair into our cupcakes. Whether it’s designing a new flavor, decorating cupcakes, or brainstorming seasonal specials, creativity is our secret ingredient.
                        Step into our bakery, and you’ll feel the warmth. Our team is like family—we celebrate birthdays, share stories, and cheer each other on during busy hours. We believe that a happy team creates delightful cupcakes.
                    </p>

                    <p className="career-para">From mastering the art of piping frosting to understanding flavor profiles, our bakery is a classroom. We provide training, workshops, and resources to help our team members grow their skills.
                        You’ll witness the joy on our guests faces as they take that first bite of a cupcake you’ve crafted. It’s a rewarding feeling that keeps us inspired.
                        Working at Crazy Good Cupcakes also means being part of the seasonal magic. From pumpkin-spiced autumn to citrus-infused summer, each season brings new flavors and excitement.
                    </p>

                    <p className="career-para">As if the comradery, passion, and training isn't enough we have another amazing perk of working with us: the Tasting Perk! You get to taste-test the cupcakes and frostings to ensure quality and help continue Crazy Good Cupcakes stellar standards. Imagine sampling a freshly baked cupcake straight from the oven.
                        It’s a tough job, but someone has to do it.
                    </p>
                    <p className="career-para">We also pride ourselves on our flexible work schedules. We understand that life happens. Whether you’re a student, a parent, or pursuing other passions, we offer flexible schedules to accommodate your needs.
                        Many of our team members have grown with us—from cupcake decorators to shift managers. If you’re dedicated and passionate, there’s room for growth.
                        So, if you’re ready to sprinkle some sweetness into your career, Crazy Good Cupcakes awaits.
                    </p>
                    <div className="titles-career-page">Join us in creating cupcakes that make hearts skip a beat and smiles bloom. Apply today! 🧁✨</div>
                </p>
            </div>
            <div>
                <form class="career-form">
                    <h3 className="form-title">Interested in Joining the Team:</h3>
                    <input type="text" name="name" placeholder="Full Name..." />
                    <input type="text" name="email" placeholder="Email..." />
                    <input type="text" name="dob" placeholder="Date of Birth..." />
                    <input className="input-reason" type="text" name="resume" placeholder="Why do you want to work for crazy Good cupcakes?" />
                    <br></br>
                    <button className="form-button" type="submit">Submit</button>
                </form>
            </div>
            <MDBanner />
        </div>
    )
}

export default Careers;