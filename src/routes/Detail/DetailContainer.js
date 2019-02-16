import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieAPI, tvAPI } from "../../api";

export default class extends React.Component {
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

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const { isMovie } = this.state;

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      push("/");
    }

    try {
      // let result;
      // if (isMovie) {
      //   ({ data: result } = await movieAPI.getDetails(id));
      // } else {
      //   ({ data: result }= await tvAPI.getDetails(id));
      // }

      const { data: result } = isMovie
        ? await movieAPI.getDetails(id)
        : await tvAPI.getDetails(id);

      this.setState({ result, loading: false });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false, error });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
