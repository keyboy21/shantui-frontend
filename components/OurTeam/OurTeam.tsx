import { FC } from 'react';
import Image from 'next/image';
import classes from './ourteam.module.css';

const OurTeam: FC = () => {
  return (
    <section>
      <div className={classes.ourteam}>
        <div className="container">
          <h3 className={classes.project_about}>Наша команда</h3>
          <div className={`row ${classes.around}`}>
            <div className={`col-sm-6 col-md-6 col-lg-2 ${classes.team}`}>
              <Image
                src={'/Ourteam/Ellipse20.png'}
                width={203}
                height={203}
                alt="ourteam"
              />
              <h4 className={classes.team_name}>Каримбердиев Мирзабек</h4>
              <p className={classes.team_job}>Генеральный директор</p>
            </div>
            <div className={`col-sm-6 col-md-6 col-lg-2 ${classes.team}`}>
              <Image
                src={'/Ourteam/Ellipse26.png'}
                width={203}
                height={203}
                alt="ourteam"
              />
              <h4 className={classes.team_name}>Турсунова Хилола</h4>
              <p className={classes.team_job}>Главный бухгалтер</p>
            </div>
            <div className={`col-sm-6 col-md-6 col-lg-2 ${classes.team}`}>
              <Image
                src={'/Ourteam/Ellipse22.png'}
                width={203}
                height={203}
                alt="ourteam"
              />
              <h4 className={classes.team_name}>Алламбергенов Амангелди</h4>
              <p className={classes.team_job}>Главный механик</p>
            </div>
            <div className={`col-sm-6 col-md-6 col-lg-2 ${classes.team}`}>
              <Image
                src={'/Ourteam/Менеджерпопродажам1.webp'}
                width={203}
                height={203}
                alt="ourteam"
              />
              <h4 className={classes.team_name}>Алламбергенов Равшан</h4>
              <p className={classes.team_job}>Менеджер по продажам</p>
            </div>
            <div className={`col-sm-6 col-md-6 col-lg-2 ${classes.team}`}>
              <Image
                src={'/Ourteam/Менеджерпопродаж.webp'}
                width={203}
                height={203}
                alt="ourteam"
              />
              <h4 className={classes.team_name}>Салиева Наргиза</h4>
              <p className={classes.team_job}>Менеджер по продажам</p>
            </div>
            <div className={`col-sm-6 col-md-6 col-lg-3 ${classes.team}`}>
              <Image
                src={'/Ourteam/officeManager.webp'}
                width={203}
                height={203}
                alt="ourteam"
              />
              <h4 className={classes.team_name}>Хасанова Мадина</h4>
              <p className={classes.team_job}>Менеджер офиса</p>
            </div>
            <div className={`col-sm-6 col-md-6 col-lg-3 ${classes.team}`}>
              <Image
                src={'/Ourteam/Менеджерпомаркетингу.webp'}
                width={203}
                height={203}
                alt="ourteam"
              />
              <h4 className={classes.team_name}>Арипов Абдуллох</h4>
              <p className={classes.team_job}>Менеджер по маркетингу</p>
            </div>
            <div className={`col-sm-6 col-md-6 col-lg-3 ${classes.team}`}>
              <Image
                src={'/Ourteam/povar.webp'}
                width={203}
                height={203}
                alt="ourteam"
              />
              <h4 className={classes.team_name}>Махкамова Нигора</h4>
              <p className={classes.team_job}>Повар</p>
            </div>
            <div className={`col-sm-6 col-md-6 col-lg-3 ${classes.team}`}>
              <Image
                src={'/Ourteam/zakup.webp'}
                width={203}
                height={203}
                alt="ourteam"
              />
              <h4 className={classes.team_name}>Гуломрасулов Асилхожа</h4>
              <p className={classes.team_job}>Менеджер по тендерным закупам</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
