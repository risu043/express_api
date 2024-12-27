"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchWakas = void 0;
const db_1 = require("../db");
const searchWakas = async (filter, page) => {
    const prisma = db_1.databaseManager.getInstance();
    const data = await prisma.waka.findMany({
        where: {
            bodyKanji: {
                contains: filter,
            },
        },
        take: 10,
        skip: (page - 1) * 10,
    });
    const hitCount = await prisma.waka.count({
        where: {
            bodyKanji: {
                contains: filter,
            },
        },
    });
    return { data, hitCount };
};
exports.searchWakas = searchWakas;
