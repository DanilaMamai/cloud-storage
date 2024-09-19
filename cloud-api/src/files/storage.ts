import { diskStorage } from "multer";
import { v4 } from "uuid";

export const fileStorage = diskStorage({
  destination: "./uploads",
  filename: (_req, file, callback) => {
    const fileExtensionName = file.originalname.split(".").pop();
    callback(null, `${v4()}.${fileExtensionName}`);
  },
});
