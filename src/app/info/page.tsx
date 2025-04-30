import React from "react";
import Link from "next/link";
const Info = () => {
	return (
		<div>
			<h1 className="text-7xl">Info page</h1>
      <Link href='/info/contact' className="text-xl text-blue-500 inline-block mt-8 mr-10" >Contact page</Link>

		</div>
	);
};

export default Info;
