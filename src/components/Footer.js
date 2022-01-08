import Link from 'next/link'

const separator = '//'
const links = [
	'https://www.hyperscalefund.com',
	'https://www.twitter.com/HyperscaleFund',
	'https://discord.gg/7CGPQ8fWHt',
	'https://airtable.com/shrLFCXD7BQXUg97K',
]

const Footer = () => (
	<div className="w-screen h-24 bg-[#100528] flex justify-center items-center relative">
		<div className="flex absolute left-20">
			<Link href={links[0]}>
				<a>
					<div className="text-white">Home</div>
				</a>
			</Link>
			<div className="text-[#FEDB9E] mx-4">{separator}</div>
			<Link href={links[1]}>
				<a target="_blank">
					<div className="text-white">Twitter</div>
				</a>
			</Link>
			<div className="text-[#FEDB9E] mx-4">{separator}</div>
			<Link href={links[2]}>
				<a target="_blank">
					<div className="text-white">Discord</div>
				</a>
			</Link>
		</div>
		<img src="/footer/text.svg" />
	</div>
)

export default Footer
