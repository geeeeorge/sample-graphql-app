import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import './App.css';

const BOOKS = gql`
  query {
    test {
      author
      title
    }
  }
`;

function Books() {
    const { loading, error, data } = useQuery(BOOKS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data);
    return data.test.map(({ author, title }: any) => (
        <div key={title}>
            <p>
                {title}: {author}
            </p>
        </div>
    ));
}

function App() {
    return (
    <div className="App">
        <h2>GraphQL Client</h2>
        <Books />
    </div>
  );
}

export default App;
