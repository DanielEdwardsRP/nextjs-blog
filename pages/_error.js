import Custom404 from './404';

export default function Error({ statusCode }) {
  return <Custom404 statusCode={statusCode} />;
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};