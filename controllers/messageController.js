// GET /messages -> displays all the messages from users
function messagesGet(req, res) {
    res.render("messages");
}

// GET /messages/new -> displays form for message
function newMessageGet(req, res) {
    res.render("new-message-form");
}

export default {
    messagesGet,
    newMessageGet,
}