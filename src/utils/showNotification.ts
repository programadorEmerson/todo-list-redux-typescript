import Swal from 'sweetalert2';

interface ShowNotificationProps {
  icon: 'warning' | 'error' | 'success' | 'info' | 'question'
  title?: string
  text: string
  showConfirmButton?: boolean
  timer?: number
  footer?: string
}

const showNotification = (dataAlert: ShowNotificationProps) => {
  const { showConfirmButton = false, footer = '<div/>', timer = 5000 } = dataAlert;
  const props = { footer, timer, timerProgressBar: true, showConfirmButton };
  Swal.fire({ icon: dataAlert.icon, title: dataAlert.title, text: dataAlert.text, ...props });
};

export default showNotification;
