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
=



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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_40_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTExLFxuICAgICAgICA0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIsXG4gICAgICAgIDczLFxuICAgICAgICA5OSxcbiAgICAgICAgODAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAxMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk1LFxuICAgICAgICA0NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDMzLFxuICAgICAgICA2MCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ1LFxuICAgICAgICAzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTksXG4gICAgICAgIDc3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTksXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTUsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzLFxuICAgICAgICAzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM0LFxuICAgICAgICA1NixcbiAgICAgICAgMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMixcbiAgICAgICAgMjUxLFxuICAgICAgICA1LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDExMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTksXG4gICAgICAgIDMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwLFxuICAgICAgICA0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDQxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODksXG4gICAgICAgIDQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOSxcbiAgICAgICAgODMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzksXG4gICAgICAgIDExMixcbiAgICAgICAgNjgsXG4gICAgICAgIDExMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKZEZBaEhFb0VpTEh4Z0xmUWJXQnJDQ3pCQUxFZmZzUEQ5RHVCc094V1VFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJUbERHbGxFZFRnMmV3bHN6OG1maEhBXCIsXG4gIFwicGhvbmVJZFwiOiBcImM3Nzc0NTI0LTY4MWEtNGNmYS04MDJkLTA0OTdhMTAxOGQ0OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDYsXG4gICAgICAxNzUsXG4gICAgICAxNDUsXG4gICAgICA5OSxcbiAgICAgIDE4LFxuICAgICAgOCxcbiAgICAgIDEyNCxcbiAgICAgIDE4MyxcbiAgICAgIDE4LFxuICAgICAgOCxcbiAgICAgIDU1LFxuICAgICAgMTc5LFxuICAgICAgMTcyLFxuICAgICAgMTEwLFxuICAgICAgMjgsXG4gICAgICAxOTcsXG4gICAgICAyMSxcbiAgICAgIDE5OCxcbiAgICAgIDExNixcbiAgICAgIDIxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNixcbiAgICAgIDE0MixcbiAgICAgIDY1LFxuICAgICAgOSxcbiAgICAgIDE1MCxcbiAgICAgIDM4LFxuICAgICAgMTcsXG4gICAgICAxNzAsXG4gICAgICA5OSxcbiAgICAgIDExNCxcbiAgICAgIDUsXG4gICAgICAyMzksXG4gICAgICAxMjQsXG4gICAgICAxMzUsXG4gICAgICAxNjIsXG4gICAgICAzNCxcbiAgICAgIDEyMixcbiAgICAgIDQ3LFxuICAgICAgMTM3LFxuICAgICAgMTM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIks4TEQzRVlTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDY5MTI2ODAyOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3MzU1MTIxNTA1OTA0NTo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05qc3NxWUdFSkMrMUxVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSGFod3hXNXFRVGxZSEgyWWhSVURpM3czbnU1SzNGM1RQcGpESHNXUUJUND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMTEp4YUI0R0NIQTRhRVhFQzVyd3hzTVM5MDNXaU5tQ1JNemZ3T29YK3htZTJucVU4ZkJmMzZxTVNYT0JRTy9HMWR4eEJKbjR5LzVzVEI3dmIveFJDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5MXFpZW50VzJaa29oTFhXNzh2cDV6d2xiSEZ5ZmNkanhMQVQ0SzByMUlreVl5UXFWL3oyeENxNGZhdGxIY1JnMTdhQ1JvUDFiTnp3R0Z6UXRLV0ZBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDY5MTI2ODAyOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzE0NjAwNVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=="  // PUT your SESSION_ID 


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
