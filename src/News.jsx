import { useState, useEffect } from 'react'
import moment from 'moment'
import NewsModal from './NewsModal'
import useMediaQuery from '@mui/material/useMediaQuery'
import './css/News.css'

const News = () => {
	const [newsData, setNewsData] = useState([])
	const [currentSlide, setCurrentSlide] = useState(0)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [selectedNews, setSelectedNews] = useState(null)
	const isMobile = useMediaQuery('(max-width: 767px)')

	// Set the number of slides to show based on the screen size
	const slidesToShow = isMobile ? 1 : 3 // 1 slide for mobile, 3 for desktop
	const totalSlides = newsData.length - slidesToShow + 1

	// Check if the number of news items is 3 or fewer
	const isSinglePageMode = newsData.length <= 3

	const fetchNewsData = async () => {
		try {
			const response = await fetch('http://localhost:5000/news')
			const data = await response.json()

			// Filter the news data to only include items with status 'Active'
			const activeNews = data.filter((news) => news.status === 'Active')
			setNewsData(activeNews) // Set the filtered data
		} catch (error) {
			console.error('Error fetching news data:', error)
		}
	}

	useEffect(() => {
		fetchNewsData()
	}, [])

	const nextSlide = () => {
		if (isSinglePageMode) return // Skip sliding if there are 3 or fewer items
		setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1))
	}

	const prevSlide = () => {
		if (isSinglePageMode) return // Skip sliding if there are 3 or fewer items
		setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1))
	}

	useEffect(() => {
		// Only set interval for sliding if more than 3 news items exist
		if (newsData.length > 3) {
			const interval = setInterval(nextSlide, 3000)
			return () => clearInterval(interval)
		}
	}, [newsData, currentSlide])

	const openModal = (news) => {
		setSelectedNews(news)
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
		setSelectedNews(null)
	}

	return (
		<section id="news" className="news-section">
			<h1 className="news-heading">Latest News</h1>
			<div className="news-container">
				<div className="news-inner-container">
					<div className="news-slider" style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}>
						{newsData.map((news) => {
							// Parse the images string into an actual array
							const images = JSON.parse(news.images)

							// Check if the array is valid and has at least one image
							const firstImage = images && images.length > 0 ? images[0] : 'default-image.jpg' // Fallback to a default image

							return (
								<div
									key={news.id}
									className="news-slide"
									style={{ backgroundImage: `url(http://localhost:5000/uploads/${firstImage})` }}
									onClick={() => openModal(news)} // Open the modal when clicked
								>
									<div className="slide-content">
										<div>
											<p className="slide-date">{moment(news.date).format('MMMM D' + ', ' + 'YYYY')}</p>
											<h2 className="slide-heading">{news.headline}</h2>
											<p className="slide-author">Posted by: {news.author}</p>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>

				{/* Navigation Arrows */}
				{!isSinglePageMode && (
					<>
						<button onClick={prevSlide} className="nav-button nav-button-left">
							&#8249;
						</button>
						<button onClick={nextSlide} className="nav-button nav-button-right">
							&#8250;
						</button>
					</>
				)}
			</div>

			{/* News Modal */}
			<NewsModal isOpen={isModalOpen} newsData={selectedNews} closeModal={closeModal} />
		</section>
	)
}

export default News
