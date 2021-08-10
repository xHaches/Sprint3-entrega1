const { User } = require("../models")

const bcryptjs = require('bcryptjs');
const jwtService  = require("./jwt.service");




const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({
            where: {email}
        });
        if(!user) {
            return {
                error: true,
                msg: 'Email o password incorrectos',
                status: 400
            };
        }
        if(!user.status) {
            return {
                error: true,
                msg: 'Email o password incorrectos',
                status: 400
            };
        }
        return user;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

const login = async (email, password) =>  {
    try {
        const user = await getUserByEmail(email);

        const validPassword = password+'' === user.password ? true : false;
        // Cuando haya registro
        // const validPassword = bcryptjs.compareSync(password+'', user.password);

        if(!validPassword) {
            return {
                error: true,
                msg: 'Email o password incorrectos',
                status: 400
            };
        }
        delete user.dataValues.password;

        const token = await jwtService.generateJWT(user);
        return {
            user,
            token
        }
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}


module.exports = {
    getUserByEmail,
    login
}