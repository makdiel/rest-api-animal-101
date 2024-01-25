import  express  from "express"
const animal = express();
import {db} from '../db/conn.js'

animal.get('', async (req,res)=>{

    const sql = `select * from tbl_animal order by id`;
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

animal.put( '/:id', async (req, res)=>{

    const {sonido , nombre} = req.body
    const {id} =req.params

    const params = [
        nombre, 
        sonido, 
        id
    ]

    const sql = `update tbl_animal 
                  set
                   nombre = $1, 
                   sonido = $2
                where id = $3 returning *`

    const result = await db.query(sql, params)

    res.json(result);

} )

animal.delete('/:id', async (req, res)=>{

    const params = [req.params.id];

    const sql = `delete from tbl_animal where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);

})

export { animal }
