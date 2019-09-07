import React from "react";
import TVPresenter from "./TVPresenter";
import { withContext } from "components/Context";
import { tvAPI } from "../../api";
import Loader from "../../components/Loader";

export default withContext(class extends React.Component {
  state = {
    onTheAir: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    const { locale } = this.props.lang;
    try {
      const {
        data: { results: onTheAir }
      } = await tvAPI.getOnTheAir(locale);
      const {
        data: { results: popular }
      } = await tvAPI.getPopular(locale);
      const {
        data: { results: airingToday }
      } = await tvAPI.getAiringToday(locale);
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

  async componentDidUpdate(prevProps) {
    const { locale } = this.props.lang;
    if (locale !== prevProps.lang.locale) {
      this.setState({ loading: true });
      
      try {
        const {
          data: { results: onTheAir }
        } = await tvAPI.getOnTheAir(locale);
        const {
          data: { results: popular }
        } = await tvAPI.getPopular(locale);
        const {
          data: { results: airingToday }
        } = await tvAPI.getAiringToday(locale);
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
});
