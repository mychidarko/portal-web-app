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
                        content: 'The bunch body of the news thingy from the api is suppposed to go here',
                        urlToImage: './../../assets/img/index.jpg',
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
                        content: 'The bunch body of the news thingy from the api is suppposed to go here',
                        urlToImage: './../../assets/img/index.jpg',
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
                        content: 'The bunch body of the news thingy from the api is suppposed to go here',
                        urlToImage: './../../assets/img/index.jpg',
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
                        content: 'The bunch body of the news thingy from the api is suppposed to go here',
                        urlToImage: './../../assets/img/index.jpg',
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
                <Article data={data} index={0} />
                <Article data={data} index={1} />
                <Article data={data} index={2} />
                <Article data={data} index={3} />
            </div>
         );
    }
}
 
export default News;