import Image from 'next/image';
import { FC } from 'react';
import { Zoom } from 'react-awesome-reveal';
import classes from './about.module.css';

const About: FC = () => {
	return (
		<section>
			<div className={classes.about}>
				<Image
					quality={100}
					src={'/back.webp'}
					alt="backgroundimg"
					fill
					style={{ objectFit: 'cover', zIndex: -1 }}
				/>
				<div className="container">
					<div className="row">
						<Zoom delay={200} triggerOnce={true} className="col-lg-4">
							<div className={classes.aboutcontent}>
								<div className="about-img">
									<svg
										width="100"
										height="100"
										viewBox="0 0 100 100"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="50" cy="50" r="50" fill="#FFC000" />
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M64.7098 25.1036C62.5296 25.4244 60.2903 26.7807 58.92 28.6101C58.3625 29.3544 57.7281 30.6689 57.4799 31.5936C57.179 32.7152 57.1188 34.2867 57.3315 35.4676C57.4836 36.3119 57.4856 36.4305 57.3509 36.6846C57.2688 36.8395 52.6064 41.5551 46.9898 47.1638L36.7779 57.3614L36.1587 57.3001C35.8182 57.2665 35.1657 57.1956 34.7087 57.1426C31.5372 56.7745 28.2369 58.3905 26.3923 61.2146C25.4569 62.6466 25.0048 64.2094 25 66.0271C24.9933 68.6142 25.9234 70.7622 27.8341 72.5719C31.3142 75.868 36.7403 75.8003 40.204 72.4176C42.1796 70.4883 43.1764 67.699 42.828 65.0751C42.7584 64.551 42.6795 63.9298 42.6527 63.6946L42.6038 63.2669L52.9016 52.9661C58.5654 47.3008 63.2989 42.6257 63.4206 42.5773C63.5646 42.5199 63.9061 42.5397 64.398 42.6337C65.7973 42.9014 67.5292 42.8019 68.8247 42.3796C72.3177 41.2408 74.7627 38.0843 74.9475 34.4753L75 33.4496L72.5693 35.8594C71.0487 37.3667 70.0394 38.2938 69.8739 38.3354C69.6779 38.3846 68.8763 38.1575 66.7723 37.4565C65.2118 36.9366 63.846 36.4379 63.7372 36.348C63.6043 36.2384 63.2202 35.2279 62.5681 33.2715C61.7502 30.8177 61.6123 30.317 61.6942 30.0968C61.7476 29.9529 62.8776 28.7474 64.2051 27.4177L66.6187 25L65.9352 25.0119C65.5594 25.0185 65.0079 25.0597 64.7098 25.1036ZM26.5958 26.5148L25.2927 27.8198L26.7871 30.4394C27.609 31.8801 28.2937 33.0728 28.3088 33.0898C28.3238 33.1068 29.0991 33.3155 30.0317 33.5538L31.7271 33.9869L38.2019 40.4574L44.6766 46.9281L45.8013 45.8073C46.4199 45.1908 46.926 44.6422 46.926 44.5881C46.926 44.5341 44.0286 41.5882 40.4874 38.0417L34.0488 31.5936L33.6399 29.9314L33.2309 28.2692L31.0215 27.0009C29.8063 26.3033 28.6067 25.6149 28.3556 25.4711L27.8989 25.2096L26.5958 26.5148ZM59.849 40.1135C60.1596 40.4207 60.4138 40.7175 60.4138 40.7731C60.4138 40.8285 56.0162 45.2689 50.6414 50.6406L40.8689 60.4072L40.2309 59.7753L39.593 59.1434L49.3924 49.3491C54.7819 43.9622 59.2125 39.5548 59.2379 39.5548C59.2633 39.5548 59.5384 39.8062 59.849 40.1135ZM54.2312 54.1836L50.4441 57.9695L51.1331 58.6581L51.8221 59.3467L52.39 59.0654C54.7861 57.8784 57.3249 60.4716 56.0531 62.807L55.7829 63.3033L60.9326 68.4501L66.0822 73.597L69.8943 69.788L73.7062 65.979L68.5622 60.8372L63.4181 55.6952L62.9237 55.9516C62.2237 56.3145 61.2253 56.3609 60.5317 56.0627C59.0617 55.4307 58.4136 53.5697 59.1838 52.1925L59.4434 51.7283L58.7827 51.063C58.4195 50.6971 58.0988 50.3977 58.0702 50.3977C58.0417 50.3977 56.3141 52.1014 54.2312 54.1836ZM64.9847 63.6111L69.4081 68.0328L68.7703 68.6646L68.1324 69.2965L63.6639 64.8305L59.1953 60.3644L59.777 59.7768C60.097 59.4537 60.4043 59.1892 60.46 59.1892C60.5156 59.1892 62.5517 61.179 64.9847 63.6111ZM37.2001 64.1467C37.7813 65.1003 38.2565 65.9245 38.2561 65.9782C38.2557 66.032 37.7846 66.8562 37.2092 67.8098L36.1628 69.5437H33.9937H31.8246L30.7744 67.794C30.1968 66.8316 29.7241 66.0145 29.7241 65.9782C29.7241 65.942 30.1968 65.1249 30.7744 64.1625L31.8246 62.4128H33.984H36.1433L37.2001 64.1467ZM71.1882 71.0345C69.294 72.9283 67.7441 74.5035 67.7441 74.5348C67.7441 74.6639 68.9204 74.8672 69.65 74.8644C71.8828 74.8559 73.8057 73.4982 74.6567 71.3293C74.8875 70.7411 74.9163 70.5361 74.9141 69.4948C74.9125 68.72 74.8643 68.1987 74.772 67.957L74.6323 67.5913L71.1882 71.0345Z"
											fill="#333333"
										/>
									</svg>
								</div>
								<span className={classes.more}>
									Сертифицированный дилер заводов
								</span>
							</div>
						</Zoom>
						<Zoom delay={200} triggerOnce={true} className="col-lg-4">
							<div className={classes.aboutcontent}>
								<div className="about-img">
									<svg
										width="100"
										height="100"
										viewBox="0 0 100 100"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="50" cy="50" r="50" fill="#FFC000" />
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M48.5161 20.1613C47.4461 20.4617 46.819 20.8375 44.5784 22.5209C41.7575 24.6403 41.1949 24.9835 40.1604 25.2164C39.7028 25.3193 38.0907 25.4693 36.5782 25.5495C32.6173 25.7596 31.6322 26.0687 30.1293 27.5738C28.9825 28.7222 28.6854 29.4345 27.8501 33.0383C26.8543 37.334 27.0691 36.9855 22.9482 40.9953C21.0625 42.8302 20.5808 43.5315 20.2065 44.9864C19.7352 46.8185 19.9989 47.9256 21.7502 51.4699C22.5007 52.9886 23.2048 54.5385 23.315 54.9141C23.5884 55.8463 23.566 56.8274 23.2035 59.7914C23.0332 61.1838 22.8931 62.6387 22.8921 63.0244C22.8863 65.2226 24.2501 67.4499 26.2473 68.5037C26.7041 68.7447 28.0341 69.3512 29.2029 69.8514C31.5876 70.8721 32.2054 71.2052 32.9098 71.8496C33.1782 72.0951 34.2015 73.5269 35.1837 75.0313C37.4438 78.4926 38.2726 79.2772 40.2077 79.7875C41.7495 80.1943 42.4884 80.0832 46.3285 78.8688C48.5179 78.1763 48.6173 78.1571 50.0161 78.1593C51.4366 78.1614 51.4863 78.1717 54.2037 79.023C57.9512 80.1968 59.1047 80.2544 60.9698 79.3612C62.2145 78.7651 62.9797 77.9071 64.9292 74.9218C67.1715 71.4879 67.2738 71.3982 70.564 69.9747C71.8787 69.406 73.3281 68.7438 73.7849 68.5031C75.526 67.5856 76.7771 65.8078 77.0546 63.8569C77.1724 63.0293 77.1444 62.4954 76.8497 59.9524C76.4827 56.7846 76.4457 55.8993 76.6474 55.1078C76.7182 54.8293 77.4494 53.2058 78.272 51.5001C79.4841 48.9872 79.7962 48.225 79.9176 47.4828C80.1294 46.1879 79.9335 44.93 79.3242 43.6715C78.9116 42.8192 78.6428 42.4968 77.0923 40.9944C72.9907 37.0203 73.1796 37.3228 72.2047 33.1664C71.8346 31.5884 71.4424 30.0433 71.3332 29.7331C70.8705 28.4184 69.6113 27.0004 68.3605 26.3857C67.2914 25.8602 66.356 25.7003 63.454 25.5471C60.6032 25.3964 59.4728 25.2203 58.6598 24.8003C58.3978 24.6649 57.1192 23.7516 55.8185 22.7707C53.348 20.9074 52.6153 20.4652 51.4998 20.1646C50.6906 19.9465 49.2865 19.9449 48.5161 20.1613ZM52.7457 29.4872C54.1801 29.6609 56.3572 30.2356 57.7039 30.796C64.4698 33.6117 69.2792 39.8927 70.2678 47.204C70.4528 48.5724 70.4528 51.3899 70.2678 52.7582C69.3425 59.6022 65.0746 65.576 58.9704 68.5718C56.5428 69.7631 54.1426 70.415 51.5263 70.5936C43.1621 71.1647 35.545 66.8023 31.7592 59.2727C29.3299 54.4407 28.932 48.1977 30.728 43.0873C31.8681 39.8429 34.0417 36.609 36.5519 34.4229C41.1428 30.4245 46.6426 28.7482 52.7457 29.4872ZM48.6411 31.3849C40.1106 32.0113 33.1875 38.4638 31.8141 47.0682C31.568 48.6108 31.568 51.3514 31.8141 52.8941C33.1123 61.0267 39.3655 67.2572 47.4415 68.4646C48.8146 68.6698 51.474 68.6446 52.8927 68.4128C61.3874 67.0249 67.7599 60.0013 68.3776 51.3457C69.1909 39.9494 59.9047 30.5578 48.6411 31.3849ZM59.7039 41.9263C60.4516 42.2819 60.6707 42.5144 61.027 43.33C61.3375 44.0408 61.3079 44.9842 60.9533 45.6784C60.6142 46.3427 49.2881 57.825 48.7036 58.0972C48.1337 58.3626 47.4303 58.3972 46.7035 58.1954C46.2892 58.0805 45.6181 57.4674 42.7896 54.6202C40.9121 52.7301 39.2645 51.0025 39.1284 50.781C38.8145 50.27 38.6994 49.3058 38.8741 48.652C39.0544 47.9783 39.6923 47.218 40.3194 46.9295C40.9443 46.6421 41.9888 46.6222 42.612 46.8859C42.8992 47.0074 43.9329 47.9459 45.3356 49.3588L47.5961 51.6358L52.2542 46.8733C55.5507 43.5032 57.0646 42.041 57.4331 41.8715C58.1429 41.5452 58.9433 41.5645 59.7039 41.9263Z"
											fill="#333333"
										/>
									</svg>
								</div>
								<span className={classes.more}>
									Собственный магазин запчастей
								</span>
							</div>
						</Zoom>
						<Zoom delay={200} triggerOnce={true} className="col-lg-4">
							<div className={classes.aboutcontent}>
								<div className="about-img">
									<svg
										width="100"
										height="100"
										viewBox="0 0 100 100"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="50" cy="50" r="50" fill="#FFC000" />
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M30.011 25.1247C29.1895 25.4212 28.5128 26.059 28.1485 26.8803C28.0122 27.1873 27.2944 30.2328 26.4359 34.1453C25.0045 40.6694 24.9596 40.9087 25.0132 41.7445C25.2923 46.1057 28.2628 49.6477 31.8877 49.9416C34.0195 50.1145 36.0639 49.1979 37.6107 47.376L38.2705 46.5988L38.9303 47.3746C41.8726 50.8341 46.3979 50.8341 49.3402 47.3746L50 46.5988L50.6598 47.3746C53.6021 50.8341 58.1274 50.8341 61.0697 47.3746L61.7295 46.5988L62.3893 47.376C63.9361 49.1979 65.9805 50.1145 68.1123 49.9416C71.7372 49.6477 74.7077 46.1057 74.9868 41.7445C75.0404 40.9087 74.9955 40.6694 73.5641 34.1453C72.7056 30.2328 71.9878 27.1873 71.8515 26.8803C71.5692 26.2438 70.9582 25.5892 70.343 25.2643L69.8912 25.0257L50.1466 25.0047C34.4688 24.9881 30.3215 25.0127 30.011 25.1247ZM37.6352 51.9018C36.9983 52.3611 35.7421 52.945 34.7974 53.221C32.8691 53.7844 30.3227 53.5414 28.4695 52.6173L28.1009 52.4335L28.1274 62.3459L28.1538 72.2583L28.4099 72.882C28.7354 73.6749 29.2596 74.2738 29.9537 74.6456L30.4997 74.9381L37.122 74.9691L43.7443 75V67.8507V60.7014H50H56.2557V67.8507V75L62.878 74.9691L69.5003 74.9381L70.0463 74.6456C70.7404 74.2738 71.2646 73.6749 71.5901 72.882L71.8462 72.2583L71.8726 62.3459L71.8991 52.4335L71.5305 52.6173C70.2389 53.2614 68.3162 53.6303 66.8601 53.5134C65.3643 53.3933 63.6208 52.7737 62.4055 51.9303C62.1002 51.7185 61.7977 51.5452 61.7331 51.5452C61.6686 51.5452 61.3665 51.7121 61.0617 51.9161C58.0093 53.9594 53.7202 53.9594 50.6678 51.9161C50.363 51.7121 50.0626 51.5452 50 51.5452C49.9374 51.5452 49.637 51.7121 49.3322 51.9161C46.2798 53.9594 41.9907 53.9594 38.9383 51.9161C38.6335 51.7121 38.3256 51.5462 38.2541 51.5473C38.1825 51.5484 37.904 51.708 37.6352 51.9018Z"
											fill="#333333"
										/>
									</svg>
								</div>
								<span className={classes.more}>
									Бесплатный сервисный центр до 1,5 года
								</span>
							</div>
						</Zoom>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
