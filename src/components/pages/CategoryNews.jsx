import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);
    // console.log(data)

    useEffect(() => {
        if(!data){
            return;
        }
        else if(id == '0'){
            setCategoryNews(data);
            return;
        }else if(id == '1'){
            const filteredNews = data.filter(
                (news) => news.others.is_today_pick == true
            );
            setCategoryNews(filteredNews);
            return;
        }else{
            const filteredNews = data.filter((news) => news.category_id == id);
            // console.log(filteredNews);
            setCategoryNews(filteredNews);
        }
    },[data, id]);

    return (
        <div>
            <h2>Total {categoryNews.length} news found</h2>
        </div>
    );
};

export default CategoryNews;