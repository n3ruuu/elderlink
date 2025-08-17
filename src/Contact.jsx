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
			{/* Overlay */}
			<div className="contact-overlay"></div>

			{/* Main Content */}
			<div className="contact-container">
				<div className="contact-header">
					<h1>Contact Us</h1>
					<p className="contact-email">📧 elderlinkinfo2025@gmail.com</p>
				</div>

				{/* Officers Section */}
				<div className="team-section">
					<h2>Mojon Chapter Officers (2024-2026)</h2>
					<div className="team-cards">
						{loading ? (
							<p>Loading officers...</p>
						) : officers.length > 0 ? (
							officers.map((officer) => (
								<div key={officer.id} className="team-card">
									<div className="team-avatar">{officer.name.charAt(0)}</div>
									<div className="team-info">
										<h3>{officer.name}</h3>
										<p>{officer.position}</p>
									</div>
								</div>
							))
						) : (
							<p>No officers found.</p>
						)}
					</div>
				</div>

				{/* Area Coordinators Section */}
				<div className="team-section">
					<h2>Area Coordinators</h2>
					<div className="team-cards">
						{loading ? (
							<p>Loading coordinators...</p>
						) : coordinators.length > 0 ? (
							coordinators.map((coordinator) => (
								<div key={coordinator.id} className="team-card">
									<div className="team-avatar">{coordinator.name.charAt(0)}</div>
									<div className="team-info">
										<h3>{coordinator.name}</h3>
										<p>{coordinator.area}</p>
									</div>
								</div>
							))
						) : (
							<p>No coordinators found.</p>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
