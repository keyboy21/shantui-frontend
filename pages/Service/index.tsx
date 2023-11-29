import { FC } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import axios from 'axios';
import Image from 'next/image';
import { Zoom } from 'react-awesome-reveal';
import classes from './service.module.css';
import Mainlayout from '@/components/Layout/Mainlayout';
import bigPicture from '@/public/ServiceBack.webp';
import { Blogs } from '@/interface/Data';
import OurMaterilCard from '@/components/ourMaterilasCard/Materials';

type props = {
  blog: Blogs[];
};

const Services: FC<props> = ({ blog }) => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://sttkm.uz/VideoService/" />
      </Head>

      <Mainlayout title="| Sevice">
        <h1 className={classes.service_h1}>Сервис</h1>
        <div className="container">
          <div className={classes.big}>
            <Image src={bigPicture} fill priority alt="project" />
          </div>
        </div>
        <div className={classes.vehicles_list}>
          <div className="container">
            <div className="row">
              {blog.map((item) => (
                <Zoom
                  delay={300}
                  triggerOnce={true}
                  className={`col-md-6 col-lg-3  ${classes.veh_col}`}
                  key={item.id}
                >
                  <OurMaterilCard
                    Video={item.Video}
                    title={item.title}
                    create_at={item.create_at}
                  />
                </Zoom>
              ))}
            </div>
          </div>
        </div>
      </Mainlayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const bl = await axios(`${process.env.API_URL}/api/blog`);
  const blog = bl.data.data as Blogs[];

  if (!blog) {
    return { notFound: true };
  }

  return {
    props: {
      blog,
    },
  };
};

export default Services;
