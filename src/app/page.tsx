import Link from "next/link";

export default function Home() {
	return (
		<div>
			<h2 className="text-7xl">Home</h2>
      <Link href='/about' className="text-xl text-blue-500 inline-block mt-8 mr-10" >got to about</Link>
      <Link href='/info' className="text-xl text-blue-500 inline-block mt-8">Info page</Link>
		</div>
	);
}
