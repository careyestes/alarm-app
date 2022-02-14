<svelte:head>
	<title>Accounts</title>
</svelte:head>

<Textfield 
	value="" 
	variant="filled" 
	label="Search" 
	helperLine$style="width: 100%;"
	style="
		width: 100%;
		z-index: 4;
		padding: 0 0 0 17px;
	">
	<Icon class="material-icons" slot="leadingIcon">search</Icon>
	<HelperText slot="helper">Type in a name or account number</HelperText>
</Textfield>

<DataTable stickyHeader table$aria-label="User list" style="width: 100%;">
	<Head>
	  <Row>
		<Cell></Cell>
		<Cell numeric>Account</Cell>
		<Cell>Name</Cell>
		<Cell>Address</Cell>
		<Cell></Cell>
	  </Row>
	</Head>
	<Body>
	  {#each slice as user }
		<Row>
			<Cell>
				<Button>
					<Icon class="material-icons">edit</Icon>
					<Label>Edit</Label>
				</Button>
			  </Cell>
		  <Cell numeric>{user.accountNumber}</Cell>
		  <Cell 
		  	class="name"
			style="font-size: 1.5rem; font-weight: bold;"
		  >
		  	<a href="/accounts/{user.accountNumber}">{user.name}</a>
		  </Cell>
		  <Cell>
			  {user.address}<br />
			  {user.city}, {user.state} {user.zip}
		  </Cell>
		  <Cell>
			<Button>
				<Icon class="material-icons">report</Icon>
				<Label>Reports</Label>
			</Button>
			<Button>
				<Icon class="material-icons">delete</Icon>
				<Label>Delete Account</Label>
			</Button>
		  </Cell>
		</Row>
	  {/each}
	</Body>

	<Pagination slot="paginate">
		<svelte:fragment slot="rowsPerPage">
		  <Label>Rows Per Page</Label>
		  <Select variant="outlined" bind:value={rowsPerPage} noLabel>
			<Option value={10}>10</Option>
			<Option value={25}>25</Option>
			<Option value={100}>100</Option>
		  </Select>
		</svelte:fragment>
		<svelte:fragment slot="total">
		  {start + 1}-{end} of {$Users.length}
		</svelte:fragment>
	 
		<IconButton
		  class="material-icons"
		  action="first-page"
		  title="First page"
		  on:click={() => (currentPage = 0)}
		  disabled={currentPage === 0}>first_page</IconButton
		>
		<IconButton
		  class="material-icons"
		  action="prev-page"
		  title="Prev page"
		  on:click={() => currentPage--}
		  disabled={currentPage === 0}>chevron_left</IconButton
		>
		<IconButton
		  class="material-icons"
		  action="next-page"
		  title="Next page"
		  on:click={() => currentPage++}
		  disabled={currentPage === lastPage}>chevron_right</IconButton
		>
		<IconButton
		  class="material-icons"
		  action="last-page"
		  title="Last page"
		  on:click={() => (currentPage = lastPage)}
		  disabled={currentPage === lastPage}>last_page</IconButton
		>
	  </Pagination>
   
</DataTable>

  <script lang="ts">
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';
	import {Users} from "../stores/accounts";
	import DataTable, { Head, Body, Row, Cell, Pagination } from '@smui/data-table';
	import Button, { Icon } from '@smui/button';
	import Select, { Option } from '@smui/select';
	import IconButton from '@smui/icon-button';
	import { Label } from '@smui/common';

	let rowsPerPage = 25;
	let currentPage = 0;
	
	$: start = currentPage * rowsPerPage;
	$: end = Math.min(start + rowsPerPage, $Users.length);
	$: slice = $Users.slice(start, end);
	$: lastPage = Math.max(Math.ceil($Users.length / rowsPerPage) - 1, 0);
	
	$: if (currentPage > lastPage) {
		currentPage = lastPage;
	}
</script>

<style lang="scss">
</style>