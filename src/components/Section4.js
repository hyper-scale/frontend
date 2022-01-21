const Section4 = ({ markdown }) => (
	<div className="bg-[#160A2F] p-8 relative">
		<div className="container mx-auto bg-[#EBE8E3] rounded py-24 px-10 xl:px-32">
			<img src="/coins/token3.svg" className="absolute -translate-x-1/2 left-1/2 -top-16 lg:hidden" />
			<img src="/coins/token3.svg" className="absolute hidden lg:block -top-16" />
			<h2 className="font-redrose text-5xl">Vision</h2>
			<div className="markdown" dangerouslySetInnerHTML={{ __html: markdown }} />
		</div>
	</div>
)

export default Section4
