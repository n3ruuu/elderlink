import { useState } from 'react'
import './css/Chatbot.css'

const Chatbot = () => {
	const faqs = [
		{ question: 'How do I register?', answer: 'You can register in-person through your local OSCA main offices or you can use our service through the online registration form.' },
		{ question: 'What is the required age to register?', answer: 'It is required to be 60 years old to be able to register. Age lower than 60 may it be day or hours are not qualified.' },
		{
			question: 'When can I get my Senior Citizen ID and booklet?',
			answer:
				'You can get your id and booklet after registering through your local OSCA main offices. However, when you register online, you still need to go to your local OSCA main offices to claim your ID and booklet.',
		},
		{
			question: 'Will I get a financial assistance?',
			answer: 'Financial assistance like social pensions are limited. However, if you are part of the beneficiaries you will get notified by OSCA officers through email or text messages.',
		},
		{ question: 'How can I contact OSCA?', answer: 'You can contact official OSCA support via email at support@example.com or call us at (555) 123-4567.' },
	]

	const [messages, setMessages] = useState([])
	const [isChatOpen, setIsChatOpen] = useState(false)
	const [isFirstMessage, setIsFirstMessage] = useState(true)

	const handleQuestionClick = (faq) => {
		const userMessage = { text: faq.question, sender: 'user' }
		const botMessage = { text: faq.answer, sender: 'bot' }
		const followUpMessage = { text: 'Is there anything else I can help you with?', sender: 'bot' }

		setMessages((prevMessages) => [...prevMessages, userMessage, botMessage, followUpMessage])
		setIsFirstMessage(false) // Mark that the first message has been sent
	}

	const handleChatOpen = () => {
		setIsChatOpen(true)

		// Add initial greeting message when the chat opens
		if (isFirstMessage && messages.length === 0) {
			setMessages([{ text: 'Hi, how can I help?', sender: 'bot' }])
		}
	}

	return (
		<>
			{/* Sticky Chat Icon */}
			{!isChatOpen && (
				<div className="chatbot-icon" onClick={handleChatOpen} title="Open Chat">
					💬
				</div>
			)}

			{/* Chatbot Window */}
			{isChatOpen && (
				<div className="chatbot-container">
					<div className="chatbot-header">
						<span>FAQ Chatbot</span>
						<button className="chatbot-close" onClick={() => setIsChatOpen(false)}>
							✖
						</button>
					</div>
					<div className="chatbot-messages">
						{messages.map((message, index) => (
							<div key={index} className={`chatbot-message ${message.sender === 'bot' ? 'bot' : 'user'}`}>
								{message.text}
							</div>
						))}
					</div>
					<div className="chatbot-suggestions">
						{faqs.map((faq, index) => (
							<button key={index} className="chatbot-suggestion" onClick={() => handleQuestionClick(faq)}>
								{faq.question}
							</button>
						))}
					</div>
				</div>
			)}
		</>
	)
}

export default Chatbot
