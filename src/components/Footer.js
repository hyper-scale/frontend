import Link from 'next/link'

const text = 'Hyperscale'
const separator = '//'
const links = [
	'https://hyperscale.notion.site/Hyperscale-Knowledge-Base-6c8253dc64df4562bf4f258bbd206707',
	'https://www.twitter.com/HyperscaleFund',
	'https://discord.gg/7CGPQ8fWHt',
	'https://airtable.com/shrLFCXD7BQXUg97K',
	'/privacy',
	'/terms',
]

const Footer = () => (
	<div className="w-full bg-[#160A2F] px-8">
		<div className="container mx-auto flex flex-wrap justify-between items-center py-8">
			<div className="w-full lg:w-1/3 flex justify-center lg:justify-start pb-8 lg:pb-0">
				<img src="/footer/Footer-logo.svg" className="w-40 lg:w-min" />
			</div>
			<div className="w-full lg:w-auto flex justify-evenly lg:justify-end pb-8 lg:pb-0 font-light text-white/70">
				<Link href={links[0]}>
					<a className="mx-4">
						<div className="">FAQ</div>
					</a>
				</Link>
				<Link href={links[1]}>
					<a className="mx-4" target="_blank">
						<div className="">Twitter</div>
					</a>
				</Link>
				<Link href={links[2]}>
					<a className="mx-4" target="_blank">
						<div className="">Discord</div>
					</a>
				</Link>
				<Link href={links[4]}>
					<a className="mx-4 hidden lg:block">
						<div className="">Privacy Policy</div>
					</a>
				</Link>
				<Link href={links[5]}>
					<a className="mx-4 hidden lg:block">
						<div className="">Terms of Service</div>
					</a>
				</Link>
			</div>
			{/* Mobile only */}
			<div className="w-full flex justify-evenly lg:hidden text-xs text-white/70 mt-8">
				<Link href={links[4]}>
					<a className="">
						<div className="">Privacy Policy</div>
					</a>
				</Link>
				<Link href={links[5]}>
					<a className="">
						<div className="">Terms of Service</div>
					</a>
				</Link>
			</div>
		</div>
	</div>
)

export default Footer
