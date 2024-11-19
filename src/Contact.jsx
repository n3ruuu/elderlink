const Contact = () => {
	return (
		<section id="contact" className="relative p-8 sm:p-12 lg:p-16 flex flex-col items-center">
			{/* Background Image Overlay */}
			<div className="absolute inset-0 bg-cover bg-center bg-contact-bg opacity-40"></div>
			{/* Color Overlay */}
			<div className="absolute inset-0 bg-[#219EBC] opacity-70"></div>

			{/* Content */}
			<div className="relative z-10 text-center">
				<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#F5F5FA]">
					Contact Us
				</h1>
				<h2 className="text-xl sm:text-2xl text-[#F5F5FA] font-light">
					elderlink.support@gmail.com
				</h2>
			</div>

			{/* Officers and Area Coordinators Section */}
			<div className="relative z-10 mt-12 lg:mt-16 text-center">
				<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5FA] mb-4">
					Association of Senior Citizen
				</h2>
				<h3 className="text-2xl sm:text-3xl font-semibold text-[#F5F5FA] mb-8">
					Mojon Chapter Officers (2024-2026)
				</h3>
				<div className="text-[#F5F5FA] text-lg sm:text-xl font-light space-y-2">
					<p>
						<strong>President:</strong> Engr. Ruperto DJ. Celis
					</p>
					<p>
						<strong>Vice President:</strong> Ma. Gracia B. Javier
					</p>
					<p>
						<strong>Secretary:</strong> Esmeralda T. Soriano
					</p>
					<p>
						<strong>Treasurer:</strong> Rosario M. Pengson
					</p>
					<p>
						<strong>Auditor:</strong> Irma R. Reyes
					</p>
					<p>
						<strong>P.R.O.:</strong> Lydia F. Hufano
					</p>
					<p>
						<strong>Adviser:</strong> Celia SP. Mendiola
					</p>
				</div>

				<h3 className="text-2xl sm:text-3xl font-semibold text-[#F5F5FA] mt-12 mb-6">
					Area Coordinators
				</h3>
				<div className="text-[#F5F5FA] text-lg sm:text-xl font-light space-y-2">
					<p>
						<strong>Barangay Kapitolyo:</strong> Josephine G. Julian
					</p>
					<p>
						<strong>Felicisima Village:</strong> Leni T. Salonga, Lydia F. Hufano
					</p>
					<p>
						<strong>San Felipe Subd.:</strong> Edna H. Celis, Carmencita C. Lopez, Loreto S. Salazar
					</p>
					<p>
						<strong>Mojon P1 to P3:</strong> Flaviano D. Sajulga, Amado G. Carating
					</p>
					<p>
						<strong>San Jose Subd.:</strong> Marilyn J. Reyes
					</p>
					<p>
						<strong>Golden Grain Villas:</strong> Margareth Herrera
					</p>
					<p>
						<strong>Other Areas:</strong> Atanacio Chica Jr.
					</p>
				</div>
			</div>
		</section>
	)
}

export default Contact
