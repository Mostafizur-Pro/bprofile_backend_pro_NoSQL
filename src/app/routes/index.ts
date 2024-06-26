import express from "express";

import { userRoutes } from "../modules/User/user.routes";
import { clientRoutes } from "../modules/Client/client.routes";
import { hallRoomPostRoutes } from "../modules/hallRoom/hallRoom.routes";
import { paidImageRoutes } from "../modules/paidImage/paidImage.routes";
import { paidVideoRoutes } from "../modules/paidVideo/paidVideo.routes";
import { adminRoutes } from "../modules/Admin/admin.routes";
import { employeeRoutes } from "../modules/employee/employee.routes";
import { authRoutes } from "../modules/Auth/auth.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/",
    route: authRoutes,
  },
  // {
  //   path: "/locations",
  //   route: locationRoutes,
  // },
  // {
  //   path: "/images",
  //   route: imageRoutes,
  // },
  // {
  //   path: "/message",
  //   route: messageRoutes,
  // },
  // {
  //   path: "/question",
  //   route: questionRoutes,
  // },
  {
    path: "/admin",
    route: adminRoutes,
  },
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/client",
    route: clientRoutes,
  },
  {
    path: "/employee",
    route: employeeRoutes,
  },
  {
    path: "/hall_room_post",
    route: hallRoomPostRoutes,
  },
  {
    path: "/paid_image",
    route: paidImageRoutes,
  },
  {
    path: "/paid_video",
    route: paidVideoRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
