import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Group,
  Image,
  SimpleGrid,
  Text,
  rem,
} from "@mantine/core";
import { createStyles } from "@mantine/styles";
import { motion } from "framer-motion";
import Link from "next/link";
import heyDaisy from "../../../public/projects/heyDaisy.png";
import Weather from "../../../public/projects/weather.png";
import Wandace from "../../../public/projects/wandace.png";
import Agency from "../../../public/projects/wandace-agency.png";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    boxSizing: "border-box",
    justifyContent: "center",
    backgroundColor: theme.colorScheme === "dark" ? "#1f1f1f" : "#f9f9f9",
    marginTop: rem(90),
  },
  title: {
    fontSize: rem(62),
    fontWeight: 900,
    lineHeight: 1.5,
    color: theme.colorScheme === "dark" ? "#fff" : "#000",
    [theme.breakpoints.sm]: {
      fontSize: rem(42),
      lineHeight: 1.2,
      textAlign: "center",
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
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    whileHover={{ scale: 1.05 }}
  >
    <Card shadow="sm" padding="lg" radius="md" id="projects">
      <Box>
        <Image
          radius="md"
          h={200}
          w="100%"
          fit="fill"
          src={image}
          alt="image"
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

const Projects = () => {
  const { classes } = useStyles();
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      py="xl"
      className={classes.wrapper}
      id="projects"
    >
      <h1 className={classes.title}>Work Showcase</h1>
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 2 }}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
        p="xl"
        w="80%"
      >
        <div>
          <ServiceCard
            image={Wandace.src}
            title="Wandace"
            text="SAAS solution focused on optimizing content and inventory management for e-commerce. Specializing in providing scalable solutions to meet the unique needs of retail environments."
            badges={["React.js", "Next.js", "TypeScript", "GraphQL"]}
            liveLink=""
            codeLink=""
            comingSoon={true}
          />
        </div>
        <div>
          <ServiceCard
            image={Agency.src}
            title="Wandace Agency"
            text="Wandace Agency specializes in scalable e-commerce solutions for retail environments, crafting custom platforms or utilizing WordPress to meet unique business needs and ensure seamless online experiences for customers."
            badges={["React.js", "Next.js", "Mantine"]}
            liveLink=""
            codeLink=""
            comingSoon={true}
          />
        </div>
        {/* <div>
          <ServiceCard
            image={heIAds.src}
            title="heIAds"
            text="A language learning app that prioritizes community and events. Users can create profiles with their personal information and language learning preferences. They can then connect with others through chat or join planned events."
            badges={["Hostinger"]}
            liveLink="https://heydaisy-frontend.onrender.com/"
            codeLink="https://github.com/MariaA-109/heyDaisy-frontend"
            comingSoon={false}
          />
        </div> */}
        <div>
          <ServiceCard
            image={heyDaisy.src}
            title="heyDaisy"
            text="A language learning app that prioritizes community and events. Users can create profiles with their personal information and language learning preferences. They can connect with others through chat or join planned events."
            badges={["React.js", "daisyUI", "MongoDB", "Firebase"]}
            liveLink="https://heydaisy-frontend.onrender.com/"
            codeLink="https://github.com/MariaA-109/heyDaisy-frontend"
            comingSoon={false}
          />
        </div>
        <div>
          <ServiceCard
            image={Weather.src}
            title="Weather App"
            text="Weather application providing real-time weather data and forecasts. Users could search for locations and receive updates on weather conditions, temperature and forecasts, including actual wind chill, humidity and wind conditions."
            badges={["React.js", "daisyUI", "MongoDB", "Firebase"]}
            liveLink="https://weather-app-colors.netlify.app"
            codeLink="https://github.com/MariaA-109/weatherapp-react"
            comingSoon={false}
          />
        </div>
      </SimpleGrid>
    </Flex>
  );
};

export default Projects;
