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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349012500275";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_07_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDYyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDcwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjMwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDI1LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA5LFxuICAgICAgICAxODcsXG4gICAgICAgIDg2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA5NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDMyLFxuICAgICAgICAzMixcbiAgICAgICAgMTU3LFxuICAgICAgICA2NCxcbiAgICAgICAgODgsXG4gICAgICAgIDk3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzksXG4gICAgICAgIDcxLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0LFxuICAgICAgICAzOSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDcyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODQsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDMwLFxuICAgICAgICA4MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI4LFxuICAgICAgICAzNixcbiAgICAgICAgMTYwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTExLFxuICAgICAgICAzLFxuICAgICAgICAxODEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MixcbiAgICAgICAgMTczLFxuICAgICAgICA5MSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1LFxuICAgICAgICA1NixcbiAgICAgICAgMjI2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNyxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTksXG4gICAgICAgIDM0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NixcbiAgICAgICAgOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDL05ud0VZdFYvd3ZlRU9zTXdablVBSk9GQ1hzWlpCdEwzRzlpaUpubVk4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMTI1MDAyNzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjYwOTE4N0YzOEI1NTcxNUJGNDJFQUMxQ0MyMTAyMDBGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjAxMzY0OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2UWJGVDJETlNkYUFDQjZWX0lSVWVnXCIsXG4gIFwicGhvbmVJZFwiOiBcImZlYWZlOTZjLWVlM2UtNGFlOC1hYzJiLTQwNThjODA2NTQ1MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzksXG4gICAgICAyMjYsXG4gICAgICAxMTQsXG4gICAgICAxNjcsXG4gICAgICAxMzAsXG4gICAgICAxMzYsXG4gICAgICA0MixcbiAgICAgIDExMyxcbiAgICAgIDEyMSxcbiAgICAgIDIwNyxcbiAgICAgIDM1LFxuICAgICAgNTksXG4gICAgICAxODksXG4gICAgICA4NCxcbiAgICAgIDk1LFxuICAgICAgMTA2LFxuICAgICAgMjAzLFxuICAgICAgOTcsXG4gICAgICAxOTYsXG4gICAgICAxODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICAxMjcsXG4gICAgICAyNixcbiAgICAgIDIwNixcbiAgICAgIDM5LFxuICAgICAgMTAwLFxuICAgICAgMjAzLFxuICAgICAgMixcbiAgICAgIDE1MSxcbiAgICAgIDUzLFxuICAgICAgMTQyLFxuICAgICAgNTgsXG4gICAgICAzNyxcbiAgICAgIDIxNixcbiAgICAgIDkxLFxuICAgICAgMTgsXG4gICAgICA0LFxuICAgICAgNjcsXG4gICAgICAxMDIsXG4gICAgICAxNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNFBMREs4TlRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTI1MDAyNzU6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcInByb2Zlc3NvciBPZ2J1amlcIixcbiAgICBcImxpZFwiOiBcIjE0MDg4Mzk4NzAxNzc5MDoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ozTWxZa0RFTWF2ajdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZnlucFdrdlF5enAxMllIL29ZZTZuZTF3bHNUY0QvWHUrektxeE1GaXdFbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzU1oyUVZIWFJ0V1RUZGNqVmE4WEV6ekxsOFk0M3Mrb1Z0U2VCWWhUYzFNK0lpemgrSFlUWU9yNUVYVHc4UFA2NGpwRXJCSFlxeTJvdnI0My9RcnRCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIOFJEWGJWVDlkWmdhOCt2V1lmWS9TcFdrMzZRaWxYMElnR2dsTW01TkZwRHYzNCtYQ0h1VEt0Mks2Mm5qek9hbE0yNll4aXl2MElBY1I4YWptZnBCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDEyNTAwMjc1OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMDEzNjQyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTUk4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNSTguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtbm5RelV4UW15Nlh1TWlSMWFnVzRjamRsdkxxay82dXhkdVkyMVQ1ZGxBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgyNDUzNDU1NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjAxMzU5MTQzMVwifSIKfQ==="  // PUT your SESSION_ID 


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
