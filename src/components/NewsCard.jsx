import { FaShareAlt, FaBookmark, FaEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    rating,
    total_view,
    thumbnail_url,
    details,
  } = news;

  const formattedDate = new Date(author?.published_date).toLocaleDateString(
    "en-GB",
    { year: "numeric", month: "short", day: "numeric" }
  );

  return (
    <div className="rounded-lg p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{author?.name}</p>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-600 text-xl">
          <FaBookmark />
          <FaShareAlt />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold mb-3">
        {title}
      </h2>

      {/* Image */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full h-60 object-cover rounded-md mb-4"
      />

      {/* Details */}
      <p className="text-gray-700 leading-relaxed">
        {details.slice(0, 200)}...
        <Link to={`/news-details/${id}`} className="text-blue-600 font-medium cursor-pointer">
          Read More
        </Link>
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-5 pt-3 border-t">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500">
          {Array.from({length: rating.number}).map((_, i) => (
            <AiFillStar key={i} className="text-xl" />
          ))}
          <span className="ml-2 text-gray-700 font-semibold">
            {rating?.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />
          <span className="font-medium">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
