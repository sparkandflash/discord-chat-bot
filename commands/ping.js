module.exports = {
    name: 'ping',
    type: 'util',
	description: 'check ping',
	async execute(message,client) {
	console.log(client)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${message.client.ping}ms`);
}
}
