import ElderlinkLogo from './assets/elderlink-logo.png'

const Home = () => {
	return (
		<div className="font-inter h-screen">
			<section className="min-h-screen flex flex-col">
				<nav className="bg-[#f5f5fa] flex justify-between items-center px-20 py-5">
					<img className="w-40 h-20" src={ElderlinkLogo} alt="Elderlink Logo" />
					<ul className="flex text-[#1F1F29] font-bold gap-20">
						<li>Home</li>
						<li>About</li>
						<li>Features</li>
						<li>News</li>
						<li>Events</li>
						<li>Contact</li>
					</ul>
					<button className="bg-[#219EBC] text-[#f5f5fa] font-bold w-36 h-10 rounded-lg">
						Contact Us
					</button>
				</nav>
				<div className="relative flex-1 w-full flex items-center justify-center">
					{/* Background Image */}
					<div className="absolute inset-0 bg-cover bg-center bg-custom-bg opacity-10"></div>
					{/* Gradient Overlay */}
					<div className="absolute inset-0 mix-blend-overlay bg-gradient-to-b from-[#F5F5FA] to-[#C1F3FF]"></div>
					{/* Content */}
					<h1 className="relative text-center text-9xl font-bold text-[#1F1F29]">
						<span className="text-[#219EBC]">Empowering</span> the Filipino <br /> Senior Citizen
						Community
					</h1>
				</div>
			</section>
		</div>
	)
}

export default Home
