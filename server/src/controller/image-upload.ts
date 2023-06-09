import { Request } from 'express';
import multer from 'multer';

let uploadCount = 1;

const storage = multer.diskStorage({
  destination(
    req: Request,
    file: Express.Multer.File,
    // Add type for callback
    cb,
  ) {
    cb(null, './uploads/');
  },
  filename(
    req: Request,
    file: Express.Multer.File,
    // Add type for callback
    cb,
  ) {
    cb(null, `${uploadCount += 1}_${file.originalname}`);
  },
});

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  // Add type for callback
  cb,
) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(
      new Error(
        'Failed to upload image. Only jpeg or png are allowed. Please try again.',
      ),
      false,
    );
  }
};

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter,
});

export default upload;
