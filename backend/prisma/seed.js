"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../src/libs/db"));
async function main() {
    await db_1.default.user.create({
        data: {
            email: "admin@autoverif.local",
            passwordHash: "$2a$10$invalid", // change
            fullname: "Admin"
        }
    });
}
main().catch(e => { console.error(e); process.exit(1); })
    .finally(() => db_1.default.$disconnect());
