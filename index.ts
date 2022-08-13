import * as core from "@actions/core";
import * as github from "@actions/github";

const world = "world";

const payload = github.context.payload;
const actor = github.context.actor;
const eventName = github.context.eventName;

console.log(payload);
console.log(actor);
console.log(eventName);

console.log(core.getInput("status"));
