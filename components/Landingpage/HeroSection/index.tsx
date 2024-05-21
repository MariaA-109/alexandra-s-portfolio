import "@mantine/core/styles.css";
import { Flex, Group, Text } from "@mantine/core";
import { createStyles } from "@mantine/styles";
import { motion } from "framer-motion";

const useStyles = createStyles((theme) => ({
  title: {
    color: "#002466",
    fontSize: 80,
    [theme.fn.smallerThan("md")]: {
      fontSize: 30,
    },
    [theme.fn.smallerThan("sm")]: {
      fontSize: 45,
    },
  },
  subtitle: {
    color: "#002466",
    fontSize: 60,
    [theme.fn.smallerThan("md")]: {
      fontSize: 50,
    },
    [theme.fn.smallerThan("sm")]: {
      fontSize: 35,
    },
  },
  subsubtitle: {
    color: "#002466",
    fontSize: 55,
    [theme.fn.smallerThan("md")]: {
      fontSize: 45,
    },
    [theme.fn.smallerThan("sm")]: {
      fontSize: 30,
    },
  },
  hoverEffect: {
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: -1,
      background: theme.fn.radialGradient(
        "#D0BFFF",
        "#F8F0FC",
        "white",
        "white",
        "white",
        "white"
      ),
      transition: "transform 0.3s ease-out",
    },
    "&:hover::before": {
      transform: "scale(1.5)",
    },
  },
}));

const HeroSection = () => {
  const { classes } = useStyles();

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      w="100%"
      h="70vh"
      className={classes.hoverEffect}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Group>
          <Text fz="80" fw={700} variant="gradient">
            Seamless
          </Text>
          <Text fz="80" fw={700} c="navy.8">
            Retail
          </Text>
          <Text fz="80" fw={700} c="navy.8">
            Solutions
          </Text>
        </Group>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Text fz="60" fw={500} c="navy.8">
          Smooth transactions
        </Text>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Text fz="55" fw={300} c="navy.8">
          Successful sales
        </Text>
      </motion.div>
      <Flex direction="column" align="center" justify="center" w="50%" mt="md">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Text size="md" fw={300} fz="md">
            Manage your stock centrally and sell everywhere in a controlled,
            fast and scalable way.
          </Text>
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default HeroSection;

// title: {
//   color: "#002466",
//   fontSize: 80,
//   [theme.fn.smallerThan("md")]: {
//     fontSize: 70,
//   },
//   [theme.fn.smallerThan("sm")]: {
//     fontSize: 45,
//   },
// },
// subtitle: {
//   color: "#002466",
//   fontSize: 60,
//   [theme.fn.smallerThan("md")]: {
//     fontSize: 50,
//   },
//   [theme.fn.smallerThan("sm")]: {
//     fontSize: 35,
//   },
// },
// subsubtitle: {
//   color: "#002466",
//   fontSize: 55,
//   [theme.fn.smallerThan("md")]: {
//     fontSize: 45,
//   },
//   [theme.fn.smallerThan("sm")]: {
//     fontSize: 30,
//   },
// },
