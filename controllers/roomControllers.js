import { getRoomsMessage } from "@/constants/responseConstant";

const allRooms = (req, res) => {
    res.status(200).json({
        success: true,
        message: getRoomsMessage,
    });
};

export { allRooms };