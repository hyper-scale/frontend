import Head from 'next/head'
const Meta = ({ title, desc }) => {
	const url = 'https://hyperscalefund.com'
	title = title ?? 'Hyperscale - Fast Funding'
	desc = desc ?? "Receive up to 1 mill by filling out a simple application. You'll receive a decision within 1 week."
	return (
		<Head>
			<title>{title}</title>
			<meta name="title" content={title} />
			<meta name="description" content={desc} />
			<link rel="icon" href="logo.svg" />
			<script defer data-domain="hyperscalefund.com" src="https://plausible.io/js/plausible.js"></script>
			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={desc} />
			<meta property="og:image" content={`${url}/opengraph.png`} />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={url} />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={desc} />
			<meta property="twitter:image" content={`${url}/opengraph.png`} />


			<link rel="apple-touch-icon" sizes="180x180" href={`${url}/apple-touch-icon.png`} />
			<link rel="icon" type="image/png" sizes="32x32" href={`${url}/favicon-32x32.png`} />
			<link rel="icon" type="image/png" sizes="16x16" href={`${url}/favicon-16x16.png`} />
			<link rel="manifest" href={`${url}/site.webmanifest`} />
			<meta name="msapplication-TileColor" content="#5d5fef" />
		</Head>
	)
}

export default Meta
