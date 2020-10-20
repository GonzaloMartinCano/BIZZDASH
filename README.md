# BIZDASH

Project to create your own businees dashboard. 

You can test it in: 

  https://bizzdash.herokuapp.com/
  
*You can search for users in home and see their profiles. 




| ENDPOINT  | METHOD | ROLE  | VIEW |
| ------------- | ------------- | ------------- | ------------- |
|  / | GET  | GUEST  | INDEX   |
|  /:USERNAME | GET  | GUEST  | USERPROFILE  |
|   /:USERNAME/EDIT  |  GET | USER  | USERPROFILE/EDIT  |
| /:USERNAME/DASHBOARD  | GET  | USER  | DAHSBOARD  |
| /:USERNAME/DASHBOARD/EDIT  | POST  | USER  | DAHSBOARD  |

*Use of modals tu create a single page experience.


