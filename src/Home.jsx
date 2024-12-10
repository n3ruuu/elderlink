import { useState } from 'react'
import { Link, Element } from 'react-scroll'
import ElderlinkLogo from './assets/elderlink-logo.png'
import './css/Home.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoCloseSharp } from 'react-icons/io5'
import Modal from './Register/Modal'

const Home = () => {
	const [isOpenSideBar, setIsOpenSidebar] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	const toggleSideBar = () => {
		setIsOpenSidebar(!isOpenSideBar)
	}

	return (
		<section id="home" className="Home__section">
			<nav className="nav">
				<img className="logo" src={ElderlinkLogo} alt="Elderlink Logo" />
				<ul>
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
				<button onClick={openModal}>Register</button>

				{isModalOpen && <Modal onClose={closeModal} />}
			</nav>
			<header className="Home__header-mobile">
				<RxHamburgerMenu className="Home__hamburger-menu" onClick={toggleSideBar} />
				<img className="logo" src={ElderlinkLogo} alt="Elderlink Logo" />
			</header>
			{/* Sidebar */}
			<div className={`home_overlay ${isOpenSideBar ? 'open' : ''}`} onClick={toggleSideBar}></div>
			<div className={`sidebar ${isOpenSideBar ? 'open' : ''}`}>
				<IoCloseSharp className="Home__close-hamburger" onClick={toggleSideBar} />
				<img className="Home__sidebar-image" src={ElderlinkLogo} alt="Elderlink Logo" />
				<ul>
					<li>
						<Link to="home" smooth={true} duration={500} onClick={toggleSideBar}>
							Home
						</Link>
					</li>
					<li>
						<Link to="about" smooth={true} duration={500} onClick={toggleSideBar}>
							About
						</Link>
					</li>
					<li>
						<Link to="news" smooth={true} duration={500} onClick={toggleSideBar}>
							News
						</Link>
					</li>
					<li>
						<Link to="event" smooth={true} duration={500} onClick={toggleSideBar}>
							Events
						</Link>
					</li>
					<li>
						<Link to="forms" smooth={true} duration={500} onClick={toggleSideBar}>
							Forms
						</Link>
					</li>
					<li>
						<Link to="contact" smooth={true} duration={500} onClick={toggleSideBar}>
							Contact Us
						</Link>
					</li>
				</ul>
			</div>
			<Element name="home" className="home-content">
				<div className="background-overlay bg-custom-bg"></div>
				<div className="background-overlay bg-gradient"></div>
				<h1 className="slogan">
					<span>Empowering</span> the Filipino <br /> Senior Citizen Community
				</h1>
				<p>
					Empowering communities by linking generations through enhanced <br /> connectivity and community engagement.
				</p>
			</Element>
		</section>
	)
}

export default Home
