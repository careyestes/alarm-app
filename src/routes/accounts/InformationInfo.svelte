{$$props.cv_one} {$$props.cv_two}

	<label for="Template">Template: </label>
	<Select bind:templateValue label="Choose a Template">
		{#each templates as template}
		<Option value={template}>{template}</Option>
		{/each}
	</Select>

	<p>
	<label for="First_CTV">1st Call to Verify</label>
	<TextField
		type="email"
		bind:dirty
		bind:invalid
		updateInvalid
		bind:value
		label="Enter Phone Number"
		style="min-width: 250px;"
		on:focus={() => (focused = true)}
		on:blur={() => (focused = false)}
		>
		<slot name="information-First_CTV"></slot>
	</TextField>
</p>
  

<script lang="ts">
  import Select, { Option } from '@smui/select';
	import TextField from '@smui/textfield';
 
  let templates = [
		'535A-1 CID RES W/RESTORES', 
		'535A-2 CID COMM W/30 MINUTE DNR', 
		'535A-3 SIA RESIDENTIAL', 
		'535A-4 SIA COMM W/30 MINUTE DNR ON T',
		'535A-AES AES'
	];
 
  let templateValue = '';

	let focused = false;
  let value: string | null = null;
  let dirty = false;
  let invalid = false;
  $: disabled = focused || !value || !dirty || invalid;
</script>