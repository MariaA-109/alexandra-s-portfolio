import {
  ActionIcon,
  Container,
  Divider,
  Group,
  Image,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { createStyles } from "@mantine/styles";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Logo from "../../../public/logo/logo-gradient.png";
import { motion } from "framer-motion";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(52),
    borderTop:
      "rem(1px) solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5))",
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "var(--mantine-spacing-xl)",
    paddingBottom: "var(--mantine-spacing-xl)",
    [theme.breakpoints.sm]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.breakpoints.sm]: {
      marginTop: "var(--mantine-spacing-md)",
    },
  },
}));

const Skills = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Divider />
      <Container className={classes.inner}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <Image
            radius="md"
            fit="contain"
            src={Logo.src}
            alt="iamge"
            style={{ maxWidth: "80px", height: "auto", cursor: "pointer" }}
          />
        </motion.div>
        <Group
          gap={0}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon
            size="lg"
            color="black"
            variant="subtle"
            component="a"
            href="https://github.com/MariaA-109"
          >
            <IconBrandGithub
              style={{ width: rem(30), height: rem(30) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="black"
            variant="subtle"
            component="a"
            href="https://www.linkedin.com/in/alexandra-acosta-aviles"
          >
            <IconBrandLinkedin
              style={{ width: rem(30), height: rem(30) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};

export default Skills;
