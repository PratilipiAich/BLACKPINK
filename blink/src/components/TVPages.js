import React, { Component } from "react";
import { Image } from "react-bootstrap";
import bpHouse from "../assets/tv/bp-house.gif";
import "../styles/TVPages.css";
import House from "../data/House.json";
import Diaries from "../data/Diaries.json";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import bpDiaries from "../assets/tv/bp-diaries.gif";

class TVPages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      summary: "",
      episodes: [],
      link: "",
      image: ""
    };
  }
  componentDidMount() {
    this.func();
  }
  func = () => {
    if (this.props.location.tvProps == "house") {
      this.setState({
        title: House.title,
        summary: House.summary,
        episodes: House.episodes,
        link: House.link,
        image: House.image
      });
    }
    if (this.props.location.tvProps == "diaries") {
        this.setState({
          title: Diaries.title,
          summary: Diaries.summary,
          episodes: Diaries.episodes,
          link: Diaries.link,
          image: Diaries.image
        });
      }
  };
  render() {
    return (
      <div className="tv-pages-root">
        <div className="tv-summary">{this.state.title}</div>
        <div className="tv-summary">{this.state.summary}</div>
        <div className="tv-summary">{this.state.episodes.map((item, key) => {
return(
    <div>{item}</div>
)
        })}
</div>
        <a
          href={this.state.link}
          target="_blank"
        >

            <div className="img-right">            <div className="container">
          <Image className="tv-page-img" src={this.state.image} />
          <div className="overlay">
          <PlayCircleOutlineIcon style={{height: "8vw", width: "auto"}}/></div></div>
          </div>
        </a>
      </div>
    );
  }
}
export default TVPages;
