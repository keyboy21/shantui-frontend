import classes from '../styles/404.module.css';
export default function Custom500() {
	return (
		<div className={classes.bod}>
			<h1 className={classes.smile}>:(</h1>
			<br />
			<h2>
				<span className={classes.span}>500</span> Произошла ошибка, сервер не
				отвечает и попробуйте еще раз.
			</h2>
			<br />
			<br />
			<h3>
				<a className={classes.al} href="https://shantuiuzb.com">
					Возвращаться на главный
				</a>
				&nbsp;|&nbsp;
			</h3>
		</div>
	);
}
