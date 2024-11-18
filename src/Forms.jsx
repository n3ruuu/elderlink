/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react'
import Modal from './Modal' // Assuming Modal is in the same directory
import axios from 'axios'

const Forms = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [formsData, setFormsData] = useState([])

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	const fetchForms = async () => {
		try {
			const response = await axios.get('http://localhost:5000/forms')
			setFormsData(response.data)
		} catch (error) {
			console.error('Error fetching data:', error)
		}
	}
	// Fetch data from the server
	useEffect(() => {
		fetchForms()
	}, [])

	// Group forms by category
	const groupedForms = formsData.reduce((acc, form) => {
		if (!acc[form.category]) {
			acc[form.category] = []
		}
		acc[form.category].push(form)
		return acc
	}, {})

	return (
		<section id="forms" className="relative p-8 m-36 text-[24px]">
			<h1 className="text-6xl pb-8 font-bold text-[#219EBC] mb-8 border-b-2 w-[85%] border-b-[#7671714D]">
				Application Forms
			</h1>

			{/* Dynamically render categories and forms */}
			{Object.entries(groupedForms).map(([category, forms]) => (
				<div key={category} className="mb-12">
					<h3 className="text-3xl font-semibold text-[#023047] mb-4">{category}</h3>
					<ul className="list-disc pl-8 text-[#219EBC]">
						{forms.map((form) => (
							<li key={form.id} className="cursor-pointer">
								<a
									href={`http://localhost:5000/${form.pdfLink}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									{form.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			))}

			{/* Submit Form Button */}
			<div className="mt-6">
				<button
					className="text-[#F5F5FA] text-center bg-[#219EBC] px-8 text-[24px] py-2 rounded-lg hover:bg-[#1A7F8C]"
					onClick={openModal}
				>
					Submit Form
				</button>
			</div>

			{/* Modal Component */}
			{isModalOpen && <Modal closeModal={closeModal} formsData={formsData} />}
		</section>
	)
}

export default Forms
