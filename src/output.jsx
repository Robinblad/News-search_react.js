//dummy google search for images


//import React from "react";
//import { PackOfNews } from "./cards";
//import { Preloader } from "./preloader";
//import { Search } from "./search";



//class Output extends React.Component {
//  state = {
//    packNews: [],
//  }
  
//  componentDidMount() {
//    this.fetchNews("culture");
//  }
  
//  fetchNews = (query) => {
//    fetch(`https://content.guardianapis.com/search?q=${query}&api-key=b20099e5-414e-44a6-b875-a3a59040b418`)
//      .then(response => response.json())
//      .then(data => {
//        const packNews = data.response.results;

//        // Perform a Google search for images based on the webTitle
//        packNews.forEach(article => {
//          // Instead of making actual requests to Google Custom Search API during development,
//          // use a placeholder image URL
//          article.image = "https://via.placeholder.com/500x400";

//          // Update the state to trigger re-rendering
//          this.setState({
//            packNews: [...packNews],
//          });
//        });
//      });
//  }

//  render() {
//    const { packNews } = this.state;

//    return (
//      <main className="container">
      
//        <Search startSearch={this.fetchNews} />
      
//        {
//          packNews.length ? (
//            <PackOfNews packNews={packNews} />
//          ) : <Preloader />
//        }

//      </main>
//    )
//  }
//}

//export default Output;































