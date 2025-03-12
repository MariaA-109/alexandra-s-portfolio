import { Badge, Box, Button, Card, Group, Text } from "@mantine/core";
import { createStyles } from "@mantine/styles";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  card: {
    width: "100%",
    height: "100%",
    padding: "2rem",
    position: "relative",
    overflow: "hidden",
    borderRadius: "20px",
    border: "1px solid #000000",
    borderLeftWidth: "2px",
    borderRightWidth: "2px",
    boxShadow:
      "1px 1px 1px rgba(0, 0, 0, 0.1), -1px 1px 3px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.2)",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    [theme.breakpoints.sm]: {
      width: "100%",
      height: "100%",
      padding: "2rem",
      position: "relative",
      overflow: "hidden",
      borderRadius: "20px",
      border: "1px solid #000000",
      borderLeftWidth: "2px",
      borderRightWidth: "2px",
      boxShadow:
        "1px 1px 1px rgba(0, 0, 0, 0.1), -1px 1px 3px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.2)",
      transition: "transform 150ms ease, box-shadow 100ms ease",
    },
  },
  img: {
    width: "100%",
    height: "30vh",
    position: "relative",
    [theme.fn.smallerThan("md")]: {
      height: "40vh",
    },
    [theme.fn.smallerThan("sm")]: {
      height: "20vh",
    },
  },
}));

const ServiceCard = ({
  image,
  title,
  text,
  badges,
  liveLink,
  codeLink,
  comingSoon,
}: {
  image: string;
  title: string;
  text: string;
  badges: string[];
  liveLink: string;
  codeLink: string;
  comingSoon: boolean;
}) => {
  const { classes } = useStyles();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        id="projects"
        className={classes.card}
      >
        <Box className={classes.img}>
          <Image
            src={image}
            alt="image"
            fill
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </Box>
        <Group p="center" grow mt="lg" mb="xs">
          <Text size="xl" fw={700} ta="center">
            {title}
          </Text>
        </Group>

        <Group p="center" mt="xs" mb="xs">
          <Text size="sm" ta="justify">
            {text}
          </Text>
        </Group>

        <Group justify="center" m="md">
          {badges.map((badge, index) => (
            <Badge variant="light" color="black" key={index}>
              {badge}
            </Badge>
          ))}
        </Group>

        <Group justify="center" m="md">
          {liveLink ? (
            <Link href={liveLink} passHref>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button variant="gradient" radius="sm">
                  LIVE
                </Button>
              </motion.div>
            </Link>
          ) : (
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="filled" color="black" radius="sm" disabled>
                LIVE
              </Button>
            </motion.div>
          )}
          {codeLink ? (
            <Link href={codeLink} passHref>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button variant="filled" color="black" radius="sm">
                  CODE
                </Button>
              </motion.div>
            </Link>
          ) : (
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="filled" color="black" radius="sm" disabled>
                CODE
              </Button>
            </motion.div>
          )}
          {comingSoon && (
            <Group pos="relative" m="md">
              <Badge radius="sm" variant="dot">
                Coming Soon
              </Badge>
            </Group>
          )}
        </Group>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
