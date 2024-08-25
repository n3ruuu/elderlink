import { useState, useEffect } from 'react'
import newsData from './data/news.json' // Adjust the path as needed

const News = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const slidesToShow = 3 // Number of slides to show at once
	const totalSlides = newsData.length - slidesToShow + 1 // Adjust total slides to allow the last card to be visible

	const nextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1))
	}

	const prevSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1))
	}

	useEffect(() => {
		const interval = setInterval(nextSlide, 3000) // Auto-slide every 3 seconds
		return () => clearInterval(interval) // Cleanup on unmount
	}, [currentSlide])

	return (
		<section
			id="news"
			className="relative w-full max-w-[1500px] mx-auto overflow-hidden rounded-lg"
		>
			<h1 className="text-6xl font-bold text-[#219EBC] text-left">Latest News</h1>
			<div className="pt-16 pb-16 flex relative">
				<div className="overflow-hidden w-full">
					<div
						className="flex gap-5 transition-transform duration-500"
						style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
					>
						{newsData.map((news) => (
							<div
								key={news.id}
								className="w-[calc(33.3333%-1rem)] rounded-2xl flex-shrink-0 h-[500px] bg-cover bg-center"
								style={{ backgroundImage: `url(${news.image})` }}
								onClick={() => window.open(news.link, '_blank')}
							>
								<div className="p-12 flex items-end h-full bg-gradient-to-b from-[#C1F3FF]/0 to-[#219EBC]/75 rounded-xl text-white">
									<div>
										<h2 className="text-2xl font-semibold">{news.headline}</h2>
										<p className="text-sm font-light">
											{news.author} - {news.source}
										</p>
										<p className="text-sm">{news.date}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				{/* Navigation Arrows */}
				<button
					onClick={prevSlide}
					className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-none text-[#F5F5FA] text-8xl font-extralight"
				>
					&#8249;
				</button>
				<button
					onClick={nextSlide}
					className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-none text-[#F5F5FA] text-8xl font-extralight"
				>
					&#8250;
				</button>
			</div>
		</section>
	)
}

export default News
