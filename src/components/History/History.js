import React from "react";
import styles from "./History.css";
import Callout from "../Callout/Callout";
import trademark from "../../assets/trademark.png";
import logoCNPC from "../../assets/logo-cnpc.png";
import logoSinopec from "../../assets/logo-sinopec.png";
import logoYanchang from "../../assets/logo-yanchang.png";
import cert1row1 from "../../assets/cert1-row1.jpg";
import cert2row1 from "../../assets/cert2-row1.jpg";
import cert4row2 from "../../assets/cert4-row2.jpg";
import cert5row2 from "../../assets/cert5-row2.jpg";
import cert6row2 from "../../assets/cert6-row2.jpg";
import cert7row3 from "../../assets/cert7-row3.jpg";
import cert8row3 from "../../assets/cert8-row3.jpg";
import cert9row3 from "../../assets/cert9-row3.png";

import { Element } from "react-scroll";

function History() {
  return (
    <section className={styles.container}>
      <Element name="history">
        <h3 className={styles.heading}>
          <img className={styles.trademark} src={`dist/${trademark}`} />
          北京东方华盛科技有限公司
        </h3>
      </Element>
      <p className={styles.pspacer}></p>
      <h3 className={styles.title}>业务概览</h3>
      <p className={styles.p}>
        北京东方华盛科技有限公司经营范围主要包括油田助剂、水处理剂的生产与销售，化工产品、防蜡防垢防腐装置、机械设备、金属材料、润滑油、矿产品的销售、环境保护设施运营、油田采注工艺技术开发、防垢防腐技术及环保技术研发、技术推广服务等。主要服务对象是中国石油长庆油田、延长石油等油气田企业及大型炼油化工企业。
      </p>
      <h3 className={styles.title}>售后服务</h3>
      <p className={styles.p}>
        公司的服务理是：用户至上、服务优质、响应及时。公司的服务目标是：服务满意度
        ≥95%。公司的服务承诺是：公司坚持四个“及时”：及时送货、及时服务、及时回访、及时解决。在接到用户反应的质量问题信息后，在
        4 小时内做出答复，24 小时以内到现场处理解决问题。
      </p>
      <Callout heading="合作企业展示" enableShadow enableStretch>
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
            <h5>陕西延长油田</h5>
          </article>
        </div>
      </Callout>
      <p className={styles.pspacer}></p>
      <h3 className={styles.title}>资质认证</h3>
      <p className={styles.p}>
        北京东方华盛科技有限公司通过了 GB/T19001-2016/ISO9001:2015
        质量管理体系认证、GB/T24001-2016/ISO14001:2015
        环境管理体系认证、GB/T45001-2020/ISO45001:2018
        职业健康安全管理体系认证，被评为「国家高新技术企业」、「中关村高新技术企业」、「重合同守信用企业」、「全国科技创新示范单位」、「全国质量诚信示范企业」、「全国质量信得过产品」、「全国质量诚信标杆典型企业」、「AAA
        级信用企业」。
      </p>
      <Callout heading="资质证书展示" enableShadow enableStretch>
        <div className={styles.collabs}>
          <article className={styles.collab}>
            <img src={`dist/${cert1row1}`} className={styles.certificate} />
            <h5>国家高新技术企业 证书</h5>
          </article>
          <article className={styles.collab}>
            <img src={`dist/${cert2row1}`} className={styles.certificate} />
            <h5>中关村高新技术企业 证书</h5>
          </article>
        </div>
        <div className={styles.collabs}>
          <article className={styles.collab}>
            <img src={`dist/${cert4row2}`} className={styles.certificate} />
            <h5>质量管理体系认证 证书</h5>
          </article>
          <article className={styles.collab}>
            <img src={`dist/${cert5row2}`} className={styles.certificate} />
            <h5>环境管理体系认证 证书</h5>
          </article>
          <article className={styles.collab}>
            <img src={`dist/${cert6row2}`} className={styles.certificate} />
            <h5>职业健康安全管理体系认证 证书</h5>
          </article>
        </div>
        <div className={styles.collabs}>
          <article className={styles.collab}>
            <img src={`dist/${cert7row3}`} className={styles.certificate} />
            <h5>绿色环保企业管理体系认证 证书</h5>
          </article>
          <article className={styles.collab}>
            <img src={`dist/${cert8row3}`} className={styles.certificate} />
            <h5>绿色工厂评价认证 证书</h5>
          </article>
          <article className={styles.collab}>
            <img src={`dist/${cert9row3}`} className={styles.certificate} />
            <h5>服务认证 售后服务五星级 证书</h5>
          </article>
        </div>
      </Callout>
    </section>
  );
}

export default History;
