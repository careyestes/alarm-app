<script>
  import "../app.css";
</script>

<nav class="flex flex-row">
  <button class="flex flex-col p-4 basis-10 bg-blue hover:bg-blue-light text-white fill-white">
    <svg viewBox="0 0 40 17">
      <rect width="40" height="6"/>
      <rect y="11" width="40" height="6"/>
    </svg>
    <span class="p-1 text-xs">MENU</span>
  </button>
  <section>
    <p class="text-sm font-bold p-2"><a href="">HOME</a> » </p>
  </section>
</nav>

<slot />
