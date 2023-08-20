<script lang="ts">
  import type { Book } from "$lib/graphql/queries";

  export let book: Book;

</script>

<div class="container">
  <img width="160" src={book.cover} alt="">
  <div class="info">
    <div>
      <p>{book.title}</p>
      <a href="/author/{book.author.id}">{book.author.name}</a>
    </div>
    
      <p>{book.rating}</p>
  </div>
</div>

<style>
  p, a {
    margin: 0px;
    font-size: 12px;
    color: #4D4D4D;
  }
  .info {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 5px;
  }
  .container {
    display: flex;
    flex-direction: column;
    border-color: blanchedalmond;
    overflow: hidden;
    width: 160px;
    height: 310px;
    padding: 16px 15px;
    background-color: #fff;
    border-radius: 10px;
  }
</style>