import React from 'react';
import styles from './History.css';
import Callout from '../Callout/Callout';
import trademark from '../../assets/trademark.png';
import logoCNPC from '../../assets/logo-cnpc.png';
import logoSinopec from '../../assets/logo-sinopec.png';
import logoYanchang from '../../assets/logo-yanchang.png';
import credZhiliang from '../../assets/cred-zhiliang.png';
import credZhijian from '../../assets/cred-zhijian.png';
import credChengxin from '../../assets/cred-chengxin.png';

function History () {
	return (
		<section className={styles.container}>
			<h3 className={styles.heading}>
				<img className={styles.trademark} src={`dist/${trademark}`} />
				北京东方华盛科技有限公司
			</h3>
			<p className={styles.pspacer}></p>
			<h3 className={styles.title}>业务概览</h3>
			<p className={styles.p}>北京东方华盛科技有限公司经营范围主要包括油田助剂、水处理剂的生产与销售，化工产品、防蜡防垢防腐装置、机械设备、金属材料、润滑油、矿产品的销售、环境保护设施运营、油田采注工艺技术开发、防垢防腐技术及环保技术研发、技术推广服务等。主要服务对象是中国石油长庆油田、延长石油等油气田企业及大型炼油化工企业。</p>
			<h3 className={styles.title}>业界合作</h3>
			<p className={styles.p}>公司发展坚持以油田市场为主导方向，致力于油田化学助剂、水处理剂、环保产品的研发、生产与销售，与长庆油田、胜利油田、延长石油等单位建立了良好的合作关系，是长庆油田化工集团物资供应商、长庆油田第三采油厂技术服务商、延长油田丰源石油助剂有限公司供应商、陕西延长石油油田化学科技公司的合作商。</p>
			<Callout heading='合作企业展示' enableShadow enableStretch>
				<div className={styles.collabs}>
					<article className={styles.collab}>
						<img src={`dist/${logoCNPC}`} className={styles.logo} />
						<h5>长庆油田</h5>
					</article>
					<article className={styles.collab}>
						<img src={`dist/${logoSinopec}`} className={styles.logo} />
						<h5>胜利油田</h5>
					</article>
					<article className={styles.collab}>
						<img src={`dist/${logoYanchang}`} className={styles.logo} />
						<h5>延长油田丰源石油</h5>
					</article>
					<article className={styles.collab}>
						<img src={`dist/${logoYanchang}`} className={styles.logo} />
						<h5>陕西延长石油</h5>
					</article>
				</div>
			</Callout>
			<p className={styles.pspacer}></p>
			<h3 className={styles.title}>资质认证</h3>
			<p className={styles.p}>北京东方华盛科技有限公司通过了 GB/T19001-2016/ISO9001:2015 质量管理体系认证、GB/T24001-2016/ISO14001:2015 环境管理体系认证、GB/T45001-2020/ISO45001:2018 职业健康安全管理体系认证，被评为「国家高新技术企业」、「中关村高新技术企业」、「重合同守信用企业」、「全国科技创新示范单位」、「全国质量诚信示范企业」、「全国质量信得过产品」、「全国质量诚信标杆典型企业」、「AAA 级信用企业」。</p>
			<Callout heading='国家证书展示' enableShadow enableStretch>
				<div className={styles.collabs}>
					<article className={styles.collab}>
						<img src={`dist/${credZhiliang}`} className={styles.certificate} />
						<h5>全国质量信得过产品 证书</h5>
					</article>
					<article className={styles.collab}>
						<img src={`dist/${credZhijian}`} className={styles.certificate} />
						<h5>全国质量检验先进企业 证书</h5>
					</article>
					<article className={styles.collab}>
						<img src={`dist/${credChengxin}`} className={styles.certificate} />
						<h5>全国质量诚信先进企业 证书</h5>
					</article>
				</div>
			</Callout>
		</section>
	);
}

export default History;
