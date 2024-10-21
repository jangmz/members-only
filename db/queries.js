import pool from "./pool.js";

/*

    ===== USERS =====

*/

// insert user
async function insertUser(user) {
    console.log("Creating user...");

    try {
        await pool.query(`
                insert into users(first_name, last_name, username, password, email, membership)
                values($1, $2, $3, $4, $5, false);
            `, [
                user.firstName,
                user.lastName,
                user.username,
                user.password,
                user.email
            ]);
    } catch (error) {
        console.log(error);
    }

    console.log("User created!");
}

// find username
async function findUsername(username) {
    console.log(`Searching: ${username}...`);
    
    const { row } = await pool.query(`
            select * from users
            where username=$1;
        `, [username]);

    return row;
}

// find email
async function findUserEmail(email) {
    console.log(`Searching: ${email}...`);

    const { row } = await pool.query(`
            select * from users
            where email=$1;
        `, [email]);

    return row;
}

/*

    ===== MESSAGES =====

*/

async function insertMessage(message) {
    console.log("Saving message...");

    try {
        await pool.query(`
                insert into messages(title, text, timestamp)
                values ($1, $2, $3);
            `, [
                message.title,
                message.text,
                message.timestamp
            ]);
    } catch (error) {
        console.log(error);
    }

    console.log("Message saved.");
}

export default {
    insertUser,
    findUsername,
    findUserEmail,
    insertMessage,
}