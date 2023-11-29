import { FC, useState } from 'react';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { specVehicles } from '@/interface/Data';
import classes from './buldozer.module.css';
import Mainlayout from '@/components/Layout/Mainlayout';

type props = {
  bulldozer: [specVehicles];
};
const Buldozer: FC<props> = ({ bulldozer }) => {
  const [message, setMessage] = useState({ name: '', phone: '' });

  const Send = async () => {
    const Mytext = `Спец Техники 🚜🌐%0AМарка:${localStorage.getItem(
      'name',
    )}%0A👤Имя:${message.name}%0A📞Номер телефон:${message.phone}`;
    await axios
      .post(
        `https://api.telegram.org/bot5032490328:AAF_lcDsbBYsrrbB5mCQgO-_ivdBAjWZ5ms/sendMessage?chat_id=@ShantuiReferencesChannel&text=${Mytext}`,
      )
      .then((res) => {
        localStorage.clear();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`https://sttkm.uz/Bulldozer/${bulldozer[0].id}`}
        />
      </Head>
      <Mainlayout title="| Vehicles">
        <h1 className={classes.bull_h1}>{bulldozer[0]?.name}</h1>
        <div className={classes.bull_div}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className={classes.bullimg}>
                  <Image
                    src={`${bulldozer[0]?.image}`}
                    alt="bulldozer"
                    fill
                    priority
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div
                className="modal fade"
                id="modalForm"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Заявкa
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form onSubmit={Send}>
                        <div className="mb-3" style={{ textAlign: 'left' }}>
                          <label className="form-label">Имя</label>
                          <input
                            onChange={(e) =>
                              setMessage({ ...message, name: e.target.value })
                            }
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            required
                          />
                        </div>
                        <div className="mb-3" style={{ textAlign: 'left' }}>
                          <label className="form-label">Телефон</label>
                          <input
                            onChange={(e) =>
                              setMessage({ ...message, phone: e.target.value })
                            }
                            type="tel"
                            className="form-control"
                            id="telephone"
                            name="telephone"
                            required
                          />
                        </div>
                        <div className="modal-footer d-block">
                          <button
                            type="submit"
                            className="btn btn-warning float-end"
                          >
                            Отправить заявку
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className={`${classes.out}`}>
                <div className={classes.bull_t}>
                  {bulldozer[0].doc ? (
                    <a href={bulldozer[0]?.doc} download rel="noreferrer">
                      <span className={classes.bull_button}>
                        Скачать брошюру
                      </span>
                    </a>
                  ) : null}

                  <span
                    onClick={() =>
                      localStorage.setItem('name', bulldozer[0].name)
                    }
                    className={classes.bull_button}
                    data-bs-toggle="modal"
                    data-bs-target="#modalForm"
                  >
                    Оставить заявку на эту технику
                  </span>
                  <hr style={{ marginBottom: '25px' }} />
                  <div className={classes.top}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: bulldozer[0]?.description,
                      }}
                    ></div>
                    <style global jsx>
                      {`
                        table {
                          border-collapse: collapse;
                          border-top: 2px solid #ffc000 !important;
                          border-left: 2px solid #ffc000;
                          border-right: 0.5px solid #ffc000;
                          border-bottom: 0.5px solid #ffc000;
                          margin-top: 40px;
                          width: 100%;
                        }
                        table tbody {
                          border-right: 0.5px solid #ffc000;
                          border-bottom: 0.5px solid #ffc000;
                        }
                        table tbody tr {
                          font-weight: 500;
                          color: #555;
                          text-align: center;
                        }
                        table tbody tr td {
                          border-bottom: 0.5px solid #ffc000;
                          border-right: 0.5px solid #ffc000;
                          padding: 5px 0;
                          width: auto;
                        }
                      `}
                    </style>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Mainlayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await axios(
    `${process.env.API_URL}/api/st/?id=${params?.buldozer}`,
  );
  const bulldozer = res.data as [specVehicles];

  if (!bulldozer) {
    return { notFound: true };
  }

  return {
    props: {
      bulldozer,
    },
  };
};

export default Buldozer;
