import Express  from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "../routes/auth.routes.js";
import typesRoutes from "../routes/types.routes.js";
import productRoutes from "../routes/products.routes.js";
import purchasesRoutes from "../routes/purchases.routes.js";
import historyRoutes from "../routes/historys.routes.js";
import providersRoutes from "../routes/providers.routes.js";
import path from "path";

const app = new Express();

app.use(morgan("dev"));
app.use(cors({
    origin: process.env.FRONTEND_HOST || "http://localhost:3000",
    credentials: true
}));
app.use(Express.json());
app.use(Express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(Express.static(path.join(path.resolve(), "public")));



app.use('/api', authRoutes);
app.use('/api/types', typesRoutes);
app.use('/api/products', productRoutes);
app.use('/api/purchases', purchasesRoutes);
app.use('/api/historys', historyRoutes);
app.use('/api/providers', providersRoutes);

app.get('*', (req, res) => {
    return res.sendFile(path.join(path.resolve(), "public", "index.html"))
})

export default app;