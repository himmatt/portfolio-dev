"use client"

import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/data/motion";
import { motion } from "framer-motion";
import AnimationLottie from '@/components/helper/animation-lottie';
import award from "../../../app/assets/lottie/Award.json";
import Timeline from "@/components/ui/timeline";
import { educationData } from "@/utils/data/educations";
const CertificationSection = () => {
   
  return (
      <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
          <motion.div
              variants={slideInFromTop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center my-5 lg:py-8">
              <div className="flex items-center">
                  <span className="w-24 h-[2px] bg-gray-800"></span>
                  <span className="bg-gray-800 w-fit text-white p-2 px-5 text-xl rounded-md">
                      Degree And Certifications
                  </span>
                  <span className="w-24 h-[2px] bg-gray-800"></span>
              </div>
          </motion.div>
          
          <div className="py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                  <motion.div
                      variants={slideInFromLeft(0.2)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex justify-center items-start"
                  >
                      <div className="w-[320px] h-full">
                          <AnimationLottie animationPath={award}/>
                      </div>
                  </motion.div>
                  <motion.div
                      variants={slideInFromRight(0.2)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                  >
                      <Timeline timelineData={educationData}/>
                  </motion.div>
              </div>
          </div>
      
    </div>
  )
}

export default CertificationSection;
