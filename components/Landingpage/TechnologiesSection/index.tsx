import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { Center, Group, Image } from "@mantine/core";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import AWS from "../../../public/landingpage/technologies/aws-logo.png";
import Azure from "../../../public/landingpage/technologies/azure-logo.png";
import ChatGPT from "../../../public/landingpage/technologies/chatgpt-logo.png";
import Stripe from "../../../public/landingpage/technologies/stripe-logo.png";

const TechnologiesSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: [0, -100, -200, -300, -400, -500, -600, -700],
      transition: {
        duration: 10,
        ease: "linear",
        repeatDelay: 0.01,
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls]);

  return (
    <Group p="center" grow id="technologies" mb="4rem" mt="5rem">
      <Center
        style={{
          height: "10vh",
          color: "#fff",
          flexDirection: "column",
          backgroundImage:
            "linear-gradient(25deg, #ffffff, #D0EBFF, #D0BFFF, #F8F0FC, #ffffff)",
        }}
      >
        <motion.div
          animate={controls}
          style={{
            width: "100%",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Carousel
            slideSize="80%"
            w="100%"
            height={100}
            loop
            withControls={false}
            align="center"
          >
            <Carousel.Slide
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Image maw={80} src={Stripe.src} alt="logo stripe" />
              <Image maw={60} src={AWS.src} alt="logo aws" />
              <Image maw={75} src={ChatGPT.src} alt="logo aws" />
              <Image maw={50} src={Azure.src} alt="logo aws" />
            </Carousel.Slide>
          </Carousel>
        </motion.div>
      </Center>
    </Group>
  );
};
export default TechnologiesSection;
