import Layout from "../../components/Layout";

type ResearchItem = {
  id: string;
  year: string;
  authors: string[];
  title: string;
  type: "paper" | "preprint" | "poster" | "thesis" | "talk" | "abstract";
  journal: string;
  publisher: string;
  paper_url: string;
  pdf_url: string;
  code: string;
  project_url: string;
};

const papers: ResearchItem[] = [];
const conWork: ResearchItem[] = [];

const ResearchPage = () => {
  return (
    <Layout title="Research">
      <div className="text-2xl md:text-4xl text-gray-600">
        Peer Reviewed Publications
      </div>
      <hr className="border-b-2 border-gray-300" />
      <ul>
        {papers.map((paper) => (
          <li key={paper.id}>{paper.title}</li>
        ))}
      </ul>
      {/* divider */}
      <div className="text-2xl md:text-4xl text-gray-600">
        Conference & Workshop
      </div>
      <hr className="border-b-2 border-gray-300" />
      <ul>
        {conWork.map((work) => (
          <li key={work.id}>{work.title}</li>
        ))}
      </ul>
      {/* divider */}
      {/* <div className="text-2xl md:text-4xl text-gray-600">Talks</div>
      <hr className="border-b-2 border-gray-300" />
      <ul>
        <li>Intent</li>
      </ul> */}
    </Layout>
  );
};

export default ResearchPage;
