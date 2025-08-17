/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import Form from './Form'
import ErrorModal from './ErrorModal'
import RegisterModal from './RegisterModal'
import jsPDF from 'jspdf'
import moment from 'moment'
import CityLogo from '../../../admin-elderlink/src/assets/city.png'

const Modal = ({ onClose }) => {
	const [formValues, setFormValues] = useState({
		firstName: '',
		lastName: '',
		middleName: '',
		extension: '',
		dob: '',
		sex: '',
		civilStatus: '',
		placeOfBirth: '',
		occupation: '',
		address: '',
		contactNumber: '',
		nameOfSpouse: '',
		education: '',
		guardianFirstName: '',
		guardianMiddleName: '',
		guardianLastName: '',
		guardianEmail: '',
		guardianContact: '',
		guardianRelationship: '',
	})

	const [errors, setErrors] = useState([])
	const [isErrorModalOpen, setIsErrorModalOpen] = useState(false)
	const [showRegisterModal, setShowRegisterModal] = useState(false) // Control RegisterModal
	const [signatory, setSignatory] = useState({ name: '', position: '' })

	useEffect(() => {
		const fetchSignatory = async () => {
			try {
				const response = await fetch('http://localhost:5000/cms/signatory')
				const data = await response.json()
				if (data.length > 0) {
					setSignatory(data[0])
					console.log('Fetched Signatory: ', data[0]) // Log fetched data directly
				}
			} catch (error) {
				console.error('Error fetching signatory data:', error)
			}
		}

		fetchSignatory()
	}, [])

	const handleNext = async (e) => {
		e.preventDefault() // Prevent form submission
		const validationErrors = await validateForm()
		if (validationErrors.length > 0) {
			setErrors(validationErrors)
			setIsErrorModalOpen(true)
		} else {
			setShowRegisterModal(true) // Open RegisterModal
		}
	}

	const calculateAge = (dob) => {
		return moment().diff(moment(dob, 'YYYY-MM-DD'), 'years')
	}

	const validateForm = async () => {
		const errorMessages = []

		// Validate Age (must be 60 or above)
		const dob = new Date(formValues.dob)
		const today = new Date()
		const age = today.getFullYear() - dob.getFullYear()
		if (age < 60) {
			errorMessages.push('Age must be 60 or above.')
		}

		// Validate Name (First and Last Name must only contain letters)
		const namePattern = /^[A-Za-z\s]+$/
		if (!namePattern.test(formValues.firstName)) {
			errorMessages.push('First Name must only contain letters.')
		}
		if (!namePattern.test(formValues.lastName)) {
			errorMessages.push('Last Name must only contain letters.')
		}

		// Validate Contact Number (must follow format: 09123456789)
		const contactPattern = /^09\d{9}$/
		if (!contactPattern.test(formValues.contactNumber)) {
			errorMessages.push('Contact Number must follow the format: 09123456789.')
		}

		// Validate required fields (add more as needed)
		const requiredFields = ['firstName', 'lastName', 'dob', 'sex', 'civilStatus', 'placeOfBirth', 'occupation', 'address', 'contactNumber']

		requiredFields.forEach((field) => {
			if (!formValues[field]) {
				errorMessages.push(`${field.charAt(0).toUpperCase() + field.slice(1)} is required.`)
			}
		})

		// Validate Guardian Fields (if guardian details are required, add validation)
		if (formValues.guardianFirstName && !namePattern.test(formValues.guardianFirstName)) {
			errorMessages.push("Guardian's First Name must only contain letters.")
		}
		if (formValues.guardianMiddleName && !namePattern.test(formValues.guardianMiddleName)) {
			errorMessages.push("Guardian's Middle Name must only contain letters.")
		}
		if (formValues.guardianLastName && !namePattern.test(formValues.guardianLastName)) {
			errorMessages.push("Guardian's Last Name must only contain letters.")
		}

		// Validate Guardian Email (if provided)
		const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
		if (formValues.guardianEmail && !emailPattern.test(formValues.guardianEmail)) {
			errorMessages.push("Guardian's email address is invalid.")
		}

		// Validate Guardian Contact Number (if provided, follow the same format)
		if (formValues.guardianContact && !contactPattern.test(formValues.guardianContact)) {
			errorMessages.push("Guardian's Contact Number must follow the format: 09123456789.")
		}

		return errorMessages
	}

	const generatePDF = () => {
		const doc = new jsPDF()

		const age = calculateAge(formValues.dob)

		doc.addImage(CityLogo, 'PNG', 55, 8, 30, 23)
		// Title Section
		doc.setFont('helvetica', 'normal')
		doc.setFontSize(9)
		doc.text('Republic of the Philippines', 105, 17, { align: 'center' })
		doc.text('Province of Bulacan', 105, 21.5, { align: 'center' })
		doc.setFont('helvetica', 'bold')
		doc.setFontSize(10)
		doc.text('CITY OF MALOLOS', 105, 26.5, { align: 'center' })

		doc.setFontSize(10)
		doc.text('OFFICE OF THE SENIOR CITIZENS AFFAIRS (OSCA)', 105, 36, { align: 'center' })

		doc.setFontSize(16)
		doc.text('REGISTRATION FORM', 105, 48, { align: 'center' })

		// picture
		doc.rect(162, 11, 38, 38)

		// Drawing Requirements Box
		doc.rect(10, 55, 190, 40) // Outer box

		doc.setFontSize(9)
		doc.text('REQUIREMENTS:', 105, 63, { align: 'center' })

		// New
		doc.rect(17, 67, 3, 3)
		doc.setFontSize(8)
		doc.text('NEW', 23, 70)
		doc.setFont('helvetica', 'normal')
		doc.text('1. 2pcs 1x1 pictures', 17, 75)
		const newReqText = doc.splitTextToSize('2. Xerox of Birth certificate or any valid ID with date of Birth', 40)
		doc.text(newReqText, 17, 79)

		// Lost
		doc.rect(60, 67, 3, 3)
		doc.setFont('helvetica', 'bold')
		doc.text('LOST', 66, 70)
		doc.setFont('helvetica', 'normal')
		doc.text('1. 1x1 picture', 60, 75)
		const newLostText = doc.splitTextToSize('2. Xerox of Birth certificate or any valid ID with date of Birth', 40)
		doc.text(newLostText, 60, 79)
		doc.text('3. Affidavit of loss', 60, 86)

		// Replacement
		doc.rect(103, 67, 3, 3)
		doc.setFont('helvetica', 'bold')
		doc.text('REPLACEMENT', 108, 70)
		doc.setFont('helvetica', 'normal')
		doc.text('1. 2pcs 1x1 pictures', 103, 75)
		const newReplacementText = doc.splitTextToSize('2. Xerox of Birth certificate or any valid ID with date of Birth', 40)
		doc.text(newReplacementText, 103, 79)
		doc.text('3. Surrender old ID or Booklet', 103, 86)

		// Transfer
		doc.rect(148, 67, 3, 3)
		doc.setFont('helvetica', 'bold')
		doc.text('TRANSFER', 156, 70)
		doc.setFont('helvetica', 'normal')
		doc.text('1. 2pcs 1x1 pictures', 148, 75)
		const newTransferText = doc.splitTextToSize('2. Xerox of Birth certificate or any valid ID with date of Birth', 40)
		doc.text(newTransferText, 148, 79)
		doc.text('3. Cancellation cert.', 148, 86)
		doc.text('4. Barangay Clearance', 148, 90)

		// Input Fields with Underlines
		let startY = 110

		const drawLabeledUnderline = (label, x, y, width, labelWidth = 30) => {
			// Draw the label
			const newLabelText = doc.splitTextToSize(label, 30)
			doc.text(newLabelText, x, y)

			// Draw the underline
			const underlineStartX = x + labelWidth // Offset for the line start after the label
			const underlineEndX = underlineStartX + width
			const lineY = y + 1 // Adjust Y position for the line slightly below the text
			doc.line(underlineStartX, lineY, underlineEndX, lineY)
		}

		doc.setFontSize(9)

		// Draw fields with different label widths
		doc.text(`${formValues.firstName} ${formValues.middleName} ${formValues.lastName}`, 45, 110)
		drawLabeledUnderline('NAME:', 10, startY, 50) // Default label width (30)
		doc.text(`${age}`, 112, 110)
		drawLabeledUnderline('AGE:', 93, startY, 24, 9) // Smaller label width for AGE
		doc.text(`${formValues.sex}`, 145, 110)

		drawLabeledUnderline('SEX:', 130, startY, 60, 9)

		startY += 12
		doc.text(`${formValues.dob}`, 45, 122)
		drawLabeledUnderline('DATE OF BIRTH:', 10, startY, 67)
		doc.text(`${formValues.placeOfBirth}`, 155, 122)
		drawLabeledUnderline('PLACE OF BIRTH:', 110, startY, 59)

		startY += 12
		doc.text(`${formValues.address}`, 45, 134)
		drawLabeledUnderline('ADDRESS:', 10, startY, 159)

		startY += 12
		doc.text(`${formValues.civilStatus}`, 45, 146)
		drawLabeledUnderline('CIVIL STATUS:', 10, startY, 67)
		doc.text(`${formValues.nameOfSpouse}`, 145, 146)
		drawLabeledUnderline('NAME OF HUSBAND/WIFE:', 110, startY, 59)

		startY += 12
		doc.text(`${formValues.education}`, 45, 158)

		drawLabeledUnderline('EDUCATIONAL ATTAINMENT:', 10, startY, 159)

		startY += 12
		doc.text(`${formValues.occupation}`, 45, 170)
		drawLabeledUnderline('OCCUPATION /      RETIRED:', 10, startY, 159)

		startY += 12
		doc.text(`${formValues.guardianContact}`, 45, 182)
		drawLabeledUnderline('CONTACT PERSON IN CASE OF EMERGENCY:', 10, startY, 159)

		startY += 12
		doc.text(`${formValues.guardianRelationship}`, 45, 194)
		drawLabeledUnderline('RELATIONSHIP:', 10, startY, 159)

		startY += 16

		// Adding indentation (e.g., 5 spaces for indentation)
		const indentation = '            '

		// Handling the long paragraph text, splitting it as needed
		const paragraphText =
			'I hereby subscribed and sworn that all the information given in this registration form are true and correct, and I am not a holder of any OSCA ID issued by the other Cities or Municipalities, and avow under the penalty of Law to the truth of its contents.'
		const indentedText = indentation + paragraphText // Add indentation to the paragraph

		const paragraphLines = doc.splitTextToSize(indentedText, 160) // Split paragraph text to fit within the width

		// Now, you can add the indented text to the document starting at your desired position
		doc.setFontSize(10) // Set font size to 12 (adjust as needed)
		doc.setFont('helvetica', 'bolditalic')

		doc.text(paragraphLines, 10, startY)
		startY += paragraphLines.length * 6

		// Signature Section
		startY += 10
		doc.setFontSize(9)
		doc.setFont('helvetica', 'normal')
		doc.text('Signature or Thumb mark of Senior Citizen', 130, startY)
		doc.line(130, startY - 5, 190, startY - 5) // Line for signature

		const sectionY = startY + 7 // Adjust Y position for this section
		doc.setFont('helvetica', 'normal')

		// "RECEIVED AND VERIFIED BY:" with underline
		doc.text('RECEIVED AND VERIFIED BY:', 10, sectionY)
		doc.line(58, sectionY, 110, sectionY) // Aligned underline for "RECEIVED AND VERIFIED BY"

		// "DATE:" with underline
		const dateY = sectionY + 7 // Add spacing for "DATE:"
		doc.text('DATE:', 45, dateY)
		doc.line(58, dateY, 110, dateY)

		// "APPROVED BY:" section
		const approvedByY = dateY + 15 // Adjust Y position for "APPROVED BY:"
		doc.text('APPROVED BY:', 10, approvedByY)
		doc.text(signatory.name, 35, approvedByY + 5) // Name
		doc.text(signatory.position, 43, approvedByY + 10) // Position

		const issuedBy = sectionY + 20 // Add spacing for "issue:"
		doc.text('ISSUED BY:', 105, issuedBy)
		doc.line(125, issuedBy, 160, issuedBy)

		// "ID ISSUED:", "DATE OF ISSUANCE:", "BOOKLET:" section
		doc.setFontSize(9)
		doc.setFont('helvetica', 'bold')
		const idIssuedY = issuedBy + 5 // Adjust Y position for ID details
		doc.text('ID ISSUED:', 105, idIssuedY)
		doc.line(125, idIssuedY, 160, idIssuedY) // Underline for "ID ISSUED"

		const dateOfIssuanceY = idIssuedY + 5 // Adjust Y position for "DATE OF ISSUANCE:"
		doc.text('DATE OF ISSUANCE:', 105, dateOfIssuanceY)
		doc.line(140, dateOfIssuanceY, 160, dateOfIssuanceY) // Underline for "DATE OF ISSUANCE"

		const bookletY = dateOfIssuanceY + 5 // Adjust Y position for "BOOKLET:"
		doc.text('BOOKLET:', 105, bookletY)
		doc.setFontSize(9)
		doc.setFont('helvetica', 'normal')
		doc.text('Medicine:', 125, bookletY)
		doc.line(140, bookletY, 160, bookletY) // Underline for "Medicine"

		doc.text('Grocery:', 125, bookletY + 5)
		doc.line(140, bookletY + 5, 160, bookletY + 5)

		// Save the PDF
		doc.save('senior_citizen_registration_form.pdf')
	}

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setFormValues({ ...formValues, [name]: value })
	}

	const handleCloseErrorModal = () => setIsErrorModalOpen(false)

	return (
		<>
			<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
				<div className="bg-white p-8 rounded-lg shadow-lg w-[40%] h-[90%] overflow-y-auto">
					<h2 className="text-2xl font-semibold text-gray-800 mb-6">Register to OSCA Mojon</h2>
					{isErrorModalOpen && <ErrorModal errors={errors} onClose={handleCloseErrorModal} />}

					<form>
						<Form formValues={formValues} onChange={handleInputChange} onClose={onClose} handleNext={handleNext} generatePDF={generatePDF} />
					</form>
				</div>
			</div>

			{/* Render RegisterModal */}
			{showRegisterModal && <RegisterModal formValues={formValues} onClose={() => setShowRegisterModal(false)} />}
		</>
	)
}

export default Modal
