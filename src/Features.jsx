/* eslint-disable react/no-unescaped-entities */
import MembershipIcon from './assets/icons/membership.png'
import DataIcon from './assets/icons/data.png'
import RecordIcon from './assets/icons/record.png'
import FinancialIcon from './assets/icons/financial.png'
import EventIcon from './assets/icons/event.png'
import SmsIcon from './assets/icons/sms.png'
import FormIcon from './assets/icons/form.png'
import ReportIcon from './assets/icons/data.png'

const Features = () => {
	return (
		<section id="features" className="min-h-[50%]">
			<h1 className=" text-center text-7xl font-bold text-[#219EBC]">Features</h1>
			<div className="flex flex-wrap justify-center gap-5 m-16">
				<div className="flex flex-col gap-2 p-8 bg-[#219EBC]/[0.15] h-[250px] w-[400px] rounded-2xl">
					<img className="w-[50px]" src={MembershipIcon} alt="Membership Icon" />
					<h2 className="text-[#333333] font-bold text-[24px]">Membership Transactions</h2>
					<p className="text-[#767171]">
						Manage sign-ups, renewals, and updates for senior citizen member.
					</p>
				</div>
				<div className="flex flex-col gap-2 p-8 bg-[#219EBC]/[0.15] h-[250px] w-[400px] rounded-2xl">
					<img className="w-[50px]" src={DataIcon} alt="Data Icon" />
					<h2 className="text-[#333333] font-bold text-[24px]">Data Profiling</h2>
					<p className="text-[#767171]">
						Understand seniors' needs better by organizing and analyzing their.
					</p>
				</div>
				<div className="flex flex-col gap-2 p-8 bg-[#219EBC]/[0.15] h-[250px] w-[400px] rounded-2xl">
					<img className="w-[50px]" src={RecordIcon} alt="Record Icon" />
					<h2 className="text-[#333333] font-bold text-[24px]">Record-Keeping</h2>
					<p className="text-[#767171]">
						Keep track of senior citizens' details and interactions securely.
					</p>
				</div>
				<div className="flex flex-col gap-2 p-8 bg-[#219EBC]/[0.15] h-[250px] w-[400px] rounded-2xl">
					<img className="w-[50px]" src={FinancialIcon} alt="Financial Icon" />
					<h2 className="text-[#333333] font-bold text-[24px]">Financial Assistance</h2>
					<p className="text-[#767171]">Help seniors gain financial support and benefits.</p>
				</div>
				<div className="flex flex-col gap-2 p-8 bg-[#219EBC]/[0.15] h-[250px] w-[400px] rounded-2xl">
					<img className="w-[50px]" src={EventIcon} alt="Event Icon" />
					<h2 className="text-[#333333] font-bold text-[24px]">Events Management</h2>
					<p className="text-[#767171]">
						Create and manage senior citizen related events and activities.
					</p>
				</div>
				<div className="flex flex-col gap-2 p-8 bg-[#219EBC]/[0.15] h-[250px] w-[400px] rounded-2xl">
					<img className="w-[50px]" src={SmsIcon} alt="SMS Icon" />
					<h2 className="text-[#333333] font-bold text-[24px]">SMS Notifications</h2>
					<p className="text-[#767171]">
						Transmit important information such as events, pension imburse.
					</p>
				</div>{' '}
				<div className="flex flex-col gap-2 p-8 bg-[#219EBC]/[0.15] h-[250px] w-[400px] rounded-2xl">
					<img className="w-[50px]" src={FormIcon} alt="Form Icon" />
					<h2 className="text-[#333333] font-bold text-[24px]">Forms Management</h2>
					<p className="text-[#767171]">
						Allow seniors to apply for services and programs conveniently online.
					</p>
				</div>{' '}
				<div className="flex flex-col gap-2 p-8 bg-[#219EBC]/[0.15] h-[250px] w-[400px] rounded-2xl">
					<img className="w-[50px]" src={ReportIcon} alt="Report Icon" />
					<h2 className="text-[#333333] font-bold text-[24px]">Report Generation</h2>
					<p className="text-[#767171]">
						Create reports and insights to improve services and programs.
					</p>
				</div>
			</div>
		</section>
	)
}

export default Features
