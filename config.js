const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348069126802";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_27_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDM1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAyNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDYyLFxuICAgICAgICA5MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQzLFxuICAgICAgICA2MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjksXG4gICAgICAgIDk4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQyLFxuICAgICAgICA0NixcbiAgICAgICAgMzYsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDg3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDMyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNixcbiAgICAgICAgMTExLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICA5OSxcbiAgICAgICAgODUsXG4gICAgICAgIDI5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDY4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNixcbiAgICAgICAgMjMwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgOTUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgODksXG4gICAgICAgIDI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDAsXG4gICAgICAgIDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAzMixcbiAgICAgICAgODgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOSxcbiAgICAgICAgOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjExLFxuICAgICAgICA1NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDU1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3LFxuICAgICAgICA0NixcbiAgICAgICAgMTcxLFxuICAgICAgICA5MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MixcbiAgICAgICAgMTU3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVFZFL0lDTWcvcGdVNXJDMnVmT0R4S1Y1N0hJVVdCS0YvZUZhYlBaTzVHST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWEYxa2dSVUNRMUdabjJpRGx5NVlBZ1wiLFxuICBcInBob25lSWRcIjogXCIxYzI5OWJkMS05ZTFmLTQyNzQtYmNkYy0zNmVhODBkYzdhYmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU5LFxuICAgICAgNTcsXG4gICAgICAxNTEsXG4gICAgICAxMTksXG4gICAgICAxNjQsXG4gICAgICAzMSxcbiAgICAgIDEzMCxcbiAgICAgIDE0MixcbiAgICAgIDIxOSxcbiAgICAgIDg4LFxuICAgICAgNDEsXG4gICAgICA0NSxcbiAgICAgIDMsXG4gICAgICAxNDEsXG4gICAgICA1MixcbiAgICAgIDI0MixcbiAgICAgIDQ5LFxuICAgICAgMTk1LFxuICAgICAgNDksXG4gICAgICAxNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODgsXG4gICAgICAxMTksXG4gICAgICA3OSxcbiAgICAgIDI1MyxcbiAgICAgIDE1MyxcbiAgICAgIDE1NSxcbiAgICAgIDc1LFxuICAgICAgODYsXG4gICAgICAxODgsXG4gICAgICAxOTcsXG4gICAgICA1MixcbiAgICAgIDgyLFxuICAgICAgMTExLFxuICAgICAgMjM1LFxuICAgICAgMTM3LFxuICAgICAgMjUwLFxuICAgICAgMTQ4LFxuICAgICAgMjUwLFxuICAgICAgMTgyLFxuICAgICAgMjE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIko5QTlNSkdYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDY5MTI2ODAyOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3MzU1MTIxNTA1OTA0NTo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05ic3NxWUdFUHFXeExVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSGFod3hXNXFRVGxZSEgyWWhSVURpM3czbnU1SzNGM1RQcGpESHNXUUJUND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJrWVVidDBWTm5FcSsxVkxNVVFQMFNJcnJhTnArWWptTGdnWTZpS08rSENJbTRJOW1sS0I2NGFESlFSUkN3UlRkNWZkc1RCLzV1clQzVjdoRnBYemNDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2QWVSUjViTTB3TmlUSWhGbC9jZ0VrejhRTm5uLzVOU1hXTkJvZHFwanFCZUpKa3lPZlZJYTRsT2tyNlA2a0tOY2RsZjg4USsxelI4cmdOcUVTd09DZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDY5MTI2ODAyOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjg3ODg0N1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
