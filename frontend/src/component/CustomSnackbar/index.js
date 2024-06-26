import React, { useContext } from 'react';
//import { Snackbar , Alert} from '@mui/material';
import { SnackbarContext } from '../../context/snackbarContext';

const CustomSnackbar = () => {
  
  const { snackbarOpen, snackbarMessage, snackbarSeverity, hideSnackbar } = useContext(SnackbarContext);

  return (
    <>
{
  snackbarOpen ?
    (<div class="bg-red-100 border absolute top-6 right-6 border-red-400 text-red-700 px-4 py-3 rounded  w-auto min-w-[58px] border" role="alert">
      {/* <strong class="font-bold">{snackbarSeverity === 'success' ? 'erreur' : ''}</strong> */}
      <span class="block sm:inline">{snackbarMessage}</span>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3 flex items-center" onClick={hideSnackbar}>
        <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
      </span>
    </div>)
    :null
}

      {/* <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={hideSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
       
        sx={{
          transition: "transform 0.3s ease-out",
          transform: snackbarOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <Alert onClose={hideSnackbar} severity={snackbarSeverity} sx={{ width: 300 }}>
          {snackbarMessage}
        </Alert>
      </Snackbar> */}
    </>
  );
};
export default CustomSnackbar;
