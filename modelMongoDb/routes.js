import express  from 'express';

const router = express.Router();

// Rota de teste
router.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

router.post("/newProducts", async (req,res)=>{
const newproduct = await newproduct.create(req.body)
res.json(newproduct)

})


export default router;
