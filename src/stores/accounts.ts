import { writable} from "svelte/store";

export const Users = writable([]); 

const fetchMockData = async () => {
	const url = "/accounts.json";
	const res = await fetch(url);
	const data = await res.json();
	const loadedUsers = data.map((data) => {
		return {
			id: data.id,
			accountNumber: data.accountNumber,
			name: data.name,
			address: data.address,
			city: data.city,
			state: data.state,
			zip: data.zip,
			cv_one: data.cv_one,
			cv_two: data.cv_two,
			auth_fire: data.auth_Fire,
			auth_police: data.auth_Police,
			auth_medical: data.auth_Medical,
			passcode_one: data.passcode_one,
			passcode_two: data.passcode_two,
			panel_phone: data.panel_phone,
			panel_type: data.panel_type,
			panel_notes: data.panel_notes,
			panel_techNotes: data.panel_techNotes,
			timezone: data.timezone,
			dst: data.DST,
			created_at: data.created_at,
			updated_at: data.updated_at
		};
	});
	Users.set(loadedUsers);
}
fetchMockData();