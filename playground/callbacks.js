var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Joseph'
  };
  setTimeout(() => {
    callback(user);
  }, 4000);
};


getUser(30, (userObject) => {
  console.log(userObject);
});

