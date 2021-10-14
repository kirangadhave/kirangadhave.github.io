import clsx from "clsx";
import { FeedItem } from "../../types";

const FeedItemComponent = ({ id, date, header, description }: FeedItem) => {
  return (
    <div
      className={clsx([
        "mb-8 flex justify-between items-center w-full flex-row",
        { "md:flex-row-reverse": id % 2 === 1 },
      ])}
    >
      <div className="order-1 w-0 md:w-5/12" />
      <div className="z-20 flex items-center order-0 md:order-1 bg-gray-600 shadow-xl w-8 h-8 rounded-full" />
      <div
        className={clsx(
          ["md:order-1 rounded-lg shadow-xl w-5/6 md:w-5/12 px-6 py-4"],
          id % 2 === 0 ? "bg-gray-300" : "bg-gray-200"
        )}
      >
        <div className="flex items-center justify-between">
          <span className="mb-3 font-bold text-gray-600 text-xl">{header}</span>
          <span className="mb-3 font-light text-gray-600 align-right">
            {date}
          </span>
        </div>
        <p className="text-sm font-medium leading-snug tracking-wide text-gray-600 text-opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeedItemComponent;
