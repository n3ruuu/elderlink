/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import moment from 'moment'

const Form = ({ formValues, onChange, onClose, handleNext, generatePDF }) => {
	return (
		<>
			{/* Name Fields */}
			<div className="grid grid-cols-10 gap-4 mb-4">
				{/* First Name */}
				<div className="col-span-3">
					<label htmlFor="firstName" className="block text-lg font-medium text-gray-700 mb-1">
						First Name <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						value={formValues.firstName}
						onChange={onChange}
						className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
						placeholder="Juan"
						required
					/>
				</div>

				{/* Middle Name */}
				<div className="col-span-3">
					<label htmlFor="middleName" className="block text-lg font-medium text-gray-700 mb-1">
						Middle Name
					</label>
					<input
						type="text"
						id="middleName"
						name="middleName"
						value={formValues.middleName}
						onChange={onChange}
						className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
						placeholder="Santos"
					/>
				</div>

				{/* Last Name */}
				<div className="col-span-3">
					<label htmlFor="lastName" className="block text-lg font-medium text-gray-700 mb-1">
						Last Name <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						value={formValues.lastName}
						onChange={onChange}
						className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
						placeholder="Dela Cruz"
						required
					/>
				</div>

				{/* Name Extension */}
				<div className="col-span-1">
					<label htmlFor="extension" className="block text-lg font-medium text-gray-700 mb-1">
						Ex.
					</label>
					<input
						type="text"
						id="extension"
						name="extension"
						value={formValues.extension || ''}
						onChange={onChange}
						className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
						placeholder="Jr."
					/>
				</div>
			</div>

			{/* Additional Fields */}
			<div className="grid grid-cols-3 gap-4 mb-4">
				<div>
					<label htmlFor="dob" className="block text-lg font-medium text-gray-700 mb-1">
						Date of Birth <span className="text-red-500">*</span>
					</label>
					<input
						type="date"
						id="dob"
						name="dob"
						value={moment(formValues.dob).format('YYYY-MM-DD') || ''}
						onChange={onChange}
						className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
						required
					/>
				</div>
				<div>
					<label htmlFor="sex" className="block text-lg font-medium text-gray-700 mb-1">
						Sex <span className="text-red-500">*</span>
					</label>
					<select
						id="sex"
						name="sex"
						value={formValues.sex}
						onChange={onChange}
						className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
						required
					>
						<option value="">Select</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</select>
				</div>
				<div>
					<label htmlFor="civilStatus" className="block text-lg font-medium text-gray-700 mb-1">
						Civil Status <span className="text-red-500">*</span>
					</label>
					<select
						id="civilStatus"
						name="civilStatus"
						value={formValues.civilStatus}
						onChange={onChange}
						className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
						required
					>
						<option value="">Select</option>
						<option value="Single">Single</option>
						<option value="Married">Married</option>
						<option value="Widowed">Widowed</option>
						<option value="Separated">Separated</option>
					</select>
				</div>
			</div>

			{/* Place of Birth and Name of Husband/Wife */}
			<div className="grid grid-cols-2 gap-4 mb-4">
				{/* Place of Birth */}
				<div>
					<label htmlFor="placeOfBirth" className="block text-lg font-medium text-gray-700 mb-1">
						Place of Birth <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						id="placeOfBirth"
						name="placeOfBirth"
						value={formValues.placeOfBirth}
						onChange={onChange}
						className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
						placeholder="Enter place of birth"
					/>
				</div>

				<div>
					<label htmlFor="occupation" className="block text-lg font-medium text-gray-700 mb-1">
						Occupation <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						id="occupation"
						name="occupation"
						value={formValues.occupation}
						onChange={onChange}
						className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
						placeholder="Enter occupation"
					/>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-4 mb-4">
				{/* Address Field */}
				<div>
					<label htmlFor="address" className="block text-lg font-medium text-gray-700 mb-1">
						Address <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						id="address"
						name="address"
						value={formValues.address}
						onChange={onChange}
						className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
						placeholder="House No, Street or Subdivision"
						required
					/>
				</div>

				{/* Contact Number Field */}
				<div>
					<label htmlFor="contactNumber" className="block text-lg font-medium text-gray-700 mb-1">
						Contact Number <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						id="contactNumber"
						name="contactNumber"
						value={formValues.contactNumber}
						onChange={onChange}
						className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
						placeholder="09123456789"
						required
					/>
				</div>
			</div>

			{/* Name of Husband/Wife */}
			<div className="mb-6">
				<label htmlFor="nameOfSpouse" className="block text-lg font-medium text-gray-700 mb-1">
					Name of Husband/Wife <span className="text-red-500">*</span>
				</label>
				<input
					type="text"
					id="nameOfSpouse"
					name="nameOfSpouse"
					value={formValues.nameOfSpouse}
					onChange={onChange}
					className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
					placeholder="Enter name of husband/wife"
				/>
			</div>

			{/* Name of Husband/Wife */}
			<div className="mb-6">
				<label htmlFor="education" className="block text-lg font-medium text-gray-700 mb-1">
					Educational Attainment <span className="text-red-500">*</span>
				</label>
				<input
					type="text"
					id="education"
					name="education"
					value={formValues.education}
					onChange={onChange}
					className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
					placeholder="Enter educational attainment"
				/>
			</div>

			{/* Guardian's Information */}
			<div className="mb-6">
				<label className="block text-xl font-semibold text-gray-700 mb-3">GUARDIAN'S INFORMATION</label>
				<div className="flex space-x-4">
					{/* First Name */}
					<div className="w-1/3">
						<label htmlFor="guardianFirstName" className="block text-lg font-medium text-gray-700 mb-1">
							First Name <span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							id="guardianFirstName"
							name="guardianFirstName"
							value={formValues.guardianFirstName || ''}
							onChange={onChange}
							className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
							placeholder="Enter first name"
							required
						/>
					</div>
					{/* Last Name */}
					<div className="w-1/3">
						<label htmlFor="guardianLastName" className="block text-lg font-medium text-gray-700 mb-1">
							Last Name <span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							id="guardianLastName"
							name="guardianLastName"
							value={formValues.guardianLastName || ''}
							onChange={onChange}
							className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
							placeholder="Enter last name"
							required
						/>
					</div>
					{/* Middle Name */}
					<div className="w-1/3">
						<label htmlFor="guardianMiddleName" className="block text-lg font-medium text-gray-700 mb-1">
							Middle Name
						</label>
						<input
							type="text"
							id="guardianMiddleName"
							name="guardianMiddleName"
							value={formValues.guardianMiddleName || ''}
							onChange={onChange}
							className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
							placeholder="Enter middle name"
						/>
					</div>
				</div>

				{/* Contact No and Email Address */}
				<div className="flex space-x-4 mb-6 mt-6">
					<div className="w-full">
						<label htmlFor="guardianEmail" className="block text-lg font-medium text-gray-700 mb-1">
							Email Address <span className="text-red-500">*</span>
						</label>
						<input
							type="email"
							id="guardianEmail"
							name="guardianEmail"
							value={formValues.guardianEmail || ''}
							onChange={onChange}
							className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
							placeholder="Enter email address"
							required
						/>
					</div>
				</div>

				{/* Contact Number and guardianRelationship side by side */}
				<div className="flex space-x-4 mb-6">
					<div className="w-1/2">
						<label htmlFor="guardianContact" className="block text-lg font-medium text-gray-700 mb-1">
							Contact Number <span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							id="guardianContact"
							name="guardianContact"
							value={formValues.guardianContact || ''}
							onChange={onChange}
							className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
							placeholder="09123456789"
							required
						/>
					</div>
					<div className="w-1/2">
						<label htmlFor="guardianRelationship" className="block text-lg font-medium text-gray-700 mb-1">
							Relationship <span className="text-red-500">*</span>
						</label>
						<select
							id="relationship"
							name="guardianRelationship"
							value={formValues.guardianRelationship || ''}
							onChange={onChange}
							className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
							required
						>
							<option value="">Relationship</option>
							<option value="Parent">Parent</option>
							<option value="Spouse">Spouse</option>
							<option value="Child">Child</option>
							<option value="Sibling">Sibling</option>
							<option value="Relative">Relative</option>
							<option value="Guardian">Guardian</option>
						</select>
					</div>
				</div>

				<div className="flex items-center justify-between mt-6">
	{/* Generate PDF Button on the bottom left */}
	<div>
		<button
			type="button"
			className="w-[170px] text-lg h-[45px] font-bold py-2 px-4 rounded transition-colors duration-300 bg-[#FF6347] hover:bg-[#E55347] text-white"
	onClick={generatePDF}

		>
			Generate PDF
		</button>
	</div>
	{/* Buttons on the bottom right */}
	<div className="flex space-x-4">
	<button
	type="button"
	onClick={onClose}
	className="bg-gray-400 hover:bg-gray-500 text-white text-lg px-3 py-1 rounded h-[45px] w-[100px]"

>
	Cancel
</button>

		<button
			type="button"
			className="w-[100px] text-lg h-[45px] font-bold py-2 px-4 rounded transition-colors duration-300 bg-[#219EBC] hover:bg-[#1A7A8A] text-white"
			onClick={handleNext}
		>
			Next
		</button>
	</div>
</div>

			</div>
		</>
	)
}

export default Form
