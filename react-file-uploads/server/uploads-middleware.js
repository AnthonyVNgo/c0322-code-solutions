const path = require('path');
const multer = require('multer');

const imagesDirectory = path.join(__dirname, 'public/images');

// The disk storage engine gives you full control on storing files to disk.
// destination -> The folder to which the file has been saved
// There are two options available, destination and filename.
// They are both functions that determine where the file should be stored.

// destination is used to determine within which folder the uploaded files should be stored.
// This can also be given as a string (e.g. '/tmp/uploads').
// If no destination is given, the operating system's default directory for temporary files is used.
// it looks like the files are stored in the imagesDirectory -> public/images dir

// filename is used to determine what the file should be named inside the folder
// if no name is given, then the file is given a random name

// each function has access to the request (req) object plus some info about the file to aid with the decision

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, imagesDirectory);
  },
  filename: (req, file, callback) => {
    const fileExtension = path.extname(file.originalname); // path: The full path to the uploaded file & originalname: name of the file on the user's computer
    const name = `${file.fieldname}-${Date.now()}${fileExtension}`;
    callback(null, name);
  }
});

// the const variable uploadsMiddleware below parallels the example from the docs,
// example: const upload = multer({ dest: 'uploads/' })
// except the docs doesn't include .single as part of the const variable upload.
// that's why the docs' set-up is slightly DataTransferItem

// Reference: app.post('/profile', upload.single('avatar'), function (req, res, next) {
// req.file is the `avatar` file

const uploadsMiddleware = multer({ storage }).single('image');
// Multer accepts an options object,
// the most basic of which is the dest property,
// which tells Multer where to upload the files.
// in this case, storage is used instead of dest

// .single(fieldname) :
// Accept a single file with the name fieldname.
// The single file will be stored in req.file.

// the multer function is called with one arg, the const variable storage

module.exports = uploadsMiddleware;
