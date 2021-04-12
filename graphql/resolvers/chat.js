const Chat = require('../../models/Chat');
const checkAuth = require('../../util/checkAuth');

const { ValidationError } = require('apollo-server');

module.exports = {
    Query: {
        async getMessages(_, {company, first, offset}, context, info) {

            try {
                const messages = await Chat.find({company}).sort({ createdAt : -1 }).skip(first).limit(offset);
                console.log(messages);

                return messages;
            } catch (error) {
                throw new Error(error);
            }
        }
    },
    Mutation: {
        async postMessage (_, {body, company}, context, info) {

            if(body.length < 1) {
                return ValidationError("Message is Empty");
            }

            const user = checkAuth(context);

            const message = new Chat({
                body: body,
                username: user.username,
                createdAt: new Date(),
                company: company,
                user: user.id
            });

            const sendMsg = await message.save();

            return {
                ...sendMsg._doc,
                id: sendMsg.id,
                username: sendMsg.username,
                company: sendMsg.company,
                createdAt: sendMsg.createdAt
            };
        }
    }
}