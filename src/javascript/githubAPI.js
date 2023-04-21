export function gitHubFetch(repo,branch) { 
	fetch(`https://raw.githubusercontent.com/Coltensiemer/${repo}/${branch}/README.md`)
	.then(response => response.text().then(data=>{ 
		console.log(data)
	}))

	console.log("fetch was clicked")
}