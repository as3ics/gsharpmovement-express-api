import { connect } from "./database";
import { start } from "./server"

async function go() {
    connect();
    start();
}

go();
