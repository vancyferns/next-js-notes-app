"use client";
import React from 'react'
import TopNav from './TopNav'
import Markdown from 'markdown-to-jsx';

export default function MDX(props) {
  const {text}=props;
  const md=`(https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

  `
  return (
   <section className='mdx-container'>
    <TopNav {...props}/>
    <article>
      <Markdown>
        {text.trim()}
      </Markdown>
    </article>
    </section>
  )
}
