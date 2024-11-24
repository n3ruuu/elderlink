import { useState, useEffect } from 'react'
import moment from 'moment'
import NewsModal from './NewsModal'
import useMediaQuery from '@mui/material/useMediaQuery'

const News = () => {
	const [newsData, setNewsData] = useState([])
	const [currentSlide, setCurrentSlide] = useState(0)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [selectedNews, setSelectedNews] = useState(null)
	const isMobile = useMediaQuery('(max-width: 414px)')

	const slidesToShow = isMobile ? 1 : 3 // 1 slide for mobile, 3 for desktop
	const totalSlides = newsData.length - slidesToShow + 1

	// Fetch news data
	const fetchNewsData = async () => {
		try {
			const response = await fetch('http://localhost:5000/news')
			const data = await response.json()

			// Filter out news items older than 7 days
			const recentNews = data.filter((news) => moment(news.date).isAfter(moment().subtract(7, 'days')))

			setNewsData(recentNews)
		} catch (error) {
			console.error('Error fetching news data:', error)
		}
	}

	useEffect(() => {
		fetchNewsData()
	}, [])

	// Handle next and previous slides, only if there are enough news items
	const nextSlide = () => {
		if (newsData.length >= 4) {
			setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1))
		}
	}

	const prevSlide = () => {
		if (newsData.length >= 4) {
			setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1))
		}
	}

	// Automatically slide every 3 seconds, only if there are enough news items
	useEffect(() => {
		let interval
		if (newsData.length >= 4) {
			interval = setInterval(nextSlide, 3000)
		}
		return () => clearInterval(interval)
	}, [currentSlide, newsData.length])

	// Open modal when a news item is clicked
	const openModal = (news) => {
		setSelectedNews(news)
		setIsModalOpen(true)
	}

	// Close modal
	const closeModal = () => {
		setIsModalOpen(false)
		setSelectedNews(null)
	}

	return (
		<section id="news" className="relative w-full max-w-[1500px] mx-auto overflow-hidden rounded-lg">
			<h1 className={`${isMobile ? 'font-extrabold text-5xl text-center' : 'font-bold text-6xl'} text-[#219EBC] text-left`}>Latest News</h1>
			<div className="pt-16 pb-16 flex relative">
				<div className="overflow-hidden w-full">
					<div className="flex gap-5 transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}>
						{/* Display only the first news item */}
						{newsData.map((news) => (
							<div
								key={news.id}
								className={`${isMobile ? 'w-[70%]' : 'w-[calc(33.3333%-1rem)]'} cursor-pointer rounded-2xl flex-shrink-0 h-[500px] bg-cover bg-center`}
								style={{
									backgroundImage: `url(http://localhost:5000/uploads/${JSON.parse(news.images)[0]})`,
								}}
								onClick={() => openModal(news)} // Open the modal when clicked
							>
								<div className="p-12 flex items-end h-full bg-gradient-to-b from-[#C1F3FF]/0 to-[#219EBC]/75 rounded-xl text-white">
									<div>
										<h2 className="text-2xl font-semibold">{news.headline}</h2>
										<p className="text-xl font-light">
											{news.author} - {news.source}
										</p>
										<p className="text-xl">{moment(news.date).format('MMMM Do YYYY, h:mm A')}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Navigation Arrows (only if there are 4 or more news items) */}
				{!isMobile && newsData.length >= 4 && (
					<>
						<button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-none text-[#F5F5FA] text-8xl font-extralight">
							&#8249;
						</button>
						<button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-none text-[#F5F5FA] text-8xl font-extralight">
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
