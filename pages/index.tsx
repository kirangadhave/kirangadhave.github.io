import Link from "next/link";
import Feed from "../components/Feed";
import Layout from "../components/Layout";
import { FeedItem } from "../types";

// export async function getStaticProps() {
//   const items = await getFeedItems();

//   return {
//     props: { items },
//   };
// }

// type Props = {
//   items: FeedItem[];
// };

const items: FeedItem[] = [
  {
    id: "fair_pay_panel_2021",
    date: "October 2021",
    header: "Organizing a panel at IEEE VIS 2021",
    description:
      "Will organize a panel titled <strong>Wait...when did we sign up to become economists</strong> at IEEE VIS 2021 with my co-organizer derya akbaba.",
  },
  {
    id: "student_volunteer_2021",
    date: "October 2021",
    header: "Student Volunteer at IEEE VIS 2021",
  },
  {
    id: "intent_sage_accepted_2021",
    date: "August 2021",
    header: "Paper accepted in Information Visualization Journal",
  },
  {
    id: "summer_camp_2021",
    date: "August 2021",
    header: "Presenting at VIS Summer Camp 2021",
  },
  {
    id: "provviz_workshop_2021",
    date: "July 2021",
    header: "Workshop on Provenance and Visualization",
  },
  {
    id: "student_volunteer_2020",
    date: "October 2020",
    header: "Student Volunteer at IEEE VIS 2020",
  },
];

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
          for code related to the projects.
        </p>
        <div className="text-3xl md:text-5xl text-gray-700">Updates</div>
      </div>
      <div className="px-2 py-1">
        <Feed items={items} />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
