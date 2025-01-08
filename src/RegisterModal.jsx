/* eslint-disable react/prop-types */

const RegisterModal = ({ isOpen, onClose }) => {
	if (!isOpen) return null

	return (
		<div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-white rounded-lg p-6 w-full max-w-lg">
				<h2 className="text-2xl font-bold text-[#219EBC] mb-4">Form Submission</h2>

				<div className="mb-4">
					<label className="block font-semibold mb-2 text-gray-700">Application Type *</label>
					<div className="flex space-x-4">
						<label className="flex items-center space-x-2">
							<input type="radio" name="applicationType" value="new" className="text-teal-500" />
							<span>New</span>
						</label>
						<label className="flex items-center space-x-2">
							<input type="radio" name="applicationType" value="lost" className="text-teal-500" />
							<span>Lost</span>
						</label>
						<label className="flex items-center space-x-2">
							<input type="radio" name="applicationType" value="replacement" className="text-teal-500" />
							<span>Replacement</span>
						</label>
						<label className="flex items-center space-x-2">
							<input type="radio" name="applicationType" value="transfer" className="text-teal-500" />
							<span>Transfer</span>
						</label>
					</div>
				</div>

				<div className="mb-4">
					<p className="font-semibold text-gray-700">Requirements:</p>
					<div className="mt-2 space-y-4">
						<div>
							<label className="block mb-1 text-gray-600">2 pcs 1×1 picture</label>
							<input type="file" className="border rounded p-1 w-full" />
						</div>
						<div>
							<label className="block mb-1 text-gray-600">Xerox of Birth Certificate or any valid ID with Date of Birth</label>
							<input type="file" className="border rounded p-1 w-full" />
						</div>
						<div>
							<label className="block mb-1 text-gray-600">Registration Form with Signature/Thumbprint</label>
							<input type="file" className="border rounded p-1 w-full" />
						</div>
					</div>
				</div>

				<div className="flex justify-end space-x-2">
					<button onClick={onClose} className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded">
						Close
					</button>
					<button className="bg-[#219EBC] hover:bg-[#177E96] transition-colors duration-300 text-white px-4 py-2 rounded">Submit</button>
				</div>
			</div>
		</div>
	)
}

export default RegisterModal
