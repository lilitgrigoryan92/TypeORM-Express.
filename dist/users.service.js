"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUser = exports.repository = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("./users.entity");
const repository = () => {
    const AppDataSource = new typeorm_1.DataSource({
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        synchronize: true,
        logging: true,
        entities: [users_entity_1.UsersEntity]
    });
    return AppDataSource.getRepository(users_entity_1.UsersEntity);
};
exports.repository = repository;
const getUser = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = (0, exports.repository)();
    return yield userRepository.findOne({ where: { name } });
});
exports.getUser = getUser;
const createUser = (name, age) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = (0, exports.repository)();
    const user = userRepository.create({ name, age });
    return yield userRepository.save(user);
});
exports.createUser = createUser;
