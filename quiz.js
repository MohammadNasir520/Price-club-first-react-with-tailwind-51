function isAdmin( user) {
    return (  user ? 'Admin' : 'Normal User');
   }
   console.log(isAdmin(true))