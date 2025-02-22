import React, { useState, useEffect } from "react";
import Abaigael_Savio from "./unifoodi_linkedin_pfps/Abaigael_Savio.jpg";
import Addison_Chen from "./unifoodi_linkedin_pfps/Addison_Chen.jpg";
import Alex_Yanez from "./unifoodi_linkedin_pfps/Alex_Yanez.jpg";
import Ali_Moradi from "./unifoodi_linkedin_pfps/Ali_Moradi.jpg";
import Anthony_Heard from "./unifoodi_linkedin_pfps/Anthony_Heard.jpg";
import Austin_Grey from "./unifoodi_linkedin_pfps/Austin_Grey.jpg";
import Daniel_Becker from "./unifoodi_linkedin_pfps/Daniel_Becker.jpg";
import Daniel_Guel from "./unifoodi_linkedin_pfps/Daniel_Guel.jpg";
import Miriya_Harth from "./unifoodi_linkedin_pfps/Miriya_Harth.jpg";
import Zara_White from "./unifoodi_linkedin_pfps/Zara_White.jpg";
import "./AboutUs.css"; // Import the CSS file

// List of team members with their image, name, and role
const teamMembers = [
  { name: "Anthony Heard", role: "Lead Developer", image: Anthony_Heard },
  { name: "Daniel Becker", role: "Software Engineer", image: Daniel_Becker },
  { name: "Abaigael Savio", role: "Product Manager", image: Abaigael_Savio },
  { name: "Addison Chen", role: "UI/UX Designer", image: Addison_Chen },
];

function AboutUs() {
  // State to keep track of the current team member index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next team member
  const nextMember = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  // Automatically move to the next team member every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextMember, 3000); // 3000 ms = 3 seconds

    // Clean up interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div className="container">
      <div className="card">
        <h1 className="heading">About Unifood</h1>

        {/* Mission Section */}
        <section className="mb-8">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            At Unifood, our mission is to reduce food waste by creating an
            innovative system that allows excess food to be shared and utilized
            efficiently. We strive to build a sustainable future where no food
            goes to waste.
          </p>
        </section>

        {/* Team Section */}
        <section className="team-members-section">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-text">
            Our team consists of passionate and talented individuals dedicated
            to making a positive impact on the environment and food
            sustainability.
          </p>
        </section>

        {/* Team Members Carousel */}
        <section className="team-members-section">
          <h2 className="section-title">Team Members</h2>

          {/* Carousel - Displaying the current team member */}
          <div className="team-member-card">
            <img
              src={teamMembers[currentIndex].image}
              alt={teamMembers[currentIndex].name}
              className="team-member-img"
            />
            <h3 className="team-member-name">
              {teamMembers[currentIndex].name}
            </h3>
            <p className="team-member-role">{teamMembers[currentIndex].role}</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
