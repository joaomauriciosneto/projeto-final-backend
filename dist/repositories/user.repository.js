"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const data_source_1 = require("../data-source");
const user_entity_1 = require("../entities/user.entity");
exports.userRepository = data_source_1.appDataSource.getRepository(user_entity_1.UserEntity);
