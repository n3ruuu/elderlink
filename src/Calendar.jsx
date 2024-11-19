import { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import axios from 'axios' // Import axios for API calls
import './calendar.css' // Import the external CSS file
import useMediaQuery from '@mui/material/useMediaQuery'

const Calendar = () => {
	const [events, setEvents] = useState([])
	const isMobile = useMediaQuery('(max-width: 414px)')

	useEffect(() => {
		fetchEvents() // Call the function to fetch events
	}, [])

	const fetchEvents = async () => {
		try {
			const response = await axios.get('http://localhost:5000/events') // Replace with your API endpoint
			const formattedEvents = response.data
				.filter((event) => event.status === 'Active') // Filter to include only active events
				.map((event) => ({
					title: event.title,
					date: formatDate(event.date),
					location: event.location,
					organizer: event.organizer,
					category: event.category,
					allDay: true, // Mark events as all-day
				}))
			setEvents(formattedEvents)
		} catch (error) {
			console.error('Error fetching events:', error)
		}
	}

	const formatDate = (dateStr) => {
		// Convert MM-DD-YYYY to YYYY-MM-DD
		const [month, day, year] = dateStr.split('-')
		return `${month}-${day}-${year}`
	}

	return (
		<div
			className={`${
				isMobile
					? 'absolute top-20 left-1/2 transform -translate-x-1/2 mb-4 max-w-[90%]'
					: 'absolute top-10 right-36 w-full max-w-[750px]'
			} `}
		>
			<div className="max-w-[750px] h-[600px] p-12 border-2 border-[#219EBC] rounded-2xl bg-white">
				<FullCalendar
					plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
					initialView="dayGridMonth"
					events={events} // Pass events to FullCalendar
					headerToolbar={{
						left: null, // Navigation buttons
						center: 'title', // Center title
						right: 'prev,next',
					}}
					height="100%"
					themeSystem="standard"
					eventTimeFormat={{
						// Remove the time format
						hour: '2-digit',
						minute: '2-digit',
						meridiem: false, // Hide AM/PM
					}}
					dayCellDidMount={(info) => {
						// Create a container for the event titles
						const eventContainer = document.createElement('div')
						eventContainer.className = 'fc-daygrid-day-events'

						// Add events to the container
						events.forEach((event) => {
							if (event.date === info.dateStr) {
								const eventTitle = document.createElement('div')
								eventTitle.textContent = event.title
								eventTitle.className = 'event-title' // Add a class for styling

								// Add a title attribute for the tooltip effect
								eventTitle.title = event.title // Display full title on hover

								eventContainer.appendChild(eventTitle)
							}
						})

						// Append the event container to the cell
						info.el.appendChild(eventContainer)
					}}
				/>
			</div>
		</div>
	)
}

export default Calendar
