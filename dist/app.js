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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_service_1 = require("./users.service");
const app = (0, express_1.default)();
const port = process.env.APP_PORT || 5000;
app.use(express_1.default.json());
app.get('/getUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, users_service_1.getUser)('Betty');
        res.send(data);
    }
    catch (error) {
        res.status(500).send('Error');
    }
}));
app.post('/createUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const user = yield (0, users_service_1.createUser)(body.name, body.age);
        res.send(`${user.name} created`);
    }
    catch (error) {
        res.status(500).send('Error');
    }
}));
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
