import React from "react";
import HomePresenter from "./HomePresenter";
import { withContext } from "components/Context";
import TranslatedString from "components/TranslatedString";
import { movieAPI } from "api";

export default withContext(class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    const { locale } = this.props.lang;
    try {
      const {
        data: { results: nowPlaying }
      } = await movieAPI.getNowPlaying(locale);
      const {
        data: { results: upcoming }
      } = await movieAPI.getUpcoming(locale);
      const {
        data: { results: popular }
      } = await movieAPI.getPopular(locale);
      this.setState({ nowPlaying, upcoming, popular, loading: false });
    } catch (error) {
      this.setState({
        error: <TranslatedString string="cantGetError" />,
        loading: false
      });
    }
  }
  async componentDidUpdate(prevProps) {
    const { locale } = this.props.lang;
    if (locale !== prevProps.lang.locale) {
      this.setState({ loading: true });
      
      try {
        const {
          data: { results: nowPlaying }
        } = await movieAPI.getNowPlaying(locale);
        const {
          data: { results: upcoming }
        } = await movieAPI.getUpcoming(locale);
        const {
          data: { results: popular }
        } = await movieAPI.getPopular(locale);
        this.setState({ nowPlaying, upcoming, popular, loading: false });
      } catch (error) {
        this.setState({
          error: <TranslatedString string="cantGetError" />,
          loading: false
        });
      }
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
});