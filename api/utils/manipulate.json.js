const fs = require('fs');

// save data to JSON
const saveData = (data, file) => {
  const stringifiedData = JSON.stringify(data);

  // define which file we'll manipulate
  let path = '';
  if (file === 'categories') path = 'api/models/categories.json';
  else if (file === 'posts') path = 'api/models/posts.json';

  fs.writeFileSync(path, stringifiedData);
};

// get data from JSON
const getData = (file) => {
  // define which file we'll manipulate
  let path = '';
  if (file === 'categories') path = 'api/models/categories.json';
  else if (file === 'posts') path = 'api/models/posts.json';

  const data = fs.readFileSync(path);

  return JSON.parse(data);
};

module.exports = {
  saveData,
  getData
};
