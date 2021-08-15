import React from 'react';
import styles from './Callout.css';

function Callout ({ heading, enableTheme, enableShadow, enableStretch, children }) {
	let containerStyles = `${styles.callout}`;
	if (enableShadow) {
		containerStyles += ` `;
		containerStyles += `${styles.shadow}`;
	}
	if (enableTheme) {
		containerStyles += ` `;
		containerStyles += `${styles.theme}`;
	}
	if (enableStretch) {
		containerStyles += ` `;
		containerStyles += `${styles.stretch}`;
	}

  	return (
		<section className={containerStyles}>
			<div className={styles.calloutHeading}>
				<h5 className={styles.calloutHeadingText}>{heading}</h5>
			</div>
			{children}
		</section>
  	);
}

export default Callout;
