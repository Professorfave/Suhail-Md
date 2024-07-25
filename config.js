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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_53_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1MixcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg1LFxuICAgICAgICA0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4LFxuICAgICAgICAxODcsXG4gICAgICAgIDU2LFxuICAgICAgICA2NixcbiAgICAgICAgMTMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5LFxuICAgICAgICAyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDgxLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI3LFxuICAgICAgICA3NCxcbiAgICAgICAgOTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQwLFxuICAgICAgICA5NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEsXG4gICAgICAgIDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA3MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDM2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODksXG4gICAgICAgIDY1LFxuICAgICAgICAyMSxcbiAgICAgICAgNixcbiAgICAgICAgMTUyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDkwLFxuICAgICAgICA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODIsXG4gICAgICAgIDU0LFxuICAgICAgICA2NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5LFxuICAgICAgICA5NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NixcbiAgICAgICAgOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiM2F0LzFob1VvWlg3QlViUFM0NzhJdGJtQnBOUElQbThCYmNLZENzcS85ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDY5MTI2ODAyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1QjIzQkE3OTE1MTU0RTczOUIyMTJBNDYzQTExNkNEQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4MzI4MTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDY5MTI2ODAyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3RDE0NjRBOThBMzg4MURDQTEzODJBQjI0NkJFNjY0RFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4MzI4MTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYVEzTnBKdS1TejJ5cXhrOGxxZXd4UVwiLFxuICBcInBob25lSWRcIjogXCI3NGE0NTgyYy05NDJhLTQ5YTUtODEzZi01NDZmY2M3ODZiMWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODIsXG4gICAgICA0NixcbiAgICAgIDE1MCxcbiAgICAgIDE5MCxcbiAgICAgIDM0LFxuICAgICAgMTMzLFxuICAgICAgMTY0LFxuICAgICAgMTkyLFxuICAgICAgMTcwLFxuICAgICAgMTcwLFxuICAgICAgMjQ4LFxuICAgICAgNjYsXG4gICAgICAxODgsXG4gICAgICA1NCxcbiAgICAgIDIwMCxcbiAgICAgIDEyMyxcbiAgICAgIDk0LFxuICAgICAgMTQ5LFxuICAgICAgNDEsXG4gICAgICAzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTYsXG4gICAgICAxNDgsXG4gICAgICAzOSxcbiAgICAgIDIzOSxcbiAgICAgIDExNixcbiAgICAgIDIzMyxcbiAgICAgIDE2MSxcbiAgICAgIDIwNyxcbiAgICAgIDI1LFxuICAgICAgOTYsXG4gICAgICAxMzYsXG4gICAgICA4NixcbiAgICAgIDU4LFxuICAgICAgMjE0LFxuICAgICAgMjgsXG4gICAgICAyMDYsXG4gICAgICAxOTksXG4gICAgICA0NyxcbiAgICAgIDE1MixcbiAgICAgIDY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkQxUFRRODhQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDY5MTI2ODAyOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3MzU1MTIxNTA1OTA0NToyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05Uc3NxWUdFT1NxaExVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSGFod3hXNXFRVGxZSEgyWWhSVURpM3czbnU1SzNGM1RQcGpESHNXUUJUND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxSUlKSFR6M0dTbFllRWx2UU95UnpLSUhoMDg2bEdxZTdQOTF4Ym9FWG5DL2xwTSsxZkdLeU5rRDloSE1sZTBSY2w4eTd6b2dOMGl1VGRCZXJzTDhEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLOXJDaWM5d1N5Ull1RXhac3ZMbUhrc1lHUmhwMWVZU2drcFlReG5BTVB2VEZoSEFXY1N0Zk93TXlPOVZxYkJ0MnU2OW9odmxHRjZ1dzVuc1VseXZEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDY5MTI2ODAyOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTgzMjgwOFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
