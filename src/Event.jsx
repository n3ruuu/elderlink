import eventsData from './data/events.json' // Import the events data from JSON file
import Calendar from './Calendar'

const formatDate = (dateString) => {
	const date = new Date(dateString)
	const options = { month: 'short', day: 'numeric' }
	return date.toLocaleDateString('en-US', options).toUpperCase()
}

const splitDate = (formattedDate) => {
	const [month, day] = formattedDate.split(' ')
	return { month, day }
}

const Events = () => {
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
					{eventsData.map((event, index) => {
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
					})}
				</div>
			</div>
			<Calendar />
		</section>
	)
}

export default Events
