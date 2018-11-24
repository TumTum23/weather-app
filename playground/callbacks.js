var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Joseph'
  };
  setTimeout(() => {
    callback(user);
  }, 2000);
};


getUser(30, (userObject) => {
  console.log(userObject);
});

