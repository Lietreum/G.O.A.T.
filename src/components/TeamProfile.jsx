import React from "react";

const TeamProfile = () => {
  const teamMembers = [
    { name: "M Rafif Ramadhan", role: "FrontEnd", message: "kitu we lah" },
    { name: "M Dzaky Supriatna", role: "FrontEnd", message: "Pro Watch and Learn" },
    { name: "Rakan D Darmawan", role: "FrontEnd", message: "Bebas-bebas..." },
    { name: "Zaidan Maulana Ahmad", role: "FrontEnd", message: "@Valhalla2nd" },
    { name: "Zaky Azhari", role: "BackEnd", message: "Lorem Ipsum" },
  ];

  return (
    <div className="has-text-centered">
      <h2 className="title is-2">Meet Our Team</h2>
      <div className="columns">
        {teamMembers.map((member, index) => (
          <div key={index} className="column">
            <div className="card">
              <div className="card-content">
                <p className="title is-4">{member.name}</p>
                <p className="subtitle is-6">{member.role}</p>
                <div className="content">
                  <p>{member.message}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamProfile;
