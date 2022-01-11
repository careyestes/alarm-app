<script>
	import {accounts} from "../stores/mockend";
	console.log($accounts);
</script>
<svelte:head>
	<title>Accounts</title>
</svelte:head>

<h1>This will have the list of accounts</h1>

{#each $accounts as account}
<p>{account.name}</p>
{/each}