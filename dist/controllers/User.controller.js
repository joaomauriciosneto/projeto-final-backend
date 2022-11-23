"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const userList_1 = require("../data/userList");
const user_repository_1 = require("../repositories/user.repository");
class UsersController {
    async listAllUser(req, res) {
        try {
            const result = await user_repository_1.userRepository.find({
                relations: {
                    note: true
                }
            });
            console.log(result);
            if (result == null || result.length == 0) {
                return res.status(400).send({
                    ok: false,
                    message: 'No users found!'
                });
            }
            return res.status(200).send({
                ok: true,
                message: 'Listing all users...',
                data: result
            });
        }
        catch (error) {
            return res.status(500).send({
                ok: false,
                message: error.toString()
            });
        }
    }
    async listUserById(req, res) {
        try {
            const { idUser } = req.params;
            const user = await user_repository_1.userRepository.findOneBy({ idUser: Number(idUser) });
            if (!user) {
                return res.status(404).send({
                    ok: false,
                    message: 'User not found!'
                });
            }
            return res.status(200).send({
                ok: true,
                message: 'Listing user by ID...',
                data: user
            });
        }
        catch (error) {
            return res.status(500).send({
                ok: false,
                message: error.toString()
            });
        }
    }
    async registerUser(req, res) {
        try {
            const { email, password } = req.body;
            if (!email) {
                return res.status(400).send({
                    ok: false,
                    message: 'Email not provided!'
                });
            }
            if (!password) {
                return res.status(400).send({
                    ok: false,
                    message: 'Password not provided!'
                });
            }
            const validEmail = await user_repository_1.userRepository.find({
                where: {
                    email: email
                }
            });
            if (validEmail.length > 0) {
                return res.status(400).send({
                    ok: false,
                    message: 'User already registered!'
                });
            }
            const newUser = user_repository_1.userRepository.create({
                email,
                password
            });
            await user_repository_1.userRepository.save(newUser);
            return res.status(201).send({
                ok: true,
                message: 'User successfully registered!',
                data: newUser
            });
        }
        catch (error) {
            return res.status(500).send({
                ok: false,
                message: error.toString()
            });
        }
    }
    async login(req, res) {
        try {
            const { email, password } = req.body;
            if (!email) {
                return res.status(400).send({
                    ok: false,
                    message: 'Email not provided!'
                });
            }
            if (!password) {
                return res.status(400).send({
                    ok: false,
                    message: 'Password not provided!'
                });
            }
            const user = await user_repository_1.userRepository.findOneBy({ email, password });
            if (!user) {
                return res.status(404).send({
                    ok: false,
                    message: 'User not found!'
                });
            }
            return res.status(200).send({
                ok: true,
                data: {
                    id: user.idUser,
                    email: user.email
                }
            });
        }
        catch (error) {
            return res.status(500).send({
                ok: false,
                message: error.toString()
            });
        }
    }
    async deleteUser(req, res) {
        try {
            const { idUser } = req.params;
            const user = await user_repository_1.userRepository.findOneBy({ idUser: Number(idUser) });
            if (!user) {
                return res.status(404).send({
                    ok: false,
                    message: 'User not found!'
                });
            }
            await user_repository_1.userRepository.delete(user);
            return res.status(200).send({
                ok: true,
                message: 'User deleted successfully!'
            });
        }
        catch (error) {
            return res.status(500).send({
                ok: false,
                message: error.toString()
            });
        }
    }
    // public listAllUser(req: Request, res: Response) {
    //     try {
    //         let users = usersList;
    //         let usersListReturn = users.map(user => {
    //             return user.getUsers();
    //         })
    //         return res.status(200).send({
    //             ok: true,
    //             message: 'List of all users!',
    //             data: usersListReturn
    //         })
    //     } catch (error: any) {
    //         return res.status(500).send({
    //             ok: false,
    //             message: 'Server instability!',
    //             error: error.toString()
    //         })
    //     }
    // }
    // public listUserById(req: Request, res: Response) {
    //     try {
    //         const {idUser} = req.params;
    //         const users = usersList.find(user => user.id == idUser)
    //         if(!users) {
    //             return res.status(404).send({
    //                 ok: false,
    //                 message: 'User not found!'
    //             })
    //         }
    //         return res.status(200).send({
    //             ok: true,
    //             message: 'User found!',
    //             data: users
    //         })
    //     } catch (error: any) {
    //         return res.status(500).send({
    //             ok: false,
    //             message: 'Server instability!',
    //             error: error.toString()
    //         })
    //     }
    // }
    // public registerUser(req: Request, res: Response) {
    //     try {
    //         const { email, password } = req.body;
    //         if(!email) {
    //             return res.status(400).send({
    //                 ok: false,
    //                 message: 'Email not provided!'
    //             })
    //         }
    //         if(!password) {
    //             return res.status(400).send({
    //                 ok: false,
    //                 message: 'Password not provided!'
    //             })
    //         }
    //         const user = new Users(email, password);
    //         usersList.push(user);
    //         return res.status(201).send({
    //             ok: true,
    //             message: 'User registered successfully!',
    //             id: user.id,
    //             email: user.email,
    //             password: user.password
    //         })
    //     } catch (error: any) {
    //         return res.status(500).send({
    //             ok: false,
    //             message: 'Server instability!',
    //             error: error.toString()
    //         })
    //     }
    // }
    editUser(req, res) {
        try {
            const { email } = req.params;
            const { password } = req.body;
            const user = userList_1.usersList.find(user => user.email === email);
            console.log(user === null || user === void 0 ? void 0 : user.email);
            if (!user) {
                return res.status(404).send({
                    ok: false,
                    message: 'User not found!'
                });
            }
            user.password = password;
            return res.status(200).send({
                ok: true,
                message: 'User successfully updated!',
                data: user
            });
        }
        catch (error) {
            return res.status(500).send({
                ok: false,
                message: 'Server instability!',
                error: error.toString()
            });
        }
    }
}
exports.UsersController = UsersController;
