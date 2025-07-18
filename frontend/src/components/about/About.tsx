
import githiredCover from "../../assets/githired_uwt_cover.jpeg";

export const About = () => {

  return (
    <div className="bg-offwhite">
      {/* Hero Section */}
      <section 
        className=" d-flex align-items-center justify-content-center position-relative mt-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${githiredCover})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container text-center text-white">
          <h1 className="display-3 fw-bold mb-4 mt-3">Who we are?</h1>
          <p className="lead fs-5 mb-5">
            We are an RSO at the University of Washington Tacoma, with a goal of helping students break into the tech field.
          </p>
          <a href="https://discord.gg/sSzzyJrHK3" target="_blank" rel="noopener noreferrer" className="btn btn-light btn-lg mb-5">
            <i className="fab fa-discord me-2"></i>
            Join Our Discord
          </a>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-5">
        <div className="container-fluid px-0">
          <div className="card border-0 shadow-sm w-100">
            <div className="card-body p-5">
              <h3 className="card-title text-primary mb-4 text-center">
                <i className="fas fa-bullseye me-2"></i>
                Our Mission
              </h3>
              <p className="card-text fs-5 text-center">
                GitHired exists to support students who are actively working toward an internships or 
                full-time position in the tech industry. Our goal is to provide a collaborative, resource-driven, 
                and an inclusive space for students. We focus on building technical and 
                soft skills through interview prep, mock interviews, resume reviews, and networking events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-5">What We Do</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="fas fa-code fa-2x text-primary"></i>
                  </div>
                  <h5 className="card-title">Technical Workshops</h5>
                  <p className="card-text">
                    Leetcode sessions and best practices to build 
                    strong problem solving skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="fas fa-project-diagram fa-2x text-primary"></i>
                  </div>
                  <h5 className="card-title">Project-Based Learning</h5>
                  <p className="card-text">
                    Hackathons to build your portfolio 
                    and gain hands-on experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="fas fa-network-wired fa-2x text-primary"></i>
                  </div>
                  <h5 className="card-title">Industry Connections</h5>
                  <p className="card-text">
                    Guest speakers and networking events to 
                    connect with industry professionals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="fas fa-briefcase fa-2x text-primary"></i>
                  </div>
                  <h5 className="card-title">Career Development</h5>
                  <p className="card-text">
                    Resume reviews and interview prep to prepare 
                    you for your early career.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="fas fa-users fa-2x text-primary"></i>
                  </div>
                  <h5 className="card-title">Community Building</h5>
                  <p className="card-text">
                    Study groups, mentorship programs, and social events to 
                    build lasting connections with peers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="fas fa-trophy fa-2x text-primary"></i>
                  </div>
                  <h5 className="card-title">Leadership Opportunities</h5>
                  <p className="card-text">
                    Take on officer roles and project management positions to 
                    develop leadership skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};