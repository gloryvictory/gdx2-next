// import { Metadata } from "next";

import pool from "../../../services/pg";

const fetchDataFromDB = async () => {
  
  const client = await pool.connect();

  try {
    if (client) {
      console.log("connected to PG");
      const sql = 'SELECT id, web_uk_id, vid_iz, tgf, n_uk_tgf, n_uk_rosg, name_otch, name_otch1, avts, god_nach, god_end, org_isp, in_n_tgf, in_n_rosg, nom_1000, \"method\", \"scale\" FROM gdx2map.stp;'
      // const sql = 'SELECT json_agg(row_to_json(stp)) FROM gdx2map.stp;'
      console.log("SQL: ", sql);
      const  result  = await client.query(sql);

      console.log("Fetched result: ", result);
      const rows = result.rows;
      console.log("Fetched : ", rows);
      client.release();
      return rows;
    }

  } catch (error) {
    console.log("Error fetched data from db: ", error);
    throw error;
  }
}
  



export default async function MapAPI() {

  const data = await fetchDataFromDB();
  console.log("data from db: ", data);


  return(
    <>
    <h3>Сделано для MapAPI  </h3>
    <p>Сделано для MapAPI  </p>
    <p>Сделано для MapAPI  </p>
    <p>Сделано для MapAPI  </p>
    <p>Сделано для MapAPI  </p>
    <p>Сделано для MapAPI  </p>
    <p>Сделано для MapAPI  </p>
    <p>Сделано для MapAPI  </p>
    <p>Сделано для MapAPI  </p>
    <p>Сделано для MapAPI  </p>
    <p>{data}  </p>
    
    </>
    
  ) 
}
