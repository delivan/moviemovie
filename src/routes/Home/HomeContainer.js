import React from "react";
import HomePresenter from "./HomePresenter";
import { movieAPI } from "api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };

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
      this.setState({ nowPlaying, upcoming, popular, loading: false });
    } catch {
      this.setState({ error: "Can't get movies", loading: false });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    console.log(this.state);
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
