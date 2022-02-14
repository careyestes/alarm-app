<main>
  <nav>
    <TopAppBar 
      bind:this={topAppBar} 
      variant="short"
      collapsed
      style="border-radius: 0"
      >
      <Row>
        <Section>
          <IconButton class="material-icons">menu</IconButton>
        </Section>
      </Row>
    </TopAppBar>
    <section class="top-ribbon">
      <p>
        <a href={$page.url.origin}>home</a> <a href={$page.url.pathname}>{$page.url.pathname}</a>
      </p>
    </section>
  </nav>
  
  <section class="slot-wrapper">
    <slot />
  </section>
  
  <footer>
    This is a beta. 2022.
  </footer>

</main>

<script lang="ts">
  import "../../static/smui.css";
  import { page } from '$app/stores';

  import TopAppBar, {
    Row,
    Section,
    Title,
    TopAppBarComponentDev,
  } from '@smui/top-app-bar';
  
  import IconButton from '@smui/icon-button';

  let topAppBar: TopAppBarComponentDev;
  

</script>

<style lang="scss">
  /* Hide everything above this component. */
  :global(app),
  :global(body),
  :global(html) {
    display: block !important;
    height: auto !important;
    width: auto !important;
    position: static !important;
    margin: 0;
  }
  .top-ribbon {
		display: flex;
		align-items: flex-start;
		height: 56px;
		margin: 0 0 0 56px;
		padding: 0.5rem 0 0 1rem;
	}

</style>