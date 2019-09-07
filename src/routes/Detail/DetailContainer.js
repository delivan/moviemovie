import React from "react";
import DetailPresenter from "./DetailPresenter";
import { withContext } from "components/Context";
import { movieAPI, tvAPI } from "../../api";

export default withContext(class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;

    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("movie")
    };
  }

  fetchDetail = async () => {
    const {
      match: {
        params: { id }
      },
      history: { push },
      lang: { locale }
    } = this.props;
    const { isMovie } = this.state;

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      push("/");
    }

    this.setState({ loading: true });
    try {
      const { data: result } = isMovie
        ? await movieAPI.getDetails(locale, id)
        : await tvAPI.getDetails(locale, id);

      this.setState({ result, loading: false });
    } catch (error) {
      this.setState({ loading: false, error: "Can't get detail" });
    }
  }

  componentDidMount() {
    this.fetchDetail();
  }

  componentDidUpdate(prevProps) {
    const { locale } = this.props.lang;
    if (locale !== prevProps.lang.locale) {
      this.fetchDetail();
    }
  }

  render() {
    const { result, isMovie, error, loading } = this.state;
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
        isMovie={isMovie}
      />
    );
  }
});