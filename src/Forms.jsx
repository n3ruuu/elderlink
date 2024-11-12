/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'

const Forms = () => {
	const [selectedFile, setSelectedFile] = useState(null)

	const handleFileChange = (event) => {
		const file = event.target.files[0]
		setSelectedFile(file)
		if (file) {
			alert(`File selected: ${file.name}`)
		}
	}

	const handleSubmit = () => {
		if (selectedFile) {
			alert(`Form submitted with file: ${selectedFile.name}`)
		} else {
			alert('No file selected.')
		}
	}

	return (
		<section id="forms" className="relative p-8 m-36 text-[24px]">
			<h1 className="text-6xl pb-8 font-bold text-[#219EBC] mb-8 border-b-2 w-[85%] border-b-[#7671714D]">
				Application Forms
			</h1>

			{/* OSCA Forms */}
			<div className="mb-12">
				<h3 className="text-3xl font-semibold text-[#023047] mb-4">
					Office of the Senior Citizens Affairs (OSCA) Forms
				</h3>
				<ul className="list-disc pl-8 text-[#219EBC]">
					<li className="cursor-pointer">
						<a
							href="http://localhost:5000/uploads/1731356355348.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							OSCA Registration Form
						</a>
					</li>

					<li className="cursor-pointer">
						<a
							href="http://localhost:5000/uploads/1731174245205.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							Death Benefit Form
						</a>
					</li>

					<li className="cursor-pointer">Social Pension Intake Application Form</li>
					<li className="cursor-pointer">Citizen’s Charter Application Form</li>
					<li className="cursor-pointer">Replacement Application Form</li>
				</ul>
			</div>

			{/* Senior Citizen Services and Support Forms */}
			<div className="mb-12">
				<h3 className="text-3xl font-semibold text-[#023047] mb-4">
					Senior Citizen Services and Support Forms
				</h3>
				<ul className="list-disc pl-8 text-[#219EBC]">
					<li className="cursor-pointer">Senior Citizen's Discount Card Form</li>
					<li className="cursor-pointer">Healthcare Assistance Application Form</li>
					<li className="cursor-pointer">Financial Aid Application Form</li>
					<li className="cursor-pointer">Home Care Services Application Form</li>
					<li className="cursor-pointer">Transportation Assistance Application Form</li>
					<li className="cursor-pointer">Social Welfare Programs Enrollment Form</li>
					<li className="cursor-pointer">Housing Assistance Application Form</li>
					<li className="cursor-pointer">Emergency Assistance Request Form</li>
				</ul>
			</div>

			{/* Legal and Justice Forms */}
			<div>
				<h3 className="text-3xl font-semibold text-[#023047] mb-4">Legal and Justice Forms</h3>
				<ul className="list-disc pl-8 text-[#219EBC]">
					<li className="cursor-pointer">Legal Aid Request Form</li>
					<li className="cursor-pointer">Court Mediation Request Form</li>
					<li className="cursor-pointer">Legal Documentation Assistance Form</li>
					<li className="cursor-pointer">Victim Assistance Application Form</li>
					<li className="cursor-pointer">Legal Rights Education Seminar Registration Form</li>
				</ul>
			</div>

			{/* File Upload Section */}
			<div className="mt-12">
				<input type="file" onChange={handleFileChange} />
			</div>

			{/* Submit Form Button */}
			<div className="mt-6">
				<button
					onClick={handleSubmit}
					className="text-[#F5F5FA] text-center bg-[#219EBC] px-8 text-[24px] py-2 rounded-lg hover:bg-[#1A7F8C]"
				>
					Submit Form
				</button>
			</div>
		</section>
	)
}

export default Forms
