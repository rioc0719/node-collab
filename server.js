"use strict";var express=require("express"),app=express(),compression=require("compression"),port=process.env.PORT||8e3;app.use(compression({threshold:512})),app.use(express["static"](__dirname+"/public")),app.listen(port,function(){return console.log("listening on *:"+port)});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci1lczYuanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsInJlcXVpcmUiLCJhcHAiLCJjb21wcmVzc2lvbiIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsInVzZSIsInRocmVzaG9sZCIsIl9fZGlybmFtZSIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUNBLFlBQ0EsSUFBSUEsU0FBVUMsUUFBUSxXQUNwQkMsSUFBTUYsVUFDTkcsWUFBY0YsUUFBUSxlQUNsQkcsS0FBT0MsUUFBUUMsSUFBSUMsTUFBUSxHQUNqQ0wsS0FBSU0sSUFBSUwsYUFDTk0sVUFBVyxPQUViUCxJQUFJTSxJQUFJUixRQUFPLFVBQVFVLFVBQVksWUFDbkNSLElBQUlTLE9BQU9QLEtBQU0sV0FDZixNQURxQlEsU0FBUUMsSUFBSSxrQkFBb0JUIiwiZmlsZSI6InNlcnZlci1lczYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmpzaGludCBub2RlOiB0cnVlLCBicm93c2VyOiBmYWxzZSAqL1xuJ3VzZSBzdHJpY3QnO1xubGV0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyksXG4gIGFwcCA9IGV4cHJlc3MoKSxcbiAgY29tcHJlc3Npb24gPSByZXF1aXJlKCdjb21wcmVzc2lvbicpO1xuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgODAwMDtcbmFwcC51c2UoY29tcHJlc3Npb24oe1xuICB0aHJlc2hvbGQ6IDUxMlxufSkpO1xuYXBwLnVzZShleHByZXNzLnN0YXRpYyhfX2Rpcm5hbWUgKyAnL3B1YmxpYycpKTtcbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4gY29uc29sZS5sb2coJ2xpc3RlbmluZyBvbiAqOicgKyBwb3J0KSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=