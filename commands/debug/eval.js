module.exports = {
type: "basicCommand",
name: "eval",
aliases: ['e','ev'],
description: "Evaluates a code.",
usage: ",eval <code>",
cooldown: "None",
permission: "Bot owner",
code: `$onlyIf[$authorID==$clientOwnerID;You are'nt my owner.]
$onlyIf[$message!=;You must provide a code to eval.]
$eval[true;$message]`
} 