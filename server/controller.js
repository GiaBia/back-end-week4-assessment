const { request } = require("express");

const compliments = {
    0: {
        id: 0,
        value: "Hello Gorgeous"
    },
    1: {
        id: 1,
        value: "Great minds click on this button"
    },
    2: {
        id: 2,
        value: "What's cookin good lookin"
    }
};
let id = 3
module.exports = {

    getCompliment: (req, res) => {


        const randomPropertyValue = (object) => {
            const keys = Object.keys(object);
            if (keys.length > 0) {
                const index = Math.floor(keys.length * Math.random());
                return object[keys[index]];
            }
            return null;
        };


        // Usage example:


        console.log(randomPropertyValue(compliments));


        res.status(200).send(randomKey);
    },
    getCompliments: (req, res) => {
        res.status(200).send(Object.values(compliments))
    },

    getFortune: (req, res) => {
        const fortunes = ["Drinking ample water brings longevity", "Stong code brings a strong website and a strong mind.", "Curiosity kills boredom. Nothing van kill curiosity.", "Place special emphasis on old friendship", "The early bird gets the worm, but the second mouse gets the cheese."];

        let randomIndex2 = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex2];

        res.status(200).send(randomFortune);
    },

    addCompliment: (req, res) => {
        compliments[id] = {
            id: id++,
            value: req.body.compliment
        }

        res.status(200).send(req.body)
    },

    changeCompliment: (req, res) => {
        console.log(req.params.id)
        //taking off valuea
        compliments[req.params.id].value = req.body.compliment

        res.status(200).send(req.body)
    },

    deleteCompliment: (req, res) => {
        const deletedValue = compliments[req.params.id]
        delete compliments[req.params.id]

        res.status(200).send(deletedValue)

    }
}



