<title>{siteTitle}</title>;
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head></Head>
      <section className={utilStyles.headingMd}>
        <p align="center">
          Hi, my name is Isaac and I am in my junior year studying Computer
          Engineering at Boston University. I like running, skiing, and hiking.
          I am also a proponent of eating breakfast for dinner.
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <p align="center">
          I created this website as an opportunity to learn about web
          development. This website is written using React on top of the Next.js
          framework. You can check out the source code on my github{" "}
          <a href="https://github.com/yamwise/my-site">here</a>. It's all a work
          in progress, so don't get too comfortable: things are probably gonna
          change around here.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <h2 className={utilStyles.headingLg}>Cool Stuff</h2>
        <Link href="/coolStuff/button">
          <a>Counter Example</a>
        </Link>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
