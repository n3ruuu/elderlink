/* eslint-disable react/prop-types */
import { useState } from 'react'

const RegisterModal = ({ formValues, onClose }) => {
	const [applicationType, setApplicationType] = useState('')
	const [files, setFiles] = useState({
		requirement1: null,
		requirement2: null,
		requirement3: null,
	})
	const [isSuccess, setIsSuccess] = useState(false) // Success modal state

	const handleFileChange = (e) => {
		const { name, files } = e.target
		setFiles((prevFiles) => ({
			...prevFiles,
			[name]: files[0],
		}))
	}

	const handleApplicationTypeChange = (e) => {
		setApplicationType(e.target.value)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (!applicationType) {
			alert('Please select an application type.')
			return
		}

		const formData = new FormData()
		formData.append('applicationType', applicationType)
		formData.append('firstName', formValues.firstName)
		formData.append('lastName', formValues.lastName)
		formData.append('middleName', formValues.middleName)
		formData.append('extension', formValues.extension)
		formData.append('dob', formValues.dob)
		formData.append('sex', formValues.sex)
		formData.append('civilStatus', formValues.civilStatus)
		formData.append('placeOfBirth', formValues.placeOfBirth)
		formData.append('occupation', formValues.occupation)
		formData.append('address', formValues.address)
		formData.append('contactNumber', formValues.contactNumber)
		formData.append('nameOfSpouse', formValues.nameOfSpouse)
		formData.append('education', formValues.education)
		formData.append('guardianFirstName', formValues.guardianFirstName)
		formData.append('guardianMiddleName', formValues.guardianMiddleName)
		formData.append('guardianLastName', formValues.guardianLastName)
		formData.append('guardianEmail', formValues.guardianEmail)
		formData.append('guardianContact', formValues.guardianContact)
		formData.append('guardianRelationship', formValues.guardianRelationship)

		if (files.requirement1) formData.append('requirements', files.requirement1)
		if (files.requirement2) formData.append('requirements', files.requirement2)
		if (files.requirement3) formData.append('requirements', files.requirement3)

		try {
			const response = await fetch('http://5.181.217.153:5000/members/register', {
				method: 'POST',
				body: formData,
			})

			const result = await response.json()

			if (response.ok) {
				// Show success modal
				setIsSuccess(true)
			} else {
				alert(result.error || 'Failed to submit registration')
			}
		} catch (error) {
			console.error('Error submitting form:', error)
			alert('An error occurred during submission')
		}
	}

	return (
		<>
			{/* Main Form Modal */}
			<div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
				<div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg">
					<h2 className="text-2xl font-bold text-[#219EBC] mb-4">Form Submission</h2>

					<form onSubmit={handleSubmit}>
						<div className="mb-6">
							<label className="block font-semibold mb-2 text-gray-700">Application Type *</label>
							<div className="flex flex-wrap gap-4">
								{['new', 'lost', 'replacement', 'transfer'].map((type) => (
									<label key={type} className="flex items-center space-x-2">
										<input type="radio" name="applicationType" value={type} className="text-teal-500" onChange={handleApplicationTypeChange} />
										<span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
									</label>
								))}
							</div>
						</div>

						<div className="mb-6">
							<p className="font-semibold text-gray-700 mb-2">Requirements:</p>
							<div className="space-y-4">
								<div>
									<label className="block text-gray-600 mb-1">2 pcs 1×1 picture</label>
									<input type="file" name="requirement1" className="border rounded p-2 w-full" onChange={handleFileChange} />
								</div>
								<div>
									<label className="block text-gray-600 mb-1">Xerox of Birth Certificate or any valid ID with Date of Birth</label>
									<input type="file" name="requirement2" className="border rounded p-2 w-full" onChange={handleFileChange} />
								</div>
								<div>
									<label className="block text-gray-600 mb-1">Registration Form with Signature/Thumbprint</label>
									<input type="file" name="requirement3" className="border rounded p-2 w-full" onChange={handleFileChange} />
								</div>
							</div>
						</div>

						<div className="flex justify-end space-x-2">
							<button type="button" onClick={onClose} className="bg-gray-400 hover:bg-gray-500 text-white text-lg px-3 py-1 rounded h-[45px] w-[100px]">
								Close
							</button>
							<button type="submit" className="bg-[#219EBC] hover:bg-[#177E96] text-white text-lg px-3 py-1 rounded h-[45px] w-[100px] transition-colors duration-300">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>

			{/* Success Modal */}
			{isSuccess && (
				<div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg text-center">
						<h2 className="text-2xl font-bold text-green-600 mb-4">Registration Successful</h2>
						<p className="text-gray-700 mb-6">Your registration has been submitted successfully.</p>
						<button
							onClick={() => {
								setIsSuccess(false)
								onClose()
							}}
							className="bg-[#219EBC] hover:bg-[#177E96] text-white text-lg px-4 py-2 rounded transition-colors duration-300"
						>
							Close
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default RegisterModal
