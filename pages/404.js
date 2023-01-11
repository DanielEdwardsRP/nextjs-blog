import Layout, { siteTitle } from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.scss';

export default function Custom404() {
  return (
	<Layout>
	  <Head>
		<title>404: Why did the chicken cross the road?</title>
	  </Head>
	  <section>
		<h1 class="error_404Heading">
			404 PAGE NOT FOUND
		</h1>
		<p>
			Sorry, the page you requested somehow was lost.  I dunno what happened really.  Hang tight, I have the data.  Probably will be able to fix it within a release or two. Or redirect you to the appropriate place.
		</p>
		<p>
			Can you not wait? You can probably ping me on Twitter <Link href="https://twitter.com/zerohawk" target="_blank">@zerohawk</Link>.
		</p>
	  </section>
	</Layout>
  );
}