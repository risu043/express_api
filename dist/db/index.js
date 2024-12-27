"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseManager = exports.DatabaseManager = void 0;
const client_1 = require("@prisma/client");
class DatabaseManager {
    database;
    getInstance() {
        if (!this.database) {
            this.database = new client_1.PrismaClient();
        }
        return this.database;
    }
    async close() {
        if (!this.database)
            return;
        await this.database.$disconnect();
    }
}
exports.DatabaseManager = DatabaseManager;
exports.databaseManager = new DatabaseManager();
