import { useState, useEffect } from 'react'
import moment from 'moment'
import Calendar from './Calendar'
import axios from 'axios'
import './calendar.css'
import useMediaQuery from '@mui/material/useMediaQuery'

const Events = () => {
	const isMobile = useMediaQuery('(max-width: 414px)')
	const [eventsData, setEventsData] = useState([])

	useEffect(() => {
		fetchEvents()
	}, [])

	const fetchEvents = async () => {
		try {
			const response = await axios.get('http://localhost:5000/events')
			const sortedEvents = response.data.sort((a, b) => {
				const dateA = moment(a.date)
				const dateB = moment(b.date)
				return dateA.isBefore(dateB) ? -1 : 1
			})
			setEventsData(sortedEvents)
		} catch (error) {
			console.error('Error fetching events:', error)
		}
	}

	const formatDate = (dateString) => {
		return moment(dateString).format('MMM D').toUpperCase() // 'MMM D' format
	}

	const splitDate = (formattedDate) => {
		const [month, day] = formattedDate.split(' ')
		return { month, day }
	}

	return (
		<section id="event" className={`relative mt-16 mb-16 ${isMobile ? '' : 'ml-48'}`}>
			{/* Background Image (Fixed) */}
			<div
				className={`relative p-8 ${
					isMobile ? 'w-full h-[auto]' : 'w-[1000px] h-[700px]'
				} rounded-lg border-[#219EBC]`}
			>
				<div className="absolute inset-0 bg-cover bg-center rounded-xl bg-events-bg opacity-20 bg-fixed"></div>
				{/* Gradient Overlay */}
				<div
					className={`absolute inset-0 bg-[#219EBC] ${isMobile ? '' : 'rounded-xl'}`}
					style={{ opacity: 0.75 }}
				></div>

				{/* Content Container */}
				<div
					className={`relative z-10 overflow-y-auto h-full scrollbar-hide ${isMobile ? '' : 'p-8'}`}
				>
					<h1
						className={`text-5xl ${isMobile ? 'font-extrabold' : 'font-bold'} mb-4 text-[#F5F5FA]`}
					>
						Events
					</h1>

					{eventsData.length > 0 ? (
						eventsData.map((event, index) => {
							const formattedDate = formatDate(event.date)
							const { month, day } = splitDate(formattedDate)

							return (
								<div
									key={index}
									className={`mb-4 w-full ${
										isMobile ? 'p-1 ' : 'border-b-2 w-[80%] p-4  border-gray-200'
									}`}
								>
									<p
										className={`text-xl text-[#F5F5FA] flex gap-5 ${
											isMobile ? 'text-sm' : 'text-xl'
										}`}
									>
										<span className={`font-light ${isMobile ? 'text-[15px]' : 'text-[20px]'}`}>
											{month}
										</span>{' '}
										<span className={` ${isMobile ? 'text-[16px]' : 'w-12 text-[40px]'}`}>
											{day}
										</span>
										<span className={`${isMobile ? 'text-[20px]' : 'text-[32px] '}`}>
											{event.title}
										</span>
									</p>
								</div>
							)
						})
					) : (
						<p className="text-xl text-[#F5F5FA]">Loading events...</p>
					)}
				</div>
			</div>

			{/* Calendar component */}
			<Calendar />
		</section>
	)
}

export default Events
