const Post = require('../../models/Post');
const Job = require('../../models/Job');

const checkAuth = require('../../util/checkAuth');

module.exports = {
    Query: {
        async findMyPost(_, id, context, info) {

            const myPosts = Post.findOne({id});

            return {
                ...myPosts.doc_
            } 
        }
    },
    Mutation: {
        async posting(_, {
            body,
            id
        }, context, info) {

            console.log("context", context);
            console.log("info", info);

            const user = checkAuth(context);
            const job = Job.findById(id);

            const newPost = new Post({
                body,
                user: user.id,
                username: user.username,
                createdAt: new Date().toISOString,
                job: job.id
            })

            const post = await newPost.save();

            return post;
        }
    }
}