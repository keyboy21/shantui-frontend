import { FC, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import classes from './contact.module.css';
import { UserMessage } from '@/interface/Data';
import Mainlayout from '@/components/Layout/Mainlayout';
import MyButton from '@/components/Mybutton/Button';

const Contact: FC = () => {
  const [value, setValue] = useState<UserMessage>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const SendMessage = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await axios({
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact/`,
      data: {
        name: value.name,
        phone: value.phone,
        email: value.email,
        messages: value.message,
      },
    })
      .then((response) => {
        alert('Сообщение отправлено');
        setValue({ name: '', phone: '', email: '', message: '' });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <Head>
        <link rel="canonical" href="https://sttkm.uz/Contact" />
      </Head>

      <Mainlayout title="| Contact">
        <div className={`container ${classes.cont}`}>
          <h1 className={classes.con_w}>Контакты</h1>
        </div>

        <div className="container">
          <div className={`row`}>
            <div className={`${classes.cont_col}`}>
              <div className={classes.cont_head}>
                <h5 className={classes.cont_head2}>Свяжитесь с нами</h5>
                <p className={classes.cont_head3}>
                  Наши менеджеры свяжитесь с Вами в течении 5 минут!
                </p>
              </div>
              <form id="contactForm" onSubmit={SendMessage}>
                <div className={classes.form_input}>
                  <input
                    className={`form-control ${classes.form_name}`}
                    id="name"
                    type="text"
                    placeholder="Имя*"
                    required
                    value={value.name}
                    onChange={(e) =>
                      setValue({ ...value, name: e.target.value })
                    }
                  />

                  <input
                    className={`form-control ${classes.form_tel}`}
                    id="telAddress"
                    type="tel"
                    placeholder="Телефон*"
                    required
                    value={value.phone}
                    onChange={(e) =>
                      setValue({ ...value, phone: e.target.value })
                    }
                  />
                </div>

                <div className="mb-3">
                  <input
                    className={`form-control ${classes.inputemail}`}
                    id="emailAddress"
                    type="email"
                    placeholder="Электронная почта*"
                    required
                    value={value.email}
                    onChange={(e) =>
                      setValue({ ...value, email: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className={`form-control ${classes.areamessage}`}
                    id="message"
                    placeholder="Ваше сообщение*"
                    required
                    value={value.message}
                    onChange={(e) =>
                      setValue({ ...value, message: e.target.value })
                    }
                  />
                </div>

                <div className="d-grid">
                  <MyButton>Отправить</MyButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Mainlayout>
    </>
  );
};

export default Contact;
