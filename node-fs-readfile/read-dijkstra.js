const filesystemModule = require('fs');

// filesystemModule.readFile('dijkstra.txt', 'utf8' (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

filesystemModule.readFile('dijkstra.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
