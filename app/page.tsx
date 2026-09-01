"use client";

import { FormEvent, useEffect, useState } from "react";

const AAROHAN_LOGO = "/aarohan-logo.jpg";
const AAROHAN_HERO = "/hero-image1.png";
const FYNITY_LOGO = "/fynity-logo.jpg";
const GOVT_LOGO = "/govt.png";
const NITI_LOGO = "/niti-logo.jpg";
const AICTE_LOGO = "/aicte-logo.png";
const AWS_LOGO = "/aws-logo.png";

// All homepage assets must be placed directly inside /public.
// If your filename is different, change ONLY these constants.

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function BrandLogo({
  className = "",
  footer = false,
}: {
  className?: string;
  footer?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`brand-fallback ${footer ? "footer-fallback" : ""} ${className}`}>
        <div className="brand-fallback-mark">A</div>
        <div>
          <strong>AAROHAN</strong>
          <span>AI FELLOWSHIP PROGRAM</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={AAROHAN_LOGO}
      alt="AAROHAN AI Fellowship Program"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

export default function Home() {
  const [studentOpen, setStudentOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  function openStudentForm() {
    setSubmitted(false);
    setStudentOpen(true);
    setMobileOpen(false);
  }

  function closeStudentForm() {
    setStudentOpen(false);
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const testimonials = [
    {
      quote:
        "AAROHAN transformed the way I learn and think. The projects and mentorship helped me grow beyond my limits.",
      name: "Priya S.",
      role: "AI Fellow",
    },
    {
      quote:
        "The hands-on learning and expert guidance gave me the confidence to build solutions and pursue new opportunities.",
      name: "Arjun K.",
      role: "AI Fellow",
    },
    {
      quote:
        "AAROHAN is more than a program. It is a journey that prepares learners for a meaningful and successful future.",
      name: "Neha R.",
      role: "AI Fellow",
    },
  ];

  return (
    <main className="aarohan-site">
      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <header className="site-nav">
        <div className="nav-container">
          <button
            className="brand-button"
            onClick={() => scrollToSection("home")}
            aria-label="AAROHAN home"
          >
            <BrandLogo className="nav-logo" />

            <div className="brand-copy">
              <strong>AAROHAN</strong>
              <span>AI FELLOWSHIP PROGRAM</span>
            </div>
          </button>

          <nav className={`desktop-nav ${mobileOpen ? "mobile-open" : ""}`}>
            <button onClick={() => scrollToSection("home")}>Home</button>
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("training")}>
              Training
            </button>
            <button onClick={() => scrollToSection("journey")}>
              Journey
            </button>
            <button onClick={() => scrollToSection("contact")}>
              Contact
            </button>

            <button
              className="nav-cta"
              onClick={openStudentForm}
            >
              Login
              <span>→</span>
            </button>
          </nav>

          <button
            className={`mobile-toggle ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section id="home" className="hero-section">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-grid" />

        <div className="hero-inner">
          <div className="hero-copy reveal">
            <div className="government-badge">
              <span className="status-dot" />
              GOVERNMENT OF ANDHRA PRADESH
            </div>

            <div className="hero-kicker">
              <span />
              AAROHAN AI FELLOWSHIP PROGRAM
            </div>

            <h1>
              Rise with
              <br />
              <em>AAROHAN.</em>
            </h1>

            <p className="hero-description">
              Empowering talent through AI, technology and future-ready
              learning. Build practical skills, create opportunities and
              shape tomorrow.
            </p>

            <div className="hero-actions">
              <button className="primary-button" onClick={openStudentForm}>
                Start Your Journey
                <span>→</span>
              </button>

              <button
                className="secondary-button"
                onClick={() => scrollToSection("about")}
              >
                Discover AAROHAN
                <span>↗</span>
              </button>
            </div>

            <div className="hero-mini-stats">
              <div>
                <strong>AI</strong>
                <span>Learning</span>
              </div>

              <i />

              <div>
                <strong>360°</strong>
                <span>Development</span>
              </div>

              <i />

              <div>
                <strong>∞</strong>
                <span>Possibilities</span>
              </div>
            </div>
          </div>

          {/* KEEPING YOUR HERO PATH EXACTLY */}
          <div className="hero-visual reveal">
            <div className="hero-glow" />

            <div className="hero-image-shell">
              <div className="hero-image-ring ring-a" />
              <div className="hero-image-ring ring-b" />

              <img
                src={AAROHAN_HERO}
                alt="AAROHAN AI Fellowship Program"
                className="hero-image"
              />

              <div className="floating-info floating-one">
                <span className="floating-icon">AI</span>
                <div>
                  <strong>Future Skills</strong>
                  <small>Learn • Build • Grow</small>
                </div>
              </div>

              <div className="floating-info floating-two">
                <span className="floating-icon gold">✦</span>
                <div>
                  <strong>Student First</strong>
                  <small>Opportunity focused</small>
                </div>
              </div>

              <span className="hero-dot dot-one" />
              <span className="hero-dot dot-two" />
              <span className="hero-dot dot-three" />
            </div>
          </div>
        </div>

        <div className="hero-benefits reveal">
          <div className="benefit-item">
            <span className="benefit-symbol">01</span>
            <div>
              <strong>Future-ready skills</strong>
              <small>AI, technology & digital capability</small>
            </div>
          </div>

          <div className="benefit-divider" />

          <div className="benefit-item">
            <span className="benefit-symbol">02</span>
            <div>
              <strong>Hands-on learning</strong>
              <small>Projects, activities & practical work</small>
            </div>
          </div>

          <div className="benefit-divider" />

          <div className="benefit-item">
            <span className="benefit-symbol">03</span>
            <div>
              <strong>Expert guidance</strong>
              <small>Mentorship & structured support</small>
            </div>
          </div>

          <div className="benefit-divider" />

          <div className="benefit-item">
            <span className="benefit-symbol">04</span>
            <div>
              <strong>Measurable progress</strong>
              <small>Learning, assessment & outcomes</small>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          IMPACT STRIP
      ========================================================= */}

      <section className="impact-strip">
        <div className="impact-inner">
          <div className="impact-intro">
            <span>PROGRAM IMPACT</span>
            <h2>
              Learning designed
              <br />
              for <em>real outcomes.</em>
            </h2>
          </div>

          <div className="impact-stat">
            <strong>04</strong>
            <span>Learning pillars</span>
          </div>

          <div className="impact-stat">
            <strong>360°</strong>
            <span>Skill development</span>
          </div>

          <div className="impact-stat">
            <strong>100%</strong>
            <span>Practical focus</span>
          </div>

          <div className="impact-stat">
            <strong>∞</strong>
            <span>Future possibilities</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}

      <section id="about" className="section about-section">
        <div className="section-container">
          <div className="section-label reveal">
            <span>01</span>
            ABOUT AAROHAN
          </div>

          <div className="about-layout">
            <div className="about-heading reveal">
              <h2>
                Building
                <br />
                <em>future-ready</em>
                <br />
                talent.
              </h2>
            </div>

            <div className="about-content reveal">
              <p className="large-copy">
                AAROHAN creates a structured learning environment where
                learners can discover technology, develop practical skills
                and build the confidence required for a changing world.
              </p>

              <div className="about-divider" />

              <p>
                The program brings together technology education, practical
                projects, assessments, communication and professional
                development into one connected learning journey.
              </p>

              <div className="about-points">
                <div>
                  <span>01</span>
                  <strong>Technology education</strong>
                  <small>AI & modern technology foundations</small>
                </div>

                <div>
                  <span>02</span>
                  <strong>Practical learning</strong>
                  <small>Projects and real-world application</small>
                </div>

                <div>
                  <span>03</span>
                  <strong>Continuous assessment</strong>
                  <small>Track progress and learning outcomes</small>
                </div>

                <div>
                  <span>04</span>
                  <strong>Professional development</strong>
                  <small>Communication, confidence and readiness</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TRAINING
      ========================================================= */}

      <section id="training" className="section training-section">
        <div className="section-container">
          <div className="section-label light reveal">
            <span>02</span>
            TRAINING EXPERIENCE
          </div>

          <div className="training-header">
            <div className="reveal">
              <h2>
                Learn.
                <br />
                <em>Build. Lead.</em>
              </h2>
            </div>

            <p className="reveal">
              A structured progression that moves learners from foundational
              understanding to practical capability and future opportunity.
            </p>
          </div>

          <div className="training-grid">
            <article className="training-card reveal">
              <div className="training-top">
                <span>01</span>
                <b>01</b>
              </div>

              <div className="training-icon">AI</div>

              <h3>Artificial Intelligence</h3>

              <p>
                Understand the foundations of AI, emerging technologies and
                responsible technology use.
              </p>

              <span className="card-arrow">↗</span>
            </article>

            <article className="training-card reveal">
              <div className="training-top">
                <span>02</span>
                <b>02</b>
              </div>

              <div className="training-icon">&lt;/&gt;</div>

              <h3>Digital Skills</h3>

              <p>
                Develop confidence with modern digital tools, workflows and
                technology-enabled problem solving.
              </p>

              <span className="card-arrow">↗</span>
            </article>

            <article className="training-card reveal">
              <div className="training-top">
                <span>03</span>
                <b>03</b>
              </div>

              <div className="training-icon">◆</div>

              <h3>Practical Projects</h3>

              <p>
                Turn concepts into practical work through activities,
                assignments and meaningful technology projects.
              </p>

              <span className="card-arrow">↗</span>
            </article>

            <article className="training-card reveal">
              <div className="training-top">
                <span>04</span>
                <b>04</b>
              </div>

              <div className="training-icon">↗</div>

              <h3>Industry Readiness</h3>

              <p>
                Strengthen communication, confidence and professional skills
                for future education and career pathways.
              </p>

              <span className="card-arrow">↗</span>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          JOURNEY
      ========================================================= */}

      <section id="journey" className="section journey-section">
        <div className="section-container">
          <div className="journey-heading reveal">
            <div className="section-label">
              <span>03</span>
              THE AAROHAN JOURNEY
            </div>

            <h2>
              From learning
              <br />
              to <em>becoming.</em>
            </h2>

            <p>
              A clear pathway that helps every learner move from discovery
              toward practical capability and meaningful opportunity.
            </p>
          </div>

          <div className="journey-flow">
            <article className="journey-step reveal">
              <div className="step-circle">01</div>

              <div className="step-icon">✦</div>

              <h3>Discover</h3>

              <p>
                Understand your strengths, interests and possibilities through
                guided learning.
              </p>
            </article>

            <div className="journey-connector">
              <span>→</span>
            </div>

            <article className="journey-step reveal">
              <div className="step-circle">02</div>

              <div className="step-icon">⌘</div>

              <h3>Develop</h3>

              <p>
                Build practical skills through structured training, projects
                and expert mentorship.
              </p>
            </article>

            <div className="journey-connector">
              <span>→</span>
            </div>

            <article className="journey-step reveal">
              <div className="step-circle">03</div>

              <div className="step-icon">↗</div>

              <h3>Rise</h3>

              <p>
                Apply your skills with confidence and move towards meaningful
                opportunities.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          GOVERNANCE / DELIVERY
      ========================================================= */}

      <section className="delivery-section">
        <div className="delivery-pattern" />

        <div className="section-container">
          <div className="delivery-heading reveal">
            <div className="section-label light">
              <span>04</span>
              DELIVERY & TRANSPARENCY
            </div>

            <h2>
              Built for
              <br />
              <em>measurable learning.</em>
            </h2>

            <p>
              AAROHAN combines structured delivery with continuous tracking,
              creating a clearer view of participation, learning progress and
              outcomes.
            </p>
          </div>

          <div className="delivery-grid">
            <div className="delivery-card reveal">
              <span>01</span>
              <strong>Structured programs</strong>
              <p>
                Cohorts, schedules, curriculum and delivery plans stay
                connected.
              </p>
            </div>

            <div className="delivery-card reveal">
              <span>02</span>
              <strong>Continuous assessment</strong>
              <p>
                Daily and weekly assessments provide visibility into learning
                progress.
              </p>
            </div>

            <div className="delivery-card reveal">
              <span>03</span>
              <strong>Attendance visibility</strong>
              <p>
                Participation can be recorded consistently across training
                sessions.
              </p>
            </div>

            <div className="delivery-card reveal">
              <span>04</span>
              <strong>Outcome focused</strong>
              <p>
                The learning journey is designed around skills, confidence and
                future readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIALS
      ========================================================= */}

      <section className="section testimonial-section">
        <div className="section-container">
          <div className="testimonial-heading reveal">
            <div className="section-label">
              <span>05</span>
              LEARNER VOICES
            </div>

            <h2>
              Real stories.
              <br />
              <em>Real impact.</em>
            </h2>
          </div>

          <div className="testimonial-stage reveal">
            <button
              className="testimonial-arrow"
              onClick={() =>
                setActiveTestimonial(
                  (activeTestimonial - 1 + testimonials.length) %
                    testimonials.length
                )
              }
              aria-label="Previous testimonial"
            >
              ←
            </button>

            <div className="testimonial-card">
              <div className="quote-mark">“</div>

              <p>{testimonials[activeTestimonial].quote}</p>

              <div className="testimonial-person">
                <div className="person-avatar">
                  {testimonials[activeTestimonial].name.charAt(0)}
                </div>

                <div>
                  <strong>{testimonials[activeTestimonial].name}</strong>
                  <span>{testimonials[activeTestimonial].role}</span>
                </div>
              </div>
            </div>

            <button
              className="testimonial-arrow"
              onClick={() =>
                setActiveTestimonial(
                  (activeTestimonial + 1) % testimonials.length
                )
              }
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={index === activeTestimonial ? "active" : ""}
                onClick={() => setActiveTestimonial(index)}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PARTNERS
      ========================================================= */}

      <section className="partners-section">
        <div className="section-container">
          <div className="partners-heading reveal">
            <span />
            <p>IN PARTNERSHIP WITH EXCELLENCE</p>
            <span />
          </div>

          <div className="partners-row reveal">
            <div className="partner-item partner-logo-item">
              <img src={GOVT_LOGO} alt="Government of Andhra Pradesh" className="partner-logo" style={{ width: "auto", height: "54px", maxWidth: "180px", objectFit: "contain" }} />
            </div>

            <div className="partner-separator" />

            <div className="partner-item partner-logo-item">
              <img src={NITI_LOGO} alt="NITI Aayog" className="partner-logo" style={{ width: "auto", height: "54px", maxWidth: "180px", objectFit: "contain" }} />
            </div>

            <div className="partner-separator" />

            <div className="partner-item partner-logo-item">
              <img src={AICTE_LOGO} alt="AICTE" className="partner-logo" style={{ width: "auto", height: "54px", maxWidth: "180px", objectFit: "contain" }} />
            </div>

            <div className="partner-separator" />

            <div className="partner-item partner-logo-item fynity-partner">
              <img src={FYNITY_LOGO} alt="Fynity Innovations" className="partner-logo fynity-partner-logo" style={{ width: "auto", height: "54px", maxWidth: "180px", objectFit: "contain" }} />
            </div>

            <div className="partner-separator" />

            <div className="partner-item partner-logo-item">
              <img src={AWS_LOGO} alt="Amazon Web Services" className="partner-logo" style={{ width: "auto", height: "54px", maxWidth: "180px", objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="final-cta">
        <div className="cta-orbit orbit-left" />
        <div className="cta-orbit orbit-right" />

        <div className="section-container">
          <div className="final-cta-inner reveal">
            <div>
              <div className="section-label light">
                <span>06</span>
                START YOUR JOURNEY
              </div>

              <h2>
                Your next chapter
                <br />
                <em>starts here.</em>
              </h2>

              <p>
                Take the first step towards future-ready skills, practical
                learning and new possibilities.
              </p>
            </div>

            <button className="cta-button" onClick={openStudentForm}>
              Start Your Journey
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}

      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="contact-layout">
            <div className="contact-copy reveal">
              <div className="section-label">
                <span>07</span>
                CONTACT AAROHAN
              </div>

              <h2>
                Let&apos;s start a
                <br />
                <em>conversation.</em>
              </h2>

              <p>
                Have a question about the fellowship, training or partnership
                opportunities? Connect with the AAROHAN team.
              </p>

              <div className="contact-details">
                <div>
                  <span>PROGRAM</span>
                  <strong>AAROHAN AI FELLOWSHIP</strong>
                </div>

                <div>
                  <span>LOCATION</span>
                  <strong>Andhra Pradesh, India</strong>
                </div>

                <div>
                  <span>SUPPORTED BY</span>
                  <strong>Government of Andhra Pradesh</strong>
                </div>
              </div>
            </div>

            <form className="contact-form reveal" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  <span>Full Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </label>

                <label>
                  <span>Email Address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  <span>Phone Number</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </label>

                <label>
                  <span>Subject</span>
                  <select name="subject" defaultValue="Training enquiry">
                    <option>Training enquiry</option>
                    <option>AI Fellowship</option>
                    <option>Partnership</option>
                    <option>General enquiry</option>
                  </select>
                </label>
              </div>

              <label className="message-field">
                <span>Message</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  required
                />
              </label>

              <button type="submit" className="submit-button">
                Send Message
                <span>→</span>
              </button>

              {submitted && (
                <div className="form-success">
                  ✓ Thank you. Your message has been received.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="site-footer">
        <div className="footer-top">
          <div className="section-container footer-grid">
            <div className="footer-brand-block">
              <div className="footer-brand-row">
                <BrandLogo className="footer-logo" footer />

                <div>
                  <strong>AAROHAN</strong>
                  <span>AI FELLOWSHIP PROGRAM</span>
                </div>
              </div>

              <p>
                Empowering talent through AI, technology and future-ready
                learning. Building skills. Creating opportunities.
              </p>

              <div className="footer-government-note">
                <span>SUPPORTED BY</span>
                <strong>GOVERNMENT OF ANDHRA PRADESH</strong>
              </div>
            </div>

            <div className="footer-column">
              <h3>Quick Links</h3>

              <button onClick={() => scrollToSection("home")}>Home</button>
              <button onClick={() => scrollToSection("about")}>
                About AAROHAN
              </button>
              <button onClick={() => scrollToSection("training")}>
                Training
              </button>
              <button onClick={() => scrollToSection("journey")}>
                Journey
              </button>
              <button onClick={() => scrollToSection("contact")}>
                Contact
              </button>
            </div>

            <div className="footer-column">
              <h3>Learning</h3>

              <button onClick={() => scrollToSection("training")}>
                Curriculum
              </button>
              <button onClick={() => scrollToSection("journey")}>
                Learning Journey
              </button>
              <button onClick={openStudentForm}>
                Student Registration
              </button>
              <button onClick={() => scrollToSection("about")}>
                Outcomes
              </button>
            </div>

            <div className="footer-column footer-contact-column">
              <h3>Contact</h3>

              <span>Andhra Pradesh, India</span>
              <span>+91 XXXXX XXXXX</span>
              <span>info@aarohan.ap.gov.in</span>

              <button onClick={openStudentForm} className="footer-register">
                Register Student →
              </button>
            </div>

            <div className="footer-developer">
              <span>Technology & Innovation Partner</span>

              <div className="fynity-footer-brand">
                <img
                  src={FYNITY_LOGO}
                  alt="Fynity Innovations"
                  className="fynity-footer-logo"
                />

                <div>
                  <strong>FYNITY</strong>
                  <small>INNOVATIONS</small>
                </div>
              </div>

              <p>Developed by Fynity Innovations</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="section-container">
            <div>
              © {new Date().getFullYear()} AAROHAN AI Fellowship Program.
              All rights reserved.
            </div>

            <div className="footer-policies">
              <span>Privacy Policy</span>
              <span>|</span>
              <span>Terms & Conditions</span>
            </div>
          </div>
        </div>
      </footer>

      {/* =========================================================
          STUDENT INFORMATION MODAL
      ========================================================= */}

      {studentOpen && (
        <div
          className="student-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeStudentForm();
            }
          }}
        >
          <div className="student-modal">
            <button
              className="modal-close"
              onClick={closeStudentForm}
              aria-label="Close"
            >
              ×
            </button>

            {!submitted ? (
              <>
                <div className="modal-brand">
                  <BrandLogo className="modal-logo" />

                  <div>
                    <strong>AAROHAN</strong>
                    <span>AI FELLOWSHIP PROGRAM</span>
                  </div>
                </div>

                <div className="modal-heading">
                  <div className="section-label">
                    <span>REGISTER</span>
                  </div>

                  <h2>
                    Start your
                    <br />
                    <em>journey.</em>
                  </h2>

                  <p>
                    Enter your details and the AAROHAN team can connect with
                    you regarding the fellowship program.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="modal-field full">
                    <label>Student Full Name *</label>
                    <input
                      type="text"
                      name="studentName"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="modal-two">
                    <div className="modal-field">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="studentEmail"
                        placeholder="student@example.com"
                        required
                      />
                    </div>

                    <div className="modal-field">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        name="studentPhone"
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div className="modal-two">
                    <div className="modal-field">
                      <label>State *</label>
                      <select defaultValue="" required>
                        <option value="" disabled>
                          Select your state
                        </option>
                        <option>Andhra Pradesh</option>
                        <option>Telangana</option>
                        <option>Karnataka</option>
                        <option>Tamil Nadu</option>
                        <option>Odisha</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="modal-field">
                      <label>District / City</label>
                      <input
                        type="text"
                        placeholder="Enter district or city"
                      />
                    </div>
                  </div>

                  <div className="modal-field full">
                    <label>Area of Interest *</label>

                    <select defaultValue="" required>
                      <option value="" disabled>
                        Select an area
                      </option>
                      <option>Artificial Intelligence</option>
                      <option>Digital Skills</option>
                      <option>Industry Readiness</option>
                      <option>Future Technologies</option>
                      <option>Not Sure Yet</option>
                    </select>
                  </div>

                  <div className="modal-field full">
                    <label>Message</label>

                    <textarea
                      rows={3}
                      placeholder="Tell us anything you would like to know..."
                    />
                  </div>

                  <div className="privacy-note">
                    <span>✓</span>
                    Your information will be used only for AAROHAN fellowship
                    enquiry and communication.
                  </div>

                  <button type="submit" className="modal-submit">
                    Submit Student Information
                    <span>→</span>
                  </button>
                </form>
              </>
            ) : (
              <div className="modal-success">
                <div className="success-check">✓</div>

                <div className="section-label">
                  <span>SUBMISSION RECEIVED</span>
                </div>

                <h2>
                  Thank you for
                  <br />
                  <em>connecting.</em>
                </h2>

                <p>
                  Your information has been received successfully. The
                  AAROHAN team can contact you regarding the fellowship
                  program.
                </p>

                <button
                  className="modal-submit"
                  onClick={closeStudentForm}
                >
                  Continue
                  <span>→</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}