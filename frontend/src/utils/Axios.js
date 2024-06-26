import axios from 'axios';

const URL_REQUEST_PROD=process.env.REACT_APP_URL_REQUEST
const URL_REQUEST_DEV=process.env.REACT_APP_URL_REQUEST_DEV

//http://172.18.208.1:5555/api
const currentUrl = window.location.origin === "http://localhost:3000" ? `${URL_REQUEST_DEV}/api`:`${URL_REQUEST_PROD}/api`;
console.log("url",currentUrl);
// Créer une instance pour l'environnement de développement
const api = axios.create({
  baseURL: currentUrl
  // Autres configurations spécifiques à l'environnement de développement
});

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('tokTraiteur'); 
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//     return config;
// });


 api.interceptors.response.use(
   response => {
     console.log("reponse",response);
     return response;
   },
   error => {
     console.log("error", error.response.status);
     const stat = error.response.status;
     if (stat === 401 ) {
       console.log('token Manquant');
       window.location.reload();
     }
     if (stat === 403) {
       console.log('token invalide');
       localStorage.setItem('tokTraiteur', "");
       window.location.reload();
     }
    
     console.log(error);
     // Gestion des erreurs
     return Promise.reject(error);
   }
 );



export default api