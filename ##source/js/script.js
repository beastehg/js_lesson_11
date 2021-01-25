function addContentHTML(data) {
	// Контейнер и его стили
	const container = document.createElement("div");
	container.classList.add("container");
	document.body.prepend(container);

	// header
	const header = document.createElement("header");
	container.append(header);
	header.classList.add("header");
	header.innerHTML = `<h1>${data.main.cosmos}</h1>`;

	// header Info
	const headerInfo = document.createElement("p");
	header.append(headerInfo);
	header.style.display = "none";
	headerInfo.innerHTML = `${data.main.infoCosmos}  <p> ${data.main.infoFly}</p>`;

	//main
	const main = document.createElement("main");
	main.classList = "main";
	main.style.display = "none";
	container.append(main);

	const button = document.createElement("button");
	button.textContent = "Получить сведенье о планетах";
	button.classList.add("button");
	button.addEventListener("click", () => {
		button.style.display = "none";
		header.style.display = "flex";
		main.style.display = "flex";
	});
	container.prepend(button);

	for (let obj in data) {
		if (obj === "planets") {
			for (let planets in data[obj]) {
				for (let specificPlanet in data[obj][planets]) {
					if (specificPlanet === "title") {
						const h2 = document.createElement("h2");
						h2.textContent = data[obj][planets][specificPlanet];
						main.append(h2);
					} else if (specificPlanet === "url") {
						const img = document.createElement("img");
						img.src = data[obj][planets][specificPlanet];
						main.append(img);
					} else {
						const p = document.createElement("div");
						p.textContent = data[obj][planets][specificPlanet];
						main.append(p);
					}
					console.log(specificPlanet);
				}
			}
		}
	}
}

fetch(" https://trevadim.github.io/vue/data/data.json")
	.then((data) => data.json())
	.then((parsedData) => addContentHTML(parsedData))
	.catch((error) => console.log(error));
