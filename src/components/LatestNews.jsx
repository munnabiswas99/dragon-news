import React from "react";
import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router";

const LatestNews = () => {
  const newsData = useLoaderData();

  // Only today's picked items
  const todaysNews = newsData.filter(
    (news) => news.others?.is_today_pick === true
  );

  return (
    <div className="flex items-center gap-5 bg-base-200 p-3 my-4">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>

      <Marquee className="flex gap-10" pauseOnHover={true}>
        {todaysNews.length > 0 ? (
          todaysNews.map((item) => (
            <p key={item.id} className="font-bold mx-5">
              {item.title}
            </p>
          ))
        ) : (
          <p className="font-bold">No today's picks found</p>
        )}
      </Marquee>
    </div>
  );
};

export default LatestNews;
