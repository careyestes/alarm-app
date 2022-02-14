<svelte:head>
	<title>Single Account Page</title>
</svelte:head>

{#each $Users as user }
	{#if user.accountNumber == thisAccountNumber}
		<div class="flex height-100">
			<div class="flex flex-column flex-button-column account-button-container">
				<button class="flex flex-column align-center stacked">
					<Icon class="material-icons">search</Icon>
					<span>Search</span>
				</button>
				<button class="flex flex-column align-center stacked">
					<Icon class="material-icons">add</Icon>
					<span>Add</span>
				</button>
			</div>
			<div class="account-data-wrapper">
					<p>
						<AccountInfo>
							<span slot="account-number">
								{user.accountNumber}
							</span>
				
							<span slot="account-created">
								{user.created_at}
							</span>
							
							<span slot="account-updated">
								{user.updated_at}
							</span>
						</AccountInfo>
					</p>
					<h2>{user.name} <Button><Icon class="material-icons">edit</Icon></Button> </h2>
					<div>
						<address>{user.address}, {user.state} {user.zip}</address> 
						<span><dt>Timezone:</dt> <dd>{user.timezone}</dd></span> 
						<span><dt>DST:</dt> <dd><Switch bind:checked={user.DST}></Switch></dd></span>
					</div>
					<label for="">Account on Test</label><Switch bind:checked={user.on_test}></Switch>
					
					<TabBar {tabs} let:tab key={(tab) => tab.k} bind:active>
						<Tab
							{tab}
							stacked={true}
							indicatorSpanOnlyContent={true}
							tabIndicator$transition="fade"
							>
							<Icon class="material-icons">{tab.icon}</Icon>
							<Label>{tab.label}</Label>
						</Tab>
					</TabBar>
				
				{#if active.k === 0 }
					<div class="container">
						<InformationInfo { cv_numbers }>
						</InformationInfo>
					</div>
				{/if}
				{#if active.k === 1 }
					<div class="container">
						Test is here
					</div>
				{/if}
				{#if active.k === 2 }
					<div class="container">
						History is here
					</div>
				{/if}
			</div>
		</div>
	{/if}
{/each}

<script>
	import {Users} from "../../stores/accounts";
	import { page } from '$app/stores';
	import { Icon, Label } from '@smui/common';
	import Button from '@smui/button';
	import Switch from '@smui/switch';
	import Tab from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import AccountInfo from "./AccountInfo.svelte";
	import InformationInfo from "./InformationInfo.svelte";
	
	let tabs = [
		{
		k: 0,
		icon: 'information',
		label: 'Information',
		},
		{
		k: 1,
		icon: 'page',
		label: 'Test Results',
		},
		{
		k: 2,
		icon: 'alarm',
		label: 'Alarm History',
		},
	];
	let active = tabs[0];

	let thisAccountNumber = $page.params.accountNumber;

	for (let index = 0; index < $Users.length; index++) {
		const element = $Users[index];
		const matchedAccountNumber = element.accountNumber;
		if(matchedAccountNumber === thisAccountNumber) {
			const cv_numbers = {
				cv_one: element.cv_one,
				cv_two: element.cv_two,
			}
		}
	}

</script>

<style lang="scss">
	.account-data-wrapper {
		padding: 0 1rem;
		transform: translate(0, -20px);
	}
</style>