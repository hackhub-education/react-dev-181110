import React, { Component } from 'react';
import axios from 'axios';

import TweetList from './TweetList'

class Page extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tweets: []
        }
    }

    componentDidMount() {
        axios.get('https://tweet-api.webdxd.com/tweet')
        .then(res => {
            const tweets = res.data.tweets
            this.setState({ tweets })
        })
    }


    render() {
        return (
            <div className="container">
                <div className="col-2of5 bg-white profile">
                    <img className="avatar" src="img/avatar.jpg" alt="avatar" />
                    <h3>Yan Hong</h3>
                    <h5>@honlyan</h5>
                    <h4><i className="fas fa-map-marker-alt"></i> Vancouver</h4>
                    <p className="center">Director of EduHacks * Digital Ocean Vancouver Meetup Co-organizer * CEO of HackHub * Founder of Inverse Technology Inc.</p>
                </div>
                <div className="col-3of5 bg-white">
                    <div className="tweet">
                        <form action="#">
                            <div className="row">
                                <img className="avatar-sm v-top" src="img/avatar.jpg" alt="avatar" />
                                <textarea className="input-tweet" placeholder="What's up?"></textarea>
                            </div>
                            <div className="row tweet-actions">
                                <input className="hidden" type="file" />
                                <button className="btn-clear"><i className="far fa-image"></i></button>
                                <button className="btn-primary">Post</button>
                            </div>
                        </form>
                    </div>
                    <TweetList tweets={this.state.tweets}/>
                </div>
            </div>
        );
    }
}

export default Page;