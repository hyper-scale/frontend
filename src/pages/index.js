import Link from 'next/link'
import { Fragment, Component } from 'react'
import Meta from '@/components/Meta'
import { Popover, Transition } from '@headlessui/react'
import HyperscaleMark from '@/components/HyperscaleMark'
import { MenuIcon, XIcon, MapIcon, LightningBoltIcon, UserGroupIcon } from '@heroicons/react/outline'

const navigation = [
	{ name: 'Discord', href: 'https://discord.com/invite/pVSbzYny2c' },
	{ name: 'Twitter', href: 'https://twitter.com/HyperscaleFund' },
]

const airtableUrl = 'https://airtable.com/shrLFCXD7BQXUg97K'

class ApplyButtonNav extends Component {
	render() {
		return (
			<a
				href={airtableUrl}
				className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			>
				Apply
			</a>
		)
	}
}

const features = [
	{
		name: 'High speed funding',
		icon: LightningBoltIcon,
		desc: 'Fill out an application and get funded in a few days.',
	},
	{
		name: 'Strong community',
		icon: UserGroupIcon,
		desc: 'Hyperscale investments are plugged into our community of developers, experts, & fellow founders.',
	},
	{
		name: 'Guidance',
		icon: MapIcon,
		desc: 'Our network of advisors are here to support and accelerate your work. We work as one to further each other.',
	},
]

const Landing = () => (
	<div>
		<Meta />
		<div
			className="relative overflow-hidden bg-patterns"
		>
			<div className="pointer-events-none">
				<div
					className="absolute top-[-667px] left-[626px] w-[1185px] h-[1186px] opacity-20"
					style={{
						background: 'radial-gradient(50% 50% at 50% 50%, #4FFEFE 0%, rgba(93, 186, 239, 0) 100%)',
					}}
				/>
				<div
					className="absolute top-[-463px] left-[-682px] w-[931px] h-[931px] opacity-20"
					style={{
						background: 'radial-gradient(50% 50% at 50% 50%, #ED008E 0%, rgba(239, 93, 146, 0) 100%)',
					}}
				/>
				<div
					className="absolute top-[-779px] left-[-82px] w-[1287px] h-[1287px] opacity-30"
					style={{
						background: 'radial-gradient(50% 50% at 50% 50%, #5D5FEF 0%, rgba(93, 95, 239, 0) 100%)',
					}}
				/>
			</div>
			<div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
				<Popover>
					<nav
						className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
						aria-label="Global"
					>
						<div className="flex items-center flex-1">
							<div className="flex items-center justify-between w-full md:w-auto">
								<a className="flex items-center space-x-4" href="#">
									<HyperscaleMark className="h-12 w-auto sm:h-12" />
									<span className="text-indigo-500 text-4xl text-sans-og font-bold">Hyperscale</span>
								</a>
								<div className="-mr-2 flex items-center md:hidden">
									<Popover.Button className="bg-white bg-opacity-30 rounded-md p-2 inline-flex items-center justify-center text-gray-600 hover:text-gray-500 hover:bg-opacity-40 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
										<span className="sr-only">Open main menu</span>
										<MenuIcon className="h-6 w-6" aria-hidden="true" />
									</Popover.Button>
								</div>
							</div>
							<div className="hidden md:block md:mr-10 md:space-x-10 md:ml-auto">
								{navigation.map(item => (
									<a
										key={item.name}
										href={item.href}
										target="_blank"
										rel="noopener noreferrer"
										className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-white hover:bg-opacity-30"
									>
										{item.name}
									</a>
								))}
							</div>
						</div>
						<div className="hidden md:block text-right">
							<ApplyButtonNav />
						</div>
					</nav>
					<Transition
						as={Fragment}
						enter="duration-150 ease-out"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="duration-100 ease-in"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<Popover.Panel
							focus
							className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
						>
							<div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
								<div className="px-5 pt-4 flex items-center justify-between">
									<div>
										<HyperscaleMark className="h-8 w-auto" />
									</div>
									<div className="-mr-2">
										<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
											<span className="sr-only">Close main menu</span>
											<XIcon className="h-6 w-6" aria-hidden="true" />
										</Popover.Button>
									</div>
								</div>
								<div className="px-2 pt-2 pb-3 space-y-1">
									{navigation.map(item => (
										<a
											key={item.name}
											href={item.href}
											className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
										>
											{item.name}
										</a>
									))}
								</div>
								<a
									href={airtableUrl}
									className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
								>
									Apply
								</a>
							</div>
						</Popover.Panel>
					</Transition>
				</Popover>
				<main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
					<div className="lg:grid lg:grid-cols-12 lg:gap-8">
						<div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
							<h1>
								<span className="mt-1 block text-gray-900 text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
									<span className="underlined">Fast</span> funding for{' '}
									<span className="underlined">early</span> web3 projects
								</span>
							</h1>
							<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
								<span>Receive up to $1M by filling out a simple application.</span>{' '}
								<span>You’ll receive a decision within 1 week.</span>
							</p>
							<div className="mt-8 sm:max-w-lg sm:mx-auto text-center lg:text-left lg:mx-0">
								<a
									href={airtableUrl}
									className="inline-flex items-center px-8 py-2 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									Apply
								</a>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
		<div className="relative bg-white py-16 sm:py-24 lg:py-32">
			<div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
				<h2 className="text-base font-semibold tracking-wider text-indigo-500 uppercase">Zero to funded</h2>
				<p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
					Get your idea off the ground in days, not months
				</p>
				<p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
					Fast feedback and funding decisions so you can focus on execution.
				</p>
				<div className="mt-12 mx-12 md:mx-0">
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
						{features.map(feature => (
							<div key={feature.name} className="pt-6">
								<div className="flow-root bg-[#FBFBFF] rounded-lg px-6 pb-8">
									<div className="-mt-6">
										<div>
											<span
												className="inline-flex items-center justify-center p-3 bg-white shadow rounded-md transform"
												style={{ boxShadow: '0px 4px 16px 0px #3447AE26' }}
											>
												<feature.icon className="h-6 w-6 text-indigo-500" aria-hidden="true" />
											</span>
										</div>
										<h3 className="mt-8 text-lg font-medium text-indigo-500 tracking-tight">
											{feature.name}
										</h3>
										<p className="mt-5 text-base text-gray-500">{feature.desc}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
		<div
			className="relative overflow-hidden bg-patterns"
		>
			<div className="max-w-7xl mx-auto px-4 py-8 lg:py-20 sm:px-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
				<div className="text-center">
					<h2 className="text-3xl font-extrabold text-gray-900">Who Started Hyperscale?</h2>
					<p className="mt-4 text-lg">
					It began with a tweet. Sam wanted to figure out a way to
					fund early web3 projects, that was itself in the spirit of
					web3. Within minutes, hundreds of people were in a new
					Discord, planning a self-sustaining, decentralized
					organization that could evaluate and invest in new ideas at
					lightning speed.
					</p>
				</div>
				<div><img src="/who_started_tweet.svg"/> </div>
			</div>
		</div>
		<div className="py-8 lg:py-20 lg:px-8 bg-[#FAFAFE]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<h2 className="text-3xl font-extrabold text-gray-900">Timeline</h2>
				<p className="mt-4 text-lg text-gray-500">
					Kick off the process in five minutes, and get a response within a week.
				</p>
			</div>
			<div className="-mt-20 flex items-center justify-center">
				<img src="/timeline-sm.svg" className="md:hidden" />
				<img src="/timeline-lg.svg" className="hidden md:block" />
			</div>
		</div>
		<footer className="flex items-center justify-between bg-indigo-50 py-8 px-4 md:px-40">
			<div className="flex items-center space-x-6 md:space-x-10">
				<Link href="/">
					<a
						className="font-bold text-lg text-transparent"
						style={{
							background: 'linear-gradient(87.28deg, #9048CD 4.68%, #7461E4 49.76%, #59A9F4 106.52%)',
							backgroundClip: 'text',
							WebkitBackgroundClip: 'text',
						}}
					>
						Hyperscale
					</a>
				</Link>
				{navigation.map(item => (
					<a
						key={item.name}
						className="font-medium"
						href={item.href}
						target="_blank"
						rel="noopener noreferrer"
					>
						{item.name}
					</a>
				))}
			</div>
			<div>
				<ApplyButtonNav />
			</div>
		</footer>
	</div>
)

export default Landing
