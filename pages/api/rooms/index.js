import nextConnect from "next-connect";

import { allRooms } from "@/controllers/roomControllers";

const handler = nextConnect();

handler.get(allRooms);

export default handler;