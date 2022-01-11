import Link from 'next/link'

const text = 'Hyperscale DAO helps you build and grow your project.'
const links = ['https://airtable.com/shrLFCXD7BQXUg97K']

const Section2 = () => (
	<div className="relative">
		<img src="/coins/token.svg" className="absolute w-40 -top-20 left-20" />
		<img src="/coins/token2.svg" className="absolute w-28 -bottom-20 right-32" />
		<div className="bg-[#160A2F] md:px-10">
			<div className="bg-[#FEDB9E] py-24 rounded px-8">
				<div className="flex flex-col justify-center items-center">
					<img src="/section2/join.svg" />
					<div className="text-xl mt-4">{text}</div>
					<div className="flex justify-evenly my-16 px-8">
					<div  className='w-3/12 section-2-card text-center'>
							<h3 className="font-['Redrose'] text-3xl  mt-10 font-bold" >Hyper Fast <br/> Funding</h3>
							<img className='py-8' src="/section2/Fast-funding.svg" />
							<div className="text-lg	 text-center px-2 mb-10">Receive up to $1M from. Apply in 15 minutes and you'll recieve a decision in a few days</div>
				 		</div>
						 <div  className='w-3/12 section-2-card text-center'>
							<h3 className="font-['Redrose'] text-3xl  mt-10 font-bold" >The Hyperscale  <br/> Community</h3>
							<img className='py-8' src="/section2/hyperscale-community.svg" />
							<div className="text-lg	 text-center px-2 mb-10">Community of high-performing DAOs, founders, web3 experts, and like-minded peers</div>
				 		</div>
						 <div  className='w-3/12 section-2-card text-center'>
							<h3 className="font-['Redrose'] text-3xl  mt-10 font-bold" >The Talent <br/> Network</h3>
							<img className='py-8' src="/section2/t-network.svg" />
							<div className="text-lg	 text-center px-2 mb-10">Find top-tier developers, designers, governance experts, &#38; legal advisors</div>
				 		</div>
					</div>
					<Link href={links[0]}>
						<a target="_blank">
							<img src="/section2/btn.svg" width={220} />
						</a>
					</Link>
				</div>
			</div>
		</div>
	</div>
)

export default Section2
