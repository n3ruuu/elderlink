/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import moment from 'moment'
import useMediaQuery from '@mui/material/useMediaQuery'

const NewsModal = ({ isOpen, newsData, closeModal }) => {
	if (!isOpen) return null

	// Check if the screen is mobile
	const isMobile = useMediaQuery('(max-width: 414px)')

	return (
		<div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50" onClick={closeModal}>
			<div
				className={`bg-white p-8 rounded-lg ${isMobile ? 'w-[90%] h-fit' : 'w-1/2 h-[85%]'} relative overflow-auto`}
				onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
			>
				{/* Close button */}
				<button onClick={closeModal} className="absolute top-4 right-4 text-2xl text-gray-500">
					&times;
				</button>

				{/* Modal Content */}
				<div className="overflow-y-auto h-[70%]">
					<h2 className={`text-3xl ${isMobile ? 'text-2xl' : 'font-semibold'} text-[#219EBC]`}>{newsData.headline}</h2>
					<p className="text-xl font-light mt-2">
						{newsData.author} - {newsData.source}
					</p>
					<p className="text-lg mt-2">{moment(newsData.date).format('MMMM Do YYYY, h:mm A')}</p>
					<div className="mt-4">
						<p className="text-lg">{newsData.body}</p>
					</div>
				</div>

				{/* Image section */}
				<div className="mt-4 justify-center gap-4 flex flex-wrap overflow-auto">
					{/* Loop through images */}
					{newsData.images &&
						JSON.parse(newsData.images).map((image, index) => (
							<div
								key={index}
								className={`h-[200px] md:h-[250px] w-[400px] bg-cover bg-center rounded-xl`}
								style={{
									backgroundImage: `url(http://localhost:5000/uploads/${image})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							/>
						))}
				</div>
			</div>
		</div>
	)
}

export default NewsModal
