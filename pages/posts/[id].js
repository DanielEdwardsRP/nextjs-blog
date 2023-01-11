import Layout from '../../components/layout';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { format } from 'date-fns';
import utilStyles from '../../styles/utils.module.scss';


export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
	paths,
	fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
	props: {
	  postData,
	},
  };
}

export default function Post({ postData }) {
  const formattedDate = format(new Date(postData.date), 'LLLL dd, yyyy');
  return (
	<Layout>
	  <Head>
		<title>{postData.title}</title>
	  </Head>
	  <article>
		<h1 className={utilStyles.headingXl}>{postData.title}</h1>
		<div className={utilStyles.lightText}>
		  {formattedDate}
		</div>
		<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
	  </article>
	</Layout>
  );
}

