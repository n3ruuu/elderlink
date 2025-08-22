import { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import axios from 'axios'
import './css/calendar.css'
import moment from 'moment'

const categoryColorsHex = {
	'Health & Wellness': '#2E8B57',
	'Social Gathering': '#FF6F61',
	'Workshops & Classes': '#FFA500',
	Fitness: '#1E90FF',
	'Nutritional Support': '#B8860B',
	'Community Outreach': '#6A5ACD',
	'Assistance Programs': '#8B0000',
}

const Calendar = () => {
	const [events, setEvents] = useState([])
	const [selectedEvent, setSelectedEvent] = useState(null)

	useEffect(() => {
		fetchEvents()
	}, [])

	const fetchEvents = async () => {
		try {
			const response = await axios.get('http://5.181.217.153:5000/events')
			const formattedEvents = response.data
				.filter((event) => event.status === 'Active')
				.map((event) => ({
					...event,
					occurrences: getEventOccurrences(event),
				}))
				.flatMap((event) => event.occurrences)
				.map((event) => ({
					...event,
					backgroundColor: categoryColorsHex[event.category] || '#219EBC',
					borderColor: categoryColorsHex[event.category] || '#219EBC',
					textColor: '#fff',
				}))

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
						location: event.location,
						organizer: event.organizer,
						category: event.category,
						description: event.description,
					})
				}
				break
			case 'Monthly':
				for (let date = startDate; date.isBefore(endDate) || date.isSame(endDate, 'day'); date.add(1, 'month')) {
					occurrences.push({
						title: event.title,
						date: date.format('YYYY-MM-DD'),
						location: event.location,
						organizer: event.organizer,
						category: event.category,
						description: event.description,
					})
				}
				break
			case 'Yearly':
				for (let date = startDate; date.isBefore(endDate) || date.isSame(endDate, 'day'); date.add(1, 'year')) {
					occurrences.push({
						title: event.title,
						date: date.format('YYYY-MM-DD'),
						location: event.location,
						organizer: event.organizer,
						category: event.category,
						description: event.description,
					})
				}
				break
			case 'Daily':
				for (let date = startDate; date.isBefore(endDate) || date.isSame(endDate, 'day'); date.add(1, 'day')) {
					occurrences.push({
						title: event.title,
						date: date.format('YYYY-MM-DD'),
						location: event.location,
						organizer: event.organizer,
						category: event.category,
						description: event.description,
					})
				}
				break
			default:
				occurrences.push({
					title: event.title,
					date: startDate.format('YYYY-MM-DD'),
					location: event.location,
					organizer: event.organizer,
					category: event.category,
					description: event.description,
				})
				break
		}

		return occurrences
	}

	return (
		<div className="calendar-container">
			<div className="calendar-wrapper">
				<FullCalendar
					plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
					initialView="dayGridMonth"
					events={events}
					headerToolbar={{
						left: null,
						center: 'title',
						right: 'prev,next',
					}}
					height="100%"
					eventClick={(info) => {
						info.jsEvent.preventDefault()
						setSelectedEvent(info.event.extendedProps)
					}}
					eventColor="#219EBC"
					eventContent={renderEventContent}
				/>
			</div>

			{selectedEvent && (
				<div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
					<div className="bg-white rounded-2xl shadow-2xl w-[420px] overflow-hidden animate-fadeIn">
						{/* Gradient Header */}
						<div className="bg-gradient-to-r from-[#219EBC] to-[#8ECAE6] p-5">
							<h2 className="text-xl font-bold text-white">{selectedEvent.title}</h2>
							<p className="text-sm text-white/80">{moment(selectedEvent.date).format('MMMM DD, YYYY')}</p>
						</div>

						{/* Card Body */}
						<div className="p-6 space-y-3">
							{/* Category Badge */}
							<span
								className="inline-block px-3 py-1 text-sm rounded-full font-medium text-white shadow"
								style={{
									backgroundColor: categoryColorsHex[selectedEvent.category] || '#219EBC',
								}}
							>
								{selectedEvent.category || 'General'}
							</span>

							{/* Info Rows */}
							<div className="flex items-center gap-2 text-gray-700">
								<span className="text-lg">📍</span>
								<span>{selectedEvent.location || 'TBA'}</span>
							</div>

							<div className="flex items-center gap-2 text-gray-700">
								<span className="text-lg">👤</span>
								<span>{selectedEvent.organizer || 'N/A'}</span>
							</div>

							<div className="flex items-start gap-2 text-gray-700">
								<span className="text-lg">📝</span>
								<p className="flex-1">{selectedEvent.description || 'No description provided.'}</p>
							</div>
						</div>

						{/* Footer */}
						<div className="flex justify-end bg-gray-50 p-4">
							<button onClick={() => setSelectedEvent(null)} className="px-5 py-2 rounded-lg bg-[#219EBC] text-white hover:bg-[#197a96] transition">
								Close
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

// Custom rendering inside calendar cell
function renderEventContent(eventInfo) {
	return (
		<div
			style={{
				color: eventInfo.event.extendedProps.textColor || '#fff',
				fontSize: '0.85rem',
			}}
		>
			<b>{eventInfo.timeText}</b> {eventInfo.event.title}
		</div>
	)
}

export default Calendar
