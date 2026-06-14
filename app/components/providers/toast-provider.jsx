"use client";

import { ToastContainer } from "react-toastify";

/**
 * Client wrapper for react-toastify — keeps layout.js as a Server Component.
 */
function ToastProvider() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  );
}

export default ToastProvider;
