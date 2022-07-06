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
const user_model_1 = __importDefault(require("../models/user.model"));
const user = new user_model_1.default();
describe("Test basic endpoint server", () => {
    it("should have All Users method", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(user.getAllUsers).toBeDefined();
    }));
    it("should have a User by ID method", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(user.getUser).toBeDefined();
    }));
    it("should have a delete user method", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(user.deleteUser).toBeDefined();
    }));
    it("should have add user method", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(user.addUser).toBeDefined();
    }));
    it("should have update user method", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(user.updateUser).toBeDefined();
    }));
});
