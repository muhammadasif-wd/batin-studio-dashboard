import Swal from "sweetalert2";

function ShowAlert(alert_type, alert_message) {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        showCloseButton: true,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });

    Toast.fire({
        color: "#212121",
        icon: `${alert_type}`,
        title: `${alert_message}`,
    });
}
export default ShowAlert;