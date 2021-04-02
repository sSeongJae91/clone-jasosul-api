const { UserInputError } = require('apollo-server');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');
const {validateLoginInput, validateRegisterInput} = require('../../util/validator');
const { SECRET_KEY } = require('../../config');

function generateToken(user) {
    return jwt.sign({
        id: user.id,
        email: user.email,
        username: user.username
    },
    SECRET_KEY,
    {expiresIn: '1h'}
    )
};

module.exports = {
    Query: {
        async profile(_, email, context, info) {

            const user = await User.findOne({email});

            if(!user) {
                throw new Error('Cannot find User Error');
            }

            const token = generateToken(user);

            return {
                ...user._doc,
                id: user.id,
                email: user.email,
                token
            }
        }
    },
    Mutation: {
        async register(_, {
            registerInput: {email, username, password, confirmPassword}
        }, context, info) {
            const {valid, errors} = validateRegisterInput(email, username, password, confirmPassword);

            if(!valid) {
                throw new UserInputError('Errors', {errors});
            }

            const user = await User.findOne({email});

            if(user) {
                throw new UserInputError('Email is taken', {
                    errors: {
                        username: 'This email is taken'
                    }
                })
            }

            password = await bcrypt.hash(password, 12);

            const newUser = new User({
                email,
                username,
                password,
                createdAt: new Date().toISOString()
            });

            const registUser = await newUser.save();

            const token = generateToken(registUser);

            return {
                ...registUser._doc,
                id: registUser.id,
                token
            }
        }
    }
}