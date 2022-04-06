import Link from "next/link"
import Header from "../components/Header"
import links from "../lib/links.js"

const text =
  "Projects receive up to $1M in funding and the benefits of the Hyperscale ecosystem in a matter of days."

const Section1 = () => (
  <div className=" bg-[#160A2F] pb-8 lg:pb-16 px-6 md:px-10 bg-curvature">
    <Header />
    <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between items-center pt-8 pb-32 lg:pb-24 xl:px-32">
      <div className="flex flex-col mt-12 lg:max-w-2xl">
        <h1 className="font-redrose text-gray-100 font-bold text-4xl md:text-5xl xl:text-7xl 2xl:text-8xl">
          An ecosystem of <span className="hs-gradient">web3</span> projects
        </h1>
        <div className="text-white text- md:text-xl lg: my-6 md:my-12">
          {text}
        </div>
        <Link href={links.discord}>
          <a
            target="_blank"
            className="flex w-24 h-10 bg-[#BAC4FA] rounded-sm justify-center items-center font-semibold"
          >
            Discord
          </a>
        </Link>
      </div>
      <div className="mx-auto max-w-sm md:max-w-4xl md:min-w-0">
        <img src="/section1/hero-graphic.png" />
      </div>
    </div>
  </div>
)

export default Section1
