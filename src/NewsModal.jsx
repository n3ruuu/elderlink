/* eslint-disable react/prop-types */
import moment from 'moment'

const NewsModal = ({ isOpen, newsData, closeModal }) => {
	if (!isOpen) return null

	return (
		<div
			className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50"
			onClick={closeModal}
		>
			<div
				className="bg-white p-8 rounded-lg w-1/2 relative"
				onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
			>
				<button onClick={closeModal} className="absolute top-4 right-4 text-2xl text-gray-500">
					&times;
				</button>
				<div>
					<h2 className="text-3xl font-semibold">{newsData.headline}</h2>
					<p className="text-xl font-light mt-2">
						{newsData.author} - {newsData.source}
					</p>
					<p className="text-lg mt-2">{moment(newsData.date).format('MMMM Do YYYY, h:mm A')}</p>
					<div className="mt-4">
						<p className="text-lg">{newsData.body}</p>
					</div>
				</div>
				<div
					className="mt-4 w-full h-80 bg-cover bg-center rounded-xl"
					style={{
						backgroundImage: `url(http://localhost:5000/uploads/${newsData.image})`,
					}}
				/>
			</div>
		</div>
	)
}

export default NewsModal
