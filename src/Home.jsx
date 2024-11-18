import { Link, Element } from 'react-scroll'
import ElderlinkLogo from './assets/elderlink-logo.png'
import './home.css'

const Home = () => {
	return (
		<section id="home">
			<nav className="home-nav">
				{/* Hamburger Menu Button (visible only in mobile view) */}
				<div className="hamburger-menu">
					<button className="hamburger-btn">
						<span className="bar"></span>
						<span className="bar"></span>
						<span className="bar"></span>
					</button>
				</div>

				{/* Logo (centered in mobile view) */}
				<div className="logo-container">
					<img className="logo" src={ElderlinkLogo} alt="Elderlink Logo" />
				</div>

				{/* Navigation Links */}
				<ul className="nav-links">
					<li>
						<Link to="home" smooth={true} duration={500} className="nav-link">
							Home
						</Link>
					</li>
					<li>
						<Link to="about" smooth={true} duration={500} className="nav-link">
							About
						</Link>
					</li>
					<li>
						<Link to="news" smooth={true} duration={500} className="nav-link">
							News
						</Link>
					</li>
					<li>
						<Link to="event" smooth={true} duration={500} className="nav-link">
							Events
						</Link>
					</li>
					<li>
						<Link to="forms" smooth={true} duration={500} className="nav-link">
							Forms
						</Link>
					</li>
				</ul>
				<button className="contact-button">
					<Link to="contact" smooth={true} duration={500}>
						Contact Us
					</Link>
				</button>
			</nav>

			<Element name="home" className="home-section">
				{/* Background Image */}
				<div className="absolute inset-0 mix-blend-overlay bg-cover bg-center bg-custom-bg opacity-[0.07]"></div>
				{/* Gradient Overlay */}
				<div className="absolute inset-0 mix-blend-overlay bg-gradient-to-b from-[#F5F5FA] to-[#C1F3FF]"></div>
				{/* Content */}
				<h1 className="home-heading">
					<span className="highlight-text">Empowering</span> the Filipino <br /> Senior Citizen
					Community
				</h1>
				<p className="home-description">
					Empowering communities by linking generations through enhanced <br /> connectivity and
					community engagement.
				</p>
			</Element>
		</section>
	)
}

export default Home
