import Swal from 'sweetalert2';
const SuccessAlert = (title, text, icon = 'success', timer = 2000) => {
    Swal.fire({
      title: title,
      text: text,
      color: "#000",
      toast: true,
      position: "top-right",
      timer: timer,
      timerProgressBar: true,
      showConfirmButton: false,
      icon: icon,
      background: "#fff",
    });
  };

export {SuccessAlert};