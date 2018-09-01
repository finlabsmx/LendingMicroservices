"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
exports.FinLabsLendingAPIApp = application_1.FinLabsLendingAPIApp;
async function main(options) {
    const app = new application_1.FinLabsLendingAPIApp(options);
    await app.boot();
    await app.start();
    const url = app.restServer.url;
    console.log(`Server is running at ${url}`);
    console.log(`Try ${url}/ping`);
    return app;
}
exports.main = main;
//# sourceMappingURL=index.js.map