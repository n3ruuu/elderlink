import { useState, useEffect } from 'react'
import moment from 'moment'
import Calendar from './Calendar'
import axios from 'axios'

const formatDate = (dateString) => {
	// Use Moment.js to format the date
	return moment(dateString).format('MMM D').toUpperCase() // 'MMM D' will give you month and day like 'Nov 5'
}

const splitDate = (formattedDate) => {
	const [month, day] = formattedDate.split(' ')
	return { month, day }
}

const Events = () => {
	const [eventsData, setEventsData] = useState([])

	useEffect(() => {
		fetchEvents()
	}, [])

	const fetchEvents = async () => {
		try {
			const response = await axios.get('http://localhost:5000/events')
			const sortedEvents = response.data.sort((a, b) => {
				// Convert event dates to moment objects and compare
				const dateA = moment(a.date)
				const dateB = moment(b.date)
				return dateA.isBefore(dateB) ? -1 : 1 // Sort by ascending date
			})
			setEventsData(sortedEvents)
		} catch (error) {
			console.error('Error fetching events:', error)
		}
	}

	return (
		<section id="event" className="relative ml-48 mt-16 mb-16">
			<div className="relative p-16 w-[1000px] border-[#219EBC] rounded-lg overflow-hidden">
				{/* Background Image */}
				<div className="absolute inset-0 bg-cover bg-center bg-events-bg opacity-20"></div>
				{/* Gradient Overlay */}
				<div className="absolute inset-0 bg-[#219EBC] opacity-75"></div>
				{/* Content */}
				<div className="relative z-10 p-4">
					<h1 className="text-6xl font-bold mb-4 text-[#F5F5FA]">Events</h1>
					{eventsData.length > 0 ? (
						eventsData.map((event, index) => {
							const formattedDate = formatDate(event.date)
							const { month, day } = splitDate(formattedDate)

							return (
								<div key={index} className="mb-4 p-4 border-b-2 w-[90%] border-gray-200">
									<p className="text-xl text-[#F5F5FA] flex gap-5">
										<span className="font-light text-[20px]">{month}</span>{' '}
										<span className="text-[40px] w-12">{day}</span>
										<span className="text-[32px]"> {event.title}</span>
									</p>
								</div>
							)
						})
					) : (
						<p className="text-xl text-[#F5F5FA]">Loading events...</p>
					)}
				</div>
			</div>
			<Calendar />
		</section>
	)
}

export default Events
