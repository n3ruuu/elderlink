/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

const ErrorModal = ({ errors, onClose }) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
			<div className="bg-white p-5 sm:p-6 rounded-2xl shadow-2xl w-[90%] sm:w-[380px] max-h-[70vh] overflow-y-auto transform transition-all duration-300 animate-bounceIn">
				{/* Header */}
				<div className="flex items-center mb-4">
					<div className="bg-red-100 p-3 rounded-full animate-pulse">
						<span className="text-red-600 text-3xl">⚠️</span>
					</div>
					<h2 className="ml-3 text-lg sm:text-xl font-bold text-red-600">Oops! Something's Wrong</h2>
				</div>

				{/* Error List */}
				<div className="space-y-2">
					{errors.map((error, index) => (
						<div key={index} className="flex items-start bg-red-50 rounded-md p-2 shadow-inner hover:bg-red-100 transition-colors duration-200">
							<span className="text-red-500 font-bold mt-0.5 mr-2">•</span>
							<p className="text-gray-700 text-sm sm:text-base">{error}</p>
						</div>
					))}
				</div>

				{/* Button */}
				<div className="mt-5 w-[100px] flex justify-center">
					<button
						onClick={onClose}
						className="bg-red-500 h-[50px]  hover:bg-red-600 text-white text-xs sm:text-sm px-4 py-1 rounded-xl font-semibold transition-all duration-200 shadow-md transform hover:scale-105"
					>
						Got it!
					</button>
				</div>
			</div>
		</div>
	)
}

export default ErrorModal
