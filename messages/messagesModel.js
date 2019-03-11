
    
const db = require('../data/dbConfig.js');

module.exports = {
    getAll: () => {
        return db('messages');
    },

    findById: (id) => {
        return db('messages').where({ id }).first();
    },

    insert: (message) => {
        return db('messages').insert(message).into('messages');
    },

    remove: (id) => {
        return db('messages').where({ id }, id).del(id);
    }


};