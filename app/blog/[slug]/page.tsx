// import { format, parseISO } from 'dayjs'
import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer2/hooks'
import { components } from '@/components/mdx-components';

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = async ({ params } : { params: { slug: string } }) => {
  const { slug } = await params;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)
  return { title: post.title }
}


const PostLayout = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)

  const MDXContent = getMDXComponent(post.body.code)

  return (
    <article className="prose prose-base dark:prose-invert">
      <div className="mb-8 text-center">
        {/* <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time> */}
        <h1>{post.title}</h1>
      </div>
      <MDXContent components={components} />
    </article>
  )
}

export default PostLayout
