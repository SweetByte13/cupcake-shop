import NavBar from "../components/NavBar";


function Careers() {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <div>
                <h1>Join Our Team</h1>
                <div>
                    <div>
                        <img src="https://media.gettyimages.com/id/1212674749/photo/smiling-hispanic-bakers-satisfied-with-their-vegan-cupcakes.jpg?s=612x612&w=0&k=20&c=IBQjKH0iNWuG01XmDJw-7DxJksPkaFGi7N7KHewTMjE="
                            alt="smiling coworkers happily working together" />
                    </div>
                    <p>
                        Hospitality is at the heart of the Crazy Good Cupcake Shop experience.
                        We believe a respectful, empathetic working environment is crucial to creating a positive team experience and keeping our guests happy.
                        Interested in one of the sweetest gigs around?
                        Visit our careers page to see openings at our U.S. locations.
                    </p>
                </div>
                <div>
                    <h3>Join the Team:</h3>
                    <form class="career-form">
                        <input type="text" name="name" placeholder="Full Name..." />
                        <input type="text" name="email" placeholder="Email..." />
                        <input type="text" name="dob" placeholder="Date of Birth..." />
                        <input type="text" name="resume" placeholder="Resume" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Careers;