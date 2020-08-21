async function request() {
	let response = await fetch(
		'http://github.com/yakovenkoandyUA/testsrequest/master/db.json'
	);
	let result = await response.json();
	console.log(result);
}

request();
