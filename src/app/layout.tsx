import { Metadata } from "next";
import Navbar from "../../components/Navbar";
import "./globals.css";
import {Inter,Inconsolata,Roboto} from 'next/font/google'

// const roboto = Roboto({subsets:['latin'],weight:['400']})
// const inconsolata = Inconsolata({subsets:['latin']})
const inter = Inter({subsets:['latin']})

export const metadata:Metadata = {
  title: 'Next.js Project',
  description: 'A Next.js project with TypeScript and TailwindCSS.',
  keywords: 'Next.js, Typescript, TailwindCSS',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<main className="max-w-3xl mx-auto py-10">{children}</main>
			</body>
		</html>
	);
}
