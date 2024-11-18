/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { useState } from 'react'
import axios from 'axios'

const Modal = ({ closeModal, formsData }) => {
	const [applicantName, setApplicantName] = useState('')
	const [formType, setFormType] = useState('') // Store the title of the selected form
	const [file, setFile] = useState(null)
	const [loading, setLoading] = useState(false) // State for loading indicator

	const handleFileUpload = (e) => {
		setFile(e.target.files[0])
	}

	const handleSubmit = async () => {
		if (!applicantName || !formType) {
			alert('Please fill out all required fields.')
			return
		}

		const formData = new FormData()
		formData.append('applicantName', applicantName)
		formData.append('formType', formType) // Send the form's title (not id)
		if (file) formData.append('filePath', file)

		setLoading(true) // Show loading indicator

		try {
			const response = await axios.post('http://localhost:5000/application', formData, {
				headers: { 'Content-Type': 'multipart/form-data' },
			})

			alert(response.data.message)
			closeModal() // Close modal on success
		} catch (error) {
			console.error('Error submitting form:', error)
			alert('An error occurred while submitting the form.')
		} finally {
			setLoading(false) // Hide loading indicator
		}
	}

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
			<div className="bg-white rounded-lg shadow-lg w-[600px] p-6 relative">
				<button
					className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl p-2"
					onClick={closeModal}
					aria-label="Close modal"
				>
					&times;
				</button>
				<h2 className="text-3xl font-bold mb-6 text-center text-[#023047]">Submit Form</h2>

				<div className="space-y-6">
					<div>
						<label className="block text-gray-700 font-semibold mb-2">Applicant Name</label>
						<input
							type="text"
							className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#219EBC]"
							value={applicantName}
							onChange={(e) => setApplicantName(e.target.value)}
						/>
					</div>

					<div className="grid grid-cols-1 gap-6">
						<div>
							<label className="block text-gray-700 font-semibold mb-2">Form Type</label>
							<select
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#219EBC]"
								value={formType}
								onChange={(e) => setFormType(e.target.value)} // Use title for formType
							>
								<option value="">Select Form Type</option>
								{formsData.map((form) => (
									<option key={form.id} value={form.title}>
										{' '}
										{/* Use title for the value */}
										{form.title}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-between gap-6 mt-8">
					<div className="flex flex-col items-start">
						<label className="flex items-center px-6 py-2 border border-[#219EBC] text-[#219EBC] rounded-md cursor-pointer hover:bg-[#E0F2F1]">
							<span className="mr-2">Upload File</span>
							<input type="file" className="hidden" onChange={handleFileUpload} />
						</label>
						{file && (
							<span className="mt-2 text-sm text-gray-600">
								Selected file: <strong>{file.name}</strong>
							</span>
						)}
					</div>

					<button
						className="px-6 py-3 bg-[#219EBC] text-white rounded-md hover:bg-[#1A7F8C] focus:outline-none"
						aria-label="Submit Form"
						onClick={handleSubmit}
						disabled={loading} // Disable button while loading
					>
						{loading ? 'Submitting...' : 'Submit'}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Modal
