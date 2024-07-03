import { Button, Container, Group, Text, rem } from "@mantine/core";
import classes from "./HeroSection.module.scss";

const HeroSection = () => {
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
