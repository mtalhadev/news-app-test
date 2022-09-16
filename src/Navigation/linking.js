const linking = {
    prefixes: ["mynewsapp://app","https://mynewsapp://app"],
    config: {
      screens:{
        Home:  "home",
        Profile: "profile",
        Detail: {
          path: "detail/:id",
          parse: {
            id: id => `${id}`
          }
        },
        MainNavigator: {
          screens:{
            TabNavigator: {
              screens: {
                Favorite: {
                  path: "favorite/:id",
                  parse: {
                    id: id => `${id}`
                  }
                }
              }
            }
          }
        }
      }
    }
  };


  export default linking