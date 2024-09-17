import { Component } from "react";
import BookCard from "./components/BookCard";
import "./index.css";

class DisplayBooks extends Component {
  state = { booksList: [] };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = async () => {
    const url = "https://openlibrary.org/search.json?q=<your-query>";
    const options = {
      method: "GET",
    };

    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok) {
      this.setState({ jobsList: data.docs });
    } else {
      console.log("Error");
    }

    console.log(data);
  };
  render() {
    const { jobsList } = this.state;
    console.log(jobsList);
    return (
      <div className="jobs-list-container">
        <ul>{<BookCard />}</ul>
      </div>
    );
  }
}

export default DisplayBooks;
