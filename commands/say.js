module.exports = {
	name: 'say',
	type: 'owner',
	 aliases: ['s'],
	description: 'devs only',
execute(message, args) {
   
  const sayMessage = args.join(" ");
  message.delete().catch(O_o=>{}); 
  message.channel.send(sayMessage);
}
};
