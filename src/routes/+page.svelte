<script lang="ts">
  import { getBooks, type Book as BookType } from "$lib/graphql/queries";
  import { onMount } from "svelte";
  import Book from "../components/Book.svelte";

  let books: BookType[] = [];
  
  onMount(async () => {
    books = await getBooks();
  });
</script>

<body>
  <h1>My books</h1>
    <div class="books">
      {#each books as book}
        <Book book={book} />
      {/each}
    </div>
</body>

<style>
  .books {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  body {
    padding: 0px;
    margin: 0px;
    background-color: #f3f3f7;
    flex-direction: row;
  }
</style>