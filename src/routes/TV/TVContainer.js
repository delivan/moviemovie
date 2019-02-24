import React from "react";
import TVPresenter from "./TVPresenter";
import { tvAPI } from "../../api";
import Loader from "../../components/Loader";

export default class extends React.Component {
  state = {
    onTheAir: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results: onTheAir }
      } = await tvAPI.getOnTheAir();
      const {
        data: { results: popular }
      } = await tvAPI.getPopular();
      const {
        data: { results: airingToday }
      } = await tvAPI.getAiringToday();
      this.setState({
        onTheAir,
        popular,
        airingToday,
        loading: false
      });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  render() {
    const { onTheAir, popular, airingToday, error, loading } = this.state;

    return loading ? (
      <Loader />
    ) : (
      <TVPresenter
        onTheAir={onTheAir}
        popular={popular}
        airingToday={airingToday}
        error={error}
        loading={loading}
      />
    );
  }
}
