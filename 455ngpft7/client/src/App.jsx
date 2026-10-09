import { useState } from "react";
import "./App.css";

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    year: "",
  });

  const events = [
    {
      id: 1,
      icon: "💡",
      category: "HACKATHON",
      title: "AI Innovation Challenge",
      date: "18 OCT 2026",
      time: "09:00 AM",
      venue: "Innovation Lab",
      description:
        "Build creative AI solutions and turn your ideas into real-world projects.",
    },
    {
      id: 2,
      icon: "💻",
      category: "TECHNOLOGY",
      title: "CodeCraft Contest",
      date: "24 OCT 2026",
      time: "10:00 AM",
      venue: "Computer Lab 2",
      description:
        "Test your programming skills through exciting coding challenges.",
    },
    {
      id: 3,
      icon: "🚀",
      category: "PROJECT EXPO",
      title: "FutureTech Expo",
      date: "02 NOV 2026",
      time: "11:00 AM",
      venue: "Main Auditorium",
      description:
        "Showcase innovative student projects and explore future technologies.",
    },
    {
      id: 4,
      icon: "🎤",
      category: "WORKSHOP",
      title: "Tech Talk 2026",
      date: "10 NOV 2026",
      time: "02:00 PM",
      venue: "Seminar Hall",
      description:
        "Learn from industry experts and discover new career opportunities.",
    },
    {
      id: 5,
      icon: "🏆",
      category: "COMPETITION",
      title: "Campus Battle",
      date: "18 NOV 2026",
      time: "09:30 AM",
      venue: "College Ground",
      description:
        "Compete with talented students and prove your skills.",
    },
    {
      id: 6,
      icon: "🎨",
      category: "CREATIVE",
      title: "Design Sprint",
      date: "25 NOV 2026",
      time: "01:00 PM",
      venue: "Design Studio",
      description:
        "Create beautiful digital experiences and solve creative challenges.",
    },
  ];

  const openRegistration = (event) => {
    setSelectedEvent(event);
    setForm({
      name: "",
      email: "",
      department: "",
      year: "",
    });
  };

  const closeRegistration = () => {
    setSelectedEvent(null);
  };

  const handleChange = (e) => {
    setForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedEvent) return;

    alert(
      `Registration successful!\n\nEvent: ${selectedEvent.title}\nName: ${form.name}\nEmail: ${form.email}`
    );

    closeRegistration();

    setForm({
      name: "",
      email: "",
      department: "",
      year: "",
    });
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="brand">
          <div className="brand-mark">RVS</div>
          <div>
            <h2>RVS</h2>
            <span>College Event Hub</span>
          </div>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#events">Events</a>
          <a href="#about">About</a>
          <a href="#events" className="nav-button">
            Explore Events <span>↗</span>
          </a>
        </nav>
      </header>

      <main id="home">
        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <div className="small-label">
              ✦ YOUR CAMPUS. YOUR MOMENTS.
            </div>

            <h1>
              Make Your
              <br />
              <span>Campus</span>
              <br />
              Experience
              <br />
              Unforgettable.
            </h1>

            <p>
              Discover exciting events, meet talented people,
              learn new skills and create memories that last.
            </p>

            <div className="hero-buttons">
              <a href="#events" className="primary-button">
                Discover Events <span>→</span>
              </a>

              <a href="#about" className="secondary-button">
                Learn More
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>25+</strong>
                <span>Events</span>
              </div>
              <div>
                <strong>1K+</strong>
                <span>Students</span>
              </div>
              <div>
                <strong>15+</strong>
                <span>Clubs</span>
              </div>
            </div>
          </div>

          {/* HERO ART */}
          <div className="hero-right">
            <div className="yellow-circle"></div>

            <div className="floating-card card-one">
              <span>🔥</span>
              <div>
                <strong>Trending Now</strong>
                <small>AI Innovation Challenge</small>
              </div>
            </div>

            <div className="main-illustration">
              <div className="illustration-top">RVS CAMPUS</div>
              <div className="illustration-icon">🎓</div>
              <h3>
                Learn.
                <br />
                Build.
                <br />
                Shine.
              </h3>
              <div className="illustration-decoration">RVS ✦ 2026</div>
            </div>

            <div className="floating-card card-two">
              <span>✓</span>
              <div>
                <strong>Easy Registration</strong>
                <small>Join events in seconds</small>
              </div>
            </div>
          </div>
        </section>

        {/* EVENTS */}
        <section className="events-section" id="events">
          <div className="section-top">
            <div>
              <div className="small-label">
                ✦ WHAT'S HAPPENING
              </div>
              <h2>
                Events worth
                <span>showing up for.</span>
              </h2>
            </div>

            <p>
              From coding challenges to creative workshops,
              find something that matches your passion.
            </p>
          </div>

          <div className="event-grid">
            {events.map((event) => (
              <article className="event-card" key={event.id}>
                <div className="event-card-top">
                  <div className="event-icon">{event.icon}</div>
                  <span className="event-number">
                    0{event.id}
                  </span>
                </div>

                <div className="event-category">
                  {event.category}
                </div>

                <h3>{event.title}</h3>

                <p className="event-description">
                  {event.description}
                </p>

                <div className="event-details">
                  <span>📅 {event.date}</span>
                  <span>⏰ {event.time}</span>
                  <span>📍 {event.venue}</span>
                </div>

                <button
                  className="event-button"
                  onClick={() => openRegistration(event)}
                >
                  Register Now <span>↗</span>
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section" id="about">
          <div className="about-box">
            <div className="about-number">01 / ABOUT</div>

            <div className="about-content">
              <div className="small-label">
                ✦ WHY RVS?
              </div>

              <h2>
                More than events.
                <br />
                <span>It's your campus story.</span>
              </h2>

              <p>
                RVS brings college events into one simple platform.
                Discover what's happening, register instantly and
                participate with your friends. Make every campus
                moment meaningful.
              </p>

              <div className="about-features">
                <div>
                  <b>01</b>
                  <strong>Discover</strong>
                  <span>Find events you love.</span>
                </div>

                <div>
                  <b>02</b>
                  <strong>Register</strong>
                  <span>Reserve your spot easily.</span>
                </div>

                <div>
                  <b>03</b>
                  <strong>Participate</strong>
                  <span>Make memories together.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COLLEGE INFO */}
        <section className="college-section">
          <div>
            <span className="college-eyebrow">
              COLLEGE COMMUNITY
            </span>
            <h2>Mahendra College of Engineering</h2>
            <p>Department of Information Technology</p>
          </div>

          <div className="college-badge">
            <span>🎓</span>
            <strong>RVS</strong>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-main">
          <a href="#home" className="footer-brand">
            <div className="brand-mark">RVS</div>
            <div>
              <h3>RVS</h3>
              <p>Mahendra College of Engineering</p>
              <p>Department of Information Technology</p>
            </div>
          </a>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#events">Events</a>
            <a href="#about">About</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 RVS. All rights reserved.</span>
          <span>
            Created by <strong>Mugesh</strong> ✦
          </span>
        </div>
      </footer>

      {/* REGISTRATION MODAL */}
      {selectedEvent && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeRegistration();
            }
          }}
        >
          <div
            className="registration-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="registration-title"
          >
            <button
              type="button"
              className="close-button"
              onClick={closeRegistration}
              aria-label="Close registration"
            >
              ×
            </button>

            <div className="modal-icon">
              {selectedEvent.icon}
            </div>

            <div className="small-label">
              RVS EVENT REGISTRATION
            </div>

            <h2 id="registration-title">Join the event.</h2>

            <p className="modal-event">
              {selectedEvent.title}
            </p>

            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />

              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />

              <label htmlFor="department">Department</label>
              <select
                id="department"
                name="department"
                value={form.department}
                onChange={handleChange}
                required
              >
                <option value="">Select department</option>
                <option value="Information Technology">
                  Information Technology
                </option>
                <option value="Computer Science Engineering">
                  Computer Science Engineering
                </option>
                <option value="Electronics & Communication">
                  Electronics &amp; Communication
                </option>
                <option value="Mechanical Engineering">
                  Mechanical Engineering
                </option>
                <option value="Civil Engineering">
                  Civil Engineering
                </option>
              </select>

              <label htmlFor="year">Year</label>
              <select
                id="year"
                name="year"
                value={form.year}
                onChange={handleChange}
                required
              >
                <option value="">Select year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>

              <button
                type="submit"
                className="modal-submit"
              >
                Complete Registration <span>→</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;