import Link from 'next/link'

const text = 'Receive funding & join the ecosystem in <1W'
const links = [
	'https://airtable.com/shrLFCXD7BQXUg97K',
]


const Section1 = () => (
	<div style={{ background: "#160A2F"}} className="my-8">
		
		<div className="flex items-center justify-evenly bg-[#FEDB9E] py-32 mx-12">
			<div className="flex flex-col justify-center items-center">
				<div className="my-8">
					<img src="/section2/header.svg" />
				</div>
				<div className="flex px-24 lg:justify-evenly lg:gap-28">
					{/* <div className="flex flex-col space-y-6 border-2 border-black py-8 px-12 my-4 rounded bg-[#EBE8E3] drop-shadow-lg">
						<img src="/section2/hyper-fast-funding.svg" className="" />
						<img src="/section2/icon2.svg" />
						<div className="w-60 text-center">Receive up to $1M from. Apply in 15 minutes and you’ll recieve a decision as soon as 1-week</div>
					</div> */}
					<div className="flex flex-col">
						<img src="/section2/card1.svg" />
					</div>

					{/* <div className="flex flex-col space-y-6 border-2 border-black py-8 px-12 my-4 rounded bg-[#EBE8E3] drop-shadow-lg">
						<img src="/section2/the-hyperscale-community.svg" className="" />
						<img src="/section2/icon1.svg" />
						<div className="w-60 text-center">Community of high-performing DAOs, founders, web3 experts, and like-minded peers</div>
					</div> */}

					<div className="flex flex-col">
						<img src="/section2/card2.svg" />
					</div>

					{/* <div className="flex flex-col space-y-6 border-2 border-black py-8 px-12 my-4 rounded bg-[#EBE8E3] drop-shadow-lg">
						<img src="/section2/the-talent-network.svg" className=""/>
						<img src="/section2/icon3.svg" />
						<div className="w-60 text-center">Find top-tier developers, designers, governance experts, & legal advisors</div>
					</div> */}

					<div className="flex flex-col">
						<img src="/section2/card3.svg" />
					</div>
				</div>
				<div className="flex justify-center mt-16">
					<Link href={links[0]}>
						<a target="_blank">
							<div className="flex px-4 h-10 bg-[#BAC4FA] border-2 border-black rounded-sm drop-shadow-xl justify-center items-center font-semibold">
								Apply to Hyperscale
							</div>
						</a>
					</Link>
				</div>
			</div>
		</div>
	</div>
)

export default Section1
