import {
  Avatar,
  Button,
  Container,
  Flex,
  Group,
  Paper,
  Text,
  rem,
} from "@mantine/core";
import { createStyles } from "@mantine/styles";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Portfolio from "../../../public/about/portfolio.png";

const useStyles = createStyles((theme) => ({
  title: {
    [theme.fn.smallerThan("md")]: {
      textAlign: "center",
    },
    fontSize: rem(62),
    fontWeight: 900,
    lineHeight: 1.5,
    color: theme.colorScheme === "dark" ? "#fff" : "#000",
    [theme.breakpoints.sm]: {
      fontSize: rem(42),
      lineHeight: 1.2,
    },
  },
  content: {
    display: "flex",
    flexDirection: "row",
    gap: rem(20),
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  userCard: {
    flex: 1,
    maxWidth: rem(400),
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },
  userText: {
    flex: 2,
    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
  noUnderline: {
    textDecoration: "none",
  },
  gradientText: {
    background: "linear-gradient(25deg, #eeaeca, #94bbe0)",
    WebkitBackgroundClip: "text",
    fontWeight: "bold",
    WebkitTextFillColor: "transparent",
  },
}));

const About = () => {
  const { classes } = useStyles();

  return (
    <Container id="about">
      <Flex direction="column" align="center" py="lg">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.title}
        >
          About
        </motion.h1>
        <Flex className={classes.content} mt="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={classes.userCard}
          >
            <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
              <Avatar src={Portfolio.src} size={120} radius={120} mx="auto" />
              <Text ta="center" fz="lg" fw={500} mt="md">
                Alexandra Acosta
              </Text>
              <Text ta="center" c="dimmed" fz="xs">
                acosta.alexandra@outlook.com • Developer
              </Text>
              <Group justify="center" mt="sm">
                <Link
                  href="https://www.linkedin.com/in/alexandra-acosta-aviles"
                  className={classes.noUnderline}
                >
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <IconBrandLinkedin stroke="1" color="gray" />
                  </motion.div>
                </Link>
                <Link
                  href="https://github.com/MariaA-109"
                  className={classes.noUnderline}
                >
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <IconBrandGithub stroke="1" color="gray" />
                  </motion.div>
                </Link>
              </Group>
              <Link
                href="mailto:acosta.alexandra@outlook.com"
                className={classes.noUnderline}
              >
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button variant="gradient" fullWidth mt="md">
                    Send message
                  </Button>
                </motion.div>
              </Link>
            </Paper>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={classes.userText}
          >
            <Text fz="lg" ta="justify" p="md" mt="md">
              With a background in social studies and a passion for programming
              and problem solving, I transitioned into a career as a Full Stack
              web and application developer.
            </Text>
            <Text fz="lg" ta="justify" p="md">
              As Co-Founder of Wandace, I lead information technology and
              product strategy, spearheading the development of a {""}
              <span className={classes.gradientText}>SAAS solution </span>
              designed to optimize content and inventory management for
              e-commerce. I specialize in creating scalable solutions tailored
              to the unique needs of the retail sector.
            </Text>
          </motion.div>
        </Flex>
      </Flex>
    </Container>
  );
};

export default About;
