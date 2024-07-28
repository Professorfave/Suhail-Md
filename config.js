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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_23_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDksXG4gICAgICAgIDUwLFxuICAgICAgICAxMDksXG4gICAgICAgIDYzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDY1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMxLFxuICAgICAgICA5MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTczLFxuICAgICAgICA1NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM0LFxuICAgICAgICAxLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICA2LFxuICAgICAgICA0LFxuICAgICAgICA0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1LFxuICAgICAgICA0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxODIsXG4gICAgICAgIDczLFxuICAgICAgICAyMTYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMCxcbiAgICAgICAgODYsXG4gICAgICAgIDMwLFxuICAgICAgICA4LFxuICAgICAgICA4NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDY3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDM1LFxuICAgICAgICAwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYxLFxuICBcImFkdlNlY3JldEtleVwiOiBcInFBQUptejZlSERoeXh0Q2tDQlY2NVFJTVk1YVErWG9LNEgzTmM4MnRKSk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRfXzM1MHRmVHpxTlg4ZlFXYl9UMkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGVkNTU0MjUtYzY0OS00MmM1LWE2ZGItYTYzYjQ1NzYyOTEwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc4LFxuICAgICAgMTM1LFxuICAgICAgOTIsXG4gICAgICAxMDQsXG4gICAgICAxODUsXG4gICAgICA4OCxcbiAgICAgIDMzLFxuICAgICAgNzIsXG4gICAgICAzLFxuICAgICAgODYsXG4gICAgICAzNyxcbiAgICAgIDIsXG4gICAgICAxMixcbiAgICAgIDIwLFxuICAgICAgMTgzLFxuICAgICAgMjM0LFxuICAgICAgMTg2LFxuICAgICAgMTczLFxuICAgICAgOSxcbiAgICAgIDg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOSxcbiAgICAgIDI0NCxcbiAgICAgIDE2MSxcbiAgICAgIDU3LFxuICAgICAgMjA4LFxuICAgICAgMjE4LFxuICAgICAgMTkwLFxuICAgICAgMjI4LFxuICAgICAgNTMsXG4gICAgICAyNTIsXG4gICAgICAxMjksXG4gICAgICAyMzcsXG4gICAgICAyNTIsXG4gICAgICA1MSxcbiAgICAgIDI0NCxcbiAgICAgIDExOCxcbiAgICAgIDkwLFxuICAgICAgMjE2LFxuICAgICAgMTA0LFxuICAgICAgMjA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5MQTFBSDJIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDEyNTAwMjc1OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJwcm9mZXNzb3IgT2didWppXCIsXG4gICAgXCJsaWRcIjogXCIxNDA4ODM5ODcwMTc3OTA6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKN01sWWtERVBYZ21iVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZ5bnBXa3ZReXpwMTJZSC9vWWU2bmUxd2xzVGNEL1h1K3pLcXhNRml3RW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL0llL3Y0UFIwdFBqRDFzanhBY0lpbVdaM0c2MEpmeHBMRzdJaGpWOVEzM1I0aEJJUjNVYTYycUZYZjllVDZxSmRkM2p6ODljMWVBYWREVVIrUFZqRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSUNWUVEzNE9wZVNTWDR3WjJRVy9VbjdsUU9HaW1sSkRzVy9IWExZc0NpTlJpKzN6M0IzSzE1cU9OTnIxeFhqdXVTVm5Bd2dMZmZjS1RGa21Dd09QQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxMjUwMDI3NTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjE4MzgwMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1JOFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTUk4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibW5uUXpVeFFteTZYdU1pUjFhZ1c0Y2pkbHZMcWsvNnV4ZHVZMjFUNWRsQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MjQ1MzQ1NTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIwMTM1OTE0MzFcIn0iCn0="  // PUT your SESSION_ID 


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
