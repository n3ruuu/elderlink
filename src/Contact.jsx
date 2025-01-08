import { useEffect, useState } from 'react'
import axios from 'axios'
import './css/Contact.css'

const Contact = () => {
	const [officers, setOfficers] = useState([])
	const [coordinators, setCoordinators] = useState([])
	const [loading, setLoading] = useState(true)

	// Fetch officers and coordinators data
	useEffect(() => {
		const fetchData = async () => {
			try {
				const [officerResponse, coordinatorResponse] = await Promise.all([axios.get('http://localhost:5000/cms/officers'), axios.get('http://localhost:5000/cms/area-coordinators')])

				setOfficers(officerResponse.data)
				setCoordinators(coordinatorResponse.data)
			} catch (error) {
				console.error('Error fetching data', error)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	return (
		<section id="contact" className="contact-section">
			{/* Background Image Overlay */}
			<div className="contact-background-image-overlay"></div>
			{/* Color Overlay */}
			<div className="contact-color-overlay"></div>

			{/* Content */}
			<div className="contact-content">
				<h1 className="contact-heading">Contact Us</h1>
				<h2 className="contact-email">elderlink.support@gmail.com</h2>
			</div>

			{/* Officers and Area Coordinators Section */}
			<div className="officers-section">
				<h2 className="officers-heading">Association of Senior Citizen</h2>
				<h3 className="chapter-heading">Mojon Chapter Officers (2024-2026)</h3>
				<div className="officers-list">
					{loading ? (
						<p>Loading officers...</p>
					) : officers.length > 0 ? (
						officers.map((officer) => (
							<p key={officer.id}>
								<strong>{officer.position}:</strong> {officer.name}
							</p>
						))
					) : (
						<p>No officers found.</p>
					)}
				</div>

				<h3 className="coordinators-heading">Area Coordinators</h3>
				<div className="coordinators-list">
					{loading ? (
						<p>Loading coordinators...</p>
					) : coordinators.length > 0 ? (
						coordinators.map((coordinator) => (
							<p key={coordinator.id}>
								<strong>{coordinator.area}:</strong> {coordinator.name}
							</p>
						))
					) : (
						<p>No coordinators found.</p>
					)}
				</div>
			</div>
		</section>
	)
}

export default Contact
