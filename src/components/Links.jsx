import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { links } from "../constants";
import { github } from "../assets";

const LinkCard = ({
  index,
  link,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >

    <div className='mt-1'>
      <div className='inset-0 flex justify-center m-3 card-img_hover'>
        <div
          onClick={() => window.open(link, "_blank")}
          className='black-gradient w-24 h-24 rounded-full flex justify-center items-center cursor-pointer'
        >
          <img
            src={image}
            alt='source code'
            className='w-1/2 h-1/2 object-contain'
          />
        </div>
      </div>
    </div>

    
  </motion.div>
);

const Links = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Other sites</p>
          <h2 className={styles.sectionHeadText}>Links</h2>
        </motion.div>
        <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Below you can find links to my resume as well as 
          other pages containing my work.
        </motion.p>
        </div>
        <div className='mt-8 flex flex-wrap'></div>
      </div>
      
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {links.map((link, index) => (
          <LinkCard key={link} index={index} {...link} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Links, "");