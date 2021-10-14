import Link from "next/link";
import Feed from "../components/Feed";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home">
    <div className="h-full w-full main-page-layout">
      <div>
        <p className="text-4xl md:text-6xl text-gray-700 my-2">Hi there!</p>
        <span className="text-4xl md:text-6xl text-gray-700 my-2">I am</span>
        <span className="text-4xl md:text-7xl text-gray-700 my-2 mx-2">
          Kiran Gadhave
        </span>
        <p className="text-2xl md:text-3xl text-gray-700 my-4 md:my-8 md:text-justify">
          I am a PhD student at the{" "}
          <a href="https://www.utah.edu/" className="hyperlink" target="_blank">
            University of Utah
          </a>{" "}
          in the{" "}
          <a
            href="https://www.sci.utah.edu/"
            className="hyperlink"
            target="_blank"
          >
            Scientific Computing and Imaging Institue
          </a>
          .
        </p>
        <p className="text-2xl md:text-3xl text-gray-700 my-4 md:my-8 md:text-justify">
          I currently work with the{" "}
          <a
            href="https://vdl.sci.utah.edu/team/lex/"
            className="hyperlink"
            target="_blank"
          >
            Visualization Design Lab
          </a>
          , advised by{" "}
          <a
            href="https://vdl.sci.utah.edu/team/lex/"
            className="hyperlink"
            target="_blank"
          >
            Dr. Alexander Lex
          </a>
          .
        </p>
        <p className="text-2xl md:text-3xl text-gray-700 my-4 md:my-8 md:text-justify">
          My current research focus is using interaction provenance to create
          frameworks for enabling resuable and reproducible visual analysis. To
          read more about my research interests and list of my publications,
          please look at the{" "}
          <Link href="/research">
            <a className="hyperlink">Research</a>
          </Link>{" "}
          page. You can check out my{" "}
          <a
            href="https://github.com/kirangadhave"
            target="_blank"
            className="hyperlink"
          >
            Github
          </a>{" "}
          for code related to the above projects.
        </p>
        <div className="text-3xl md:text-5xl text-gray-700">Updates</div>
      </div>
      <div className="px-2 py-1">
        <Feed
          items={[
            {
              id: 1,
              date: "May 2021",
              header: "Test 1",
              description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut natus voluptatum quidem velit magni reiciendis id, recusandae quisquam cupiditate, consectetur dolor porro et nisi, qui facilis sunt ex? Quia, officia!",
            },
            {
              id: 2,
              date: "May 2018",
              header: "Test 2",
              description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut natus voluptatum quidem velit magni reiciendis id, recusandae quisquam cupiditate, consectetur dolor porro et nisi, qui facilis sunt ex? Quia, officia!",
            },
            {
              id: 3,
              date: "May 2018",
              header: "Test 2",
              description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut natus voluptatum quidem velit magni reiciendis id, recusandae quisquam cupiditate, consectetur dolor porro et nisi, qui facilis sunt ex? Quia, officia!",
            },
            {
              id: 4,
              date: "May 2018",
              header: "Test 2",
              description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut natus voluptatum quidem velit magni reiciendis id, recusandae quisquam cupiditate, consectetur dolor porro et nisi, qui facilis sunt ex? Quia, officia!",
            },
          ]}
        />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
