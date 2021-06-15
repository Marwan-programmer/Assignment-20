let gallery = document.querySelector("#gallery");
let card = gallery.querySelector(".card");
let filter = document.querySelector("#filter");

fetch("https://reqres.in/api/users/")
  .then(responde => responde.json())
  .then(result => {
    let allcards = result;

    function allCards() {
      if (filter.value == "") {
        for (i = 0; i < result.data.length; i++) {

          gallery.insertAdjacentHTML("afterbegin", `<div class="card">
			   <h2>${result.data[i].first_name} ${result.data[i].last_name}</h2>
			   <h4>${result.data[i].email}
			   </h4>
			   <img src="${result.data[i].avatar}">
			   </card>`)
        }
      }
    }
    allCards()


	///////////ddEventListener/////////////////////////
    filter.addEventListener("input", function() {
      gallery.innerHTML = "";
      for (i = 0; i < result.data.length; i++) {
        if (result.data[i].first_name.indexOf(filter.value) > -1) {
          gallery.insertAdjacentHTML("afterbegin", `<div class="card">
	      <h2>${result.data[i].first_name} ${result.data[i].last_name}</h2>
	      <h4>${result.data[i].email}
	      </h4>
	      <img src="${result.data[i].avatar}">
	      </card>`)

        }
      }

      if (filter.value == "") {
        gallery.innerHTML = "";
        allCards(allcards)
      }

    })

  })



