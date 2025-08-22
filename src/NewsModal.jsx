/* eslint-disable react/prop-types */
import moment from 'moment'
import './css/NewsModal.css'

const NewsModal = ({ isOpen, newsData, closeModal }) => {
	if (!isOpen) return null

	let images = []
	try {
		images = newsData.images ? JSON.parse(newsData.images) : []
	} catch (error) {
		console.error('Error parsing images:', error)
	}

	return (
		<div className="newsmodal-overlay" onClick={closeModal} role="dialog" aria-modal="true" aria-labelledby="modal-title">
			<div className="newsmodal-container" onClick={(e) => e.stopPropagation()} tabIndex={-1}>
				{/* Close button */}
				<button onClick={closeModal} className="newsclose-button" aria-label="Close news modal">
					&times;
				</button>

				<div className="newsmodal-top">
					<h2 id="modal-title" className="newsmodal-heading">
						{newsData.headline}
					</h2>
					<div className="newsmodal-meta">
						<span className="newsmodal-author">By {newsData.author}</span>
						<span className="newsmodal-date">{moment(newsData.date).format('MMMM Do, YYYY')}</span>
					</div>
				</div>

				<div className="newsmodal-body-wrapper">
					<div className="newsmodal-text">
						<p>{newsData.body}</p>
					</div>

					<div className="newsmodal-images">
						{images.length > 0 ? (
							images.map((image, index) => (
								<img key={index} src={`http://5.181.217.153:5000/uploads/${image}`} alt={`${newsData.headline} image ${index + 1}`} className="newsmodal-image" loading="lazy" />
							))
						) : (
							<p className="no-images-text">No images available</p>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewsModal
