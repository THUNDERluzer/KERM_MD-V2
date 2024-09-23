//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "nowtyhashan44@gmail.com";
global.location = "Matara, Srilanka";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:AWtuAmGpatfmlwZoIaGuNsxLNsFfeLPV@autorack.proxy.rlwy.net:20819";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://wa.me/qr/P6WADRJOKAFUK1";
global.gurl = process.env.GURL || "https://wa.me/qr/P6WADRJOKAFUK1";
global.website = process.env.GURL || "https://wa.me/qr/P6WADRJOKAFUK1";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/94782543893";
global.sudo = process.env.SUDO || "94782543893";
global.owner = process.env.OWNER_NUMBER || "94782543893";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "truee";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/7721cf222f9790f3fcd1b.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVBZMFhXMnE0dFYvZjN6K3hvTkxtMTFXVC95cUxJS28ydVBwbWE4cGFYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFhIZlFiZVIraXJaOGR6Y3BtZkhtcEJMdWk0dWZ0QTJ4R3FDeHJ1ZXRoUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQnBvMGpsdG5wZHRpMXdkTE1xc3lzS1FEbU1DM094blExTVd1bGF0Mm5JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrMTFLcUt6bmh2TWgzc1NmUms3bkYzRm0zL3k2RC8wbDhLTGg5NGl5L2d3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklIWXJWZkdyOHFyRmRWZ1NXaHo1WXFBWkQ1QUkxZWU2RjYxQ0RQUmJhRnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imo5TkR2T01UVSt4V0F0dmRIVCtFc1JrM2ZVTTI0RmJDRTdHMEZuZC91MHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUhEaUtMdEsrcTc5NGpQQjFNNkJWcUtIcFBqcVhiYTZuL1RVRUtvelJHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2JabkYvK3RxQXdVajF4VTFKTk4vUWVUOFJDR2lCbDNNK09haGVlNHRCST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFBZVlGSFNtYnlLT2JyMWNkMDB2MTcxd0dvZW1KWE9ZeDFTRm4wSFA1QTJ0T2Ewaks2ZmlmM0tFTldNWFZDUURoanlwM0F3Tnp3ZEZ4d21kMVB4TEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgyLCJhZHZTZWNyZXRLZXkiOiI0TXkyU2Y1ZU5JcXJPTklrSStqbzdNeHpxclRrbytKeUJoNlozSkFmM1JzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJmZmdveU1lQ1JneV9sdHZOa1dqV1hBIiwicGhvbmVJZCI6IjMzNzUzYzJkLThjMmYtNDE1Yy1iMjk5LTFmNTM4ZmM2N2I3MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrK2JnSEFWMFN5ekFCMU5JUWs4dHZpakVOcGM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiODA1MmdxeXk0RnI4M0p0SkErNWFjS1lFTDdzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFMRkM5N0NHIiwibWUiOnsiaWQiOiI5NDc4MjU0Mzg5Mzo3NEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTlRzcC80RUVJZmd3cmNHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMUVDaFg4dlJ1Qy9hVVU5S2dnQWh0WERPMmVMaGYvVWxUaUxiSi8zOEkwUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMVN4R003Snk0akxtWkdWQ2x6R0VhMDJKdWxhUFBjbG9VYWtGVllqV3FCN0k5M2xJelJiQURuNmZBNWx2K0FZMFRrOUF2cTV6cXEvL1BWM3dYTjBzQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IkdrQ0R0aEJZZGxiRFJVQnA4ZXkzbkliNjFoanRmUG12L3daZzU4YVlIQWxsalpicDVGVU52M0U4VlZRWFpxVzRpSE5KMDhTZEdaN2NBZjVQZmJ1NUJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODI1NDM4OTM6NzRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZFJBb1YvTDBiZ3YybEZQU29JQUliVnd6dG5pNFgvMUpVNGkyeWY5L0NORSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzA0OTc0NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFTXgifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "Hashan",
  packname: process.env.PACK_NAME || "Panda-MD-V2",
  botname: process.env.BOT_NAME || "🐼💖𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜Hashan⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
