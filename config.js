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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_54_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDg1LFxuICAgICAgICA0MixcbiAgICAgICAgMjE1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTExLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODQsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDYwLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjksXG4gICAgICAgIDU0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA2OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MixcbiAgICAgICAgMjI5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzksXG4gICAgICAgIDgzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MixcbiAgICAgICAgMjA4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDg0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjksXG4gICAgICAgIDEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA5NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyLFxuICAgICAgICAxNixcbiAgICAgICAgMzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDk3LFxuICAgICAgICAzOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL09iOUNBNS9zUTFrN3UwWnFDRkVqaHBxb2Q2d3RMRmt2QXh6bXhrUFczMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDY5MTI2ODAyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0NkE5REY5QUFFMUZCNDE3MkJCMzhBQkZDQUNFQjI3QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIyNjEyNDVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZkJuMXFhb25URzZjNFliczFIUlpwUVwiLFxuICBcInBob25lSWRcIjogXCI0MTJkYzE5Zi1kM2NmLTQ0MTgtODc5OC1hMDYwMDBlYTQ1ZDVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ4LFxuICAgICAgMTc5LFxuICAgICAgMTkxLFxuICAgICAgMjE3LFxuICAgICAgMjM1LFxuICAgICAgNDIsXG4gICAgICAxMzMsXG4gICAgICAzNyxcbiAgICAgIDU1LFxuICAgICAgMjM2LFxuICAgICAgNDgsXG4gICAgICAyMDQsXG4gICAgICAxNSxcbiAgICAgIDExOCxcbiAgICAgIDIzNixcbiAgICAgIDE3NSxcbiAgICAgIDQxLFxuICAgICAgMTUwLFxuICAgICAgMjMsXG4gICAgICAxMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzYsXG4gICAgICAxNjIsXG4gICAgICAyNTIsXG4gICAgICAzOSxcbiAgICAgIDE5NyxcbiAgICAgIDEsXG4gICAgICAxMjgsXG4gICAgICA1NSxcbiAgICAgIDE0NyxcbiAgICAgIDExNyxcbiAgICAgIDYyLFxuICAgICAgMjQ2LFxuICAgICAgNjEsXG4gICAgICAxMTYsXG4gICAgICAyMjMsXG4gICAgICA4OSxcbiAgICAgIDE4OSxcbiAgICAgIDEzOCxcbiAgICAgIDE1OCxcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLSjRLQzY5S1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA2OTEyNjgwMjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzM1NTEyMTUwNTkwNDU6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOWHNzcVlHRVBPOW5yVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhhaHd4VzVxUVRsWUhIMlloUlVEaTN3M251NUszRjNUUHBqREhzV1FCVDQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUGkzRTdqaUNkL3JpbGhFYXFBdklaSW1XUFBRT1FYZkdPQ2ZuK3dmcW9FODN2Q0hwd0syS0Z6ZmdzU0ZGeDJxYzloT0RjUkVEU25QQzJzM1I0UFFsRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibDNxN2cxSnY2RktGOFpVU1kwaXNDYlA3d2Q1OWxrMUozOXQ3Szh6NEZiSWlNZGMwSnBZL2xRaklRaDB5VTMrK0NTdWhHMVpmUlZqOWhyMExVa1FXZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2OTEyNjgwMjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyNjEyMzlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
