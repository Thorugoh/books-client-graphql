
<script lang="ts">
  import { getBooks, type Book as BookType, type Author, getAuthor } from "$lib/graphql/queries";
  import { onMount } from "svelte";
  import Book from "../../../components/Book.svelte";
  import { page } from "$app/stores";

  let author: Author | null = null
  onMount(async () => {
    author = await getAuthor($page.params.id);
    console.log({author});
    
  });
</script>

<body>
  {#if author}
  <h1>Books from {author.name}</h1>
    <div class="books">
      {#each author.books as book}
        <Book book={{...book, author}} />
      {/each}
    </div>
  {/if}
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