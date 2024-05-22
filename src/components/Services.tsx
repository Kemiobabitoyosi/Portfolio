import React from 'react';

interface Service {
  icon: string;
  title: string;
  description: string;
}

const servicesData: Service[] = [
  {
    icon: "fas fa-globe",
    title: "Web Development",
    description: "Building responsive and dynamic websites to bring your vision to life on the web."
  },
  {
    icon: "fas fa-laptop-code",
    title: "Frontend Services",
    description: "Designing and implementing engaging, user-friendly interfaces with the latest frontend technologies."
  },
  {
    icon: "fas fa-microphone-alt",
    title: "Voiceover Service",
    description: "Delivering high-quality voiceover services for commercials, narrations, and multimedia projects."
  }
];

const Services: React.FC = () => {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">My services</h2>
        <div className="serv-content">
          {servicesData.map((service, index) => (
            <div className="card" key={index}>
              <div className="box">
                <i className={service.icon}></i>
                <div className="text">{service.title}</div>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
