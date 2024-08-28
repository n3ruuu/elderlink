/* eslint-disable react/no-unescaped-entities */
const Forms = () => {
	return (
		<section id="forms" className="relative p-8 m-36">
			<h1 className="text-6xl pb-8 font-bold text-[#219EBC] mb-8 border-b-2 w-[85%] border-b-[#7671714D]">
				Application Forms
			</h1>

			{/* OSCA Forms */}
			<div className="mb-12">
				<h3 className="text-3xl font-semibold text-[#023047] mb-4">
					Office of the Senior Citizens Affairs (OSCA) Forms
				</h3>
				<ul className="list-disc pl-8 text-[#219EBC]">
					<li>Senior Citizen’s Identification Card (ID) Application Form</li>
					<li>Death Benefit Application Form</li>
					<li>Social Pension Intake Application Form</li>
					<li>Citizen’s Charter Application Form</li>
					<li>Replacement Application Form</li>
				</ul>
			</div>

			{/* Senior Citizen Services and Support Forms */}
			<div className="mb-12">
				<h3 className="text-3xl font-semibold text-[#023047] mb-4">
					Senior Citizen Services and Support Forms
				</h3>
				<ul className="list-disc pl-8 text-[#219EBC]">
					<li>Senior Citizen's Discount Card Application Form</li>
					<li>Healthcare Assistance Application Form</li>
					<li>Financial Aid Application Form</li>
					<li>Home Care Services Application Form</li>
					<li>Transportation Assistance Application Form</li>
					<li>Social Welfare Programs Enrollment Form</li>
					<li>Housing Assistance Application Form</li>
					<li>Emergency Assistance Request Form</li>
				</ul>
			</div>

			{/* Legal and Justice Forms */}
			<div>
				<h3 className="text-3xl font-semibold text-[#023047] mb-4">Legal and Justice Forms</h3>
				<ul className="list-disc pl-8 text-[#219EBC]">
					<li>Legal Aid Request Form</li>
					<li>Court Mediation Request Form</li>
					<li>Legal Documentation Assistance Form</li>
					<li>Victim Assistance Application Form</li>
					<li>Legal Rights Education Seminar Registration Form</li>
				</ul>
			</div>
		</section>
	)
}

export default Forms
