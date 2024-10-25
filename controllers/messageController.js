import db from "../db/queries.js";

// GET /messages -> displays all the messages from database
function messagesGet(req, res) {
    // TODO: fetch messages from database and display them
    // TODO: display the authors and date created if user is signed in
    res.render("messages");
}

// GET /messages/new -> displays form for message
function newMessageGet(req, res) {
    res.render("new-message-form");
}

// POST /messages/new -> saves message to database
async function newMessagePost(req, res) {
    // prepare data to be inserted
    const date = new Date();
    const message = {
        title: req.body.title,
        text: req.body.message,
        timestamp: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        user_id: req.user.id
    }

    console.log(message)
}

export default {
    messagesGet,
    newMessageGet,
    newMessagePost
}