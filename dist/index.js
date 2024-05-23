"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = __importDefault(require("./config/database"));
const secrets_1 = require("./secrets");
const routes_1 = __importDefault(require("./routes"));
const errorMidleware_1 = require("./middlewares/errorMidleware");
const app = (0, express_1.default)();
(0, database_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.default);
app.use(errorMidleware_1.errorMidleware);
app.listen(secrets_1.PORT, () => {
    console.log(`Server rodando na porta ${secrets_1.PORT}`);
});
//# sourceMappingURL=index.js.map