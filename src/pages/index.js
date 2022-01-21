import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import fs from 'fs'

export async function getStaticProps() {
	const terms = fs.readFileSync('src/copy/vision.md', 'utf8')
	const matterResult = matter(terms)

	const processedContent = await remark().use(html).process(matterResult.content)
	const visionHtml = processedContent.toString()

	return {
		props: {
			visionHtml,
		},
	}
}

// compoents
import Meta from '../components/Meta'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'
import Footer from '../components/Footer'

const Landing = ({ visionHtml }) => (
	<div>
		<Meta />
		<Section1 />
		<Section2 />
		<Section3 />
		<Section4 markdown={visionHtml} />
		<Section5 />
		<Footer />
	</div>
)

export default Landing
