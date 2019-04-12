import React from "react";
import HomePresenter from "./HomePresenter";
import Context from "components/Context";
import TranslatedString from "components/TranslatedString";
import { movieAPI } from "api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };

  static contextType = Context;

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying }
      } = await movieAPI.getNowPlaying();
      const {
        data: { results: upcoming }
      } = await movieAPI.getUpcoming();
      const {
        data: { results: popular }
      } = await movieAPI.getPopular();
      throw Error("wow");
      this.setState({ nowPlaying, upcoming, popular, loading: false });
    } catch (error) {
      this.setState({
        error: <TranslatedString string={"cantGetMovieError"} />,
        loading: false
      });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;

    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
