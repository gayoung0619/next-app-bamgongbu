import './globals.css'
import Link from "next/link";
import {Control} from "@/Control";
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
	const resp = await fetch('http://localhost:9999/topics', {
		cache: 'no-store'
	});
	const topics = await resp.json();
	return (
		<html>
		<body>
			<div>
				<h1><Link href="/">WEB</Link></h1>
				<ol>
					{topics.map((t)=><li key={t.id}><Link href={`/read/${t.id}`}>{t.title}</Link></li>)}
				</ol>
				{children}
				<Control />
			</div>
		</body>
		</html>
	)
}
