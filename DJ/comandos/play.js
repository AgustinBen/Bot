
module.exports = {
    name: "play",
    description: "",
    options: [{
        name: "cancion",
        description: "Cancion / Autor y cancion / Autor",
        type: "STRING",
        required: "true"
    }],
    run: async (client, message, args, prefix) => {
        if(!args.length) return message.reply ("** Tienes que especificar el nombre de una cancion!**");
        if(!message.member.voice?.channel) return message.reply("** Tienes que estar en un canal! **");
        
        
    }
}
