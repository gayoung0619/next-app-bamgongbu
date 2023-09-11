'use client';
import {useParams, useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function Create() {
	const router = useRouter();
	const params = useParams();
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	async function refresh(){
		const response = await fetch('http://localhost:9999/topics/' + params.id);
		const topic = await response.json();
		setTitle(topic.title);
		setBody(topic.body)
	}
	useEffect(()=>{
		refresh();
	}, [params.id])
	return(
		<>
			<h2>Create</h2>
			<form onSubmit={async (e)=>{
				e.preventDefault();
				const title = e.target.title.value;
				const body = e.target.body.value;
				const resp = await fetch("http://localhost:9999/topics/"+params.id,{
					method: 'PATCH',
					headers: {
						'Content-Type':'application/json',
					},
					body: JSON.stringify({title, body})
				});
				const topics = await resp.json();
				const lastId = topics.id;
				router.push(`/read/${lastId}`);
				router.refresh();

			}}>
				<p><input type="text" name="title" placeholder="title" value={title} onChange={(e)=>{
					setTitle(e.target.value)
				}} /></p>
				<p><textarea name="body" placeholder="body" value={body} onChange={(e)=>{
					setBody(e.target.value)
				}} /></p>
				<p><input type="submit" value="create"/></p>
			</form>
		</>
	)
}