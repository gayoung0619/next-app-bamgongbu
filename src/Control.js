'use client';
import Link from "next/link";
import {useParams, useRouter} from "next/navigation";

export function Control(){
	const params = useParams();
	const router = useRouter();
	const id = params.id;
	let contextUI = null;
	if(id){
		contextUI = <>
			<li><Link href={`/update/${id}`}>update</Link></li>
			<li><button onClick={async ()=>{
				const resp = await fetch('http://localhost:9999/topics/'+id,{
					method: 'DELETE',
				})
				const topic = await resp.json();
				router.push('/');
				router.refresh();
			}}>delete</button></li>
		</>
	}
	return <>
		<ul>
			<li><Link href="/create">create</Link></li>
			{contextUI}
		</ul>
	</>
}