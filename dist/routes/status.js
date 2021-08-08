"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
exports.route = {
  method: "GET",
  url: "/info",
  handler: function (request, reply) {
    reply.code(200);
    reply.send("Pastel Global Ban List");
  },
};
