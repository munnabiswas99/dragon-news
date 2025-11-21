import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="space-y-5">
      <img className="w-full h-[350px] object-cover" src={news.image_url} alt="" />
      <p className="font-semibold text-2xl">{news.title}</p>
      <p className="text-accent">{news.details}</p>
      <Link to={`/category/${news.category_id}`} className="btn btn-secondary"><FaArrowLeft></FaArrowLeft> All news in this category</Link>
    </div>
  );
};

export default NewsDetailsCard;
