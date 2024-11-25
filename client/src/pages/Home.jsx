import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../pages/store";
import CustomButton from "../components/CustomButton";

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/config/motion";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <div>
      <AnimatePresence>
        {snap.intro && (
          <motion.section classname="home" {...slideAnimation("left")}>
            <motion.header {...slideAnimation("down")}>
              <img
                src="./public/threejs.png"
                alt="logo"
                className="w-8 h-8 object-contain"
              />
            </motion.header>
            <motion.div className="home-content" {...headContainerAnimation}>
              <motion.div
                className="head-text-animation"
                {...headTextAnimation}
              >
                <h1 className="head-text">
                  LET&apos;S ,
                  <br className="xl:block hidden" /> DO IT
                </h1>
              </motion.div>
              <motion.div {...headContentAnimation} className="div">
                <p className="max-w-md font-normal text-gray-600">
                  Create your unique and exclusive shirt with our brand-new 3D
                  customisation tool. <strong>Unleash your imagination </strong>{" "}
                  and define your own style
                </p>

                <CustomButton
                  type="filled"
                  title="Customize it"
                  handleclick={() => (state.intro = false)}
                  customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                ></CustomButton>
              </motion.div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
