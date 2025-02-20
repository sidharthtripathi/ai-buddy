"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querySchema = exports.historySchema = void 0;
const zod_1 = require("zod");
exports.historySchema = zod_1.z.array(zod_1.z.object({
    role: zod_1.z.enum(["user", "model"]),
    parts: zod_1.z.array(zod_1.z.object({ text: zod_1.z.string() }))
}));
exports.querySchema = zod_1.z.object({
    query: zod_1.z.string(),
    history: exports.historySchema,
});
