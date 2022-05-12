export const isAuthenticated = () => {
        
        // console.log(window);
        if (typeof window == "undefined") {
                // console.log("test");
          return false;
        }
        if (localStorage.getItem("currentUser")) {
          return JSON.parse(localStorage.getItem("currentUser"));
        } else {
          return false;
        }
      };
    
// console.log(isAuthenticated());