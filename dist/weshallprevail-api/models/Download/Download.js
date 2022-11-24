"use strict";
/** @format */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Download = void 0;
// External dependencies
const mongoose_1 = __importStar(require("mongoose"));
const mongoose_deep_populate_1 = __importDefault(require("mongoose-deep-populate"));
// 2. Create a Schema corresponding to the document interface.
const DownloadSchema = new mongoose_1.Schema({
    ip: { type: String },
}, {
    versionKey: false,
    timestamps: { createdAt: "_createdAt", updatedAt: "_updatedAt" },
});
DownloadSchema.plugin((0, mongoose_deep_populate_1.default)(mongoose_1.default), {});
// 3. Create the Model.
exports.Download = (0, mongoose_1.model)("Download", DownloadSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG93bmxvYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kZWxzL0Rvd25sb2FkL0Rvd25sb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLHdCQUF3QjtBQUV4QixxREFBbUQ7QUFDbkQsb0ZBQTBEO0FBVzFELDhEQUE4RDtBQUM5RCxNQUFNLGNBQWMsR0FBRyxJQUFJLGlCQUFNLENBQy9CO0lBQ0UsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtDQUNyQixFQUNEO0lBQ0UsVUFBVSxFQUFFLEtBQUs7SUFDakIsVUFBVSxFQUFFLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFO0NBQ2pFLENBQ0YsQ0FBQztBQUVGLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBQSxnQ0FBb0IsRUFBQyxrQkFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFMUQsdUJBQXVCO0FBQ1YsUUFBQSxRQUFRLEdBQUcsSUFBQSxnQkFBSyxFQUFZLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQyJ9