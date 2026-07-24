import { Router, type IRouter } from "express";
import healthRouter from "./health.js";
import swapRouter from "./swap.js";
import transactionsRouter from "./transactions.js";
import bridgeRouter from "./bridge.js";

const router: IRouter = Router();

router.use(healthRouter);
router.use(swapRouter);
router.use(transactionsRouter);
router.use(bridgeRouter);

export default router;
