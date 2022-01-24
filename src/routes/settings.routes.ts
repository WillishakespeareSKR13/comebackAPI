import { Router } from "express";
import {
  updateSettings,
  getSettings,
  deleteSettings,
  getSettingsById,
  getSettingsByUserId,
  addSettings,
} from "../controllers/settings.controllers";
const router = Router();
import passport from "passport";

router.post(
  "/addSettings",
  passport.authenticate("jwt", { session: false }),
  addSettings
);
router.get(
  "/settings",
  passport.authenticate("jwt", { session: false }),
  getSettings
);
router.post(
  "/settingsById",
  passport.authenticate("jwt", { session: false }),
  getSettingsById
);
router.post(
  "/getSettingsByUserId",
  passport.authenticate("jwt", { session: false }),
  getSettingsByUserId
);
router.put(
  "/settings",
  passport.authenticate("jwt", { session: false }),
  updateSettings
);
router.delete(
  "/settings",
  passport.authenticate("jwt", { session: false }),
  deleteSettings
);

export default router;
