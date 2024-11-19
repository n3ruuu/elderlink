import { Link, Element } from 'react-scroll'
import ElderlinkLogo from './assets/elderlink-logo.png'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useState } from 'react'

const Home = () => {
	// Detect screen size for iPhone XR (414px width)
	const isMobile = useMediaQuery('(max-width: 414px)')
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<section id="home" className="min-h-screen flex flex-col">
			<nav
				className={`bg-[#f5f5fa] flex items-center ${
					isMobile ? 'justify-between px-4 py-3' : 'gap-[100px] justify-evenly px-20 py-5'
				}`}
			>
				{/* Hamburger Menu for Mobile */}
				{isMobile && (
					<button
						className="absolute text-[#1F1F29] text-xl font-bold cursor-pointer"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						☰
					</button>
				)}
				{/* Logo */}
				<img
					className={`transition-transform duration-300 transform hover:scale-105 cursor-pointer ${
						isMobile ? 'h-[50px] mx-auto' : 'h-[100px]'
					}`}
					src={ElderlinkLogo}
					alt="Elderlink Logo"
				/>
				{/* Navigation Links */}
				{!isMobile && (
					<ul className="flex text-[24px] gap-20 text-[#1F1F29] font-bold">
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
				)}
				{/* Button */}
				{!isMobile && (
					<button className="bg-[#219EBC] text-[#f5f5fa] font-bold rounded-lg text-[24px] w-48 h-16 transition-all duration-300 hover:bg-[#1B7D98] cursor-pointer">
						<Link to="contact" smooth={true} duration={500}>
							Contact Us
						</Link>
					</button>
				)}
			</nav>
			{/* Mobile Menu Dropdown */}
			{isMobile && menuOpen && (
				<ul className="absolute top-16 left-0 w-full bg-[#f5f5fa] text-[#1F1F29] font-bold text-[18px] px-4 py-2 space-y-2 shadow-lg">
					<li>
						<Link
							to="home"
							smooth={true}
							duration={500}
							className="block transition-colors duration-300 hover:text-[#219EBC] cursor-pointer"
							onClick={() => setMenuOpen(false)}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="about"
							smooth={true}
							duration={500}
							className="block transition-colors duration-300 hover:text-[#219EBC] cursor-pointer"
							onClick={() => setMenuOpen(false)}
						>
							About
						</Link>
					</li>
					<li>
						<Link
							to="news"
							smooth={true}
							duration={500}
							className="block transition-colors duration-300 hover:text-[#219EBC] cursor-pointer"
							onClick={() => setMenuOpen(false)}
						>
							News
						</Link>
					</li>
					<li>
						<Link
							to="event"
							smooth={true}
							duration={500}
							className="block transition-colors duration-300 hover:text-[#219EBC] cursor-pointer"
							onClick={() => setMenuOpen(false)}
						>
							Events
						</Link>
					</li>
					<li>
						<Link
							to="forms"
							smooth={true}
							duration={500}
							className="block transition-colors duration-300 hover:text-[#219EBC] cursor-pointer"
							onClick={() => setMenuOpen(false)}
						>
							Forms
						</Link>
					</li>
					<li>
						<Link
							to="contact"
							smooth={true}
							duration={500}
							className="block transition-colors duration-300 hover:text-[#219EBC] cursor-pointer"
							onClick={() => setMenuOpen(false)}
						>
							Contact Us
						</Link>
					</li>
				</ul>
			)}
			<Element
				name="home"
				className={`relative flex-1 w-full flex flex-col items-center gap-5 ${
					isMobile ? 'justify-start pt-[40%]' : 'justify-center'
				}`}
			>
				{/* Background Image */}
				<div className="absolute inset-0 mix-blend-overlay bg-cover bg-center bg-custom-bg opacity-[0.07]"></div>
				{/* Gradient Overlay */}
				<div className="absolute inset-0 mix-blend-overlay bg-gradient-to-b from-[#F5F5FA] to-[#C1F3FF]"></div>
				{/* Content */}
				<h1
					className={`relative font-bold text-[#1F1F29] ${
						isMobile
							? 'text-[3.35rem] leading-tight text-left font-extrabold ml-6'
							: 'text-8xl text-center'
					}`}
				>
					<span className="text-[#219EBC]">Empowering</span> the Filipino {!isMobile && <br />}{' '}
					Senior Citizen Community
				</h1>
				<p
					className={`relative text-[#767171] ${
						isMobile ? 'text-[1.5rem] text-left w-[90%] ml-6' : 'text-[30px] text-center'
					}`}
				>
					Empowering communities by linking generations through enhanced {!isMobile && <br />}{' '}
					connectivity and community engagement.
				</p>
			</Element>
		</section>
	)
}

export default Home
