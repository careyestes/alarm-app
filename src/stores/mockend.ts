import { writable} from "svelte/store";

export const accounts = writable([]); 

const fetchMockData = async () => {
	const url = "https://mockend.com/careyestes/alarm-app/Users";
	const res = await fetch(url);
	const data = await res.json();
	const loadedAccounts = data.map((data) => {
		return {
			name: data.name,
			id: data.id,
			account: data.account
		};
	});
	accounts.set(loadedAccounts);
}
fetchMockData();