'use client';
import Link from "next/link";
import {useParams} from "next/navigation";

export function Control(){
	const params = useParams();
	console.log(params)
	const id = params.id;
	let contextUI = null;
	if(id){
		contextUI = <>
			<li><Link href={`/update/${id}`}>update</Link></li>
			<li><button>delete</button></li>
		</>
	}
	return <>
		<ul>
			<li><Link href="/create">create</Link></li>
			{contextUI}
		</ul>
	</>
}