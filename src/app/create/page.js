'use client';
import {useRouter} from "next/navigation";

export default function Create() {
	const router = useRouter();
	return(
		<>
			<h2>Create</h2>
			<form onSubmit={async (e)=>{
				e.preventDefault();
				const title = e.target.title.value;
				const body = e.target.body.value;
				const resp = await fetch("http://localhost:9999/topics",{
					method: 'POST',
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
				<p><input type="text" name="title" placeholder="title" /></p>
				<p><textarea name="body" placeholder="body" /></p>
				<p><input type="submit" value="create"/></p>
			</form>
		</>
	)
}