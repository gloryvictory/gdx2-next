const host = process.env.HOST_BCK || "r48-vws03.zsniigg.local" 
// const host = process.env.HOST_BCK || "localhost" 
const port = process.env.PORT_BCK || "8001" 

export const cfg = {
  delay:60,
  host:host,
  port:port,
}
