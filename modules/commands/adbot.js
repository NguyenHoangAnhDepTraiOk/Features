const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "adbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho fix by VĐT&NTH",
  description: "Kiểm tra thông tin ngơời dùng.",
  commandCategory: "Info",
  usages: "info",
  cooldowns: 1,
  dependencies: {
"request": ""
}
};

module.exports.run = async({api,event,args,Users,global,Currencies}) => {
var callback = () => api.sendMessage(
  {body:`梁Admin Bot梁\n
👀 Tên: Nguyễn Hoàng Anh ( Jutsu )
❎ Tuổi: 19
👤 😶 Giới tính: Nam
💫 Chiều cao cân nặng: 1m78 51 kg
💘 Mối quan hệ: Độc thân
😎 Quê quán: Vinh
👫 Gu: Dú to là được :))
🌸 Tính cách: Bên ngoài lạnh lùng boiz kiểu Hàn Quốc bên trong ít nói
🌐 Facebook: Https://www.facebook.com/Admin.HoangAnh.Booking
🌀 Sở thích: Chơi game, xem phim anime blabla, ăn, ngủ
👉 Contact: Https://NguyenHoangAnhProCoder.github.io/Profile`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(
        encodeURI(`https://graph.facebook.com/${100005303558824}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
       }