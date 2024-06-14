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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347034169269";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_36_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE2LFxuICAgICAgICA5NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc3LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTExLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDM2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDk0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NixcbiAgICAgICAgODMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDYyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDYwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDksXG4gICAgICAgIDg2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyLFxuICAgICAgICAzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlJoOHF0TTZZR2dDY2swZjJyL2pNWTN5WHN6bTBNdkU5cmZKTXJwZjNJQUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk12VTdyMmp0U2p5UVdkUXZQWDFjZFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzY2OTU3NjUtNDNhOS00ZWI3LWEzYzgtZWIwNzE2ZjdjMWQzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NSxcbiAgICAgIDcsXG4gICAgICA5OSxcbiAgICAgIDg4LFxuICAgICAgOTYsXG4gICAgICAxNzYsXG4gICAgICA4OCxcbiAgICAgIDE5NSxcbiAgICAgIDMyLFxuICAgICAgMjM5LFxuICAgICAgNjAsXG4gICAgICAzMixcbiAgICAgIDIwMSxcbiAgICAgIDE5MixcbiAgICAgIDYyLFxuICAgICAgMjUxLFxuICAgICAgNzEsXG4gICAgICAyMixcbiAgICAgIDE3MCxcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMzLFxuICAgICAgMTkwLFxuICAgICAgMTE2LFxuICAgICAgNTgsXG4gICAgICAxNTMsXG4gICAgICA1NixcbiAgICAgIDE1NSxcbiAgICAgIDE4OCxcbiAgICAgIDE0NCxcbiAgICAgIDE0OCxcbiAgICAgIDE0NixcbiAgICAgIDkzLFxuICAgICAgOTMsXG4gICAgICAzMSxcbiAgICAgIDIzLFxuICAgICAgMTAxLFxuICAgICAgMzcsXG4gICAgICAxNDAsXG4gICAgICAyNixcbiAgICAgIDgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpQQjkyNFNDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDM0MTY5MjY5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg5MzIyODcxMTExNzY0OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1RwMTdvREVQU3FzYk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWOTJiZE8zVFpHczRiMHF6QUlSaHd3QjQvekhHQlBhL2g3U2xVbGlJSVVNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIllvaVVvMlJmUmFEcFVNY0VoRkwwVmVRVS9EWVJDb1haK0tpTmNTcWdPRWRPaUloakhOdmVZci9lUmdUaXYzT0xrVHFHbjIyaTloTWFCYUJPOXJiQ0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk83NmVoYVlIUHdzQ0pCaklUbFROZFBhU0lWUUJJTWNwNzhmVnNwYlJHQnFMaGRHa1l3Ry9ZTGtyTW50REt5TTgyWlpQZFFsejdlaVZmVklrNmd3a2hBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMzQxNjkyNjk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODM3NTgwMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
