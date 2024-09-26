// const host = process.env.HOST_BCK || "r48-vws03.zsniigg.local" 
const gdx2_host = process.env.HOST_BCK || "localhost" 
const gdx2_port = process.env.PORT_BCK || "8001" 
const gdx2_map_host = process.env.GDX2MAP_SERVER_HOST || "localhost" 
const gdx2_map_port = process.env.GDX2MAP_SERVER_PORT || "8002" 


export const cfg = {
  delay:60,
  gdx2_host_port     : `${gdx2_host}:${gdx2_port}`,
  gdx2_map_host_port : `${gdx2_map_host}:${gdx2_map_port}`,

}
