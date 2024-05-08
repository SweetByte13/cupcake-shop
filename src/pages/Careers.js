import NavBar from "../components/NavBar";


function Careers() {
    return (
        <div>
            <header>
                <NavBar />
            </header>
                    <div className="career-header">
                        <h2 className="our-team">Our Team...</h2>
                        <h5 className="our-saying">Come for the cupcakes, stay for the comradery!</h5>
                    </div>
                    <div className="career-container">
                    <img className="career-photo"
                        src="https://media.gettyimages.com/id/1212674749/photo/smiling-hispanic-bakers-satisfied-with-their-vegan-cupcakes.jpg?s=612x612&w=0&k=20&c=IBQjKH0iNWuG01XmDJw-7DxJksPkaFGi7N7KHewTMjE="
                            alt="smiling coworkers happily working together" />
                           <br></br>
                    <p className="career-para">
                        Hospitality is at the heart of the Crazy Good Cupcake Shop experience.
                        We believe a respectful, empathetic working environment is crucial to creating a positive team experience and keeping our guests happy.
                        Interested in one of the sweetest gigs around?
                        Visit our careers page to see openings at our U.S. locations.
                    </p>
                </div>
                <div>
                <form class="career-form">
                    <h3>Interested in Joining the Team:</h3>
                        <input type="text" name="name" placeholder="Full Name..." />
                        <input type="text" name="email" placeholder="Email..." />
                        <input type="text" name="dob" placeholder="Date of Birth..." />
                        <input type="text" name="resume" placeholder="Why do you want to work for crazy Good cupcakes?" />
                        <br></br>
                        <button type="submit">Submit</button>
                    </form>
                    </div>
        </div>
    )
}

export default Careers;