import { Link, Element } from 'react-scroll'
import ElderlinkLogo from './assets/elderlink-logo.png'

const Home = () => {
	return (
		<section id="home" className="min-h-screen flex flex-col">
			<nav className="bg-[#f5f5fa] flex justify-between items-center px-20 py-5">
				<img className="h-[100px]" src={ElderlinkLogo} alt="Elderlink Logo" />
				<ul className="flex text-[#1F1F29] font-bold gap-20">
					<li>
						<Link to="home" smooth={true} duration={500}>
							Home
						</Link>
					</li>
					<li>
						<Link to="about" smooth={true} duration={500}>
							About
						</Link>
					</li>
					<li>
						<Link to="features" smooth={true} duration={500}>
							Features
						</Link>
					</li>
					<li>
						<Link to="news" smooth={true} duration={500}>
							News
						</Link>
					</li>
					<li>
						<Link to="event" smooth={true} duration={500}>
							Events
						</Link>
					</li>
					<li>
						<Link to="forms" smooth={true} duration={500}>
							Forms
						</Link>
					</li>
					<li>
						<Link to="contact" smooth={true} duration={500}>
							Contact
						</Link>
					</li>
				</ul>
				<button className="bg-[#219EBC] text-[#f5f5fa] font-bold w-36 h-10 rounded-lg">
					Contact Us
				</button>
			</nav>
			<Element
				name="home"
				className="relative flex-1 w-full flex justify-center flex-col items-center gap-5"
			>
				{/* Background Image */}
				<div className="absolute inset-0 mix-blend-overlay bg-cover bg-center bg-custom-bg opacity-[0.07]"></div>
				{/* Gradient Overlay */}
				<div className="absolute inset-0 mix-blend-overlay bg-gradient-to-b from-[#F5F5FA] to-[#C1F3FF]"></div>
				{/* Content */}
				<h1 className="relative text-center text-8xl font-bold text-[#1F1F29]">
					<span className="text-[#219EBC]">Empowering</span> the Filipino <br /> Senior Citizen
					Community
				</h1>
				<p className="relative text-[#767171] text-[30px] text-center">
					Empowering communities by linking generations through enhanced <br /> connectivity and
					community engagement.
				</p>
			</Element>
		</section>
	)
}

export default Home
