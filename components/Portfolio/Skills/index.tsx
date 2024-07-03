import {
  Container,
  Flex,
  Group,
  Pill,
  Text,
  Timeline,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { createStyles } from "@mantine/styles";
import { IconCheck, IconChecks } from "@tabler/icons-react";
import { motion } from "framer-motion";

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
}));

const Skills = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <Container mt="1rem" mb="4rem" p="lg">
      <Flex justify="center" align="center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.title}
        >
          Skills
        </motion.h1>
      </Flex>
      <Timeline color="#E0B0CF" active={1} lineWidth={3} bulletSize={23}>
        <Timeline.Item bullet={<IconCheck size={12} />} title="Wandace">
          <Group justify="left">
            <Pill size="md">Typescript</Pill>
            <Pill size="md">TypeORM</Pill>
            <Pill size="md">Next.js</Pill>
            <Pill size="md">GraphQL</Pill>
            <Pill size="md">Hostinger</Pill>
            <Pill size="md">Hubspot</Pill>
            <Pill size="md">Mantine</Pill>
          </Group>
          <Text size="xs" mt={4}>
            2023/2024
          </Text>
        </Timeline.Item>

        <Timeline.Item
          bullet={<IconChecks size={12} />}
          title="WBS Coding School"
        >
          <Group justify="left">
            <Pill size="md">Javascript</Pill>
            <Pill size="md">React</Pill>
            <Pill size="md">Node.js</Pill>
            <Pill size="md">MongoDB</Pill>
            <Pill size="md">Figma</Pill>
            <Pill size="md">Tailwind</Pill>
            <Pill size="md">Express</Pill>
            <Pill size="md">Bootstrap</Pill>
            <Pill size="md">daisyUI</Pill>
          </Group>
          <Text size="xs" mt={4}>
            2023
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="SheCodes"
          bullet={<IconChecks size={12} />}
          lineVariant="dashed"
        >
          <Group justify="left">
            <Pill size="md">Javascript</Pill>
            <Pill size="md">HTML</Pill>
            <Pill size="md">CSS</Pill>
            <Pill size="md">VSCode</Pill>
            <Pill size="md">GitHub</Pill>
            <Pill size="md">Hosting</Pill>
          </Group>
          <Text size="xs" mt={4}>
            2022/2023
          </Text>
        </Timeline.Item>
      </Timeline>
    </Container>
  );
};

export default Skills;
