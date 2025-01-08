import React, { useState, useEffect, useRef } from 'react'
import moment from 'moment'
import Calendar from './Calendar'
import axios from 'axios'
import './css/calendar.css'
import './css/Event.css'

const Events = () => {
	const [eventsData, setEventsData] = useState([])
	const [currentPage, setCurrentPage] = useState(1) // Track the current page
	const eventsPerPage = 5 // Limit events per page
	const eventsContainerRef = useRef(null)

	useEffect(() => {
		fetchEvents()
	}, [])

	const fetchEvents = async () => {
		try {
			const response = await axios.get('http://localhost:5000/events')
			const sortedEvents = response.data
				.filter((event) => moment(event.date).isAfter(moment())) // Filter events that are in the future
				.map((event) => ({
					...event,
					occurrences: getEventOccurrences(event), // Add recurrence handling
				}))
				.flatMap((event) => event.occurrences) // Flatten recurrence events
				.sort((a, b) => moment(a.date).diff(moment(b.date))) // Sort by date ascending
			setEventsData(sortedEvents)
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

	const categoryColors = {
		'Health & Wellness': 'bg-teal-400',
		'Social Gathering': 'bg-blue-400',
		'Workshops & Classes': 'bg-green-400',
		Fitness: 'bg-red-400',
		'Nutritional Support': 'bg-yellow-400',
		'Community Outreach': 'bg-purple-400',
		'Assistance Programs': 'bg-orange-400',
	}

	// Handle page change
	const handleNext = () => {
		if (currentPage < Math.ceil(eventsData.length / eventsPerPage)) {
			setCurrentPage(currentPage + 1)
		}
	}

	const handlePrevious = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	// Get events for the current page
	const currentEvents = eventsData.slice((currentPage - 1) * eventsPerPage, currentPage * eventsPerPage)

	// Check if more events exist to activate the "Next" button
	const hasNext = currentPage < Math.ceil(eventsData.length / eventsPerPage)

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
								const categoryClass = categoryColors[event.category] || 'bg-gray-500'

								return (
									<div key={index} className={`event-item ${categoryClass}`}>
										<p className="event-date">
											<span className="event-month mt-2">{month}</span>
											<span className="event-day">{day}</span>
											<span className="event-title-landing">{event.title}</span>
										</p>
										<p className="event-recurrence text-white">{event.recurrence} Event</p>
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
