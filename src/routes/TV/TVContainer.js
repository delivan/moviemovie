import React from "react";
import TVPresenter from "./TVPresenter";
import { tvAPI } from "../../api";
import Loader from "../../components/Loader";

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results: topRated }
      } = await tvAPI.getTopRated();
      const {
        data: { results: popular }
      } = await tvAPI.getPopular();
      const {
        data: { results: airingToday }
      } = await tvAPI.getAiringToday();
      this.setState({
        topRated,
        popular,
        airingToday,
        loading: false
      });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  render() {
    const { topRated, popular, airingToday, error, loading } = this.state;

    return loading ? (
      <Loader />
    ) : (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        error={error}
        loading={loading}
      />
    );
  }
}
