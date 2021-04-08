const Chat = require('../../models/Chat');
const checkAuth = require('../../util/checkAuth');

module.exports = {
    Query: {

    },
    Mutation: {
        async postMessage (_, content, context, info) {

            if(content.length < 1) {
                return Error("Message is Empty");
            }

            const user = checkAuth(context);

            const message = new Chat({
                body: content,
                username: user.username,
                createdAt: new Date(),
                user: user.id
            });

            const sendMsg = message.save();

            return sendMsg;
        }
    }
}