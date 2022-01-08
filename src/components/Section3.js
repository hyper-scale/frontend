const text = 'We get to a decision fast so you can focus on execution.'
const ampersand = '&'

const Section3 = () => (
	<div className="bg-[#160A2F] py-32">
		<div className="flex flex-col justify-center items-center">
			<div className="flex bg-white w-48 h-10 rounded-sm justify-center items-center font-semibold">
				Application Process
			</div>
			<div className="my-8">
				<img src="/section3/header.svg" />
			</div>
			<div className="text-white text-2xl">{text}</div>
		</div>
		<div className="flex justify-evenly py-28">
			<img src="/section3/diagram.svg" />
			<div className="flex flex-col">
				<div className="flex items-center my-8">
					<img src="/section3/apply.svg" width={60} />
					<div className="flex flex-col ml-8 w-60">
						<div className="text-[#BAC4FA] font-bold">APPLY</div>
						<div className="text-white">In just 15 minutes</div>
					</div>
				</div>
				<div className="flex items-center my-8">
					<img src="/section3/block.svg" width={60} />
					<div className="flex flex-col ml-8 w-60">
						<div className="text-[#BAC4FA] font-bold">REVIEW {ampersand} ASYNC INTERVIEW</div>
						<div className="text-white">We review your applicationand if we like it, we interview you</div>
					</div>
				</div>
				<div className="flex items-center my-8">
					<img src="/section3/call.svg" width={60} />
					<div className="flex flex-col ml-8 w-60">
						<div className="text-[#BAC4FA] font-bold">CALL</div>
						<div className="text-white">A 15 minute call is the final process in the application.</div>
					</div>
				</div>
				<div className="flex items-center my-8">
					<img src="/section3/logo.svg" width={60} />
					<div className="flex flex-col ml-8 w-60">
						<div className="text-[#BAC4FA] font-bold">DD {ampersand} FUNDING</div>
						<div className="text-white">
							If you are accepted into Hyperscale, we will do Due Dilligence and then fund you.
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Section3
