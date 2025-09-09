const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config(); // Loads environment variables

const app = express();

app.use(cors());
app.use(express.json());

// PostgreSQL connection pool
const db = new Pool({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
});

// Test connection
db.connect()
  .then(() => console.log('✅ Connected to PostgreSQL'))
  .catch((err) => console.error('❌ Connection error:', err));

// Route to add a todo item
app.post('/add', async (req, res) => {
  const {text} = req.body;
  console.log('Received item:', text);

  try {
    const query = 'INSERT INTO todoitems (item_val) VALUES ($1) RETURNING *';
    const result = await db.query(query, [req.body.text]);
  
    console.log('✅ Added:', result.rows[0]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('❌ Error inserting:', err);
    res.status(500).send('Insert failed');
  }
});
 
// Optional: GET route to fetch all todo items
app.get('/', async (req, res) => { 
  try {
    const { rows } = await db.query('SELECT * FROM todoitems ORDER BY id');
    res.json(rows);
  } catch (err) { 

    res.status(500).send('Error fetching items');
  }
});

app.put ('/update',async (req,res)=>{
  const {id,text}=req.body;
  console.log('Updating item:',id,text);
  try{
    const query='UPDATE todoitems SET item_val=$2 WHERE id=$1 RETURNING *';
    const result=await db.query(query,[id,text]);
    console.log('✅ Updated:',result.rows[0]);
  }
  catch(err){
    console.error('Error updating:',err);
    res.status(500).send('Update failed');

}
});

app.delete('/delete',async(req,res)=>{
  const {id}=req.body;
  console.log('Deleting item:',id);  
  try{
    const query='delete from todoitemS WHERE id=$1 RETURNING *';
    const result=await db.query(query,[id]);
    console.log('✅ deleted:',result.rows[0]);
  }
  catch(err){
    console.error('Error updating:',err);
    res.status(500).send('Update failed');

} });



app.listen(3000, () => {
  console.log('🚀 Server is running on this http://localhost:3000');
});
