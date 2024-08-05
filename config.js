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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_57_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMixcbiAgICAgICAgMjQ5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2MixcbiAgICAgICAgNjksXG4gICAgICAgIDcxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAxLFxuICAgICAgICA3MixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MixcbiAgICAgICAgNjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDYwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY2LFxuICAgICAgICAzNCxcbiAgICAgICAgNTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkxLFxuICAgICAgICA1NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDE5LFxuICAgICAgICA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNixcbiAgICAgICAgMTY5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDQxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImZDcmNQK3luQWp4a3dMUUhjTjBwTEh5MXdRNUJiRDkwMHQ1MCs2MFVpaUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInd0OXFLSUgyUUUyRlFxMGtCbWNFSFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmY2M2ZhMmItNmY0Yi00ZjEzLTg2NzQtYjc4YjI4ZjI2MGZjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM5LFxuICAgICAgMTQ0LFxuICAgICAgMTMyLFxuICAgICAgMTkwLFxuICAgICAgNjEsXG4gICAgICA2NCxcbiAgICAgIDE4MixcbiAgICAgIDQsXG4gICAgICAxMzcsXG4gICAgICAyMTgsXG4gICAgICA4NCxcbiAgICAgIDQ5LFxuICAgICAgMTk5LFxuICAgICAgMjMsXG4gICAgICAyMTUsXG4gICAgICAxMzAsXG4gICAgICAxMTksXG4gICAgICA5OCxcbiAgICAgIDg0LFxuICAgICAgODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA4LFxuICAgICAgMzIsXG4gICAgICAyMzcsXG4gICAgICAxNzQsXG4gICAgICAxMjgsXG4gICAgICA3MixcbiAgICAgIDM1LFxuICAgICAgODUsXG4gICAgICAxNjksXG4gICAgICA4NixcbiAgICAgIDQzLFxuICAgICAgMTc1LFxuICAgICAgMjQ5LFxuICAgICAgMjA1LFxuICAgICAgNjEsXG4gICAgICAyNTQsXG4gICAgICAxMjMsXG4gICAgICAyNDAsXG4gICAgICAyNDUsXG4gICAgICAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZRMVdRSkpMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDY5MTI2ODAyOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3MzU1MTIxNTA1OTA0NTo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05mc3NxWUdFSUdseExVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSGFod3hXNXFRVGxZSEgyWWhSVURpM3czbnU1SzNGM1RQcGpESHNXUUJUND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0ZVMwdythYnZLNi9oaFFzeExNUjMvMVcraW5mYzdrRVdySmFVTFZVaDNKMm05T2NlWWNMYXNYS0x6aVBCblJHM25HMzZpQlYyejFjMHNjaXpESHRBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0TnR5Sno0ZXZHeHdpUS9NK2dheWxXaFZNcUtUYUpEbkQzaVZtdFU2RUp4UlF3TTMrUitIbm9XZVlWU3JlN2xQbWYvU28xT3R0THgwVnBOOEdRbVlDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDY5MTI2ODAyOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjg4MDY0NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxPQ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTE9DLmpzb24iOiAie1wia2V5RGF0YVwiOlwiR3Z0OG45aktPVEJuSVVKa2VlYXExOEZDNTBYRTNHN1VvQ0tuQXJrN0tUTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjkxMTM3NjIyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIyODc4OTc3MzYyXCJ9Igp9="  // PUT your SESSION_ID 


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
