import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import Loader from "components/Loader";
import Section from "components/Section";

const Container = styled.div`
  padding: 0 20px;
`;

const Form = styled.form``;

const Input = styled.input``;

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
                <span key={movie.id}>{movie.title}</span>
              ))}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title="TV Show Results">
              {tvResults.map(tv => (
                <span key={tv.id}>{tv.name}</span>
              ))}
            </Section>
          )}
        </Container>
      )}
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
