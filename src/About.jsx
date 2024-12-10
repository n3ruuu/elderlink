import React from 'react'
import Image1 from './assets/img-1.png'
import Image2 from './assets/img-2.png'
import Image3 from './assets/img-3.png'
import useMediaQuery from '@mui/material/useMediaQuery'
import './css/About.css'

const About = () => {
    return (
        <section id="about" className="about-section">
          <div className="about-section-container">
            {/* Text Content */}
            <div className="text-content">
                <h1 className="heading">
                    About <span className="highlight">Elderlink</span>
                </h1>
                <p>
                    Elderlink is designed to streamline processes and organize information about elderly
                    individuals, enabling Barangay Administrators to deliver personalized care and assistance
                    tailored to their specific needs. By centralizing data management, Elderlink helps
                    administrators provide targeted services and support to elderly residents, ensuring they
                    receive the attention and resources they require.
                </p>
            </div>

            {/* Images Section */}
            <div className="images-section">
                <div className="left-image-container">
                  {/* Image 1 */}
                  <div className="image-container">
                      <div className="about-overlay"></div>
                      <img src={Image1} alt="Image 1" className="image" />
                  </div>

                  {/* Image 2 */}
                  <div className="image-container">
                      <div className="about-overlay"></div>
                      <img src={Image2} alt="Image 2" className="image" />
                  </div>
                </div>

                {/* Image 3 */}
                <div className="right-image-container">
                <div className="about-overlay"></div>
                <img src={Image3} alt="Image 3" className="image" />
                </div>
            </div>
          </div>     
        </section>
    );
};

export default About;
