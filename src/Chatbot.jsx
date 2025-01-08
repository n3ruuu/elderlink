import React, { useState } from "react";
import "./css/Chatbot.css";

const Chatbot = () => {
  const faqs = [
    {
        question: "How do I register?",
        answer: "You can register in-person through your local OSCA main offices or you can use our service through the online registration form. These are the requirements needed for the registration: <br/><br/> New applications: <br/> - 2pcs 1x1 pictures <br/> - Zerox of Birth Certificate or any valid ID with date of Birth <br/><br/> Lost: <br/> - 1 pc 1x1 picture <br/> - Zerox of Birth Certificate or any valid ID with date of Birth <br/> - Affidavit of loss <br/><br/> Replacement: <br/> - 2pcs 1x1 pictures <br/> - Zerox of Birth Certificate or any valid ID with date of Birth <br/> - Surrender old ID or Booklet <br/><br/> Transfer: <br/> - 2pcs 1x1 pictures <br/> - Zerox of Birth certificate or any valid ID with date of birth <br/> - Cancellation certificate <br/> - Barangay Clearance",
    },
    {
        question: "What is the required age to register?",
        answer: "It is required to be 60 years old to be able to register. Age lower than 60 may it be day or hours are not qualified.",
    },
    {
        question: "When can I get my Senior Citizen ID and booklet?",
        answer: "You can get your ID and booklet after registering through your local OSCA main offices. However, when you register online, you still need to go to your local OSCA main offices to claim your ID and booklet.",
    },
    {
        question: "Where is Barangay Mojon main office located?",
        answer: "The main office of Barangay Mojon is located at VR69+82W, Malolos, Bulacan",
        mapLink: "https://maps.app.goo.gl/XVjGC6sUJiuPkZYy8",
        wazeLink: "https://www.waze.com/en/live-map/directions/mojon-barangay-hall-malolos?place=w.79167637.791807438.15155163",
    },
    {
      question: "Who can I contact for further questions or support?",
      answer: "You can contact us via email at <a href='https://mail.google.com/mail/?view=cm&fs=1&to=elderlink@gmail.com' target='_blank' class='email-link'>elderlink@gmail.com</a> or call us (555) 123-4567.",
    },
  
];

    const [messages, setMessages] = useState([]);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isFirstMessage, setIsFirstMessage] = useState(true);

    const handleQuestionClick = (faq) => {
        const userMessage = { text: faq.question, sender: "user" };
        const botMessage = {
            text: faq.answer,
            sender: "bot",
            mapLink: faq.mapLink || null, 
            wazeLink: faq.wazeLink || null, 
        };
        const followUpMessage = { text: "Is there anything else I can help you with?", sender: "bot" };

        setMessages((prevMessages) => [...prevMessages, userMessage, botMessage, followUpMessage]);
        setIsFirstMessage(false);
    };

    const handleChatOpen = () => {
        setIsChatOpen(true);

        // Add initial greeting message when the chat opens
        if (isFirstMessage && messages.length === 0) {
            setMessages([{ text: "Hi, how can I help?", sender: "bot" }]);
        }
    };

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
                            <div key={index} className={`chatbot-message ${message.sender === "bot" ? "bot" : "user"}`}>
                                 {message.sender === "bot" ? (<div dangerouslySetInnerHTML={{ __html: message.text }}></div>) : (message.text)}
                                {message.mapLink && (
                                    <a
                                        href={message.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="map-link"
                                    >
                                        <br /> Click here to view on Google Maps.
                                    </a>
                                )}
                                {message.wazeLink && (
                                    <a
                                        href={message.wazeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="waze-link"
                                    >
                                        <br />
                                        <br /> Click here to open in Waze.
                                    </a>
                                )}
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
    );
};

export default Chatbot;
