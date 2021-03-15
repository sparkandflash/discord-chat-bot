module.exports = {
	name: 'removerole',
	type: 'owner',
	 aliases: ['rr'],
	description: 'admins only',
async execute(message,args) { 
    if (!message.member.permissions.has(["MANAGE_ROLES", "ADMINISTRATOR"]))
{return message.channel.send(
  "You don't have permission to use this command!"
);}


let rMember =
message.mentions.members.first();
let role =
message.guild.roles.find((r) => r.name == args[1]) ||
message.guild.roles.find((r) => r.id == args[1]) ||
message.mentions.roles.first();
if (!role)
{ message.channel.send(
  "mention both user and role!!"
);}
 else {
await rMember.removeRole(role.id).catch((e) => console.log(e));
message.channel.send(
  `The role ${role.name} has been removed from ${rMember.displayName}.`
);
}


}}