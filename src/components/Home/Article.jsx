import React from 'react';
import Avatar from './../../assets/img/avatars/avatar04.png'; 

const Article = props => {
    const { data } = props;

    return ( 
        <div className="col-md-6">
            <div className="box box-widget">
                <div className="box-header with-border">
                    <div className="user-block">
                        <img className="img-circle" src={Avatar} style={{ marginTop: 8 }} alt="User Pic"/>
                        <span className="username h4">
                            <a href={data.url}>
                                {data.title}
                            </a>
                        </span>
                        <span className="description">
                            Shared publicly, {data.source.name} - {data.publishedAt}
                        </span>
                    </div>
                    <div className="box-tools">
                        <button type="button" className="btn btn-box-tool" data-widget="collapse">
                            <i className="fa fa-minus"></i>
                        </button>
                        <button type="button" className="btn btn-box-tool" data-widget="remove">
                            <i className="fa fa-times"></i>
                        </button>
                    </div>
                </div>
                <div className="box-body">
                    <img className="img-responsive pad" src={data.urlToImage} alt="News Img"/>
                    <br/>
                    <div className="container-fluid">
                        <h3>{data.title}</h3>
                    </div>
                    <p className="container-fluid">{data.content}</p>
                    <br/>

                    {/** Maybe I'll add something here */}

                    <div className="container-fluid">
                        <button type="button" className="btn btn-default btn-xs">
                            <i className="fa fa-share"></i> Share
                        </button>
                        <button type="button" className="btn btn-default btn-xs">
                            <i className="fa fa-thumbs-o-up"></i> Like
                        </button>
                    <span className="pull-right text-muted">{data.likes} likes - 3 comments</span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Article;