import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import './calendar.css' // Import the external CSS file

const Calendar = () => {
	return (
		<div className="absolute top-10 right-36">
			<div className="max-w-[750px] h-[600px] p-12 border-2 border-[#219EBC] rounded-lg bg-white">
				<FullCalendar
					plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
					initialView={'dayGridMonth'}
					headerToolbar={{
						start: 'today prev,next',
						center: 'title',
						end: 'dayGridMonth,timeGridWeek,timeGridDay',
					}}
					height={'100%'}
					themeSystem="standard"
					className="text-sm"
				/>
			</div>
		</div>
	)
}

export default Calendar
