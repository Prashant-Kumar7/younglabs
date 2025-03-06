import express, {Response , Request} from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(
    cors({
      origin: "https://younglabs.tumsab.xyz",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: false, 
    })
  );
app.use(express.json())

app.get("/api/greet", (req: Request, res: Response) => {
    const name = req.query.name as string;
    res.json({
        "message": `Hello, ${name}! Welcome to Younglabs.`
    })
});

app.listen(port , ()=>{
    console.log(`server is running on port ${port}`)
})
