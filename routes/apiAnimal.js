import  express  from "express"
const animal = express();
import {db} from '../db/conn.js'

animal.get('', async (req,res)=>{

    const sql = `select * from tbl_animal`;
    const result = await db.query(sql);
    res.json(result)

} )

animal.post('', async (req, res)=>{


    const { nombre , sonido} = req.body;

    const params =  [nombre, sonido];

    const sql = `insert into tbl_animal 
                (nombre, sonido )
                values 
                ($1, $2) returning * `

    const result = await db.query(sql , params);

    res.json(result);
    
})

export { animal }
