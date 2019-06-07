import React, { Component } from 'react';

import Article from './Article';

class News extends Component {
    constructor(){
        super();
        this.state = {
            data: {
                articles: [
                    {
                        url: 'https://newsapi.org/id',
                        title: 'Article 1',
                        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores obcaecati illo alias! Perferendis molestias voluptatum asperiores vitae, iste exercitationem nobis perspiciatis rerum repellendus culpa aliquam vel laborum officiis, rem odit quas. Vitae tenetur beatae cupiditate reprehenderit suscipit quos pariatur voluptas.',
                        urlToImage: 'https://lorempixel.com/600/300/city/',
                        source: {
                            name: 'Source Name'
                        },
                        publishedAt: '2019',
                        id: 1,
                        likes: 213
                    },
                    {
                        url: 'https://newsapi.org/id',
                        title: 'Article 2',
                        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores obcaecati illo alias! Perferendis molestias voluptatum asperiores vitae, iste exercitationem nobis perspiciatis rerum repellendus culpa aliquam vel laborum officiis, rem odit quas. Vitae tenetur beatae cupiditate reprehenderit suscipit quos pariatur voluptas.',
                        urlToImage: 'https://lorempixel.com/600/300/city/',
                        source: {
                            name: 'Source Name'
                        },
                        publishedAt: '2019',
                        id: 2,
                        likes: 213
                    },
                    {
                        url: 'https://newsapi.org/id',
                        title: 'Article 3',
                        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores obcaecati illo alias! Perferendis molestias voluptatum asperiores vitae, iste exercitationem nobis perspiciatis rerum repellendus culpa aliquam vel laborum officiis, rem odit quas. Vitae tenetur beatae cupiditate reprehenderit suscipit quos pariatur voluptas.',
                        urlToImage: 'https://lorempixel.com/600/300/city/',
                        source: {
                            name: 'Source Name'
                        },
                        publishedAt: '2019',
                        id: 3,
                        likes: 213
                    },
                    {
                        url: 'https://newsapi.org/id',
                        title: 'Article 4',
                        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores obcaecati illo alias! Perferendis molestias voluptatum asperiores vitae, iste exercitationem nobis perspiciatis rerum repellendus culpa aliquam vel laborum officiis, rem odit quas. Vitae tenetur beatae cupiditate reprehenderit suscipit quos pariatur voluptas.',
                        urlToImage: 'https://lorempixel.com/600/300/city/',
                        source: {
                            name: 'Source Name'
                        },
                        publishedAt: '2019',
                        id: 4,
                        likes: 213
                    }
                ]
            }
        }
    };

    render() { 
        const { data } = this.state;

        return (
            <div className="row">
                {data.articles.map(article => (
                    <Article data={article} key={article.id} />
                ))}
            </div>
         );
    }
}
 
export default News;