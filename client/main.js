const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliments/random")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

fortuneBtn.addEventListener('click', getFortune)

//setting up the post function to be able to post a new compliment to the array of strings 
const addComplimentBox = document.getElementById("addCompliment")
const addComplimentBtn = document.getElementById("addComplimentButton")

const addCompliment = () => {

    axios.post("http://localhost:4000/api/compliments/", {
        compliment: addComplimentBox.value
    })
        .then(function (response) {
            console.log(response);
            getCompliments()
        })
        .catch(function (error) {
            console.log(error);
        });
}

addComplimentBtn.addEventListener(`click`, addCompliment)

const changeComplimentImput = document.getElementById("changeCompliment")
const changeComplimentBtn = document.getElementById("changeComplimentButton")

const changeCompliment = (id, value) => {
    axios.put(`http://localhost:4000/api/compliments/${id}`, {
        compliment: value
    })
        .then(response => {
            getCompliments()
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}

const deleteCompliment = (id) => {
    axios.delete(`http://localhost:4000/api/compliments/${id}`)
        .then(response => {
            getCompliments()
        })
        .catch(error => {
            console.error(`There was an error`, error)
        })

}

const complimentsDropdown = document.getElementById("complimentsDropdown")

const form = document.getElementById("changeOrDeleteCompliment")

const getCompliments = () => {
    axios.get("http://localhost:4000/api/compliments/")
        .then(res => {
            const options = res.data.map((compliment) => {
                return `<option value="${compliment.id}">${compliment.value}</option>`
            })
            complimentsDropdown.innerHTML = options
        })
}

//making it easier to access the data in the form more directly as opposed to using element Id
form.addEventListener(`submit`, (evt) => {
    evt.preventDefault()
    const formData = new FormData(form)

    if (evt.submitter.id === "changeComplimentButton") {
        changeCompliment(formData.get('current-compliments'), formData.get('complimentValue'))
    } else if (evt.submitter.id === "deleteComplimentButton") {
        deleteCompliment(formData.get(`current-compliments`))
    }
})


getCompliments()