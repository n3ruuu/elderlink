const Contact = () => {
	return (
		<section className="relative p-16 flex flex-col items-center">
			{/* Background Image Overlay */}
			<div className="absolute inset-0 bg-cover bg-center bg-contact-bg opacity-30"></div>
			{/* Color Overlay */}
			<div className="absolute inset-0 bg-[#219EBC] opacity-60"></div>

			{/* Content */}
			<div className="relative z-10">
				<h1 className="text-6xl font-bold mb-4 text-[#F5F5FA] text-center">Contact Us</h1>
				<p className="mb-6 text-[#F5F5FA] text-[24px]">
					Use the form below to send us an e-mail with your question.
				</p>

				<form className="w-[100%] bg-transparent p-6 text-[20px] font-extralight">
					{/* Flex Container for Name and Contact Number */}
					<div className="flex gap-4 mb-4">
						{/* Name Field */}
						<div className="flex-1">
							<label htmlFor="name" className="block text-[#F5F5FA] font-extralight mb-2">
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#219EBC] font-extralight"
								required
							/>
						</div>

						{/* Contact Number Field */}
						<div className="flex-1">
							<label htmlFor="contactNumber" className="block text-[#F5F5FA] font-extralight mb-2">
								Contact Number
							</label>
							<input
								type="tel"
								id="contactNumber"
								name="contactNumber"
								className="w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#219EBC]"
								required
							/>
						</div>
					</div>

					{/* Question Field */}
					<div className="mb-4">
						<label htmlFor="question" className="block text-[#F5F5FA] font-extralight mb-2">
							Question
						</label>
						<textarea
							id="question"
							name="question"
							rows="5"
							className="w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#219EBC]"
							required
						></textarea>
					</div>

					{/* Send Message Button */}
					<div className="flex justify-center mt-5">
						<button
							type="submit"
							className="bg-[#219EBC] text-white py-2 px-4 rounded-md hover:bg-[#1B7A8A] font-medium w-[300px] transition duration-200"
						>
							Send Message
						</button>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Contact
