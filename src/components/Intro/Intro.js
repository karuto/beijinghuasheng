import React from 'react';
import styles from './Intro.css';

function Intro () {
	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<h2 className={styles.headingtext}>北京东方华盛简介</h2>
			</div>
			<p className={styles.intro}>
				北京东方华盛科技有限公司成立于 2011 年 5 月 10 日，注册资金 3800 万元，是一般纳税人企业、国家高新技术企业、全国科技创新示范单位、AAA 级信用企业、重合同守信用企业。拥有全资分支机构：北京东方华盛科技有限公司西安分公司、仙桃华胜化工有限公司。公司资金充裕，生产经营稳定，社会信誉良好。
			</p>
			<div className={styles.action}>
				<div className={styles.readmore}>详细介绍 ➡️</div>
			</div>
		</div>
	);
}

export default Intro;