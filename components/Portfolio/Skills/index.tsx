import { Box, Flex, Group, Pill, rem, useMantineTheme } from "@mantine/core";
import { createStyles } from "@mantine/styles";
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

  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Bootstrap",
    "Tailwindcss",
    "MongoDB",
    "GraphQL",
    "Express",
    "Hostinger",
    "UX/UI Design",
  ];

  return (
    <Box p="5rem">
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
      <Group justify="center" mt="lg">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            <Pill size="lg">{skill}</Pill>
          </motion.div>
        ))}
      </Group>
    </Box>
  );
};

export default Skills;
