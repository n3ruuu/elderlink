/* eslint-disable react/prop-types */
import moment from 'moment'
import './css/NewsModal.css'

const NewsModal = ({ isOpen, newsData, closeModal }) => {
	if (!isOpen) return null

	// Ensure the images are parsed correctly and handle the case where images might not exist
	let images = []
	try {
		images = newsData.images ? JSON.parse(newsData.images) : []
	} catch (error) {
		console.error('Error parsing images:', error)
	}

	return (
		<div className="newsmodal-overlay" onClick={closeModal}>
			<div className="newsmodal-container" onClick={(e) => e.stopPropagation()}>
				{/* Close button */}
				<button onClick={closeModal} className="newsclose-button">
					&times;
				</button>

				{/* Modal Content */}
				<div className="newsmodal-content">
					<h2 className="newsmodal-heading">{newsData.headline}</h2>
					<p className="newsmodal-author">{newsData.author}</p>
					<p className="newsmodal-date">{moment(newsData.date).format('MMMM Do, YYYY')}</p>
					<div className="newsmodal-body">
						<p>{newsData.body}</p>
					</div>
				</div>

				{/* Image section */}
				<div className="mt-4 justify-center gap-4 flex flex-wrap overflow-auto">
					{/* Loop through images */}
					{images.length > 0 ? (
						images.map((image, index) => (
							<div
								key={index}
								className={`h-[200px] md:h-[250px] w-[400px] bg-cover bg-center rounded-xl`}
								style={{
									backgroundImage: `url(http://localhost:5000/uploads/${image})`,
								}}
							/>
						))
					) : (
						<p>No images available</p>
					)}
				</div>
			</div>
		</div>
	)
}

export default NewsModal
