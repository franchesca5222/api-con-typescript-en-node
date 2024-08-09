"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaries_1 = __importDefault(require("./routes/diaries"));
const findFreePort = require('find-free-port');
const app = (0, express_1.default)();
app.use(express_1.default.json());
findFreePort(3000, 3100, (err, freePort) => {
    if (err) {
        console.error('Error finding free port:', err);
        return;
    }
    app.get('/ping', (_req, res) => {
        console.log('alguien pinged here!!');
        res.send('pong');
    });
    app.use('/api/diaries', diaries_1.default);
    app.listen(freePort, () => {
        console.log(`Servidor corriendo en ${freePort}`);
    });
});
