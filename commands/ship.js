module.exports = {
	name: 'ship',
	type: 'fun',
	 aliases: ['match'],
	description: 'not devs only',
execute(msg) {
	{
        var firstuser = msg.mentions.users.first();
        var seconduser= msg.content.split(' ').slice(2).join(' ');
 
         var love = Math.floor(Math.random() * 101);
        
         if(!firstuser){
             msg.channel.send(`Please mention someone to calculate the love percentage`).then(msg.react('❌'));}
             else {
            
             if(!seconduser){
                 msg.channel.send(`<@${user.id}> :heart_eyes_cat: ${firstuser}\n \` Love percentage : ${love}%\` `);
                 }
                else{
                 msg.channel.send(`${firstuser} :heart_eyes_cat: ${seconduser}\n \` Love percentage : ${love}%\` `);
             }
             }
 
	}
}
};