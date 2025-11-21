import React, { useEffect, useState } from "react";
import Header from "../Header";
import RightAside from "../homelayouts/RightAside";
import { useLoaderData, useParams } from "react-router";
import NewsDetailsCard from "../NewsDetailsCard";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState([]);
  console.log(data, id, news);

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);

  return (
    <div className="">
      <header className="py-3">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto mt-5 grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <p className="font-bold">News Details</p>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
