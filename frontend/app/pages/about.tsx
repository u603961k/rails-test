import Layout from '../components/Layout'

export default function About() {
  return <h1>About Page</h1>
}

About.getLayout = function getLayout(page: string) {
  return <Layout>{page}</Layout>
};
