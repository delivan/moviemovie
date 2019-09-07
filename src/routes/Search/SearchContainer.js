import React from "react";
import SearchPresenter from "./SearchPresenter";
import { withContext } from "components/Context";
import { movieAPI, tvAPI } from "../../api";
import TranslatedString from "components/TranslatedString";

export default withContext(class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieResults: null,
      tvResults: null,
      searchTerm: "",
      error: null,
      loading: false
    };

    this.timer = null;
  }

  handleChange = e => {
    const {
      target: { value }
    } = e;

    this.setState({
      searchTerm: value
    });

    if (value !== "") {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.searchByTerm(value), 200);
    } else {
      this.setState({ movieResults: null, tvResults: null, loading: false });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm(searchTerm);
    }
  };

  async searchByTerm(term) {
    if (!term) {
      return;
    }
    const { locale } = this.props.lang;

    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults }
      } = await movieAPI.getSearch(locale, term);
      const {
        data: { results: tvResults }
      } = await tvAPI.getSearch(locale, term);

      this.setState({
        movieResults,
        tvResults,
        loading: false
      });
    } catch (error) {
      this.setState({
        error: <TranslatedString string="cantSearchError" />,
        loading: false
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { searchTerm } = this.state;
    const { locale } = this.props.lang;
    if (locale !== prevProps.lang.locale) {
      this.searchByTerm(searchTerm);
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
});