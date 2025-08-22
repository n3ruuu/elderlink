/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import axios from 'axios'
import './css/Modal.css'

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
			const response = await axios.post('http://5.181.217.153:5000/application', formData, {
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
		<div className="modal-overlay">
			<div className="modal-container">
				<button className="close-button" onClick={closeModal} aria-label="Close modal">
					&times;
				</button>
				<h2 className="modal-heading">Submit Form</h2>

				<div className="form-group">
					<label className="form-label">Applicant Name</label>
					<input type="text" className="form-input" value={applicantName} onChange={(e) => setApplicantName(e.target.value)} />
				</div>

				<div className="form-group">
					<label className="form-label">Form Type</label>
					<select
						className="form-select"
						value={formType}
						onChange={(e) => setFormType(e.target.value)} // Use title for formType
					>
						<option value="">Select Form Type</option>
						{formsData.map((form) => (
							<option key={form.id} value={form.title}>
								{form.title}
							</option>
						))}
					</select>
				</div>

				<div className="form-grouptwo">
					<label className="file-upload">
						<span>Upload File</span>
						<input type="file" className="hidden" onChange={handleFileUpload} />
					</label>
					{file && (
						<span className="selected-file">
							Selected file: <strong>{file.name}</strong>
						</span>
					)}
					<button
						className="submit-button"
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
