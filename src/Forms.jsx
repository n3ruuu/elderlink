/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react'
import Modal from './Modal' // Assuming Modal is in the same directory
import axios from 'axios'
import './css/Forms.css'

const Forms = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [formsData, setFormsData] = useState([])

	const closeModal = () => {
		setIsModalOpen(false)
	}

	const fetchForms = async () => {
		try {
			const response = await axios.get('http://localhost:5000/forms')
			// Filter to only include forms with status "Active"
			const activeForms = response.data.filter((form) => form.status === 'Active')
			setFormsData(activeForms)
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
		<section id="forms" className="forms-section">
			<h1 className="forms-heading">Form Library</h1>

			{formsData.length === 0 ? (
				<p className="placeholder-message">No active forms available at the moment.</p>
			) : (
				Object.entries(groupedForms).map(([category, forms]) => (
					<div key={category} className="mb-12">
						<h3 className="category-heading">{category}</h3>
						<ul className="form-list">
							{forms.map((form) => (
								<li key={form.id} className="form-item">
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
				))
			)}

			{/* Modal Component */}
			{isModalOpen && <Modal closeModal={closeModal} formsData={formsData} />}
		</section>
	)
}

export default Forms
