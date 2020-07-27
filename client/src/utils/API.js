import axios from "axios";

//https://developers.google.com/books/docs/v1/using

export default {
    // google books api - search term
    searchAxe: function (search) {
        return axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${search}&max-results=40
            `
        )
    },
    // save book to database
    saveAxe: function (data) {
        return axios.post("/api/axes", data)
    },
    // get all saved from database
    getSaved: function () {
        return axios.get("/api/axes/");
    },
    // delete book from database
    deleteAxe: function (id) {
        return axios.delete("/api/axes/" + id);
    }

}