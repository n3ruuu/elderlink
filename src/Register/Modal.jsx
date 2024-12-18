/* eslint-disable react/prop-types */
import { useState } from 'react'
import Form from './Form'
import axios from 'axios'

const Modal = ({ onClose }) => {
	const [formValues, setFormValues] = useState({
		firstName: '',
		lastName: '',
		middleName: '',
		extension: '',
		dob: '',
		sex: '',
		civilStatus: '',
		address: '',
		contactNumber: '',
		nameOfSpouse: '',
		placeOfBirth: '',
		occupation: '',
		education: '',
		guardianFirstName: '',
		guardianMiddleName: '',
		guardianLastName: '',
		guardianEmail: '',
		guardianContact: '',
		guardianRelationship: '',
	})

	const handleSubmit = async (e) => {
		e.preventDefault()

		const formData = new FormData()
		for (const key in formValues) {
			if (key !== 'formFile') {
				formData.append(key, formValues[key])
			}
		}

		if (formValues.formFile) {
			formData.append('form_path', formValues.formFile)
		}

		formData.append('status', 'Pending')

		// Debugging: Log the FormData content
		for (let pair of formData.entries()) {
			console.log(pair[0], pair[1])
		}

		try {
			const response = await axios.post('http://localhost:5000/members/register', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})

			console.log(response.data)
		} catch (error) {
			console.error('Error submitting form:', error)
		}
		onClose()
		alert('Success! You have a pending application for OSCA registration.')
	}

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setFormValues({ ...formValues, [name]: value })
	}

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
			<div className="bg-white p-8 rounded-lg shadow-lg w-[40%] h-[90%] overflow-y-auto">
				<h2 className="text-2xl font-semibold text-gray-800 mb-6">Register to OSCA</h2>

				<form>
					<Form formValues={formValues} onChange={handleInputChange} onClose={onClose} handleSubmit={handleSubmit} />
				</form>
			</div>
		</div>
	)
}

export default Modal
