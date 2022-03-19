module.exports = {
type: "basicCommand",
name: "info",
aliases: ['botinfo','about'],
description: "Returns bot info.",
usage: ",info",
cooldown: "None",
permission: "None",
code: `$title[1;$username[$clientID] info.]
$description[1;\`Read from top to bottom is cool.\`
AOI.js version: \`$packageVersion\`
Package dependencies:
\`\`\`
$packageDependencies
\`\`\`
CPU Usage: \`$round[$cpu] %\`]
$color[1;999999]
$footer[1;Love you Leref <3]`
} 