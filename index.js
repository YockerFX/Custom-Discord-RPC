var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Description", //description of the game
assets : {
large_image : "image name", //the large image
large_text : "Yockers Paradise", //text of the text if you click on large image 
small_image : "image name", //the small image
small_text : "Bot Profile" //text of the small image
},
buttons : [{label : "Button1" , url : "link"},{label : "Button2",url : "link"}]
} 
})
})
console.log("Custom Discord Rp is online") 
client.login({ clientId : "803212587290066954" }).catch(console.error); //"https://discord.com/developers/applications" create an application and paste the client id in the ""
