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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_19_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5LFxuICAgICAgICAwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcyLFxuICAgICAgICA1NixcbiAgICAgICAgMTkxLFxuICAgICAgICA0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNixcbiAgICAgICAgNixcbiAgICAgICAgMTI4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDY3LFxuICAgICAgICAxMDksXG4gICAgICAgIDc3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMyxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDkwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk0LFxuICAgICAgICA3NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzLFxuICAgICAgICA5NCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNixcbiAgICAgICAgMTE0LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDMwLFxuICAgICAgICA2NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDksXG4gICAgICAgIDk0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDEzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYsXG4gICAgICAgIDI1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQsXG4gICAgICAgIDk5LFxuICAgICAgICA2OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDEwNixcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDYwLFxuICAgICAgICAxODMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjksXG4gICAgICAgIDc1LFxuICAgICAgICAyNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDgyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDczLFxuICAgICAgICA2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTksXG4gICAgICAgIDYwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPeDIyYWYycWgrOEtvSVVReVloL3BUQS8xaFFmaWRXdzA4R2JoTHFZL2x3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxSFNXa0RKc1NPZURFWGFBX0hNVmhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMxNzMwZDAxLTEyZTAtNGJlZi04NTJhLWZiNzMwMDA2MDE3ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDMsXG4gICAgICA4NCxcbiAgICAgIDE1MSxcbiAgICAgIDEyNSxcbiAgICAgIDEyNixcbiAgICAgIDE3NSxcbiAgICAgIDIyOCxcbiAgICAgIDE5NixcbiAgICAgIDI0LFxuICAgICAgNTQsXG4gICAgICAxMjgsXG4gICAgICA5NSxcbiAgICAgIDEyNCxcbiAgICAgIDE5MSxcbiAgICAgIDE5OSxcbiAgICAgIDI0MCxcbiAgICAgIDE0NyxcbiAgICAgIDE5NixcbiAgICAgIDk3LFxuICAgICAgMTM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NixcbiAgICAgIDExLFxuICAgICAgMTczLFxuICAgICAgMTI0LFxuICAgICAgMTU1LFxuICAgICAgMzIsXG4gICAgICAxNDQsXG4gICAgICAyMzIsXG4gICAgICAxODQsXG4gICAgICAyOSxcbiAgICAgIDIsXG4gICAgICAxOTUsXG4gICAgICA3OCxcbiAgICAgIDEyOSxcbiAgICAgIDE4MixcbiAgICAgIDIyNixcbiAgICAgIDk5LFxuICAgICAgMTYsXG4gICAgICA1MCxcbiAgICAgIDIxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaSjZCOU1MNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxMjUwMDI3NToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwicHJvZmVzc29yIE9nYnVqaVwiLFxuICAgIFwibGlkXCI6IFwiMTQwODgzOTg3MDE3NzkwOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnpNbFlrREVJaXovYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmeW5wV2t2UXl6cDEyWUgvb1llNm5lMXdsc1RjRC9YdSt6S3F4TUZpd0VvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhMbGg2V1Iwd0NQZjIyU2NvdzVBYklRK3dSblh6UGJlWHBjbVJnTHhPdkI0NkIyTGV3bndBN1ZkeTRZaWRtaE9CQWhJTmRTdnh2Ly9FWU1iMmU5aEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktHRDZrQUlMVUlmOHFvWFpFS3NxS0NoTWRsS3BuNytmbnRibXhjNDd5eCs0ZDlBaXhGVkdWT2pRamhFVThYdE42SGpNRGxKeXVHY3JvdVpuN21lK0FnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTI1MDAyNzU6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3MTkxNzlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9="  // PUT your SESSION_ID 


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
