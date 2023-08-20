import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient('http://localhost:5000/graphql');

export type Book = { 
  id: string;
  title: string;
  description?: string;
  author: Author;
  cover: string;
  rating: string;
  url: string;
}

export type Author = {
  id: string;
  name: string;
  books: Book[];
}

export async function getBook(id: string){
  const query = gql`
    query BookById($id: ID!) {
      book(id: $id){
        id
        title,
        description
        author {
          id
          name
        }
      }
    }
  `;

  const { book } = await client.request<{ book: Book | null }>(query, { id });
  return book;
}

export async function getBooks(){
  const query = gql`
    query Books {
      books{
        id
        title
        description
        author {
          id
          name
        }
        cover,
        rating,
      }
    }
  `;

  const { books } = await client.request<{ books: Book[] }>(query);
  return books;
}

export async function getAuthor(id: string){
  const query = gql`
    query AuthorById($id: ID!) {
      author(id: $id){
        id
        name,
        books {
          id
          title
          description
          cover
          rating
        }
      }
    }
  `;

   const { author } = await client.request<{ author: Author | null }>(query, { id });
   return author;
}