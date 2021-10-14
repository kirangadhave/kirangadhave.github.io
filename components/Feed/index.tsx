import { FeedItem } from "../../types";
import FeedItemComponent from "./FeedItemComponent";

type Props = {
  items: FeedItem[];
};

const Feed = ({ items }: Props) => {
  console.table(items);
  return (
    <div className="container mx-auto h-full w-full my-4">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border ml-4 md:ml-auto md:left-1/2"></div>
        {items.map((item) => {
          return <FeedItemComponent key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
