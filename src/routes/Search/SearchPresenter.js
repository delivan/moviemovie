import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import Loader from "components/Loader";
import Section from "components/Section";
import ErrorMessage from "../../components/ErrorMessage";
import Poster from 'components/Poster';

const Container = styled.div`
  padding: 0 20px;
`;

const Form = styled.form``;

const Input = styled.input`
  all: unset;
  width: 100%;
  font-size: 30px;
  color: white;
  background-color: rgba(20, 20, 20, 1);
  border: none;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  error,
  loading,
  handleSubmit,
  handleChange
}) => {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Search Movies or TV Shows..."
          value={searchTerm}
          onChange={handleChange}
        />
      </Form>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {movieResults && movieResults.length > 0 && (
            <Section title="Movie Results">
              {movieResults.map(movie => (
                <Poster 
                  key={movie.id}
                  id={movie.id} 
                  imgUrl={movie.poster_path}
                  rating={movie.vote_average}
                  title={movie.title}
                  year={movie.release_date && movie.release_date.substring(0, 4)}
                />
              ))}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title="TV Show Results">
              {tvResults.map(tvShow => (
                <Poster 
                  key={tvShow.id}
                  id={tvShow.id} 
                  imgUrl={tvShow.poster_path}
                  rating={tvShow.vote_average}
                  title={tvShow.original_name}
                  year={tvShow.first_air_date && tvShow.first_air_date.substring(0, 4)}
                />
              ))}
            </Section>
          )}
        </Container>
      )}
      {error && <ErrorMessage text={error} />}
      {movieResults &&
        movieResults.length === 0 &&
        tvResults &&
        tvResults.length === 0 && <ErrorMessage text={"Nothing found"} />}
    </Container>
  );
};

SearchPresenter.propTypes = {
  movieResults: Proptypes.array,
  tvResults: Proptypes.array,
  searchTerm: Proptypes.string,
  error: Proptypes.string,
  loading: Proptypes.bool.isRequired,
  handleSubmit: Proptypes.func.isRequired,
  handleChange: Proptypes.func.isRequired
};

export default SearchPresenter;
