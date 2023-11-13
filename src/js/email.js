const API_KEY =
  "SG.diV6eOIEQ7 - UXSlvRruPMA.RG_Qt_wY7qKe4mXdX4lqJxYET - bozMYPCx6D0LaAA1A";

import sgMail from "@sendgrid/mail";
sgMail.setApiKey(API_KEY);
export const sendMail = ({ name, phone, comment }) => {
  const msg = {
    to: "luckycleaning.vn@gmail.com",
    subject: "Заявка с сайта",
    html: `Заявка с сайта <br/> Имя: ${name} <br/>  Номер телефона: ${phone} <br/> Сообщение: ${comment}`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};
