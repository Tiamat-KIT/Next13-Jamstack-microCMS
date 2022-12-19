"use client"
import Link from "next/link"
import type { NextPage } from "next"
import { client } from "../libs/microcms_client"
import type { Blog } from "../types/blog"

export async function getData() {
    const data = await client.get({endpoint : "blog"})
    return data.contents
}

const Page = async() => {
    const data = await getData()
    return (
        <>
            <ul>
                {data.map((blog: Blog) => {
                    <li key={blog.id}>
                        <Link href={`/blog/${blog.id}`}>
                            {blog.title}
                        </Link>
                    </li>
                })}
            </ul>
        </>
    )
}


