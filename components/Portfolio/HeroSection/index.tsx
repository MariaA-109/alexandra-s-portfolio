import { Button, Container, Group, Text, rem } from "@mantine/core";
import { createStyles } from "@mantine/styles";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    boxSizing: "border-box",
    backgroundColor: theme.colorScheme === "dark" ? "#1f1f1f" : "#f9f9f9",
    marginTop: rem(90),
  },
  inner: {
    position: "relative",
    paddingTop: rem(120),
    paddingBottom: rem(120),
    [theme.breakpoints.sm]: {
      paddingBottom: rem(80),
      paddingTop: rem(80),
    },
  },

  title: {
    fontSize: rem(72),
    fontWeight: 900,
    lineHeight: 1.1,
    margin: "auto",
    paddingBottom: "1rem",
    color: theme.colorScheme === "dark" ? "#fff" : "#000",
    [theme.breakpoints.sm]: {
      fontSize: rem(42),
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: rem(40),
    fontSize: rem(60),
    color: theme.colorScheme === "dark" ? "#fff" : "#000",
    [theme.breakpoints.sm]: {
      fontSize: rem(18),
    },
  },

  controls: {
    marginTop: rem(80),
    [theme.breakpoints.sm]: {
      marginTop: rem(40),
    },
  },

  control: {
    height: rem(54),
    paddingLeft: rem(38),
    paddingRight: rem(38),
    [theme.breakpoints.sm]: {
      height: rem(54),
      paddingLeft: rem(18),
      paddingRight: rem(18),
      flex: 1,
    },
  },
}));

const HeroSection = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container size={750} className={classes.inner}>
        <h1 className={classes.title}>
          Hi, I&apos;m{" "}
          <Text component="span" variant="gradient" inherit>
            Alexandra,
          </Text>{" "}
          a full stack developer
        </h1>

        <Text className={classes.description} ta="justify" c="dimmed">
          I specialize in creating robust and scalable web applications that
          deliver seamless user experiences. With a keen eye for detail and a
          passion for programming, I transform ideas into reality through
          innovative solutions and cutting-edge technologies.
        </Text>

        <Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            component="a"
            href="/#projects"
          >
            See projects
          </Button>
        </Group>
      </Container>
    </div>
  );
};

export default HeroSection;
