const Discord = require('discord.js')
const bot = new Discord.Client()
const client = new Discord.Client()
var membres_afk = []
var prefix = "&";

Array.prototype.remove = function() {
  var what, a = arguments, L = a.length, ax;
  while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
          this.splice(ax, 1);
      }
  }
  return this;
};

bot.on('ready', function() {
  bot.user.setPresence({ game: { name:`&help | ${bot.guilds.size} serveurs | ${bot.users.size} utilisateurs` }})
  console.log("Online !");
})

bot.on('message', function (message) {
if(message.content === "Hello"){
message.reply("hey !")
}

if(message.content === "Comment on invite le bot ?"){
  message.reply("il te suffit d'écrire &invite :wink:")
  console.log("Question invite")
}

if(message.content === "Comment on invite le bot sur notre serveur ?"){
  message.reply("il te suffit d'écrire &invite :wink:")
  console.log("Question invite")
}

if(message.content === "Comment on invite le bot sur un serveur ?"){
  message.reply("il te suffit d'écrire &invite :wink:")
  console.log("Question invite")
}

if(message.content === "Comment on invite le bot sur nos serveurs ?"){
  message.reply("il te suffit d'écrire &invite :wink:")
  console.log("Question invite")
}

if(message.content === "Comment on invite le bot dans un serveur ?"){
  message.reply("il te suffit d'écrire &invite :wink:")
  console.log("Question invite")
}

if(message.content === "Comment on invite le bot sur son serveur ?"){
  message.reply("il te suffit d'écrire &invite :wink:")
  console.log("Question invite")
}

if(message.content === "Comment on invite le bot sur ses serveurs ?"){
  message.reply("il te suffit d'écrire &invite :wink:")
  console.log("Question invite")
}

  if (message.author.equals(bot.user)) return;
    
  if (!message.content.startsWith(prefix)) return;
  
  
  var argss = message.content.substring(prefix.length).split(" ");
  
  switch (argss[0].toLowerCase()) {
  
          case "porn":
          if (!message.channel.nsfw) return message.reply("veuillez faire cette commande dans un salon nsfw ! :no_entry:");
      let argss = message.content.split(" ").slice(1);
      
  
          var replys = [
              "https://i.imgur.com/ZBOM7AC.gif",
              "https://78.media.tumblr.com/5788adc30086188fc5695a239fd24cf2/tumblr_n066l2JsTe1r4vg1oo10_400.gif",
              "https://www.pornotales.net/images/posts/gifki-porno-sekretarshi.gif",
              "http://eprworkshop.info/albums/userpics/2014y/05/02/8/1/6374-porno-gif.gif",
              "https://www.gifs-porno.com/wp-content/uploads/2017/11/Follada-por-un-negro.gif",
              "http://juicygif.com/albums/userpics/2014y/09/26/13/1/1539-porno-gif.gif",
              "http://erofilm.net/gifload/files/erofilm.net_bolchoi_clen_07022040.gif",
              "https://78.media.tumblr.com/3761a0ac802bad2e5e2e09690883d31c/tumblr_my24zgxqEp1rh45hto1_400.gif",
              "https://78.media.tumblr.com/dd8df8f7b6e8e0f1dd8c6113f4e5f0b2/tumblr_o02a1rok6s1u2s3z9o1_500.gif",
              "https://78.media.tumblr.com/tumblr_lnqov5fcZE1qf0ul8o1_500.gif",
              "https://78.media.tumblr.com/ac6ba763bd6c4b3abc3e3a6199b5db33/tumblr_o30cjcTX8T1shq4y0o1_500.gif",
              "https://78.media.tumblr.com/9f8b7ebc001b764084230b85da92d2ad/tumblr_or3c08gvjH1rkdhugo1_500.gif",
              "https://78.media.tumblr.com/a0218acd78d471f14f0078ea5991ed59/tumblr_ojdma9wI5Y1shhqv9o1_500.gif",
              "https://78.media.tumblr.com/297ed61ad6fd7e2cef1a66f99768f6d7/tumblr_nob0gaTIZK1u073rpo1_500.gif",
              "https://78.media.tumblr.com/e8886afb24a468c25ccd1ba2d4ea15ab/tumblr_nzqobhQKYJ1ux5p3po1_500.gif",
              "https://78.media.tumblr.com/309e70dd12c79178fee92dff086a24e8/tumblr_o4m470vCsb1shhqv9o1_500.gif",
              "https://78.media.tumblr.com/2e53f3aacb9f30eaec02752f1faf2e18/tumblr_o6s87lNObH1shq4y0o1_400.gif",
              "https://78.media.tumblr.com/e2edb2a23e83759764f77d76f13d8106/tumblr_milqoou1Oc1s57pz9o1_500.gif",
              "https://78.media.tumblr.com/4598ef4dc17e8fe6c5fdcd5795808989/tumblr_nz97gsLINP1u9j6sno1_500.gif",
              "https://78.media.tumblr.com/bde798604ab7e58bd4e77e0ad41e38a8/tumblr_p0fffn7MDJ1urlaw2o1_500.gif",
              "https://78.media.tumblr.com/0964cfa3763b2b529ee1d7cb75666ad8/tumblr_nvgt5eReQL1u9o731o1_500.gif",
              "https://78.media.tumblr.com/d601f6009f0cacaa6cb614f2594d52ac/tumblr_nmvfdxC65b1unmuf7o1_400.gif",
              "https://78.media.tumblr.com/tumblr_lp5hzqw0Yp1r0acrbo1_500.gif",
              "https://78.media.tumblr.com/e5aa2725d7f7ea3e6e0414485c4093a3/tumblr_nzugik51Jy1umggj7o1_500.gif",
              "https://78.media.tumblr.com/0cba71c55002cf8b25a738e6f4bdad5b/tumblr_nofw3dX5rj1uvbosmo1_500.gif",
              "https://78.media.tumblr.com/527df373ce72455ad7cfe479ce453b45/tumblr_mqdhdsssOd1rseqido1_500.gif",
              "https://78.media.tumblr.com/1e0dcf542bf3d193f4ee291cc4ceec76/tumblr_ov2vxu0YCy1u578vho1_500.gif",
              "https://78.media.tumblr.com/68f7c2e010f88f0e9e8477413760516c/tumblr_nyc52kdR7I1sfrezlo1_500.gif",
              "https://78.media.tumblr.com/9838ff328ab745052cce6085d2a169b5/tumblr_oujyt2u2X21vfp97io1_400.gif",
              "https://78.media.tumblr.com/tumblr_lpoeahYYWz1ql4hl8o1_400.gif",
              "https://78.media.tumblr.com/ce24fe0ef8cdc1a4cde56b759a18e306/tumblr_nyixbbK9lX1shq4y0o1_500.gif",
              "https://78.media.tumblr.com/tumblr_lpokh9Y7Mz1qkhcyho1_500.gif",
              "https://78.media.tumblr.com/1c9479d74158439a531e8dceef3f323b/tumblr_oay2l95oJj1revz5to1_500.gif",
              "https://78.media.tumblr.com/d5952354855c03bf4740af1273b3f6b1/tumblr_ni6rxrcEZ61rlzxido6_500.gif",
              "https://78.media.tumblr.com/2030ed87370d8b0827b481902704bff6/tumblr_odqi06RdaU1sf68sto1_500.gif",
              "https://78.media.tumblr.com/4bc0d1667302f4d66245e3e4a16fdc1c/tumblr_nywtzoNkgK1u9j6sno1_500.gif",
              "https://78.media.tumblr.com/3291e13c46a3d6eb473047120cbec5ce/tumblr_nzxmsnfTFl1ubttx2o1_500.gif",
              "https://78.media.tumblr.com/7cd49131c99ef7bc5659ea6b61b899a2/tumblr_njmv5sU20w1tbqqh1o1_500.gif",
              "https://78.media.tumblr.com/9cad50ee2e81aead1b45b20e963920b2/tumblr_nzug5a1mAd1umggj7o1_500.gif",
              "https://78.media.tumblr.com/c5ece5db3637104afebef3dd62653933/tumblr_opi5aitGQ81w6muifo1_500.gif",
              "https://78.media.tumblr.com/b934220c4e86e0f77b36bd362a8e4c72/tumblr_nyycl2unaP1shq4y0o1_500.gif",
              "https://78.media.tumblr.com/7a9be303a3c245c76d2c74f386d5bd7a/tumblr_o63hk59jKF1rylulro1_1280.gif",
              "https://78.media.tumblr.com/tumblr_lplm9ncUX71r0cvnyo1_500.gif",
              "https://78.media.tumblr.com/5b19bd7520166ee9e01798bc550665fc/tumblr_on83j92Yfw1v5cpozo1_400.gif",
              "https://78.media.tumblr.com/5e5c6121db51d04fe519c63c2f4912ce/tumblr_o6vp9ah61J1shq4y0o1_500.gif",
              "https://78.media.tumblr.com/347c2c26a82b6a1e54ce1262503714e1/tumblr_o6hq57yqn71tmpmafo1_500.gif",
              "https://78.media.tumblr.com/dd8df8f7b6e8e0f1dd8c6113f4e5f0b2/tumblr_o02a1rok6s1u2s3z9o1_500.gif",
              "https://78.media.tumblr.com/c80d3920460f461b57ac74e1c570e52e/tumblr_nhcg8pL8s71u1oorxo1_400.gif",
              "http://imgur.com/1sgTg2u.gif",
              "http://imgur.com/YUoOQtA.gif",
              "https://78.media.tumblr.com/59a0a3df06b8c23c40aafd498bc37743/tumblr_pb70hyZpTU1rat4opo1_540.gif",
              "http://imgur.com/mMgL1V6.gif",
              "https://78.media.tumblr.com/cc1ed88c617af8584324964d9c1322a5/tumblr_pb70ow5UE61rat4opo1_540.gif",
              "http://imgur.com/IibiWip.gif",
              "https://78.media.tumblr.com/5527f8d41ca635d98e932a936e017e30/tumblr_pb70k2lQkD1rat4opo1_540.gif",
              "http://imgur.com/TYja9fm.gif",
              "http://imgur.com/ExGKCM5.gif",
              "http://imgur.com/u7Rt5mn.gif",
              "http://imgur.com/CsnxZhz.gif",
              "http://imgur.com/xVC00Jm.gif",
              "http://imgur.com/EPRrDwX.gif",
              "http://imgur.com/1OwuIEF.gif",
              "http://imgur.com/HKNX3Ef.gif",
              "https://i.imgur.com/ciY4s7u.gif",
              "http://imgur.com/ktnqKzu.gif",
              "http://imgur.com/nrR9mhI.gif",
              "http://imgur.com/TakfoBu.gif",
              "http://imgur.com/BBady9H.gif",
              "http://imgur.com/g48bSFg.gif",
              "https://78.media.tumblr.com/f1cca7e16b462d1a2bc0d0b02f6be69f/tumblr_pb70hiu14u1rat4opo1_540.gif",
              "https://78.media.tumblr.com/89b4e8982ab32402437a4ba962cdbccd/tumblr_pb70k2bgQv1rat4opo1_540.gif",
              "http://imgur.com/9RQwFJ8.gif",
              "http://imgur.com/cdp3k6Z.gif",
              "http://imgur.com/9JkP9IU.gif",
              "http://imgur.com/3VYSYo2.gif",
              "http://imgur.com/PfIlPib.gif",
              "http://imgur.com/IEsYhsD.gif",
              "https://78.media.tumblr.com/640e836171e842ce4c25008bce902e7f/tumblr_pb70i0bRZw1rat4opo1_540.gif",
              "http://imgur.com/RsqgcOH.gif",
              "http://imgur.com/91S8udv.gif",
              "http://imgur.com/QVAjVGr.gif",
              "http://imgur.com/jRRxBkX.gif",
              "http://imgur.com/8Af0jzL.gif",
              "http://imgur.com/ZDqAqW2.gif",
              "http://imgur.com/h0jA48J.gif",
              "http://imgur.com/I8xtOpS.gif",
              "http://imgur.com/aekkgaO.gif",
              "http://imgur.com/YQAViVA.gif",
              "http://imgur.com/6Rrx4Da.gif",
              "http://imgur.com/nKLFIPA.gif",
              "http://imgur.com/64OTkb8.gif",
              "http://imgur.com/ojwTlQV.gif",
              "http://imgur.com/Z3fjwtW.gif",
              "https://78.media.tumblr.com/40b3345aa32031ffeb002ae14a8cc4d3/tumblr_pb70ox60xX1rat4opo1_540.gif",
              "http://imgur.com/5ovYgZE.gif",
              "http://imgur.com/1OwuIEF.gif",
              "http://imgur.com/Ur3Wop7.gif",
              "http://imgur.com/wkry3ki.gif",
              "http://imgur.com/T2ERCvd.gif",
              "http://imgur.com/n7pdny3.gif",
              "http://imgur.com/LJPAtHc.gif",
              "http://imgur.com/MNkM9wj.gif",
              "http://imgur.com/FuCCqO8.gif",
              "http://imgur.com/unoqsMQ.gif",
              "https://78.media.tumblr.com/614d44752be844b764cdcdd0481e08da/tumblr_pb70i07Opf1rat4opo1_540.gif",
              "https://78.media.tumblr.com/ec24e462b150e21455aed778236c8af3/tumblr_pb70otmDpg1rat4opo1_540.gif",
              "http://imgur.com/LRWfHbl.gif",
              "http://imgur.com/uRsLAfC.gif",
              "http://imgur.com/ogJAbZN.gif",
              "https://78.media.tumblr.com/40b3345aa32031ffeb002ae14a8cc4d3/tumblr_pb70ox60xX1rat4opo1_540.gif",
              "http://imgur.com/0JrgzVe.gif",
              "https://78.media.tumblr.com/a81d0e87a7e0fdae215cdec0ce208020/tumblr_pb70owoO7Z1rat4opo1_540.gif",
              "http://imgur.com/DWIdGA1.gif",
              "https://s.smutty.com/media_smutty_2/d/a/n/n/b/dannyd-e1ftp-a4f96b.gif",
              "https://steamusercontent-a.akamaihd.net/ugc/253717471689344250/2B930AE15B04B59B82B768BC7D0A9ED9B87E888A/",
              "https://choualbox.com/Img/20120803165502O.gif",
              "https://www.sluggn.com/stream.php?type=1&file=WlRFMVl6aGtNRGc1WWpjNU1qTTJNakU1TkRNMk5EVXhPV05oWkRoaU5XTXRNUzVuYVdaQVFHMWxaR2xo",
              "https://www.bg-sex.net/wall_photos/d87f960eccacb7dd64b901c039f066198894569a.gif",
              "http://juicygif.com/albums/userpics/2015y/06/04/13/1/2471-amazing-butt-sex-vagina-animated-picture-with-a-fabulous-booty.gif",
              "https://images.sex.com/images/pinporn/2018/01/04/620/18895404.gif",
              "http://commentseduire.net/wp-content/uploads/2016/06/levrette-gif-32.gif",
              "https://78.media.tumblr.com/3dea2f923060e3093409c161cdc018ce/tumblr_n0cn9nxEmE1qaoeoqo1_500.gif",
              "http://teen-sex-photos.eu/wp-content/uploads/2016/02/tumblr_o13w4nOq5J1unjyrwo1_400.gif",
              "https://www.pornosexgif.org/wp-content/uploads/2015/11/Brazzers-Lesbian-porn-gif1.gif",
              "http://petite18.com/blog/wp-content/uploads/2017/01/joseline_kelly-porn.gif",
              "http://www.coquinetv.com/admin/uploads/articles/370411522961002.gif",
              "http://namethatpornstar.com/imagecache/NTPSbx2fqnn6dugd.gif",
              "https://dl.phncdn.com/gif/1467681.gif",
              "http://juicygif.com/albums/userpics/2015y/08/12/9/1/0734-brandi-love.gif",
              "http://juicygif.com/albums/userpics/2015y/04/14/2/1/7639-ill-do-whatever-you-want-as-long-as-you-keep-fucking-me-like-this.gif",
              "http://teen-sex-photos.eu/wp-content/uploads/2016/02/tumblr_nrc5zbqaCg1s15khio1_500.gif",
              "https://s.smutty.com/media_smutty/o/h/p/m/b/ohpmyn-emlz5-a77968.gif",
              "https://78.media.tumblr.com/52b9f81d19e046293ea744cadc883490/tumblr_of3206PopT1vokrano1_500.gif",
              "https://x.imagefapusercontent.com/u/mcpoptart/6945480/1515824649/bltumblr_omlrz2GV0I1qcqr0lo1_500.gif",
              "https://picture-post.com/images/2018/01/05/601jwk.gif",
              "http://hoty.pl/public/contents/a9a22f6e991fb15aae92c1725176fa1c.gif",
              "https://78.media.tumblr.com/a4d36f24905d64cd48926068e387d9b2/tumblr_ns75etHdxF1tpse54o1_500.gif",
              "http://gif.pornomass.com/uploads/photo/original/583-sesso-galleria-porno-gif.gif",
              "https://78.media.tumblr.com/763f602a8b10864be069c9d8522b8177/tumblr_ooamlePtwe1ua2qalo6_640.gif",
              "http://68.media.tumblr.com/4efd519044f59a5d968c1469a1a98dad/tumblr_ncouiw7oHF1tvcgb5o1_500.gif",
              "https://dl.phncdn.com/gif/4499151.gif",
              "https://images.sex.com/images/pinporn/2016/02/25/620/15079427.gif",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVOZ45nC0kb_fpmlCAprXZO57fEQgc270dJAxixy3IpexC8MMG",
              "https://78.media.tumblr.com/240c32295a72e84f70ed3c37d65f4122/tumblr_n5zqx8124F1rdbuixo6_r1_400.gif",
              "https://images.sex.com/images/pinporn/2018/01/20/300/18980147.gif",
              "http://namethatpornstar.com/imagecache/NTPS30mzmqdptznf.gif",
              "https://i.imgur.com/fCAtScR.jpg",
              "https://78.media.tumblr.com/9034af3d0688a4c7d709ebad4aef37f5/tumblr_n5zrljYtoS1rdbuixo8_400.gif",
              "https://78.media.tumblr.com/26c1668c6a0ae85bf369a57e4423fc49/tumblr_myc4o7fjoO1sjo6cco5_500.gif",
              "https://static-ca-cdn.eporner.com/photos/155332.gif",
              "http://namethatpornstar.com/imagecache/NTPS9np5hgodjwwf.gif",
              "http://trio-sexe.com/wp-content/uploads/trois-amateurs-43-de-trio-sexe-en-gif.gif",
              "https://i.imgur.com/xjSY7JV.jpg",
              "https://images.sex.com/images/pinporn/2018/04/28/300/19418420.gif",
              "https://images.sex.com/images/pinporn/2018/06/05/620/19567902.gif",
              "https://images.sex.com/images/pinporn/2013/09/12/620/3637489.gif",
              "https://78.media.tumblr.com/6e4f88565a04b84e1848d99fd962323e/tumblr_ndunriQIWV1r4qi3to1_500.gif",
              "https://the-sex.me/wp-content/uploads/2015/02/Little-Caprice-gets-fucked-on-the-table.gif",
              "https://the-sex.me/wp-content/uploads/2014/10/Beautiful-brunette-Beata-Undine-enjoy-in-sex-with-boyfriend.gif",
              "https://i2.wp.com/www.shahvatsaraa.com/wp-content/uploads/2018/02/%D8%A2%D9%86%D8%A7%D9%84-%D8%B3%DA%A9%D8%B3-%D8%AE%D9%81%D9%86-%D8%A8%D8%A7-%D8%B3%D8%B1%D8%B9%D8%AA-%D8%A8%D8%A7%D9%84%D8%A7-2.gif?resize=446%2C258",
              "http://teen-sex-photos.eu/wp-content/uploads/2017/02/tumblr_nou5a7pdJm1u5mg1to1_500.gif",
              "https://i.imgur.com/EN5za67.gif",
              "http://prsm.cdnmex.com/wp-content/uploads/2017/05/iri-memeliye-onlu-arkali.gif",
              "https://x.imagefapusercontent.com/u/Eggsalad1/3415140/2024608577/1335007802036.gif",
              "http://speqar.tk/wp-content/uploads/2016/12/13646104.gif",
              "https://i.imgur.com/nPDNSJ9.gif",
              "http://i.imgur.com/x5Lhpa5.gif",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo2lBjVrgF0X41RWRQTxYOaiOwzZ1nLS1RDF2RG-mBaXabBjGQ",
              "http://girlcontent.com/wp-content/uploads/2012/08/photo-Brunette-Masturbation-Teen-Toys-708503244.gif",
              "http://1porngifs.com/wp-content/uploads/2017/03/tumblr_o6evq6sAYa1uora7fo2_500.gif",
              "http://sexwall.me/wp-content/uploads/2013/09/1028436-caprice.gif",
              "http://juicygif.com/albums/userpics/2014y/06/16/6/1/0724-fucking-on-the-kitchen-counter.gif",
              "https://78.media.tumblr.com/cbc4d1bee2ef10daf4ff18e9f6646241/tumblr_n9l1a055PJ1rbii5ro1_500.gif",
              "https://78.media.tumblr.com/eda31213e04319b4834e2a1203e0193a/tumblr_nu0xmzvYwp1tg9050o1_640.gif",
              "https://static-ca-cdn.eporner.com/photos/105388.gif",
              "https://dl.phncdn.com/gif/3772581.gif",
              "https://i0.wp.com/porngifsforadults.com/wp-content/uploads/2017/01/Dillion-Harper-Giant-Toy-Giant-Cock-Tiny4K-Doggystyle-Gif.gif",
              "http://sexwall.me/wp-content/uploads/2013/09/little-caprice-cumshot.gif"
          ];
  
          let reponse = (replys[Math.floor(Math.random() * replys.length)])
          var bembed = new Discord.RichEmbed()
          .setColor("#FE9A2E")
          .setAuthor(message.author.username, message.author.avatarURL)
          .setDescription("Porn :point_right: :ok_hand: :sweat_drops:")
          .setImage(reponse)
          .setFooter("Atow&")
          .setTimestamp()
       message.channel.sendEmbed(bembed)
       console.log("Commande &porn effectuée !")
  
  }

  if(message.content === prefix + "help"){
    if(message.channel.type=="dm")return;
    var embed = new Discord.RichEmbed()
    .setThumbnail("https://cdn.discordapp.com/avatars/465506288907059200/18b877ee8efac4b1e902117e01b1472d.png?size=256")
   .setTitle("Pade d'aide \`&help\`")
   .setColor("#FE9A2E")
   .setDescription("__Pour plus d'informations sur une commande, veuillez faire :__ &help \`<commande>\`\n\n__Exemple :__ &help \`help\`\n")
   .addField("**Modération**", "\`&ban\` / \`&unban\` / \`&kick\` / \`&clearall\` / \`&purge\`")
   .addField("**Utile**", "\`&help\` / \`&hhelp\` / \`&serveurinfo\` / \`&botinfo\` / \`&userinfo\` / \`&membercount\` / \`&guilds\` / \`&superpub\` / \`&google\` / \`&youtube\` / \`&fortnite\` / \`&osu\` / \`&avatar\` / \`&pings\` / \`&afk\` / \`&emojis\`")
   .addField("**Fun**", "\`&8ball\` / \`&roll\` / \`&flip\` / \`&lucky\` / \`&rps\` / \`&virus\` / \`&say\`")
   .addField("**Nsfw**", "\`&porn\`")
   .addField("**Bot**", "\`&invite\`")
   .setFooter("Atow&")
   .setTimestamp()
   message.author.send(embed)
   message.channel.send(`${message.author}, la page d'aide t'a été envoyée en message pvivé ! :thumbsup:`)
   console.log("Commande &help effectuée !")
       }

       if(message.content === prefix + "hhelp"){
        var embed = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/avatars/465506288907059200/18b877ee8efac4b1e902117e01b1472d.png?size=256")
       .setTitle("Pade d'aide \`&help\`")
       .setColor("#FE9A2E")
       .setDescription("__Pour plus d'informations sur une commande, veuillez faire :__ &help \`<commande>\`\n\n__Exemple :__ &help \`help\`\n")
       .addField("**Modération**", "\`&ban\` / \`&unban\` / \`&kick\` / \`&clearall\` / \`&purge\`")
       .addField("**Utile**", "\`&help\` / \`&hhelp\` / \`&serveurinfo\` / \`&botinfo\` / \`&userinfo\` / \`&membercount\` / \`&guilds\` / \`&superpub\` / \`&google\` / \`&youtube\` / \`&fortnite\` / \`&osu\` / \`&avatar\` / \`&pings\` / \`&afk\` / \`&emojis\`")
       .addField("**Fun**", "\`&8ball\` / \`&roll\` / \`&flip\` / \`&lucky\` / \`&rps\` / \`&virus\` / \`&say\`")
       .addField("**Nsfw**", "\`&porn\`")
       .addField("**Bot**", "\`&invite\`")
       .setFooter("Atow&")
       .setTimestamp()
       message.channel.send(embed)
       console.log("Commande &help effectuée !")
           }

           if(message.content === "&help afk"){
            let purgeemebed = new Discord.RichEmbed()
            .setColor("#FE9A2E")
            .setTitle('Commande : &afk')
            .addField("Description :", "Permet de prévenir votre absence sur le serveur")
            .addField("Utilisation :", "&afk")
            .addField("Exemple :", "&afk")
            .setFooter("Atow&")
            .setTimestamp()
            message.channel.send(purgeemebed);
            }

            if(message.content === "&help avatar"){
              let purgeemebed = new Discord.RichEmbed()
              .setColor("#FE9A2E")
              .setTitle('Commande : &avatar')
              .addField("Description :", "Permet de voir l'avatar d'un utilisateur")
              .addField("Utilisation :", "&avatar <pseudo>")
              .addField("Exemple :", "&avatar @joueur#0000")
              .setFooter("Atow&")
              .setTimestamp()
              message.channel.send(purgeemebed);
              }

              if(message.content === "&help pings"){
                let purgeemebed = new Discord.RichEmbed()
                .setColor("#FE9A2E")
                .setTitle('Commande : &pings')
                .addField("Description :", "Permet de voir son pings")
                .addField("Utilisation :", "&pings")
                .addField("Exemple :", "&pings")
                .setFooter("Atow&")
                .setTimestamp()
                message.channel.send(purgeemebed);
                }

                if(message.content === "&help emojis"){
                  let purgeemebed = new Discord.RichEmbed()
                  .setColor("#FE9A2E")
                  .setTitle('Commande : &emojis')
                  .addField("Description :", "Permet de voir les emojis sur le serveur")
                  .addField("Utilisation :", "&emojis")
                  .addField("Exemple :", "&emojis")
                  .setFooter("Atow&")
                  .setTimestamp()
                  message.channel.send(purgeemebed);
                  }

           if(message.content === "&help google"){
            let purgeemebed = new Discord.RichEmbed()
            .setColor("#FE9A2E")
            .setTitle('Commande : &google')
            .addField("Description :", "Permet de faire une recherche sur google")
            .addField("Utilisation :", "&google <text>")
            .addField("Exemple :", "&google Comment créer un bot discord ?")
            .setFooter("Atow&")
            .setTimestamp()
            message.channel.send(purgeemebed);
            }

            if(message.content === "&help youtube"){
              let purgeemebed = new Discord.RichEmbed()
              .setColor("#FE9A2E")
              .setTitle('Commande : &youtube')
              .addField("Description :", "Permet de voir le compte youtube d'un l'utilisateur")
              .addField("Utilisation :", "&youtube <pseudo>")
              .addField("Exemple :", "&youtube Cyprien")
              .setFooter("Atow&")
              .setTimestamp()
              message.channel.send(purgeemebed);
              }

              if(message.content === "&help fortnite"){
                let purgeemebed = new Discord.RichEmbed()
                .setColor("#FE9A2E")
                .setTitle('Commande : &fortnite')
                .addField("Description :", "Permet de voir le compte fortnite d'un l'utilisateur")
                .addField("Utilisation :", "&fortnite <pseudo>")
                .addField("Exemple :", "&fortnite Atow")
                .setFooter("Atow&")
                .setTimestamp()
                message.channel.send(purgeemebed);
                }

                if(message.content === "&help osu"){
                  let purgeemebed = new Discord.RichEmbed()
                  .setColor("#FE9A2E")
                  .setTitle('Commande : &osu')
                  .addField("Description :", "Permet de voir le compte osu d'un l'utilisateur")
                  .addField("Utilisation :", "&osu <pseudo>")
                  .addField("Exemple :", "&osu Atow")
                  .setFooter("Atow&")
                  .setTimestamp()
                  message.channel.send(purgeemebed);
                  }

           if(message.content === "&help superpub"){
            let purgeemebed = new Discord.RichEmbed()
            .setColor("#FE9A2E")
            .setTitle('Commande : &superpub')
            .addField("Description :", "Permet de pub dans tous les serveurs avec le salon super-pub où se trouve le bot")
            .addField("Utilisation :", "&superpub <PubServer>")
            .addField("Exemple :", "&superpub Hello, voici mon serveur https://discord.gg/XXXXX/")
            .setFooter("Atow&")
            .setTimestamp()
            message.channel.send(purgeemebed);
            }

           if(message.content === "&help guilds"){
            let purgeemebed = new Discord.RichEmbed()
            .setColor("#FE9A2E")
            .setTitle('Commande : &guilds')
            .addField("Description :", "Savoir sur combien et les noms des serveurs où se trouve le bot")
            .addField("Utilisation :", "&guilds")
            .addField("Exemple :", "&guilds")
            .setFooter("Atow&")
            .setTimestamp()
            message.channel.send(purgeemebed);
            }

           if(message.content === "&help membercount"){
            let purgeemebed = new Discord.RichEmbed()
            .setColor("#FE9A2E")
            .setTitle('Commande : &membercount')
            .addField("Description :", "Avoir les informations des joueurs sur le serveur")
            .addField("Utilisation :", "&membercount")
            .addField("Exemple :", "&membercount")
            .setFooter("Atow&")
            .setTimestamp()
            message.channel.send(purgeemebed);
            }

           if(message.content === "&help userinfo"){
            let purgeemebed = new Discord.RichEmbed()
            .setColor("#FE9A2E")
            .setTitle('Commande : &userinfo')
            .addField("Description :", "Avoir les informations sur celui qui effectue la commande")
            .addField("Utilisation :", "&userinfo")
            .addField("Exemple :", "&userinfo")
            .setFooter("Atow&")
            .setTimestamp()
            message.channel.send(purgeemebed);
            }

           if(message.content === "&help botinfo"){
            let purgeemebed = new Discord.RichEmbed()
            .setColor("#FE9A2E")
            .setTitle('Commande : &botinfo')
            .addField("Description :", "Avoir les informations sur le bot")
            .addField("Utilisation :", "&botinfo")
            .addField("Exemple :", "&botinfo")
            .setFooter("Atow&")
            .setTimestamp()
            message.channel.send(purgeemebed);
            }

           if(message.content === "&help serverinfo"){
            let purgeemebed = new Discord.RichEmbed()
            .setColor("#FE9A2E")
            .setTitle('Commande : &serverinfo')
            .addField("Description :", "Avoir les informations du serveur")
            .addField("Utilisation :", "&serverinfo")
            .addField("Exemple :", "&serverinfo")
            .setFooter("Atow&")
            .setTimestamp()
            message.channel.send(purgeemebed);
            }

           if(message.content === "&help hhelp"){
            let purgeemebed = new Discord.RichEmbed()
            .setColor("#FE9A2E")
            .setTitle('Commande : &hhelp')
            .addField("Description :", "Avoir la page d'aide sur le serveur")
            .addField("Utilisation :", "&hhelp")
            .addField("Exemple :", "&hhelp")
            .setFooter("Atow&")
            .setTimestamp()
            message.channel.send(purgeemebed);
            }

           if(message.content === "&help help"){
            let purgeemebed = new Discord.RichEmbed()
            .setColor("#FE9A2E")
            .setTitle('Commande : &help')
            .addField("Description :", "Avoir la page d'aide en message privé")
            .addField("Utilisation :", "&help")
            .addField("Exemple :", "&help")
            .setFooter("Atow&")
            .setTimestamp()
            message.channel.send(purgeemebed);
            }

           if(message.content === "&help say"){
            let purgeemebed = new Discord.RichEmbed()
            .setColor("#FE9A2E")
            .setTitle('Commande : &say')
            .addField("Description :", "Faire parler le bot")
            .addField("Utilisation :", "&say <txt>")
            .addField("Exemple :", "&say Hello")
            .setFooter("Atow&")
            .setTimestamp()
            message.channel.send(purgeemebed);
            }

           if(message.content === "&help virus"){
            let purgeemebed = new Discord.RichEmbed()
            .setColor("#FE9A2E")
            .setTitle('Commande : &virus')
            .addField("Description :", "Injecte un faux virus")
            .addField("Utilisation :", "&virus")
            .addField("Exemple :", "&virus")
            .setFooter("Atow&")
            .setTimestamp()
            message.channel.send(purgeemebed);
            }

           if(message.content === "&help rps"){
            let purgeemebed = new Discord.RichEmbed()
            .setColor("#FE9A2E")
            .setTitle('Commande : &rps')
            .addField("Description :", "Jouer à pierre,feuile,ciseaux")
            .addField("Utilisation :", "&rps <pierre/feuille/ciseaux>")
            .addField("Exemple :", "&rps pierre")
            .setFooter("Atow&")
            .setTimestamp()
            message.channel.send(purgeemebed);
            }

           if(message.content === "&help lucky"){
            let purgeemebed = new Discord.RichEmbed()
            .setColor("#FE9A2E")
            .setTitle('Commande : &lucky')
            .addField("Description :", "Dit ton nombre chanceux")
            .addField("Utilisation :", "&lucky")
            .addField("Exemple :", "&lucky")
            .setFooter("Atow&")
            .setTimestamp()
            message.channel.send(purgeemebed);
            }

           if(message.content === "&help flip"){
            let purgeemebed = new Discord.RichEmbed()
            .setColor("#FE9A2E")
            .setTitle('Commande : &flip')
            .addField("Description :", "Jouer à pile ou face")
            .addField("Utilisation :", "&flip")
            .addField("Exemple :", "&flip")
            .setFooter("Atow&")
            .setTimestamp()
            message.channel.send(purgeemebed);
            }

           if(message.content === "&help roll"){
            let purgeemebed = new Discord.RichEmbed()
            .setColor("#FE9A2E")
            .setTitle('Commande : &roll')
            .addField("Description :", "Lancer un dé")
            .addField("Utilisation :", "&roll")
            .addField("Exemple :", "&roll")
            .setFooter("Atow&")
            .setTimestamp()
            message.channel.send(purgeemebed);
            }

           if(message.content === "&help 8ball"){
            let purgeemebed = new Discord.RichEmbed()
            .setColor("#FE9A2E")
            .setTitle('Commande : &8ball')
            .addField("Description :", "Répond aux questions")
            .addField("Utilisation :", "&8ball <question>")
            .addField("Exemple :", "&8ball Je suis riche ?")
            .setFooter("Atow&")
            .setTimestamp()
            message.channel.send(purgeemebed);
            }

           if(message.content === "&help purge"){
            let purgeemebed = new Discord.RichEmbed()
            .setColor("#FE9A2E")
            .setTitle('Commande : &purge')
            .addField("Description :", "Voir des gifs nsfw")
            .addField("Utilisation :", "&porn")
            .addField("Exemple :", "&porn")
            .setFooter("Atow&")
            .setTimestamp()
            message.channel.send(purgeemebed);
            }

           if(message.content === "&help invite"){
            let purgeemebed = new Discord.RichEmbed()
            .setColor("#FE9A2E")
            .setTitle('Commande : &infite')
            .addField("Description :", "Inviter le bot sur sur un serveur, rejoindre le serveur officiel")
            .addField("Utilisation :", "&invite")
            .addField("Exemple :", "&invite")
            .setFooter("Atow&")
            .setTimestamp()
            message.channel.send(purgeemebed);
            }

           if(message.content === "&help purge"){
            let purgeemebed = new Discord.RichEmbed()
            .setColor("#FE9A2E")
            .setTitle('Commande : &purge')
            .addField("Description :", "Enlever un certain nombre de messages")
            .addField("Utilisation :", "&purge <amount>")
            .addField("Exemple :", "&purge 50")
            .setFooter("Atow&")
            .setTimestamp()
            message.channel.send(purgeemebed);
            }

           if(message.content === "&help clearall"){
            let purgeemebed = new Discord.RichEmbed()
            .setColor("#FE9A2E")
            .setTitle('Commande : &clearall')
            .addField("Description :", "Enlever 100 messages")
            .addField("Utilisation :", "&clearall")
            .addField("Exemple :", "&clearall")
            .setFooter("Atow&")
            .setTimestamp()
            message.channel.send(purgeemebed);
            }

           if(message.content === "&help kick"){
            let purgeemebed = new Discord.RichEmbed()
            .setColor("#FE9A2E")
            .setTitle('Commande : &kick')
            .addField("Description :", "Expulser un utilisateur du serveur")
            .addField("Utilisation :", "&kick <pseudo>")
            .addField("Exemple :", "&kick @joueur#0000 spam")
            .setFooter("Atow&")
            .setTimestamp()
            message.channel.send(purgeemebed);
            }

           if(message.content === "&help unban"){
            let purgeemebed = new Discord.RichEmbed()
            .setColor("#FE9A2E")
            .setTitle('Commande : &unban')
            .addField("Description :", "Debannir un utilisateur du serveur")
            .addField("Utilisation :", "&unban <id>")
            .addField("Exemple :", "&unban 448863647160315648 spam")
            .setFooter("Atow&")
            .setTimestamp()
            message.channel.send(purgeemebed);
            }

           if(message.content === "&help ban"){
            let purgeemebed = new Discord.RichEmbed()
            .setColor("#FE9A2E")
            .setTitle('Commande : &ban')
            .addField("Description :", "Bannir un utilisateur du serveur")
            .addField("Utilisation :", "&ban <pseudo>")
            .addField("Exemple :", "&ban @joueur#0000 spam")
            .setFooter("Atow&")
            .setTimestamp()
            message.channel.send(purgeemebed);
            }

       if(message.content === prefix + "guilds"){
         let gembed = new Discord.RichEmbed()
         .setTitle("Guilds")
         .setColor("#FE9A2E")
         .addField("Nombre", bot.guilds.size)
         .addField("Liste des serveurs où je suis", bot.guilds.map(g=>g.name).join(' / '))
         .setFooter("Atow&")
         .setTimestamp()
        message.channel.send(gembed)
        console.log("Commande &guilds effectuée !")
       }


       if (message.author.bot) return;
       if(message.channel.type=="dm")return;
       if (!message.content.startsWith(prefix))return
       let args = message.content.split(' ').slice(1)  
        command = message.content.split(' ')[0];
           command = command.slice(prefix.length)
         
         if (command === "say"){
         message.channel.send(args.join(' '));
         console.log(`Commande &say effectuée !`)
         }

  if(membres_afk.includes(message.author)) {
    message.reply("n'est plus afk ! :on:")
    membres_afk.remove(message.author);
  }

  if (message.content === prefix + "afk"){
    message.reply('est maintenant afk ! :zzz:');
    membres_afk.push(message.author);
  }

  if(message.content === prefix + 'pings'){
    let pingEmbed = new Discord.RichEmbed()
    .setColor("#FE9A2E")
    .setTitle('Pings')
      .setDescription(`**${message.author.tag}** | :ping_pong: Pong : ${bot.ping}ms`)
      .setFooter("Atow&")
      .setTimestamp()
  message.channel.send(pingEmbed)
      .catch(console.error);
  
  }
  
  if (command === 'avatar'){
    let user = message.mentions.users.first() || message.author;
  let AvatarEmbed = new Discord.RichEmbed()
  .setColor("#FE9A2E")
    .setAuthor(`Avatar de : ${user.username}`)
    .setImage(user.displayAvatarURL)
    .setFooter("Atow&")
    .setTimestamp()
    message.channel.send(AvatarEmbed)
    console.log(`Commande &avatar effectuée !`)
  }

  if(message.content === prefix + 'rps'){
    var choice = args[0];
      if (choice == "papier" || choice == "p") {
        var numb = Math.floor(Math.random() * 100);
        if (numb <= 50) {
          var choice2 = "papier";
        } else if (numb > 50) {
          var choice2 = "pierre";
        } else {
          var choice2 = "ciseaux";
        }
        if (choice2 == "ciseaux") {
          message.channel.sendEmbed
          var response = "J'ai choisi **ciseaux** ! :v: J'ai gagné !"
        } else if (choice2 == "papier") {
          var response = "J'ai choisi **papier** ! :hand_splayed: Egalité !"
        } else {
          var response = "J'ai choisi **pierre** ! :punch: Tu as gagné !"
        }
        message.channel.send(response);
      } else if (choice == "pierre" || choice == "r") {
        var numb = Math.floor(Math.random() * 100);
        if (numb <= 50) {
          var choice2 = "papier";
        } else if (numb > 50) {
          var choice2 = "pierre";
        } else {
          var choice2 = "ciseaux";
        }
        if (choice2 == "papier") {
          var response = "J'ai choisi **papier** ! :hand_splayed: J'ai gagné !"
        } else if (choice2 == "pierre") {
          var response = "J'ai choisi **pierre** ! :punch: Egalité !"
        } else {
          var response = "J'ai choisi **ciseaux** ! :v: Tu as gagné !"
        }
        message.channel.send(response);
      } else if (choice == "ciseaux" || choice == "s") {
        var numb = Math.floor(Math.random() * 100);
        if (numb <= 50) {
          var choice2 = "papier";
        } else if (numb > 50) {
          var choice2 = "pierre";
        } else {
          var choice2 = "ciseaux";
        }
        if (choice2 == "pierre") {
          var response = "J'ai choisi **papier** ! :hand_splayed: Tu as gagné !"
        } else if (choice2 == "ciseaux") {
          var response = "J'ai choisi **ciseaux** ! :v: Egalité !"
        } else {
          var response = "J'ai choisi **pierre** ! :punch: J'ai gagné !"
        }
        message.channel.send(response);
      } else {
        message.channel.send(`:x: *Vous avez mal effectué la commande.* \`${prefix}rps\` <pierre|papier|ciseaux>`);
      }
    }

  if (message.content === prefix + 'virus'){
    message.delete()
    message.channel.sendMessage('``virus.exe...``')
      .then(msg => {
  
        msg.edit("``[▓▓▓                    ] / virus.exe Packing files.``");

        msg.edit("``[▓▓▓                    ] / virus.exe Packing files.``");

        msg.edit("``[▓▓▓                    ] / virus.exe Packing files.``");

        msg.edit("``[▓▓▓                    ] / virus.exe Packing files.``");
  
        msg.edit("``[▓▓▓▓▓▓▓                ] - virus.exe Packing files..``");

        msg.edit("``[▓▓▓▓▓▓▓                ] - virus.exe Packing files..``");

        msg.edit("``[▓▓▓▓▓▓▓                ] - virus.exe Packing files..``");
  
        msg.edit("``[▓▓▓▓▓▓▓▓▓▓▓▓           ] \ virus.exe Packing files..``");
        
        msg.edit("``[▓▓▓▓▓▓▓▓▓▓▓▓           ] \ virus.exe Packing files..``");
  
        msg.edit("``[▓▓▓▓▓▓▓▓▓▓▓▓▓▓         ] | virus.exe Packing files..``");

        msg.edit("``[▓▓▓▓▓▓▓▓▓▓▓▓▓▓         ] | virus.exe Packing files..``");

        msg.edit("``[▓▓▓▓▓▓▓▓▓▓▓▓▓▓         ] | virus.exe Packing files..``");
  
        msg.edit("``[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓      ] / virus.exe Packing files..``");
  
        msg.edit("``[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   ] - virus.exe Packing files..``");

        msg.edit("``[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   ] - virus.exe Packing files..``");

        msg.edit("``[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   ] - virus.exe Packing files..``");
  
        msg.edit("``[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] \ virus.exe Packing files..``");

        msg.edit("``[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] \ virus.exe Packing files..``");

        msg.edit("``[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] \ virus.exe Packing files..``");

        msg.edit("``[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] \ virus.exe Packing files..``");

        msg.edit("``Successfully downloaded virus.exe``");

        msg.edit("``Successfully downloaded virus.exe``");

        msg.edit("``Successfully downloaded virus.exe``");

        msg.edit("``Successfully downloaded virus.exe``");

        msg.edit("``Successfully downloaded virus.exe``");

        msg.edit("``Injecting virus.   |``");

        msg.edit("``Injecting virus..  /``");

        msg.edit("``Injecting virus... -``");

        msg.edit("``Injecting virus.   |``");

        msg.edit("``Injecting virus..  /``");

        msg.edit("``Injecting virus... -``");

        msg.edit("``Injecting virus.   |``");

        msg.edit("``Injecting virus..  /``");

        msg.edit("``Injecting virus... -``");

        msg.edit("``Injecting virus.   |``");

        msg.edit("``Injecting virus..  /``");

        msg.edit("``Injecting virus... -``");

        msg.edit("``Successfully Injected virus.exe``");

      })
    }

  if (command === 'kick'){  
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply("vous n'avez pas la permission d'utiliser cette commande ! :no_entry:");
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member) return message.reply("veuillez mentionner l'utilisateur à kicker ! :no_entry:")
    if (!member.kickable) return message.reply("vous ne pouvez pas kicker un membre avec un rôle supérieur ou égale à vous ! :no_entry:")
    
    let reason = args.slice(1).join(' ');
    
    member.kick(reason)
    .catch(error => message.channel.send(`Désolé, vous ne pouvez pas kicker car une erreur à eu lieu. :no_entry: **erreur :** ${error}`));
    
    let kickEmbed = new Discord.RichEmbed()
    .setColor("#FE9A2E")
    .setTitle(':hammer: **KICKED** :hammer:')
    .setDescription(`${member.user.tag} a été kické avec la raison : **${reason}**`)
    .setFooter("Atow&")
    .setTimestamp()
    message.channel.send(kickEmbed)
    console.log("Commande &kick effectuée !")
    }
    
    if (command === 'ban'){  
      if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply("vous n'avez pas la permission d'utiliser cette commande ! :no_entry:");
      let member = message.mentions.members.first();
      if (!member) return message.reply("veuillez mentionner l'utilisateur à bannir ! :no_entry:");
      if (!member.bannable) return message.reply("vous ne pouvez pas bannir un membre avec un rôle supérieur ou égale à vous ! :no_entry:")
      
      let reason = args.slice(1).join(' ');
      
      member.ban(reason)
      .catch(error => message.channel.send(`Désolé, vous ne pouvez pas bannir car une erreur à eu lieu. :no_entry: **erreur :** ${error}`));
      
      let BanEmbed = new Discord.RichEmbed()
      .setColor("#FE9A2E")
      .setTitle(':hammer: **BANNED** :hammer:')
      .setDescription(`${member.user.tag} a été banni avec la raison : **${reason}**`)
      .setFooter("Atow&")
      .setTimestamp()
      message.channel.send(BanEmbed)
      console.log("Commande &ban effectuée !")
      }

if(command === "unban"){
if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply("vous n'avez pas la permission d'utiliser cette commande ! :no_entry:");
      const reason = args.slice(1).join(' ');
    bot.unbanReason = reason;
    bot.unbanAuth = message.author;
    const user = args[0];
    if (reason.length < 1) return message.reply('veuillez donner une raison ! :no_entry:');
    if (!user) return message.reply("veuillez entrer l'id de l'utilisateur à unban ! :no_entry:").catch(console.error);
    message.guild.unban(user);
    message.reply(`vous avez unban l'utilisateur ${user} :white_check_mark:`)

    console.log("Commande &unban effectuée !")
}


if(message.content === prefix + 'report'){
  var rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if (!rUser) return message.reply("veuillez mentionner l'utilisateur à report ! :no_entry:");
  var rrreason = args.join(" ").slice();
  
  let day = message.createdAt.getDate()
  let month = 1 + message.createdAt.getMonth()
  let year = message.createdAt.getFullYear()
  let hour = message.createdAt.getHours()
  let min = message.createdAt.getMinutes()
  var aideEmbed = new Discord.RichEmbed()
  .setColor("#FE9A2E")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setThumbnail(message.author.avatarURL)
  .addField("L'utilisateur report :", `${rUser} avec ID: ${rUser.id}`)
  .addField("Report par :", `${message.author} avec ID: ${message.author.id}`)
  .addField("Channel :", message.channel)
  .addField("Date du report :",`${day}/${month}/${year} à ${hour}:${min}`)
  .addField("Raison :", `**${rrreason}**`)
  .setFooter("Atow&")
  .setTimestamp()
  
  var aideschannel = message.guild.channels.find(`name`, "reports");
  if (!aideschannel) return message.reply('veuillez créer un salon reports ! :no_entry:');
  
  
  message.delete().catch(O_o => { });
  aideschannel.send(aideEmbed);

  message.reply("l'utilisateur a bien été report ! :white_check_mark:")
  
  }

      if(message.content === prefix + 'clearall'){
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("vous n'avez pas la permission d'utiliser cette commande ! :no_entry:");
        message.channel.bulkDelete(100)
      .then(messages => console.log("Commande &clearall effectuée !"))
      .catch(console.error);
      }

      if(command === 'purge'){
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("vous n'avez pas la permission d'utiliser cette commande ! :no_entry:");
      if(isNaN(args[0])) return message.reply('&purge <amount>');
      message.channel.bulkDelete(args[0])
      .then(messages => console.log("Commande &purge effectuée !"))
        .catch(console.error);
      }

      if(message.content === prefix + 'lucky'){
        var LuckNumber = Math.floor((Math.random() * 12000) + 0.120);
        const numEmb = new Discord.RichEmbed()
        .setColor("#FE9A2E")
        .addField("Lucky de :", `${message.author}`)
        .addField('Et votre nombre chanceux est...', `${LuckNumber} !`)
        .setFooter("Atow&")
         .setTimestamp()
        message.channel.send({embed: numEmb})
        console.log("Commande &lucky effectuée !")
      
      }

      if(message.content === prefix + 'flip') {
        let flipEmbed = new Discord.RichEmbed()
        .setColor("#FE9A2E")
        .setTitle('Pile ou Face ?')
        .addField("Pile ou Face par :", `${message.author}`)
        .addField("Réponse :", `**${Math.floor(Math.random() * 2) == 0 ? "Face" : "Pile"}** !`)
        .setFooter("Atow&")
        .setTimestamp()
        message.channel.send(flipEmbed)
        .catch(console.error);
        console.log("Commande flip effectuée !")
      }

  if(message.content === prefix + "invite"){
    let inviteembed = new Discord.RichEmbed()
    .setColor("#FE9A2E")
    .setAuthor("Atow&", "https://cdn.discordapp.com/avatars/465506288907059200/18b877ee8efac4b1e902117e01b1472d.png?size=256")
    .setThumbnail("https://cdn.discordapp.com/avatars/465506288907059200/18b877ee8efac4b1e902117e01b1472d.png?size=256")
    .addField("Inviter le bot", "https://discordapp.com/oauth2/authorize?client_id=465506288907059200&scope=bot&permissions=8")
    .addField("Atow& Support", "https://discord.gg/j7xBjgK")
    .setFooter("Atow&")
    .setTimestamp()
    message.channel.send(inviteembed)
    console.log("Commande &invite effectuée !")
  }

  if(message.content === prefix + 'roll'){
    let replies = ["1", "2", "3", "4", "5", "6"];
    let result = Math.floor((Math.random() * replies.length));
  
    try {
        let newembed = new Discord.RichEmbed()
        .setColor("#FE9A2E")
            .setAuthor("Un dé a été lancé !")
            .addField("Dé lancé par :", `${message.author}`) 
            .addField("Réponse :", `**${replies[result]}** !`)
            .setFooter("Atow&")
            .setTimestamp()
  
        message.channel.send({
            embed: newembed
        });
    } catch (e) {
        console.log("Commande &roll effectuée !");
    }; // The try is because it errored when I didn't do it.
  };

  if (message.author.equals(bot.user)) return;
    
if (!message.content.startsWith(prefix)) return;


var argss = message.content.substring(prefix.length).split(" ");

switch (argss[0].toLowerCase()) {

        case "8ball":
    let argss = message.content.split(" ").slice(1);
    let tte = argss.join(" ")
    if (!tte){
        return message.reply("veuillez poser une question ! :no_entry:")};
    

        var replys = [
            "Oui",
            "Non",
            "Je sais pas",
            "Peut être",
            "C'est possible",
            "C'est impossible"
        ];

        let reponse = (replys[Math.floor(Math.random() * replys.length)])
        var bembed = new Discord.RichEmbed()
        .setColor("#FE9A2E")
        .setDescription(":8ball: 8ball")
        .addField("Question :", `${message.author}, ${tte}`)
        .addField("Réponse :", `**${reponse}** !`)
        .setFooter("Atow&")
        .setTimestamp()
     message.channel.sendEmbed(bembed)
     console.log("Commande &8ball effectuée !")

}

if(message.content.startsWith(prefix + "google")) {
  let google = args.slice().join('+');
  let googlembed = new Discord.RichEmbed()
  .setColor("#008744")
  .setAuthor("Google", "https://images-ext-2.discordapp.net/external/dVb3uElHyzLN4VY2XqR98CAr9lV-xSuYpiS1T_d2Qs8/https/cdn.discordapp.com/attachments/459211484484861952/459212971156045853/unknown.png")
  .setThumbnail("https://i.imgur.com/mSecJnk.gif?1")
  .addField("Résultat :", "https://www.google.com/search?q=" + `${google}`)
  .setFooter("Atow&")
  .setTimestamp()
message.channel.send(googlembed);
console.log("Commande &google effectuée !")
}
  
if(message.content.startsWith(prefix + "youtube")) {
  let youtube = args.slice().join('+');
  let youtubeembed = new Discord.RichEmbed()
  .setColor("#cc181e")
  .setAuthor("Youtube", "http://pngimg.com/uploads/youtube/youtube_PNG13.png")
  .setThumbnail("https://media.giphy.com/media/13Nc3xlO1kGg3S/source.gif")
  .addField("Résultat :", "https://www.youtube.com/results?search_query=" + `${youtube}`)
  .setFooter("Atow&")
  .setTimestamp()
message.channel.send(youtubeembed);
console.log("Commande &youtube effectuée !")
}

if(message.content.startsWith(prefix + "fortnite")){
  let fortnite = args.slice().join('+');
  let fortniteembed = new Discord.RichEmbed()
  .setColor("#8904B1")
  .setAuthor("Fortnite", "https://png.icons8.com/color/1600/fortnite.png")
  .setThumbnail("https://i.imgur.com/IMjozOI.jpg")
  .addField("Résultat :", "https://fortnitetracker.com/profile/search?q=" + `${fortnite}`)
  .setFooter("Atow&")
  .setTimestamp()
message.channel.send(fortniteembed);
  console.log("Commande &fortnite effectuée !")
}

if(message.content.startsWith(prefix + "osu")){
  let osu = args.slice().join('+');
  let osuembed = new Discord.RichEmbed()
  .setColor("#F5A9F2")
  .setAuthor("Osu", "https://media.senscritique.com/media/000007393665/source_big/Osu.png")
  .setThumbnail("https://media.senscritique.com/media/000007393665/source_big/Osu.png")
  .addField("Résultat :", "https://osu.ppy.sh/u/" + `${osu}`)
  .setFooter("Atow&")
  .setTimestamp()
message.channel.send(osuembed);
  console.log("Commande &osu effectuée !")
}

if(message.content === prefix + "emojis"){
  let emojis;
  if (message.guild.emojis.size === 0) emojis = `${message.author}, il n'y a aucun emojis sur le serveur ! :no_entry:`;
  else emojis = `**Emojis du serveur :** ${message.guild.name}\n${message.guild.emojis.map(e => e).join(' ')}`;
  message.channel.send(emojis);
  console.log("Commande &emojis effectuée !")
}

if(message.content.startsWith(prefix + "superpub")) {
  message.delete()
 var xo03 = message.content.split(" ").slice(1).join(" ")
var xo02 = message.guild.channels.find('name', 'super-pub')
if(message.channel.name == "super-pub") {
var embedvcs = new Discord.RichEmbed()
.setColor("#FE9A2E")
.addField("SuperPub par :", message.author.username)
.addField("Du serveur :", message.guild.name)
.addField("Pub :", message)
.setFooter("Atow&")
.setTimestamp()
return bot.channels.findAll('name', 'super-pub').map(a=>a.sendEmbed(embedvcs))
}
return message.reply("veuillez écrire dans le channel super-pub ! :no_entry: / &superpub <inviteDiscord>");
}

if(message.content === prefix + "membercount"){
  let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let sicon = message.guild.iconURL
  let mcembed = new Discord.RichEmbed()
  .setAuthor(message.guild.name, sicon)
  .setColor("#FE9A2E")
  .addField("Membres", message.guild.memberCount)
  .addField("Membres sans rôle(s)", message.guild.members.filter(sr => sr.guild.defaultRole.user).size) 
  .addField("En ligne", online.size)
  .addField('Status des membres', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** En ligne\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Inactif\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Ne pas déranger\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Déconnecté/Invisible\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** Streaming`)
  .addField("Humains", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size)
  .addField("Bots", message.guild.members.filter(m => m.user.bot).size)
  .setFooter("Atow&")
  .setTimestamp()
  message.channel.send(mcembed)
  console.log("Commande &membercount effectuée !")
}

  if(message.content === prefix + "serverinfo"){
    let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
  let hour = message.guild.createdAt.getHours()
  let min = message.guild.createdAt.getMinutes()
  let sicon = message.guild.iconURL
    let siembed = new Discord.RichEmbed()
    .setColor("#FE9A2E")
    .setAuthor(message.guild.name, sicon)
    .setThumbnail(sicon)
    .addField("Fondateur", message.guild.owner, true)
    .addField("ID", message.guild.id, true)
    .addField("Membres", message.guild.memberCount, true)
    .addField("En ligne", online.size, true)
    .addField("Bots", message.guild.members.filter(m => m.user.bot).size, true)
    .addField("Humains", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
    .addField("Rôles", message.guild.roles.size, true)
    .addField("Channels", message.guild.channels.size, true)
    .addField('Status des membres', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** En ligne\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Inactif\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Ne pas déranger\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Déconnecté/Invisible\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** Streaming`)
    .addField("Création du serveur",`${day}/${month}/${year} à ${hour}:${min}`)
    .addField("Région", message.guild.region, true)
    .setFooter("Atow&")
    .setTimestamp()
    message.channel.send(siembed)
    console.log("Commande &serverinfo effectuée !")
  }

  if (message.content === prefix + "userinfo"){
    let day = message.guild.joinedAt.getDate()
    let month = 1 + message.guild.joinedAt.getMonth()
    let year = message.guild.joinedAt.getFullYear()
    let hour = message.guild.joinedAt.getHours()
    let min = message.guild.joinedAt.getMinutes()
    let days = message.author.createdAt.getDate()
    let months = 1 + message.author.createdAt.getMonth()
    let years = message.author.createdAt.getFullYear()
    let hours = message.author.createdAt.getHours()
    let mins = message.author.createdAt.getMinutes()
    let target = message.author;
    let uiembed = new Discord.RichEmbed()
    .setColor("#FE9A2E")
    .setAuthor(message.author.username, message.author.avatarURL)
     .setThumbnail(message.author.avatarURL)
     .addField('ID', message.author.id, true)
     .addField('Pseudo', message.author.tag, true)
     .addField('Nom', message.author.username, true) 
     .addField('Discrim', `#${message.author.discriminator}`, true)  
     .addField('Nickname', message.guild.member(target).displayName)  
     .addField('Date de création', `${days}/${months}/${years} à ${hours}:${mins}`) 
    .addField("Date d'arrivée", `${day}/${month}/${year} à ${hour}:${min}`)
    .addField('Bot', message.author.bot, true)
    .setFooter("Atow&")
    .setTimestamp()
    message.channel.send(uiembed)
    console.log("Commande &userinfo effectuée !")
    
  }

  if (message.content === prefix + "botinfo"){
    let day = message.guild.joinedAt.getDate()
    let month = 1 + message.guild.joinedAt.getMonth()
    let year = message.guild.joinedAt.getFullYear()
    let hour = message.guild.joinedAt.getHours()
    let min = message.guild.joinedAt.getMinutes()
    let biembed = new Discord.RichEmbed()
    .setColor("#FE9A2E")
    .setAuthor("Atow&", "https://cdn.discordapp.com/avatars/465506288907059200/18b877ee8efac4b1e902117e01b1472d.png?size=256")
    .setThumbnail("https://cdn.discordapp.com/avatars/465506288907059200/18b877ee8efac4b1e902117e01b1472d.png?size=256")
    .addField("ID",message.client.user.id, true)
    .addField("Fondateurs", "IceKow™ et Duncker69")
    .addField("Rôle par défault", "Atow&", true)
    .addField("Date de création", "8/7/2018 à 13:15")
    .addField("Date d'arrivée", `${day}/${month}/${year} à ${hour}:${min}`)
    .addField('Bot', "true", true)
    .setFooter("Atow&")
    .setTimestamp()
    message.channel.send(biembed)
    console.log("Commande &botinfo effectuée !")

  }
})
bot.login(process.env.TOKEN);
