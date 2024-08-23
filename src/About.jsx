import Image1 from './assets/img-1.png'
import Image2 from './assets/img-2.png'
import Image3 from './assets/img-3.png'

const About = () => {
	return (
		<section id="about" className="min-h-screen flex mt-28 ml-56">
			<div className="w-[50%] flex flex-col gap-5">
				<h1 className="self-start text-center text-8xl font-bold text-[#1F1F29] ">
					About <span className="text-[#219EBC]">Elderlink</span>
				</h1>
				<p className="text-[32px] text-justify w-[700px]">
					Elderlink is designed to streamline processes and organize information about elderly
					individuals, enabling Barangay Administrators to deliver personalized care and assistance
					tailored to their specific needs. By centralizing data management, Elderlink helps
					administrators provide targeted services and support to elderly residents, ensuring they
					receive the attention and resources they require.
				</p>
			</div>
			<div className="w-[50%] flex gap-10">
				<div className="flex flex-col items-center gap-10">
					{/* Image 1 */}
					<div className="relative">
						<div className="absolute inset-0 mix-blend-overlay bg-[#219EBC] opacity-[0.33] rounded-3xl"></div>
						<img
							src={Image1}
							alt="Image 1"
							className="w-full mix-blend-overlay h-full object-cover rounded-3xl"
						/>
					</div>
					{/* Image 2 */}
					<div className="relative">
						<div className="absolute inset-0 mix-blend-overlay bg-[#219EBC] opacity-[0.33] rounded-3xl"></div>
						<img
							src={Image2}
							alt="Image 2"
							className="w-full h-full object-cover mix-blend-overlay rounded-3xl"
						/>
					</div>
				</div>
				<div className="relative mt-16">
					{/* Image 3 */}
					<div className="absolute inset-0 mix-blend-overlay bg-[#219EBC] opacity-[0.33] h-[500px] rounded-3xl"></div>
					<img
						src={Image3}
						alt="Image 3"
						className="place-self-center w-full mix-blend-overlay h-[500px] object-cover rounded-3xl"
					/>
				</div>
			</div>
		</section>
	)
}

export default About
