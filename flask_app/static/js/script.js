
function getSuperhero(){
    myForm.onsubmit = function (e) {
        e.preventDefault();
        var form = new FormData(myForm);

        fetch('http://localhost:5000/search', {method: 'POST', body: form})
        .then(result =>  result.json())
        .then(data => {
            console.log(data)
            cards.innerHTML = '';
            if(data.response == 'success'){
                for (var i=0; i<data.results.length; i++) {
                    cards.innerHTML += `
                        <div class="card" style="width: 12rem;">
                            <img src="${data.results[i].image.url}" class="card-img-top" alt="${data.results[i].name} picture">
                            <div class="card-body">
                                <h3 class="text-primary"> ${data.results[i].name} </h3>
                                <p class="card-text">Height: <span class="text-primary">${data.results[i].appearance.height[1]}</span></p>
                                <p class="card-text">Weight: <span class="text-primary">${data.results[i].appearance.weight[1]}</span></p>
                                <p class="card-text">Gender: <span class="text-primary">${data.results[i].appearance.gender}</span></p>
                            </div>
                        </div>
                    `
                }
            }
            else {
                cards.innerHTML = `
                    
                    <div class="d-flex justify-content-center">
                        <h3 class="card bg-dark text-danger border border-warning p-4 mt-2">Not found </h3>
                </div>
                `
            }
        })
    }
}

getSuperhero();