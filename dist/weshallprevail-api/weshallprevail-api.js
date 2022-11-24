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
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const server_1 = require("./server");
function go() {
    return __awaiter(this, void 0, void 0, function* () {
        (0, database_1.connect)();
        (0, server_1.start)();
    });
}
go();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VzaGFsbHByZXZhaWwtYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3dlc2hhbGxwcmV2YWlsLWFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlDQUFxQztBQUNyQyxxQ0FBZ0M7QUFFaEMsU0FBZSxFQUFFOztRQUNiLElBQUEsa0JBQU8sR0FBRSxDQUFDO1FBQ1YsSUFBQSxjQUFLLEdBQUUsQ0FBQztJQUNaLENBQUM7Q0FBQTtBQUVELEVBQUUsRUFBRSxDQUFDIn0=