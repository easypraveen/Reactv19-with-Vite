function AlertBox({type = 'info', message = ""}) {
    if (!message) return null;
  const bgColor =
  type === "success" ? "bg-green-200" :
  type === "error" ? "bg-red-200" :
  type === "info" ? "bg-blue-200" :
  "bg-gray-100";
  return (
  <div className={`rounded p-4 flex justify-center w-1/3 h-1/2 mt-4 ${bgColor}`}>
    <p>{message}</p>
  </div>
   );
}

export default AlertBox;
