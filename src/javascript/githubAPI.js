export function gitHubFetch() { 
	fetch(`https://api.github.com/users/Coltensiemer`)
	.then(response => response.text().then(data=>{ 
		return data
	}))

	console.log("fetch was clicked")
}

