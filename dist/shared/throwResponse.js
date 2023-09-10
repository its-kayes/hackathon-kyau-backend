"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwResponse = void 0;
const throwResponse = (res, data, statusCode, message, success, meta) => {
    let objectWithMeta = {};
    if (meta) {
        objectWithMeta = {
            success,
            statusCode: statusCode,
            message,
            meta: {
                page: meta === null || meta === void 0 ? void 0 : meta.page,
                limit: meta === null || meta === void 0 ? void 0 : meta.limit,
                total: meta === null || meta === void 0 ? void 0 : meta.total,
            },
            data: data,
        };
    }
    else {
        objectWithMeta = {
            success,
            statusCode: statusCode,
            message,
            data: data,
        };
    }
    return res.status(statusCode).json(objectWithMeta);
};
exports.throwResponse = throwResponse;
// message:
//         message +
//         '. Missing language variant information may lead to specific result not found.',
