const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);


// NİTRO \\

client.on("ready", async () => {
  setInterval(() => {
  const nitrolar = ["HaQFb86sLo8xxkmx","iFfoMdYlsbkjjdaM","e4ztXhe5rIRZcP4X","s3vVq3ZVYXIRyQe7","95W5FU8kctCBOxTl","i7JHMgkspBNp4TB7","vTNbV9p707eT9J4d","vvzFJHAuSJcGaard","bhAahPdMFWxG3Luz","ARzRE8M2CoTvC27h","yb1817UnqNu0u0pJ","shhGGPOAiMryWrfj","IzZwrMnO5zmXMdVx","sAlIY6l4GbjA3i7v","v4DYhsy8yyluyYEi","lX6iSquYmczq8hH5","s7baSX0ew8fziei8","Mb7rkvR8CtKXwXpO","tFPrpPRKkKjg7G4p","0TVVsNKw9IvqTgTE","rABqOL2IuaoGxWxC","aVx6qUJBmetsYYft","pwAuwS389torijmL","0uVhZk5NTtD3orj2","x75cn8PmbbPmndhv","VoKfc47nqOUnnLzI","qotWmZWpSS5o0Wra","waopIY8lsX9TohEi","9bkKbU8al7uVq7WO","IrIaogQTckQeuHHP","orIrhlghRQXN8BKG","oCaVSklgv5gtRSHu","c3veFWi8JJW6RHCz","V8V2tpAbhTZWDr3d","kggqAyq6frjnsnZg","2TeXk4EB1ua92LTz","gwa7XXI29erv74Gx","Qy4H1dMs5cFm2LMh","DSrKmCuzMLF5pvC2","jO2hJPE0fZLA9cbR","l0oddHTuGDAC3ooQ","sELmNxGGCUYTJ8Tt","FZfRxuAg6vjQOtWa","wSQbhXd9Wkk5wnK0","TGIukSxht3cv2Byb","RD35cJddx5c3Aazm","QCqFsZHak6UZE4l1","4tHtE5n8LEXKMchM","TfZWE4q7LjFKShUE","a1MompTU8DaQ7uPp","Tugjum5JT115Jpp2","4WdPD7afKvFEVlKO","1XCKGh2f6BXQO4xl","5gQ7zwT3OAiRbsls","ratrXlSOCfKtMkxQ","iAbwjac29mI5nrpW","XzHWlEQjsc1my93A","abRnqBCFcH2LZEL3","JibST1fgIZUUDOMn","ahSC5vUiF6KDk931","OOcesG0lt0FVMBa0","fQPH7DsPVZPxPD8m","y2wsoiUbXywYqLcK","WGfHvHaKIqjgUmcM","S5QfF3f1pK9KsNrl","gX4t2soWxTxOaxJy","heQYm5JBuZE8dEH0","SkALYmtuwXH0dFGN","C5awVosvM13LjJR8","CyBA3FHl0rQeAtRl","ayuMtq0VHrc0Dxk6","jreF1E2q2lT0cjm8","uGny1uwxPG7WuMEv","PTmPqEzQ0yKLmiMq","jBZZmF4KLC5war3H","24RQ8x5GWzpSkdtq","98buwtQXMkElY1t3","HILVCVPJfZy6vlaj","5kJRbw9jbqcoECsu","am8ivWbjKA9l9skk","ULK5WgwQ31EWuD24","tKF4BQeD6BsYKOxq","uERhzbEMEFl9PAko","3dSwYIEwjfh8gI4Q","ryflVxDGTNW4tsO5","ElY99FyNJ8DqS06u","K9t6QGWlLUwXIo4B","d7MvECnRndQf3rq6","mDsJ8aPtKmpc9bva","xabDwGQ3n5S2b27t","1xzd6m8aopsYSmmt","iHnXnGWo0htvXGvF","acrzba1iiud6WF3e","iTTig1lPWMMXCcmh","rykkTbzuiX3zSMt8","PNL3sTsVvgPJfPZr","LfLeOeSG6NEnFV7Q","cgajwpAhuamQmoBL","TTi3GvqNdtbrPOMX","2CSevn5t55ecymem","reqyQ9hJgz62BiI2","ovoMqNPdsSODt3Ga","VFSXTZp9ULyJaQkR","Q5NS8XDwVaw64757","2sD3K3desZHNaNc2","xhyZSpCapbxexgFW","dssZaPSVhy1NALiF","5QIidBhilh9hWQ0E","n15c5VlXql0r96ZE","8fsoR0GIUH0Vl2Zx","123kQyjjzKXTQFHM","k9gsEDZwKdYgrT6k","JhyfHa40T0aAcAkV","fWAUr2sqGmaiwTvK","xJuk3KytXBl06Pj6","0LAUco0ffMs8i7w0","WX0CdYu5VEJwloWG","pKTRtuTOOLwuDaLf","lFTAPjmIVBdKGAXm","EE6G53pe7EvnomWa","wAFRPgytsaER1qe1","qr6t7DVqx6DcmMs4","du3o3ruQnAXuXZ8w","wjZQBUi64PNkrp8k","lyWiWpaSufmV7B9M","N8ToSoS4CUnZ0npO","HS8z24zHA9ViZmc9","OTY2cSRwVwVLNTU7","kMUw9KzFM5YO8N8T","56TFn0u6cAdWwPNb","q5iFJwba3w0Hr6yF","AhdLPtgXWgyIWxha","D9pscp3c3gbEiJG2","BEUPuHDNV77VWQ7E","Nr3VV9HTQ2x9fG2D","5t5oAIBM80FCcj7w","6ycoC2NXvjPSO9Im","yeWglwP3ggbI0hGY","jLrxxZjZ8ip4VW2s","u20pQ0LETMRa4Xgv","axkH5KtuUeLpnxhZ","16Z4lTco48HkGidw","uFvpmiwShv6RCTFK","jMpvo7jTpLmUR8uu","GjmjHUmSYxCmsWqX","msIlz5v2VX1cu6m0","4AMOQ5am8OEW9ATi","oaBYiqoTkrehRINV","GqwBCZ09s3TGoLxD","XQQUHQV0TMkHCMHT","OpCCbPnMLW9Der4Y","lWv4CRWmpc6RfYcc","dfv09t6V4Tdki8uo","CvSSlajFaprGRRFH","0FImbDCfBlJzTzPe","y3VYgbNWxVcjVAeT","C0TRUN9RjE9RVU59","vEuJdJU9hBLTGS2Z","VRUtBvD7NOO6GjFB","i135MegpKD7116PY","3Kf3ppQLjO21uSHM","j3VtU4OOL2GbFDKw","ZRdfcgLGufYdZAvL","ONzOegpkAh5Rfi5d","Q7eQfn6oQ9aCyEsb","raLMICSRtc17q9Hk","1zf4YM1UyrR7pXEX","rdZUMHhVMVgBEw6h","tYDazloOyfUkr9IS","KhFlXOkZxCIp4pgG","OKgrbam5tVEH4Nld","EwfEdgnICzvm4moh","uoT8bcr7HpB2Ia1K","yX8XFhBQUTiFhL4D","PlWmePTbajFyWa7H","sHdTswG85p98IgSJ","khT6LIKtYiqV0vtZ","blhn7xKuJSV5ZGVV","CMXaUt2yuKIPYWBe","GJr3ffW0FesmnpzS","fw7mFsmpHXWs08SV","tkEVZkkwimrCIrmn","howRzO51cFFHdxk7","HfscnpPnPwaG2vbb","RZsyE5yPfB0NtZyF","G2I5kwE3T00urIYq","XAVkQIJVBFgcdkAd","QZFwLStH1sOZtqr7","ytEOpr6ArYczEKvf","PO1py7ANAbJSzbZE","nKta1WSyJEoSn4sw","fBAo1wZZNu5iscas","xmCzCV3JFSB7Dj2q","Cr7ssS7WEHqCi3h1","Bc58NrFRxg4X6EIr","MYRAZGgojUtjGp89","xNMj1kfme7VBiQd1","6hJMqhTzqCpuwcm3","DbDif0WWsLx5fhVZ","My3uNVS7yMErYSIA","caCfOHpDAD6wUzSe","DEnIzbosesOCHSvv","4XIzxbUaaSrbkWRs","JlpqdAJMvrdORbYB","7DzmLg2VeQ2FsRJc","HD9HtkJo1n5SXq3g","WEnDlOaXYA7mUgPc","oHWfiX36jWk931Gl","0fKqmx1wlvhGfOQM","rDP0VtCGTkP2F61x","TasGC4jPoyzfPBXM","9H6LU5UTLrTzDzp2","B1NRfbYBP6MEntNY","pKzlWFSfrgpzATqT","4OAbYgvk2tXSnUjd","po6K6kG4FjbRhpyj","RrlG6NWuyS34e6pl","XsGyw0MUH72vRdwQ","5efUtHFnjRINfRiV","NhnaFTzEUojjPbbn","kjtyZcI8Bf91MERX","HS3jMHYmdLQ6StDU","EGUo7FypZmgybe2w","w7TVsSDNbboUHe7c","oLhHVXHUNkanrrLL","YcBaI8XqfofyAqdn","zKKASAIdaJIxBHRl","e3aEolEsRjOCcfQK","D6BipQ4447NtoTna","TOInt40kjEXEZ63K","BMvejh4R7BwpfHoX","54gwFmTdF1Kusw8e","C8FkAPCpmZgyRTOC","qzkmJB9UdYT4VEFu","qZEqPloNzZ0VZU4O","DVXcWoTA14vDK9Sc","j2SkogFCwcEiuRVy","ZSyh2yoEptsh3cv4","Ld8frQMepDYTabLC","GLniMmzRUboByJXV","f3ejUFPRMdXSLqph","eMSNB46ySp0uLV6F","DFJTDUakqKDSDmFv","YlB8iVtLCt7l2Ruo","SE2PXDP1QxdaJPfG","eLMiAzxuULPoF1DY","pi5OR45ORq1nKdr2","nbfBEvKqESndv97M","mpzxzP1B9caLYlY8","jOs7y6hYF2Jyf8yP","PmbXJS1yCSgtVGvq","5vR13tYbWgWdRzKv","mCO8AkIOf57GkDlz","fDgPZfDho7svNm1K","YHqLPRD1a4n3NN8H","PVmfjhfpUCVB2qQH","HC51g1APD4vrQVmi","NUrlLQjXBp3OTutF","jkoNFjbUy5i6D2px","jD6c9HzebGpojue7","mJVcfuzBhGSWLCAh","B0m8F1scePXNH9D8","desy5nSNf6aqv5gU","W0JtD4sdL6Lhk0CZ","2OiPZ4hUfJpdR8EH","uf1E8s8UcqLDw4Nl","SIUsPLvzoip0bwKV","T977pcewNX98MlAC","0niFq9MKAuIQBCaL","9xlC2C2PVFB32wSG","z3vZI2TpUCGO6zTc","zh1pSjsi7bT7kRne","qLKhJwkTVnAzKfHx","ZXrSZfDzhd2D4Vv8","aGC7r76ANXIq5nmb","coi126rKE6ZYQila","Y9VylauWdObXdv4c","ECwVe3OI3mrLPUgx","1psZetl7h8HlsdKy","zleVptyK2bOfR4XY","uAprZ0jbY4IERJ2e","uzHNLWPCKEUe4ClX","rCQ1sS6sCbtNVEmg","Nb0YcVXGcshoRyWX","wFShkxQpVuqfi6G4","2sT0Y8jVOuF2VUvc","nhITXZ8r5FbFWYND","5xX19KSDayoPXEeX","kh0SDfMpkWb838AQ","6nCQVrcTRxKeV0Yw","p90aKPWocU9tbjId","HNmgWcClTepIolGH","LTE2yNjZ6NyP5Mt4","4g505jBm4NOscAks","AOmgRujDzMAqW83v","AAc4rSFx54qApH56","5FXtwdS4QfW1lyUw","vwcuCfhND7p9g7FQ","Cf6jEalHdhChOtVz","lbDffeWnZVGqbmiP","srgSjQ0netkW3rRK","r2DH1qpRysHyjL4f","afh4tSq3sU5RGxIj","vaocjnT3szhx0CT4","O2IADT6kMHTGswGu","bQVSjWw4e9bGYUPs","s4YNBoEwS4W20kYf","OxdZB6oWTH7SIGEB","oYqcMEXS5DW3MuEP","uytwO3fnN53NZIVa","X8QwY0B2nN6UQOMW","2UE1T10JvJhB1Yy4","c3y92zdcfaagYFSS","xDBXD5dY1c1FxtlO","wiJZSUb9xHBAQPzj","a3JH1GCETdlxyjWT","zS6ndUeNQMDb2IOG","XuDqTZouGhqm05qT","2l7WqxVrI8oiX3mc","s1GRdyIRGBVmm4LB","MuxHeXsjQoWzDwex","mTQOfBn6kgdDzIIk","H3ocxSiUALmcowAr","gusAEandy3NDoOmR","dc620vmHBOvnoEI9","7kiXdyNqvHxf7yFR","rZWDlSAlHIzRbtJf","UpVWeeTeowQ2OAWA","gvr96pfD7PC7Vd5J","Q0rzT0NsVJlWFvWU","EMMEPDm7sTWypgYN","Gdj6UrghKqMDo5NF","GMFWZrvFiyVwHtFi","k2w9RScpaRtyvni2","oGyLrwrTZCtEk4xX","hRnbifaJZWgd0a8y","KlHjbh6RPagmjqDq","48Z4dSUOqgRAeV7z","gwNdAuwDrgMJX49e","HTSa0OkDqU9oRqVF","xdbIY0WqcC9znO7C","L4CFFNNJ25Yd9VgB","7q2tRATZ9Alp9JjG","7Ao1oZQaThuo1NG1","0gE5GsXtsjTZIpsQ","fcLrPHEr4jd8jbyh","ubHGoahnnBp4d2ms","ljE98KStv07vxSfQ","WrgODqYOVfIqPjQC","Kv4xNEpMwcP3YkUH","nTSSOJd4duOvY1UB","yK5mT5LYiitGOEzR","FS43wR6GIE1wLGU0","g1j8peNZ0yqNE3Az","krjl6F7EqPUpjaCE","rLbPOlsRrpBYXGxC","8ymawOrIVFxqEJNw","SpeZ2ZsMBHzrxVUm","0MDnQpqcKMtUm5Tk","DmIGRcoHZsAmwLEs","i4cpw4PkeUEFs6eA","tMfo3MzyQIWeTvZX","rldpB5lWTg92AbKO","7dAdRqeXKycb5ftk","GGKBSxYmWp2pBlZJ","7BIdVcHMxumj5ivi","q36RARHiQ8y856eU","5vPgypza45B26nWF","OS4dUwlVHlmR0Q1R","d9PR7VJPFMe7LeeZ","C7ahxKX65mpF6Fg0","LveDkcaZlb3xGY2p","M8EeExfxlaib5zbN","JjMYOOngDAfb12C5","EzGuO6xDU5g2dBv3","tSdrtAsXCkDQjxuV","5BUKwKhMho9UXUEF","aIxZzTjzQkCrPPll","s2yRA0asz6NDvEML","KRGFNH9NDYz5QrH8","E3aOe3X5X975rXT5","s9iJoeZH1izFQ7Sy","QzGwYguy3olEOJsf","l1zBhCaVNfgVR1lp","hZvdGkks1Qprwo3D","tPAemNzSdGlBDkeD","bihTvOIm5NZTnttv","HoyWystYkcgND9XT","TnN5TBv7BmfQvOp1","jwb7ggVLNO7pcQk4","fMuphoCNCbjXhh9t","11hFSTdOSpO9EkWS","vYJoVF3narrdQjZ9","0BbZs7RvQFCenX3s","eXcZBRXdb79WXISd","xKBD0aCdtbxeSkBC","Kyx6YWpBqTZhXUgd","dWYoIlCJf7ttRCLh","FZ8H1iKJYfVdjAwz","cM3a8ZqUoCP9777g","ChnpjMJsLhTqWesd","y9g5pPEmbDaCUu1J","eNPS06YiC01BtJJc","tCSlwwbghlqeRNll","th8ls0lrMIBKw0aF","8XwnOrnPoq27KViC","CUhW2DyIy2Ja1zVx","oQ8TGrA0DNE4CMJK","Tey8Cf28x6aBgi8i","6Qy3lsNYkQVaT8n8","j1mFqHWrC9F1BWCo","NkgXwbu8SL483I0b","cJX5AjfdNMBXGBBz","E070YMJgnC9nRPA1","uDLUoES6cu8NsMBC","3HyqVB9BYVHlduzX","LvQTlgX4ML2jlljR","ZCzfBMdZ4UEFVwO9","RmxorxmJ3Iw1nTLV","6QUVDb79FT2t9Ttf","S72J2YCgyXcFkqyo","FYUfNmVQhGIoiGUR","HCzn5lbebxwueniU","OJUyCyLjSHF5IKwg","WJ41Fu2HWQVeZPBG","rqxX7iqorwJTzRjF","Rd30kAxIgpBmwN76","lFff3S3SpzRSXQAi","qdYAuc14g4YS5LJJ","UiQxtmpu9gWWQxAL","yfWm2XowDFJ6aPdk","IdTqhg0vPrfofii6","Mhomv4PoTTE11BLj","o5ksvBOCwkc8QyCB","ZZO7e3MmuAYAJtxd","hujt1prKTwBqwiNh","FYXKIACTVw2OiZS1","o4g4ZQEYMAMPvvGY","q58G5vjdThhpIn7C","q0h2rNHagZen8quR","yIKtUlrXGLIVuujK","ejXky0qayyXziRXR","LUmqa44kTv2P1i5O","BOi92IRu7dyqyKVo","LDwFijl5azxe8Cs4","SS5DR0LcdJIU8ikD","vHSDhx0pbX9R4lAy","CFFiyv04yD6JT2dJ","CcpKNy6pJHOwkOBq","uiS5XWjXesa1Sr5i","ehq9CKjqgNExpLSM","sCqvBz4eBLUryDiT","zmrfaNQNdKEnqojE","KShvvSYHICjdxC0Q","XeuUk9iTsUdhYE7I","Qm4I6OVk9xTJYLly","pXUaMkx2W3NtsjXY","12xxodngEjdd1aQC","YbegAlVySsS0Jx7n","cZ8DQaTuZsdEQnhw","SeUb2RyCD5XvGThz","6f3ggh69jda3lIee","HUHR6D7vJxzziwgs","UmOIRiF92tq4332a","06Fn1UlPIoPffztT","EAnON4vUcxr0zDwt","sTWc9rFnYgvcu1lF","egVMxpE7msBpTrSK","mLQsQM3YseR7dq1A","UxftLjoKMN4357ml","DlT3vL74NF4ipWNw","XZtc6zN0yZhHztaE","3btTQ4gwVvWye4vX","eFhC9ZiGzstEplBG","6PL8L5x7jg9wPySz","CZruYLqKyRQGqjMB","atGVPEz9ier3587P","jAhfcLV13RaoxNZn","nwVzZKnZfAB39iTe","QcZnNsS0QZKgVsjD","UFPuwPLIDCS1bqFh","3w7wpnqcjKiPqKNI","Brt3tHeMMTvW0xMY","G7v1WY9Lek8q9wam","pdINdgPCH9UTkhZo","iRkkIr8aSosnRd2O","RgzLrYO3R3lHl3M4","oebqmrtLBhkcrKJo","ao4pNwEFIPUCWtzy","SrkL6YJQDIrxEMb2","cfCsYIXBxytja966","flL30Zw2amsriWZz","1dYW7OPgQIMhKF7J","aisA7XRTGkQufqSS","dMo6AfzPfLm8F9yN","lu4ZZh7b2IEKqmex","GOlAT5RsuLOrzh2T","Q7zR7EXUxHhfdOGP","FMxx6oesEojzel0C","omjwgFSLXsMZLmFS","0h4C2jJiCqiIIZWe","qutZ5wT6KKPMs59T","owY4qUGxHggmVbX2","lpSw3J8YIRAuqq8n","NqeswSbIAiDwszet","0O3FTAVPAcIWUdmW","FiYjBij3tHcUvOw7","9KtXAlVp4rkXRIyS","JKA3jowACNNA3QWX","FWsJoWjWpbGC6hy0","V1PxHhYu2tXEOcOu","Hm3nToHSiHbjujYC","nJLdrFUd0MFDYH2w","F4UTywzUq4XZzbTD","HMksLxtM4gWhdjFO","gEmPIKOE1O2vjkzd","OlzOLbwG3gh2JoIH","FR2JxNIhn1mCyWnL","Ru2qAcTVyLKiaHhf","5r3YYovLMkl9guQl","r0c3QXzqDj2q5UiH","k6c8E4uNXbisp0Ii","v48Qf8AhU1L96gKG","KHjuYESyX6Dt9Pxn","ecXdou830fzCIBpo","I6OHu2Y8nh0qH4b3","2j8hce32BEfJENe0","RIiVCje15wkNUfDA","nbPqS2UiNjcGdNIi","RSxlueJxsny0o8mS","3NhyQLUzOHGcKcPO","PPB2ssaeYtwJpjFe","n3ZVBUmPEW8mwKzx","b3TFiysgLHKxDynW","M3TYiSf50zLZcjqL","0CxT8HoEKk8m3Bdm","30b37piWwyCVilGI","ClQgL5TG7VyBaHPL","PVjHEOwrqO9GCb8Y","4ci6P8NiMucblWQi","3YAPwN8CBT83pq5d","mPI36jdpxQdMokhj","PQFN8GSZ0sjAEYNe","JGvXxjiHSSBKeu2D","eFdYDIcdOp4pVOTT","6EBpfmavMhejKZdk","OVG39l6VtrO982hA","9l7NqcbSfxnoPidc","5uL34Yoa7Ko9lUNQ","mJMAkvm0OTI5CKII","e97O4Ds8mEyQWmkW","igyfSttn3lrcP6HY","lgQcuy9EJu4kX5Ou","lvMxpF5VaLpJb2de","fc34qNn2Eto6NtrC","nVRvYuOFlkrD9tGu","znB23fyomiA7wx1R","uoJIae4t669AHGZw","IHDfNOawZSJeh7Cv","PWGB7R6qIHy3VIxj","GLIOxabfFM0TLnym","FpP5puZYOBTLSzYs","hvivqYc45dibk5ts","fpFpIsNPAwyGbjnM","pxr8qlCvSQDkuNr5","yjUqoZQbYGPF6ofK","CfLvjRGA6IayCpW9","Q720YX8njlzVc9td","oQHO5x6832PFjHTc","vSXPIVL8BNHN2uVZ","cRABw34LfLNMV337","2B77z794G7d8fQ9q","Yj26AV525z6URy9r","SoxJne4YoykOZiTf","kG9C79rLuBBzUzsM","bRzqOkKuAp33NPSh","TzsM0pXQFbGQwVUR","ld9dKWB1SPWYlL8h","7XX87ueqMsfzJXKo","ngm50VAbnL4exfL0","0HXcEZvygfwnkymU","SRAljR8auNySvcW0","E2CxeqvBkhvY5GkQ","Fw0KeTz5r7GOZ93y","0jfPRLxXKBcGbIMN","J9i3hYXSMNj9AeUd","67Tgdgtuu2am5TRX","4316llxPY0cvazqH","2988vQth7g1QfZhi","8HrXQmnjvJhQh7AJ","0kNSUSTklCrHfmWE","oZRJrPs53w1CYu2j","PnjfrGmgJnkOAw46","NHa7fJPpBttNuSay","7viDdNq2MibMegB7","BvqP5UeEki9k3NVC","DStsxFu5KEGZ2ZNZ","NVtJbnp9hgS7J8gw","nPvTZlIhJA6MxocE","Tv2yfPKVdepUVAtH","IfrJbdRDnuN01I20","F5afXEl6mRmHBF4z","w3CXJ6U7jUv5m6zp","abP2NYdc2kjK8vX1","eiyeXMk1HmaaERWQ","oQTmyBTQl0UFgNsW","cGt6NfmNOye3kjBI","KH9UbaxQSjiEy4E8","cQwmdLlyfT88wWsd","WhizwY7WeOZ9DQh2","jT3PhjIBVyk2PJ1R","mcUqx2RPfWIkBwVF","4vIuobNejmHNX8if","IVRLkrCREtgznmVn","9HthHk7qBkGYJvju","T3xI1TEbFQrwDeSk","PK9n9Q7KUmExxu8l","cwsxxcaSzeqZanAQ","kWZoCn48cjKBw93g","EmsdqxDAwDhOMrb6","78psFeAjigXCJI5U","Cw4wzRTFv0vFfK3L","oYg8N37QRDn1VOhj","JpQpDoIG7PGH3gZH","DIbsgpmFJ2WaTzSu","MYncvW3awEEw0jpP","csJBuRrki16PINrK","4taGTM7pFEQ2bKCL","HVUQxluIQmvm5rJW","DUWJSFRNvR8LHaEl","WNPU8gxQDLRhoiU4","ExCzf7ERkuyUj3g0","iTp45UUSYWGQApUt","YLyii8ZVLWu1hVJX","pfNrXdtBjXwuV0Cf","w7iouysej4CdzXeJ","j5vtmccTCGCa4YXp","V3x0TGBnjfn5Vq8f","kMrh4mbCLbLhFE6B","dweF53QLfrVNNiyo","7iauQPnZ2rU1cO9e","72PussW4DGWft4LG","hwMpFsAjseKsZTJu","N4A4aUeqqRD4xmpu","BWZTQpDs5SYFJIzB","T4ssG8tD69hW0S5p","JumjabM77rzEArY3","TNWJMSOi1RQDxbmB","PK2PuejibTFuFegZ","3ff91mhYJYCRk6x2","x1UTg1ijQMKkLFDA","QxsjZAe9rBXNQ2WD","zZod1PCeJiDLHbIG","RD3QZzT2fijeGqn6","n5Z3DRjkhw8RmJJB","3bPWH8DzNmO46Som","WL4Pdc3utAjmUSNE","IBcx4K115QxrRmmJ","op5ysUtIOLxm1AsG","ug8HkkQCD66Gbh1G","X4CQZezcZhY3TtAn","512VVclv93P0Rbs5","E8ycMJUMfYt3H1Kv","yfNjO4fBz2uleqcH","JaZr5GkuVmKn0fke","DpxYuo4cWjomYjLG","UvGkcdZf3wL2286o","ERaiZQQc3tEzJu2v","KJ6xxdttfeTID0Jr","M9VEiR2fC2JvtLpX","RKOabT8mRMCJzLnC","Ljvo3DQm4Ml8hLzl","nPb3Jjn6IR51N59r","1o1E6mRj8WwXvJ4A","bOBEq1xfFXc2J0sM","C3ZZSlY8T477v21i","tpPxwEbQcJOApsqU","7Q9mwwYdZKnUmItR","aLx77egF5YzIM2vR","oynwopARGavzX1hM","EHoDe2r728L9ZDl9","NmbI3wNtD8yYXbMi","rjPAnDb2G3FyMGvD","4pk5GKsrZxFECMm8","ibYAdbYepf2Cc6zR","InUJCaB4S9lnx3Rr","Kt5SHHxl1J454AkD","476pe0T6RfoCmGTo","H5llzT0GhGIc44LR","BrL9Wz0jz1kgYu7h","wOUBIWCqCnxu6kEi","BGuors03XA4OGNKa","f01WxYk632gzZz00","jgKLmhI7sCmv5a6W","O6il2MJ6qO1fJIFK","ShwkJBB7DChOX33z","kejAWN5vaLuzy6CX","nXScYnGjNrRPtocw","jmjYhfllDFnfRvZd","I5aHtcK9RJdB4RTL","q9mu6yda1yCRLd8t","2c1610BsRQtBP8YU","uEi1Mjw0DavirWTg","AwqFLbd4iBLiLFin","QYNeLimf9PR6GiSY","tFcX2XPwZY7ImImr","kBfPPeZt43ni7lgo","kq5d9G6UsUxkSxKv","SMp3IJQI1v4QYTyI","t9kSp2Rt3VuosCx2","XdZcIHNFkwpoRd0r","qB8MkPNTSr5oHc4G","iBh2oGkRpnKM5p3H","QBw0Z0CyTNurK2JY","YCYHGTowyQvNlflj","6rwR7SwgOESQTaJH","AdypMmap8mQUizsh","WJGQqyIrxMoQmajb","5KbACiyRWRJw7DlM","4ANSasMvIGj4iReV","pkPxvhSamCK5RrCA","OMHndALJsr2XU7w6","QRmrJKLUACf3pnJj","umXo6oHGvajeDMPj","Y2rjMLRmf974wmnb","pTn20IlS4u1SHDZL","QTowdOLd1hgz3vMH","va9Mn2sZ6TwZpSRa","CHdim2olP3JBSWb2","MxxkH4cX9ezaK4rb","YAfzi583I4Kbkkv8","6eZXvbCZSGbGocID","u1UuzGzTRdOZ8nI1","n1qd5NExU3AWJIix","Imxp4ZxYbmCmP0FM","JITSqqoWJo5SDm68","FlzAIzXzskVoRpA4","9bS399VPq0VH6lbR","TzPjVuscdjBmdEtH","KXwtu8HkuWAG0PRA","mJ1DaemJ776aDRpS","OJ1z3TGQukLWk0Nr","lKGzTTvrzkvLpX77","Ba3ti6cmGayLnZ0A","4vw5lEHgXOHvMuLv","ptjnYqWdBVmRHV3n","rHIhUzcW5OGHdFQU","Fj5sGWwHiOQbqvDu","2HYbNdpI5UK0Uel8","vrLfL7CAQFscR9JK","n1p1243CKaf8k8b1","XFjLFmevFf8RsiaW","Lj3RsMRyGFSRrB1r","XvnwSLuCgyMxBHSs","waQ1XE2SMdT4PAsC","Yo0bct1zO29tBh25","xOLcMOy1j7XxT3bo","RWkd2ntuN0tuQRNf","8Sw0BhigMzJCTeYx","lrPnNhlTd5U5m6fq","5HsMUjqZCzi6MOmd","dwNhbT5Te1HOxyGz","spddR83lq1RBso7Y","KQkzZpCqzdmh4q5w","IEBSGe8Kz9y7Akbp","QiqX3FqvycsKGYCf","xBIVpZ2IzBAP3zUQ","L7Vy1RNDcTwjAbvM","1n9UxBwsYsJU2h8H","VEGV7FDHH6xvmu6J","qjjTU9ngQcCQj52Y","LMnjsrqYIAlUxeex","GyKygziIeOBXcwzm","ZcVbMUfxcnjH5Lsy","nVosIn8CnEjAfPs9","F2swuwO57Kdqd7ZR","nfCNPqQ2aPEbtSqj","DRk518VBOghpxD7x","rTeOBYPkXUMamqNt","kHq0WaaooFrUDZoV","xu04RV7au8ZJx3No","U0K2IrqNk253dtwV","lt9zFGIWp4sDIT3m","UGJEz1F0Stqs3nuj","QiK5euPxlPNHZsKW","RBj7S5vR0J5v8tlb","dV31I0L8KEsYv2RR","pWCi6aW859v8fzpj","uo9ueKfxO0SEUliE","zINp5r0teWKreUMU","VZOo4yGIBufcMl9U","FaFoHG5xy9WzHXiN","1WvR6jDP4vrqKyZO","8mgS3n2P5rUVoQEZ","vyKXv5u14gNXB2RH","z5UO9xoaeL44INpn","uMAZYKOvd2tXM4dP","DcVimUMhJqKjqMRx","3ekqGPPqnQ3POY0U","w07AdIY7RjYQ29R8","CQyJOF6mfL8btBUw","tcgDia6qjo7xryRh","HN0eOkGyfU5q9lr8","Yxo2HhNbGmoVPuUy","6MOMStB71szR75yG","rlLVFfJtjT4VfXy1","8x3T1OR7dUqMRB67","VaG17OiMPwusEgd1","1pYq8BUYMCUYtsq6","wy0WdScz18KObBZa","i8WLo9KudPQMuUme","Km0sD8rAKaITztmY","9tEIOnX0ezqDHgeY","S7YGDR7S2tPoCFiw","moz2m4GW2HNJKbtP","DpPHORKvgYWif3q2","g1kb1n2tHPt3pOX1","6ohpzLfeELtxZJvw","7yC9LJk2Gc5YE5eG","mhmSV9JV9EB9o3PE","jIdEmOJ1OAYFdOLw","ZawPJxYDYDfG5v83","S8uelfL4uMpgLf5n","DB0DYQXWoL774xgC","DIu8fch8p796jZsV","1e1SqZ28D3QDOCTm","ffcNf6SrQNHtIknu","0L78HwLs1pRf5Tud","x1S7SEYnBzN0r2Sx","nTWw0kU8grQzhP94","j7a9SCXTumhB0898","jS1qNQ3wm1w0pkha","nxZqiEmDUI3JYcy3","U8acBNKJbKcm15AY","gTk4US4vORdPtpmc","VIUsldAqSPmWLj3x","dBbO53N0DO91cMSy","K2za7W5pdieaoaOJ","MGchxdipohLnkz5z","ZGGLdncYR4WEzhCx","JanGadeV6zImuJix","kMOMWLidAXOvStfE","n19VEl7MSmJCC1jc","ooNHddTrXjawStQj","D0t6ZGoyViiX20L4","n17bXTSi8B2apqXC","5IxgBLGgz90jQH12","bvQWYfENdtNfB40O","ZG6HLC5oG1uE1Wzm","cXvBi81f78zBQOQW","YcEgG174Tx8pPUN3","lZtzNQlYjKyoQScS","cR07RkntBl560s2S","JgCQ5l830QoMXGMp","VnAkXpTKmkRVt51B","4JNvxSEKA1DGj6gc","p3KBqSaTP5ppf4Cd","baS7rdiUrqWMHDQw","CUf1mYMTH3D6oojT","IsCHV7qLNqifXQTp","6BmNk4rhM8Mgqnz7","IP3Rp4qfoiRzgfcn","YafsqFNEK7ohS5fl","OTBUEHSuWdJtK6z5","HaiIpxHmxWEhLrg8","7Aixf4pTZpQvUBto","0gGLfmHsxD0WOQ3m","ztijSKziWpo5mx2k","m62tKNJEZ9zY68jt","7piPPGaJ7uQIbs57","iqrl5QauksuhddH4","xN2a6NTLMCquSrMv","X9FSQlA6SmJq74Fb","RyJ9Qi33xiiTXORX","eZHkBDcBE8Aslj6w","PVtAcAJ9h9yd4jLl","FAbpUxFm8tvftIXc","mXATuSc2DjEihUsm","4H1OgEUHNLSRZ0r3","iT4RkV0IUG5xuqfM","DJxMviQ73P9oWcIR","MvfNZD955J8Pm7id","tTW0lGUes0UgWWqJ","gWdZcDHTJ8nFkOY6","3K65YzBt3r2tnA5b","eV6I314vgOGkDe9y","eAgbo4LoUCdTsHLr","b8rLzr7WN6BftAcZ","wI6cVUFaeJqjq4C1","FxlkwKpk5FfOkSVW","7Z4hf2OfCPgvFc8S","hImYY1ulhkeuGERz","bNC4jknhk4uhCncp","tTbcb4DeN2pH7lDU","LxKUUVY6IYC2x0Zw","M6w7K4XoOJDRUHux","D007fmfcMXgj7JZr","SywwSrrboMpMJtBn","7GBj2p5L7A9UovJa","NIBlhFAfFdIgk8Et","9RGfzzoLNUxjJOeE","AN4FS19QGmtvqnUo","9dnDnvltejp0pewT","wU78oHMNV7dMiZHg","O7YQzfgwMQXI2pQC","36LbEMa1nlHrSnCE","Oowz0s8mHKDp4OQm","8HGPH7fc2kbfC8tw","yhf1SjUY37Jp9pZx","Ptdf3BBw5NELOsmi","6U7FzRhLTgPvG1Tw","Uyv7pbtKG5MgX3dP","HahvdDrlElYrjlJe","HPemSbWss1LiQ615","C5NPTSFUrOuiRhib","EgN6p6ySDKojAMjA","pVI89ZyIJvnc4RfH","HmeSXpAwTW6v8b5R","QdiDSY9Q0IA25VXT","IZ4dLI71UauDVCUS","TXegct2BTdmwZdf3","030ZrBqFMveHmblH","tquEjRq2L4kqmwm2","GGU6XqyiCAwFiRAv","1KPCxPwx44PxwG98","WaMuB8iF8rQy5H2K","GEvQfRKu0Hb6NtGp","bY1NnU2yPGZisDht","GJG2kvnvJkr2R0uV","IfyevmiyNYNkOSsS","Ms4UrzM1l2e7RBag","7xMc8O7wtELdNpYQ","0yMBojY7ADETH2OR","nPYdyywA6KjZCotd","AXTi7d9vPRGDdte9","dPEMZAttjjDnyCKS","QErBFCUGUWfMAlOt","g8eb3D6KmsG2l21K","XorS80Fe7LCmXyvz","aVNmc9CpYoGrlN7p","V2T596tRmmsKmCFS","OOZQNxkxkGAYkTzr","LMbA7PGJDX2EWVmc","1epAiOXNTkk8M4w6","Xc6cSSYNEaNcEvze","qGDa0Q8xfqg5kr9C","F4RvxgYeUFPs5oyP","JBQXmGfld0oIK16J","5n7DG2zIi2qyRoSM","ddVMG7Oxxt02UWeo","TSwIc31hza9M2FwV","eBFRGbPogVytvo8R","M1ZlIXO622Qyb35P","puZbE3v17ewrptGv","xZ3VrRUG3lK2l72V","aNhNfoExhTTQUDx7","bkcueOzo9Rlt2OrU","sI2yV2N3VpupJMTJ","ognQTuzEfCbeP5xY","Ox0uM7zSVQXBMeAX","CL4hAI1YU2bhHPdE","8F7L19MmpveB9ma4","UojSrCXgtDRlAJ3E","eewtwpGI4OUrXOYk","S8py696GlN6614oK","MiQ0ywc2u79tqrpj","n5wjrLBxbipqkkkt","PPBO2GtuU6kVj88s","3p0hDOJe9mqZEwyA","MyZ5vi7UGzKo5vt1","o9iKvSAnj0HcGFUp","E7jMvZFORjR1t31m","BpIXCUdssx53qOEk","5FTgu1wr7I9pb56I","ZWaYnG1b8FIyEd0k","NEvU4iZ2dfMvJ5XJ","TO2TCDCUvty2RdcK","W2SdzKx1BA968qVd","yGZqAKFxfXVxvZiz","473wq8SlrlKggOhn","Sm58Sre2LkZ9NsLd","nboIQBL5PjHhrKq8","tTmcnbfA23z3Eg9D","S2J1szBPfT0DwGmK","T6tj3FdfXLtlbyRy","woD4qvY6evO6eXVT","n69HFgfMAlaUBBTt","GmiVnI097ySYU00z","GjGyLEqlUEaVAOTp","mqpWuUuaLupiCcn2","K1Jbd1WoNa42Ktto","Kr0MoxDfHaVLo05P","r00CS8RuCfYXqpmy","I4fvjN9BFhcOgjcR","FeA8sYDsXCU3uKN4","l0WECJRAnWTxQFeX","OIGyFwCBdnfCLY1P","2JNfZGkIO3KyihpW","1SDASc1cpI7ZCeGc","xA5NEq8RBxHmwbSJ","EW7xgXA1yVDumg59","oPHZqCrXHJTuiNL4","Psyv4PVpekmbk6LM","qHCENpMZf1gHzZT9","B27IgTPUrppL3vPQ","PfFOiGM2jHuuQPdv","uqvHgay9kfsOHhuK","856XJX5XfUNo3P1C","hiSS2sdi4pyqqA4B","bs8KCAVaTDu8rfOs","bAwW8Wp9x264XMFt","Xwa4o5HvRwap88js","SrXduUmhKUx98DKU","43EYox0p9RJi7uBc","UjEqWEFIfWcLWcZ3","jWRFDjJfRwsniart","Gso0sqVxvjbjYCKr","sEYX2873JFpcApNN","yOIgwSXk8t9v4OcT","Ht21RKS2cZfHRqYn","orq3TmkQNY89sgtH","SPc3iRpm100YSyaH","dFvBrblPuRFI5fqa","IPJCoY5WLC0vM46D","jfGvX01iLch2kt5T","EklxQVEdQjSAKlnX","hC7YRKHueINwmFes","hMjwXl1Bxc9tG53V","BUEPm2TEI1J5CChu","R1HjJxpiFOcJytlM","Zv0OMxL28Ml1eioA","sUR20K9IehZVNtIA","wg4INVG1PNldQ74N","ESo5RDPkxfBs72NN","CjhVhcHIcbJaxu6u","RWrMpou6WKhtBJ2f","AIHaDJlAmlr5PLxO","aD84LKebbL1DWXAq","vs5g2Fj67ZFFfd4a","99BiInX8XIXhEJeR","nBYDF4CvHHhTdKGN","2NNqZagZgcHyodlu","vGlUc4MVbAdMBxTu","lk437zjZ6FSA9P7F","LHv8QHoNycQmq5du","IWTvWAcqUCULXfNH","CeK6ILuuudqIUIwu","gduM64D15p0ojJeR","RMqdmTMH3QMQ0SJX","XbrOM3n8l5ZhJSvc","2MCCLphon1gPfmEI","U9dFg9tdutCgWjGu","zCwQvTvLOnJ877Ak","XMm1SuWRRwcuYqxQ","D75MSXlHBIhuNvWp","WacIP2evca8UTZ1t","dl98vhd0A9ho6rzs","WKtwZJrVQJeD68s9","ak8opzKS1M6Pla9H","on1R8tQ8C3HZhPw4","PNkkoA2JdLP3G6Mv","CKBl3QM9YXkyhtvv","uRURbCgMETRkHyRM","KhU1dhb1RCLe3wr8","ayoM1rCwNB5kJQ4Y","Gzj5wiCqFyZzmgVT","7sfhek0UihicFmCR","JVTgAh7l0XA3DiuR","fdpkZIufWCikE2WF","uGqugehfoAeykpvN","4ClKL5t4lGSgvnB5","uCF6tQRmRbpJ3WK2","B2OSMCi3LT0CdkNY","5HO3qvWTOjsUieQp","s6RQkhKVFzhCeCZV","AqB2YCjV1IUv0Avc","XBf0D0ZEsiWzT2Vw","oQ6xCYZER0SxzqsJ","trb8gHK90KxoEkFb","5qgGl2uNaqs2FWSl","asHoAH0V2SPoZ8mQ","jWuYF5Yemqh0S9gY","pS1HLclIRzxdIBwY","AZfD14JMI7QQX0Uk","PXWcCCq9iYLlWyBY","MUJ4kbjXOkj22jVZ","nwFZ2ZN5HKLMqj2T","wyIbuD4jm7DZmuqJ","oGZcyqZ4k3RcPzyg","je4HG84svBNI9Nkb","KkoFv7qNV4KvfwiF","5huCf7xX4PYd7lav","OED2RzRErtCq3nwJ","EWS4drR1QYuRr656","rmymqwW1qHx8aRhD","4snyaVBY3uVL8rOs","H7tTt6JjN3wkYECf","DVPkd4CQxs7EoQni"]
  const nitroata = nitrolar[Math.floor(Math.random()*nitrolar.length)];
  client.channels.get("699907499876155462").send(`Nitro Kodu: https://discord.gift/${nitroata}`)
}, 5000)//milsaniye
})
// NİTO \\

// BOT OFFLINE KONTROL \\
client.on("ready", async () => {
  setInterval(() => {
  client.channels.get("700351796706803762").send(`[NİTRO] Bot Durumu: Online`)
}, 300000)//milsaniye
})
// BOT OFFLINE KONTROL \\
