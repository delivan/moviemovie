import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieAPI, tvAPI } from "../../api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: false
  };

  handleChange = e => {
    const {
      target: { value }
    } = e;

    this.setState({
      searchTerm: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm(searchTerm);
    }
  };

  async searchByTerm(term) {
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults }
      } = await movieAPI.getSearch(term);
      const {
        data: { results: tvResults }
      } = await tvAPI.getSearch(term);

      this.setState({
        movieResults,
        tvResults,
        loading: false
      });
    } catch (error) {
      console.log(error);
      this.setState({ error: "Can't Search by term", loading: false });
    }
  }

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;

    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}
