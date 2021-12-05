import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import HyperscaleMark from '@/components/HyperscaleMark'
import JoinDiscordIcon from '@/components/icons/JoinDiscordIcon'
import TwitterIcon from '@/components/icons/TwitterIcon'
import Meta from '@/components/Meta'
import {
	MenuIcon,
	XIcon,
	BeakerIcon,
	CashIcon,
	CubeTransparentIcon,
	MapIcon,
	LightningBoltIcon,
	MailOpenIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'

const navigation = [
	{ name: 'Home', href: '#' },
	{ name: 'Vetting', href: '#' },
	{ name: 'Process', href: '#' },
	{ name: 'Mission', href: '#' },
]

const features = [
	{ name: 'Highspeed funding', icon: LightningBoltIcon, desc: 'Ac tincidunt sapien vehicula erat auctor.' },
	{ name: 'Experiment-friendly', icon: BeakerIcon, desc: 'Ut enim ad minim veniam, pellentesque rhoncus.' },
	{ name: '$200k for 5%', icon: CashIcon, desc: 'Et magna sic morbi lobortis.' },
	{ name: 'Same-day response', icon: MailOpenIcon, desc: 'Duis aute irure dolor in reprehenderit in voluptate velit.' },
	{ name: 'DAO formation', icon: CubeTransparentIcon, desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.' },
	{ name: 'Community guidance', icon: MapIcon, desc: 'Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' },
]

const footer = [
	{
		name: 'About',
		items: [
			{ name: 'Twitter', url: '#' },
			{ name: 'Manifesto', url: '#' },
			{ name: 'The Team', url: '#' },
		],
	},
	{
		name: 'Help',
		items: [
			{ name: 'Support', url: '#' },
			{ name: 'Contact Us', url: '#' },
			{ name: 'Helpline', url: '#' },
		],
	},
]

const Landing = () => (
	<div>
		<Meta />
		<div
			className="relative bg-white overflow-hidden"
			style={{
				background:
					"url('/bg-patterns.svg') left top no-repeat, linear-gradient(244.75deg, #D1D5FC -10.92%, #F3F3FA 30.96%, #FFFFFF 110.9%) center center",
			}}
		>
			<div
				className="pointer-events-none absolute inset-0 hidden lg:block"
				style={{ background: "url('/bg-crypto.svg') right center no-repeat" }}
			/>
			<div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
				<Popover>
					<nav
						className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
						aria-label="Global"
					>
						<div className="flex items-center flex-1">
							<div className="flex items-center justify-between w-full md:w-auto">
								<a href="#">
									<span className="sr-only">Hyperscale</span>
									<HyperscaleMark className="h-8 w-auto sm:h-10" />
								</a>
								<div className="-mr-2 flex items-center md:hidden">
									<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
										className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
									>
										{item.name}
									</a>
								))}
							</div>
						</div>
						<div className="hidden md:block text-right">
							<button
								type="button"
								className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
							>
								Apply
							</button>
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
									href="#"
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
								<span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
									<span className="block text-yellow-400">Fast funding</span>
									<span className="block text-gray-900">for early blockchain projects</span>
								</span>
							</h1>
							<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
								<span>Recieve $200k for 5% by filling out a simple application.</span>
								<span>Get a decision within 1 week.</span>
							</p>
							<div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
								<form
									action="#"
									method="POST"
									className="mt-3 sm:flex bg-white shadow-lg rounded-full relative"
								>
									<label htmlFor="email" className="sr-only">
										Email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										className="block w-full pl-4 pr-24 py-3 rounded-full text-base placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 border-gray-300 border-0"
										placeholder="Enter your email"
									/>
									<button
										type="submit"
										className="absolute inset-y-2 right-4 px-4 py-2 text-sm shadow-lg text-center font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full flex items-center justify-center"
									>
										Apply
									</button>
								</form>
							</div>
							<Link href="https://discord.gg/pVSbzYny2c" target="_blank" rel="noopener">
								<a className="rounded-full inline-block px-4 py-2 mt-7 bg-[#6875EF] shadow">
									<JoinDiscordIcon className="w-24" />
								</a>
							</Link>
						</div>
					</div>
				</main>
			</div>
		</div>
		<div className="relative bg-white py-16 sm:py-24 lg:py-32">
			<div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
				<h2 className="text-base font-semibold tracking-wider text-yellow-500 uppercase">Zero to funded</h2>
				<p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
					Get your idea off the ground in hours, not months
				</p>
				<p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
					Fast feedback and funding decisions so you can focus on execution.
				</p>
				<div className="mt-12">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{features.map(feature => (
							<div key={feature.name} className="pt-6">
								<div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 group">
									<div className="-mt-6">
										<div>
											<span className="inline-flex items-center justify-center p-3 bg-yellow-400 rounded-md transform shadow-brand group-hover:shadow-brand-hover group-hover:translate-x-1 group-hover:translate-y-1 transition">
												<feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
											</span>
										</div>
										<h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
											{feature.name}
										</h3>
										<p className="mt-5 text-base text-gray-500">
											{feature.desc} 
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
		<footer className="footer-1 bg-gray-100 py-8 sm:py-12">
			<div className="container mx-auto px-4">
				<div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
					{footer.map(column => (
						<div key={column.name} className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
							<h5 className="text-xl font-bold mb-6">{column.name}</h5>
							<ul className="list-none footer-links">
								{column.items.map(item => (
									<li key={item.name} className="mb-2">
										<a href={item.url} className="font-medium text-gray-500 hover:text-gray-900">
											{item.name}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
					<div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
						<h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">Get Funded</h5>
						<div className="flex sm:justify-center xl:justify-start">
							<a
								href="#"
								className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
							>
								Apply
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>
)

export default Landing
