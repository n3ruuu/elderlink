import Image1 from './assets/img-1.png'
import Image2 from './assets/img-2.png'
import Image3 from './assets/img-3.png'
import useMediaQuery from '@mui/material/useMediaQuery'

const About = () => {
	const isMobile = useMediaQuery('(max-width: 414px)')

	return (
		<section
			id="about"
			className={`flex ${
				isMobile ? 'flex-col items-center px-6 gap-10' : 'flex-row pl-56'
			} pt-28 pb-28`}
		>
			{/* Text Content */}
			<div className={`${isMobile ? 'w-full text-center' : 'w-[50%]'} flex flex-col gap-5`}>
				<h1
					className={`text-[#1F1F29] font-bold ${
						isMobile ? 'text-5xl font-extrabold' : 'text-7xl'
					}`}
				>
					About <span className="text-[#219EBC]">Elderlink</span>
				</h1>
				<p className={`${isMobile ? 'text-lg text-center' : 'text-[32px] text-justify w-[700px]'}`}>
					Elderlink is designed to streamline processes and organize information about elderly
					individuals, enabling Barangay Administrators to deliver personalized care and assistance
					tailored to their specific needs. By centralizing data management, Elderlink helps
					administrators provide targeted services and support to elderly residents, ensuring they
					receive the attention and resources they require.
				</p>
			</div>

			{/* Images Section */}
			<div className={`flex ${isMobile ? 'flex-row' : 'flex-col'} items-center gap-6`}>
				{/* Image 1 */}
				{isMobile ? (
					<div className="relative w-[150px] h-[150px] md:w-full md:h-full">
						<div className="absolute inset-0 mix-blend-overlay bg-[#219EBC] opacity-[0.33] rounded-3xl"></div>
						<img src={Image1} alt="Image 1" className="w-full h-full object-cover rounded-3xl" />
					</div>
				) : (
					<div className="relative">
						<div className="absolute inset-0 mix-blend-overlay bg-[#219EBC] opacity-[0.33] rounded-3xl"></div>
						<img src={Image1} alt="Image 1" className="w-full h-full object-cover rounded-3xl" />
					</div>
				)}
				{/* Image 2 */}
				{isMobile ? (
					<div className="relative w-[150px] h-[150px] md:w-full md:h-full">
						<div className="absolute inset-0 mix-blend-overlay bg-[#219EBC] opacity-[0.33] rounded-3xl"></div>
						<img src={Image2} alt="Image 2" className="w-full h-full object-cover rounded-3xl" />
					</div>
				) : (
					<div className="relative">
						<div className="absolute inset-0 mix-blend-overlay bg-[#219EBC] opacity-[0.33] rounded-3xl"></div>
						<img src={Image2} alt="Image 2" className="w-full h-full object-cover rounded-3xl" />
					</div>
				)}
			</div>

			{/* Image 3 */}
			<div className={`relative ${isMobile ? 'w-[200px] h-[200px] mt-0' : 'mt-16 ml-4 h-[500px]'}`}>
				<div className="absolute inset-0 mix-blend-overlay bg-[#219EBC] opacity-[0.33] rounded-3xl"></div>
				<img src={Image3} alt="Image 3" className="w-full h-full object-cover rounded-3xl" />
			</div>
		</section>
	)
}

export default About
