import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={s.footer_item}>
				Copyright &copy; {new Date().getFullYear()} Name my social web
			</div>
		</footer>
	)
}

export default Footer;