import Link from "next/link";
import Layout from "../components/Layout";

const AboutPage = () => (
  <Layout title="About">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aperiam
      ullam magnam cum doloribus exercitationem alias harum debitis deleniti.
      Esse veritatis aperiam nobis unde neque doloremque optio debitis
      repellendus. Minima. lorempoweh-100hr
    </p>
  </Layout>
);

export default AboutPage;
