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

// components
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'

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
		<Section1 />
		<Section2 />
		<Section3 />

		<img src="/token.svg"></img>
		<img src="/token2.svg"></img>
		<img src="/section2/icon1.svg"></img>
		<img src="/section2/icon2.svg"></img>
		<img src="/section2/icon3.svg"></img>
	</div>
)

export default Landing
