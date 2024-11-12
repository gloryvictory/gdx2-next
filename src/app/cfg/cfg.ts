// const host = process.env.HOST_BCK || "r48-vws03.zsniigg.local" 
// const gdx2_host = process.env.HOST_BCK || "localhost" 

const server = "localhost:8001"
const server2 = "localhost:7800"

const gdx2_host_port = process.env.HOST_BCK ||  server
const gdx2map_host_port = process.env.GDX2MAP_HOST_PORT || server2
const gdx2map_db_name = "gdx2"

export const cfg = {
  delay:60,
  gdx2_host_port      : `${gdx2_host_port}`,
  gdx2_api            : `api/v1`,
  gdx2map_db_name: `${gdx2map_db_name}`,
  gdx2map_host_port_db_name  : `http://${gdx2map_host_port}/${gdx2map_db_name}.`,
  
}


// const gdx2_port = process.env.PORT_BCK || "8001" 
// const gdx2map_port = process.env.GDX2MAP_PORT || "7800" 
