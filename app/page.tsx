"use client";

import { useEffect, useRef, useState } from "react";

const programs = [
  {
    number: "01",
    title: "Artificial Intelligence",
    short: "AI",
    text: "Understand the foundations of AI and explore how intelligent technologies are shaping tomorrow.",
  },
  {
    number: "02",
    title: "Digital Skills",
    short: "DIGITAL",
    text: "Build confidence with digital tools, workflows and technology used in the modern world.",
  },
  {
    number: "03",
    title: "Industry Readiness",
    short: "CAREER",
    text: "Develop practical capabilities, professional confidence and real-world experience.",
  },
  {
    number: "04",
    title: "Innovation",
    short: "CREATE",
    text: "Turn ideas into meaningful solutions and learn how technology can create impact.",
  },
];

const journey = [
  {
    number: "01",
    title: "Discover",
    text: "Explore your interests, technology and future possibilities.",
  },
  {
    number: "02",
    title: "Learn",
    text: "Build knowledge through structured training and guided learning.",
  },
  {
    number: "03",
    title: "Build",
    text: "Apply your knowledge through practical activities and projects.",
  },
  {
    number: "04",
    title: "Grow",
    text: "Take your skills forward with confidence and future readiness.",
  },
];

export default function Home() {
  const [activeProgram, setActiveProgram] = useState(0);
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const programRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = programRefs.current.indexOf(
              entry.target as HTMLDivElement
            );

            if (index !== -1) {
              setActiveProgram(index);
            }
          }
        });
      },
      {
        threshold: 0.55,
      }
    );

    programRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      revealObserver.observe(element);
    });

    return () => revealObserver.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="site-shell">
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="nav-inner">
          <button
            className="brand"
            onClick={() => scrollTo("home")}
            aria-label="AAROHAAN Home"
          >
            <img
              src="/aarohan-logo.jpg"
              alt="AAROHAAN"
              className="brand-logo"
            />
            <div className="brand-copy">
              <strong>AAROHAAN</strong>
              <span>AI FELLOWSHIP PROGRAM</span>
            </div>
          </button>

          <nav className="nav-links">
            <button onClick={() => scrollTo("home")}>Home</button>
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("programs")}>Programs</button>
            <button onClick={() => scrollTo("journey")}>Journey</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </nav>

          <button
            className="nav-cta"
            onClick={() => {
              setSubmitted(false);
              setFormOpen(true);
            }}
          >
            Register
            <span>↗</span>
          </button>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="hero-section">
        <div className="rgb-orb orb-one" />
        <div className="rgb-orb orb-two" />
        <div className="rgb-orb orb-three" />

        <div className="hero-grid-lines" />

        <div className="hero-inner">
          <div className="hero-content reveal">
            <div className="government-row">
              <span>ITDA @ PADERU</span>
              <i />
              <span>GOVERNMENT OF ANDHRA PRADESH</span>
            </div>

            <div className="eyebrow">
              <span />
              AI FELLOWSHIP PROGRAM
            </div>

            <h1>
              Empowering
              <em>Talent.</em>
              Elevating
              <em>Futures.</em>
            </h1>

            <p className="hero-description">
              AAROHAAN is an AI Fellowship Program designed to develop
              future-ready talent through structured training, practical
              learning and technology-focused programs.
            </p>

            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={() => scrollTo("programs")}
              >
                Explore Programs
                <span>→</span>
              </button>

              <button
                className="secondary-button"
                onClick={() => scrollTo("about")}
              >
                Discover AAROHAAN
                <span>↗</span>
              </button>
            </div>

            <div className="hero-mini-stats">
              <div>
                <strong>1000+</strong>
                <span>Students</span>
              </div>
              <div>
                <strong>30+</strong>
                <span>Expert Trainers</span>
              </div>
              <div>
                <strong>20+</strong>
                <span>Industry Courses</span>
              </div>
            </div>
          </div>

          {/* HERO ARTWORK */}
          <div className="hero-art-wrap reveal">
            <div className="art-glow" />

            <div className="art-ring ring-one" />
            <div className="art-ring ring-two" />

            <div className="hero-art">
              <img
                src="/aarohan-hero-home.png"
                alt="AAROHAAN AI Fellowship"
              />
            </div>

            <div className="floating-card floating-card-top">
              <span className="float-icon">AI</span>
              <div>
                <strong>Learn</strong>
                <small>Future Skills</small>
              </div>
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="float-icon gold">✦</span>
              <div>
                <strong>Future Ready</strong>
                <small>Talent</small>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-bottom-line">
          <span>LEARN</span>
          <i />
          <span>BUILD</span>
          <i />
          <span>LEAD</span>
          <i />
          <span>IMPACT</span>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="about-section">
        <div className="section-container">
          <div className="section-heading reveal">
            <div className="section-label">
              <span /> ABOUT AAROHAAN
            </div>

            <h2>
              Building the
              <br />
              <em>next generation.</em>
            </h2>
          </div>

          <div className="about-layout">
            <div className="about-intro reveal">
              <span className="big-number">01</span>
              <h3>Talent meets opportunity.</h3>
            </div>

            <div className="about-text reveal">
              <p>
                Conducted with the support of <strong>ITDA @ Paderu</strong>,
                AAROHAAN creates an environment where young talent can learn,
                build and confidently prepare for the future.
              </p>

              <p>
                The fellowship brings together practical learning, digital
                capabilities, artificial intelligence and industry exposure
                into one structured journey.
              </p>

              <button
                className="text-button"
                onClick={() => scrollTo("journey")}
              >
                Explore the journey <span>→</span>
              </button>
            </div>
          </div>

          <div className="about-pillars reveal">
            <div>
              <span>01</span>
              <strong>Learn</strong>
              <p>Structured learning</p>
            </div>

            <div>
              <span>02</span>
              <strong>Build</strong>
              <p>Hands-on projects</p>
            </div>

            <div>
              <span>03</span>
              <strong>Experience</strong>
              <p>Real-world exposure</p>
            </div>

            <div>
              <span>04</span>
              <strong>Grow</strong>
              <p>Career readiness</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROGRAMS ================= */}
      <section id="programs" className="programs-section">
        <div className="programs-background" />

        <div className="section-container">
          <div className="program-header reveal">
            <div>
              <div className="section-label light">
                <span /> WHAT YOU WILL LEARN
              </div>

              <h2>
                Skills for a
                <br />
                <em>changing world.</em>
              </h2>
            </div>

            <p>
              Explore the core learning areas designed to build confident,
              capable and future-ready talent.
            </p>
          </div>

          <div className="program-stage">
            <div className="program-progress">
              <span>0{activeProgram + 1}</span>
              <div>
                <i
                  style={{
                    width: `${((activeProgram + 1) / programs.length) * 100}%`,
                  }}
                />
              </div>
              <span>04</span>
            </div>

            <div className="program-list">
              {programs.map((program, index) => (
                <div
                  key={program.number}
                  ref={(element) => {
                    programRefs.current[index] = element;
                  }}
                  className={`program-card ${
                    activeProgram === index ? "active" : ""
                  }`}
                  onMouseEnter={() => setActiveProgram(index)}
                >
                  <div className="program-top">
                    <span>{program.number}</span>
                    <span>{program.short}</span>
                  </div>

                  <div className="program-icon">
                    {index === 0 && "AI"}
                    {index === 1 && "◆"}
                    {index === 2 && "↗"}
                    {index === 3 && "✦"}
                  </div>

                  <h3>{program.title}</h3>

                  <p>{program.text}</p>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormOpen(true);
                    }}
                  >
                    Explore <span>→</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= JOURNEY ================= */}
      <section id="journey" className="journey-section">
        <div className="section-container">
          <div className="journey-heading reveal">
            <div className="section-label">
              <span /> LEARNING JOURNEY
            </div>

            <h2>
              From learning
              <br />
              to <em>leading.</em>
            </h2>

            <p>
              A simple journey from discovering possibilities to building
              confidence for the future.
            </p>
          </div>

          <div className="journey-track">
            <div className="journey-line">
              <div />
            </div>

            {journey.map((item, index) => (
              <div className="journey-step reveal" key={item.number}>
                <div className="journey-number">{item.number}</div>

                <div className="journey-dot">
                  <span />
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                {index < journey.length - 1 && (
                  <div className="journey-arrow">→</div>
                )}
              </div>
            ))}
          </div>

          <div className="future-panel reveal">
            <div>
              <span className="section-label light">
                <span /> BEGIN YOUR JOURNEY
              </span>

              <h2>
                Your future is
                <br />
                <em>worth building.</em>
              </h2>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormOpen(true);
              }}
            >
              Register Student
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="contact-grid">
            <div className="contact-copy reveal">
              <div className="section-label">
                <span /> CONTACT AAROHAAN
              </div>

              <h2>
                Start your
                <br />
                <em>journey.</em>
              </h2>

              <p>
                Interested in the AAROHAAN AI Fellowship? Share your details
                and our team can connect with you.
              </p>

              <div className="contact-info">
                <div>
                  <span>PROGRAM</span>
                  <strong>AAROHAAN AI FELLOWSHIP</strong>
                </div>

                <div>
                  <span>SUPPORTED BY</span>
                  <strong>ITDA @ PADERU</strong>
                </div>
              </div>
            </div>

            <div className="contact-form-card reveal">
              {submitted ? (
                <div className="success-state">
                  <div className="success-icon">✓</div>
                  <h3>Thank you.</h3>
                  <p>
                    Your student information has been received successfully.
                  </p>

                  <button
                    className="primary-button"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit another response
                    <span>→</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-heading">
                    <span>STUDENT REGISTRATION</span>
                    <h3>Tell us about you.</h3>
                  </div>

                  <label>
                    Student Name
                    <input
                      name="studentName"
                      type="text"
                      placeholder="Enter your full name"
                      required
                    />
                  </label>

                  <label>
                    Email Address
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </label>

                  <label>
                    Phone Number
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                    />
                  </label>

                  <label>
                    State
                    <select name="state" required defaultValue="">
                      <option value="" disabled>
                        Select your state
                      </option>
                      <option>Andhra Pradesh</option>
                      <option>Telangana</option>
                      <option>Karnataka</option>
                      <option>Tamil Nadu</option>
                      <option>Kerala</option>
                      <option>Maharashtra</option>
                      <option>Odisha</option>
                      <option>Other</option>
                    </select>
                  </label>

                  <button type="submit" className="form-submit">
                    Submit Student Information
                    <span>→</span>
                  </button>

                  <small>
                    Your information is collected for fellowship
                    communication and registration purposes.
                  </small>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/aarohan-logo.jpg" alt="AAROHAAN" />
            <div>
              <strong>AAROHAAN</strong>
              <span>AI FELLOWSHIP PROGRAM</span>
            </div>
          </div>

          <div className="footer-center">
            <span>ITDA @ PADERU</span>
            <i />
            <span>Government of Andhra Pradesh</span>
          </div>

          <div className="fynity-credit">
            <span>Developed by</span>
            <img src="/fynity-logo.jpg" alt="FYNITY" />
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 AAROHAAN AI Fellowship Program</span>
          <span>EMPOWERING TALENT • ELEVATING FUTURES</span>
        </div>
      </footer>

      {/* ================= REGISTER MODAL ================= */}
      {formOpen && (
        <div
          className="modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setFormOpen(false);
            }
          }}
        >
          <div className="register-modal">
            <button
              className="modal-close"
              onClick={() => setFormOpen(false)}
              aria-label="Close"
            >
              ×
            </button>

            {submitted ? (
              <div className="success-state">
                <div className="success-icon">✓</div>
                <h3>Registration received.</h3>
                <p>
                  Thank you for your interest in the AAROHAAN AI Fellowship
                  Program.
                </p>

                <button
                  className="primary-button"
                  onClick={() => {
                    setSubmitted(false);
                  }}
                >
                  Done
                  <span>→</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-heading">
                  <span>JOIN AAROHAAN</span>
                  <h3>Register your interest.</h3>
                  <p>Student information</p>
                </div>

                <label>
                  Student Name
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                  />
                </label>

                <label>
                  Email Address
                  <input
                    type="email"
                    placeholder="name@example.com"
                    required
                  />
                </label>

                <label>
                  Phone Number
                  <input
                    type="tel"
                    placeholder="+91"
                    required
                  />
                </label>

                <label>
                  State
                  <select required defaultValue="">
                    <option value="" disabled>
                      Select state
                    </option>
                    <option>Andhra Pradesh</option>
                    <option>Telangana</option>
                    <option>Karnataka</option>
                    <option>Tamil Nadu</option>
                    <option>Kerala</option>
                    <option>Maharashtra</option>
                    <option>Other</option>
                  </select>
                </label>

                <button type="submit" className="form-submit">
                  Submit Registration
                  <span>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}