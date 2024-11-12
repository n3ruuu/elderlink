import { Link, Element } from 'react-scroll'
import ElderlinkLogo from './assets/elderlink-logo.png'

const Home = () => {
	return (
		<section id="home" className="min-h-screen flex flex-col">
			<nav className="bg-[#f5f5fa] flex justify-between gap-[100px] items-center px-20 py-5">
				<img
					className="h-[100px] transition-transform duration-300 transform hover:scale-105 cursor-pointer"
					src={ElderlinkLogo}
					alt="Elderlink Logo"
				/>
				<ul className="flex text-[#1F1F29] font-bold text-[24px] gap-20">
					<li>
						<Link
							to="home"
							smooth={true}
							duration={500}
							className="transition-colors duration-300 hover:text-[#219EBC] cursor-pointer"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="about"
							smooth={true}
							duration={500}
							className="transition-colors duration-300 hover:text-[#219EBC] cursor-pointer"
						>
							About
						</Link>
					</li>
					<li>
						<Link
							to="news"
							smooth={true}
							duration={500}
							className="transition-colors duration-300 hover:text-[#219EBC] cursor-pointer"
						>
							News
						</Link>
					</li>
					<li>
						<Link
							to="event"
							smooth={true}
							duration={500}
							className="transition-colors duration-300 hover:text-[#219EBC] cursor-pointer"
						>
							Events
						</Link>
					</li>
					<li>
						<Link
							to="forms"
							smooth={true}
							duration={500}
							className="transition-colors duration-300 hover:text-[#219EBC] cursor-pointer"
						>
							Forms
						</Link>
					</li>
				</ul>
				<button className="bg-[#219EBC] text-[#f5f5fa] text-[24px] font-bold w-48 h-16 rounded-lg transition-all duration-300 hover:bg-[#1B7D98] cursor-pointer">
					<Link to="contact" smooth={true} duration={500}>
						Contact Us
					</Link>
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
