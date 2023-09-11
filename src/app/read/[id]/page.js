'use client'
export default async function Read({params}) {
	const resp = await fetch('http://localhost:9999/topics/' + params.id, {
		cache: 'no-store'
	});
	const topic = await resp.json();
	console.log(params)
	return <>
		<h1>{topic.title}</h1>
		{topic.body}
	</>
}