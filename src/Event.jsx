import { useState, useEffect, useRef } from 'react'
import moment from 'moment'
import Calendar from './Calendar'
import axios from 'axios'
import './css/calendar.css'
import './css/Event.css'

const Events = () => {
	const [events, setEvents] = useState([])
	const [currentPage, setCurrentPage] = useState(1) // Track the current page
	const eventsPerPage = 5 // Limit events per page
	const eventsContainerRef = useRef(null)

	useEffect(() => {
		fetchEvents()
	}, [])

	const fetchEvents = async () => {
		try {
			const response = await axios.get('http://localhost:5000/events') // Your API endpoint

			const today = moment().startOf('day')

			const formattedEvents = response.data
				.filter((event) => event.status === 'Active')
				.map((event) => ({
					...event,
					occurrences: getEventOccurrences(event),
				}))
				.flatMap((event) => event.occurrences)
				.filter((event) => moment(event.date).isSameOrAfter(today)) // Keep today and future only
				.sort((a, b) => moment(a.date).diff(moment(b.date)))

			setEvents(formattedEvents)
		} catch (error) {
			console.error('Error fetching events:', error)
		}
	}

	const getEventOccurrences = (event) => {
		const occurrences = []
		const startDate = moment(event.date)
		const endDate = moment(event.endDate)

		switch (event.recurrence) {
			case 'Weekly':
				for (let date = startDate; date.isBefore(endDate) || date.isSame(endDate, 'day'); date.add(1, 'week')) {
					occurrences.push({
						title: event.title,
						date: date.format('YYYY-MM-DD'),
						recurrence: 'Weekly',
						location: event.location,
						organizer: event.organizer,
						category: event.category,
					})
				}
				break
			case 'Monthly':
				for (let date = startDate; date.isBefore(endDate) || date.isSame(endDate, 'day'); date.add(1, 'month')) {
					occurrences.push({
						title: event.title,
						date: date.format('YYYY-MM-DD'),
						recurrence: 'Monthly',
						location: event.location,
						organizer: event.organizer,
						category: event.category,
					})
				}
				break
			case 'Yearly':
				for (let date = startDate; date.isBefore(endDate) || date.isSame(endDate, 'day'); date.add(1, 'year')) {
					occurrences.push({
						title: event.title,
						date: date.format('YYYY-MM-DD'),
						recurrence: 'Yearly',
						location: event.location,
						organizer: event.organizer,
						category: event.category,
					})
				}
				break
			case 'Daily':
				for (let date = startDate; date.isBefore(endDate) || date.isSame(endDate, 'day'); date.add(1, 'day')) {
					occurrences.push({
						title: event.title,
						date: date.format('YYYY-MM-DD'),
						recurrence: 'Daily',
						location: event.location,
						organizer: event.organizer,
						category: event.category,
					})
				}
				break
			default:
				// For one-time events, only add the start date
				occurrences.push({
					title: event.title,
					date: startDate.format('YYYY-MM-DD'),
					recurrence: 'One-Time',
					location: event.location,
					organizer: event.organizer,
					category: event.category,
				})
				break
		}

		return occurrences
	}

	const formatDate = (dateString) => {
		return moment(dateString).format('MMM D').toUpperCase()
	}

	const splitDate = (formattedDate) => {
		const [month, day] = formattedDate.split(' ')
		return { month, day }
	}

	const categoryColorsHex = {
		'Health & Wellness': '#2E8B57',
		'Social Gathering': '#FF6F61',
		'Workshops & Classes': '#FFA500',
		Fitness: '#1E90FF',
		'Nutritional Support': '#B8860B',
		'Community Outreach': '#6A5ACD',
		'Assistance Programs': '#8B0000',
	}

	const getCategoryColor = (category) => {
		return categoryColorsHex[category] || '#ccc' // fallback gray if category not found
	}

	// Handle page change
	const handleNext = () => {
		if (currentPage < Math.ceil(events.length / eventsPerPage)) {
			setCurrentPage(currentPage + 1)
		}
	}

	const handlePrevious = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	// Get events for the current page
	const currentEvents = events.slice((currentPage - 1) * eventsPerPage, currentPage * eventsPerPage)

	// Check if more events exist to activate the "Next" button
	const hasNext = currentPage < Math.ceil(events.length / eventsPerPage)

	return (
		<section id="event" className="events-section">
			<div className="events-bg-container">
				<div className="events-bg"></div>
				<div className="gradient-overlay"></div>

				<div className="content-container">
					<div className="events-header-container">
						<h1 className="events-heading">Events</h1>
						<div className="event-pagination">
							<button onClick={handlePrevious} disabled={currentPage === 1}>
								Previous
							</button>
							<button onClick={handleNext} disabled={!hasNext}>
								Next
							</button>
						</div>
					</div>

					<div ref={eventsContainerRef}>
						{currentEvents.length > 0 ? (
							currentEvents.map((event, index) => {
								const formattedDate = formatDate(event.date)
								const { month, day } = splitDate(formattedDate)

								return (
									<div key={index} className="event-item bg-white flex items-center justify-between px-4 py-3 rounded shadow mb-3">
										<div>
											<p className="event-date flex items-center gap-2">
												<span className="event-month mt-2 font-semibold text-gray-700">{month}</span>
												<span className="event-day font-bold text-gray-900">{day}</span>
												<span className="event-title-landing text-gray-900 ml-4">{event.title}</span>
											</p>
											<p className="event-recurrence text-gray-500">{event.recurrence} Event</p>
										</div>

										{/* Colored circle */}
										<span className="rounded-full w-4 h-4" style={{ backgroundColor: getCategoryColor(event.category) }} title={event.category} />
									</div>
								)
							})
						) : (
							<p className="event-item-paragraph">No upcoming events...</p>
						)}
					</div>
				</div>
			</div>
			<Calendar />
		</section>
	)
}

export default Events
