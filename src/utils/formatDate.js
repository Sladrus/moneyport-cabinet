export const formatDate = (date) => {
  const messageDate = new Date(date);

  //   messageDate.toLocaleTimeString([], {
  //     hour: '2-digit',
  //     minute: '2-digit',
  //   })
  const formattedDate =
    messageDate.getDate().toLocaleString([], {
      minimumIntegerDigits: 2,
    }) +
    '.' +
    (messageDate.getMonth() + 1).toLocaleString([], {
      minimumIntegerDigits: 2,
    }) +
    '.' +
    messageDate.getFullYear().toString().slice(-2);

  return formattedDate;
};
