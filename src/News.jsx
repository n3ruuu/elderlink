import { useState, useEffect } from "react"
import moment from "moment"
import NewsModal from "./NewsModal"
import useMediaQuery from "@mui/material/useMediaQuery"
import "./css/News.css"

const News = () => {
  const [newsData, setNewsData] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedNews, setSelectedNews] = useState(null)
  const isMobile = useMediaQuery("(max-width: 767px)")

  const slidesToShow = isMobile ? 1 : 3

  // Filtered active news sorted by date ascending
  // (this could be memoized with useMemo if needed)
  const activeNews = newsData
    .filter((news) => news.status === "Active")
    .sort((a, b) => new Date(a.date) - new Date(b.date))

  const totalSlides = Math.max(activeNews.length - slidesToShow, 0)
  const isSinglePageMode = activeNews.length <= slidesToShow

  const fetchNewsData = async () => {
    try {
      const response = await fetch("http://localhost:5000/news")
      const data = await response.json()
      setNewsData(data)
    } catch (error) {
      console.error("Error fetching news data:", error)
    }
  }

  useEffect(() => {
    fetchNewsData()
  }, [])

  const nextSlide = () => {
    if (isSinglePageMode) return
    setCurrentSlide((prev) => (prev === totalSlides ? 0 : prev + 1))
  }

  const prevSlide = () => {
    if (isSinglePageMode) return
    setCurrentSlide((prev) => (prev === 0 ? totalSlides : prev - 1))
  }

  useEffect(() => {
    if (!isSinglePageMode) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === totalSlides ? 0 : prev + 1))
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [activeNews.length, isSinglePageMode, totalSlides])

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

      {activeNews.length === 0 ? (
        <div className="news-placeholder">
          <p>No news available at the moment.</p>
          {/* You can add a nice icon or image here */}
        </div>
      ) : (
        <div className="news-container">
          <div className="news-inner-container">
            <div
              className="news-slider"
              style={{
                width: `${(activeNews.length * 100) / slidesToShow}%`,
                transform: `translateX(-${(currentSlide * 100) / activeNews.length}%)`,
                transition: "transform 0.5s ease",
                display: "flex",
              }}
            >
              {activeNews.map((news) => {
                let firstImage = "default-image.jpg"
                try {
                  const images = JSON.parse(news.images)
                  if (Array.isArray(images) && images.length > 0) {
                    firstImage = images[0]
                  }
                } catch {
                  // fallback to default image
                }

                return (
                  <div
                    key={news.id}
                    className="news-slide"
                    style={{
                      width: `${100 / activeNews.length}%`,
                      backgroundImage: `url(http://localhost:5000/uploads/${firstImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => openModal(news)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" || e.key === " ") openModal(news)
                    }}
                    aria-label={`Open news: ${news.headline}`}
                  >
                    <div className="slide-content">
                      <div>
                        <p className="slide-date">{moment(news.date).format("MMMM D, YYYY")}</p>
                        <h2 className="slide-heading">{news.headline}</h2>
                        <p className="slide-author">Posted by: {news.author}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {!isSinglePageMode && (
            <>
              <button onClick={prevSlide} className="nav-button nav-button-left" aria-label="Previous Slide">
                &#8249;
              </button>
              <button onClick={nextSlide} className="nav-button nav-button-right" aria-label="Next Slide">
                &#8250;
              </button>
            </>
          )}
        </div>
      )}

      <NewsModal isOpen={isModalOpen} newsData={selectedNews} closeModal={closeModal} />
    </section>
  )
}

export default News
