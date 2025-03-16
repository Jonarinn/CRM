import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

/** The home page
 *
 * This page along with the dashboard are the ones that need to stand out.
 *
 * We lowkey could only include the home page and the dashboard. That is let this
 * page explain all the features we implement.
 *
 * @returns The home page
 */
const Home = () => {
    return (
        <div>
            <LandingPageHeadline />
            <RealtimeChatbotSection />
        </div>
    );
};

export default Home;

/** The first thing you see when visit the webpage
 *
 * I think there should be a call to action (CTA) button that takes companies
 * to the login/signup pages and some very clean graphic.
 */
const LandingPageHeadline = () => {
    return (
        <section className="head">
            <div className="head-text">
                <h1>Create Relations by Creating Stories</h1>
                <Link to={"/dashboard"}>
                    <button>Go to Dashboard</button>
                </Link>
            </div>
        </section>
    );
};

/** A section on the Home page that explains what the chatbot does.
 *
 * It should mention how we forward the user to a human agent if the customer wants
 * to. As well as how we implement AI into it.
 *
 */

const RealtimeChatbotSection = () => {
    return (
        <section>
            <div>
                <h2>Custom Chatbot</h2>
            </div>
        </section>
    );
};
