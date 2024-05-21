import {
  Card,
  Group,
  Text,
  Image,
  Grid,
  Paper,
  rem,
  Overlay,
  Badge,
  Flex,
} from "@mantine/core";
import { createStyles } from "@mantine/styles";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    padding: "1rem",
    paddingLeft: "2rem",
    height: "100%",
    "&:hover": {
      boxShadow: theme.shadows.lg,
      transform: "scale(1.02)",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: "0.4rem",
      background:
        theme.colorScheme === "dark"
          ? "linear-gradient(24deg, #ffffff, #D0BFFF, #D0EBFF,#F8F0FC, #ffffff)"
          : "linear-gradient(24deg,#ffffff,  #D0BFFF,#D0EBFF, #F8F0FC, #ffffff)",
    },
  },

  badge: {
    zIndex: 2,
    top: "55%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

const PluginsSection = () => {
  const { classes } = useStyles();

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      mt="5rem"
      id="plugins"
    >
      <Group
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text fz="40" fw={500} c="navy.8">
          We provide{" "}
        </Text>{" "}
        <Text fz="40" fw={550} c="navy.8" td="underline">
          scalable solutions
        </Text>
        <Text fz="40" fw={500} c="navy.8">
          designed to meet the unique needs of retail environments.
        </Text>
      </Group>

      <Grid gutter="lg" p="4rem">
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
          <Paper withBorder radius="md" className={classes.card}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1024px-WordPress_blue_logo.svg.png"
              alt="Your Image Alt Text"
              style={{ width: rem(38), height: rem(38) }}
            />

            <Text size="xl" fw={500} mt="md">
              Wordpress
            </Text>
            <Text size="sm" mt="sm" c="dimmed">
              Seamlessly connect your WordPress site with Wandace to manage and
              synchronize your inventory across your e-commerce platform. Easily
              embed product listings, track sales, and update stock levels in
              real-time, ensuring your customers always see the latest product
              availability.
            </Text>
          </Paper>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
          <Paper withBorder radius="md" className={classes.card}>
            <Image
              src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png"
              alt="Your Image Alt Text"
              style={{ width: rem(38), height: rem(38) }}
            />
            <Text size="xl" fw={500} mt="md">
              Amazon
            </Text>
            <Text size="sm" mt="sm" c="dimmed">
              Expand your reach by integrating with Amazon. Wandace allows you
              to manage your Amazon store inventory directly from our platform.
              Sync stock levels, update product information, and handle orders
              efficiently, making it easier to scale your business on one of the
              world’s largest marketplaces.
            </Text>
          </Paper>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
          <Paper
            withBorder
            radius="md"
            className={classes.card}
            style={{ transform: "none", boxShadow: "none" }}
          >
            <Overlay color="#F1F3F5" opacity={0.7} zIndex={1} />
            <Badge
              pos="absolute"
              variant="filled"
              radius="sm"
              className={classes.badge}
            >
              coming soon
            </Badge>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
              alt="Your Image Alt Text"
              style={{ width: rem(38), height: rem(38) }}
            />

            <Text size="xl" fw={500} mt="md">
              Instagram
            </Text>
            <Text size="sm" mt="sm" c="dimmed">
              Leverage the power of social media with our Instagram integration.
              Connect your product catalog to Instagram, enabling direct
              shopping from your posts and stories. Wandace keeps your inventory
              updated in real-time, ensuring a seamless shopping experience for
              your followers.
            </Text>
          </Paper>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
          <Paper
            withBorder
            radius="md"
            className={classes.card}
            style={{ transform: "none", boxShadow: "none" }}
          >
            <Overlay color="#F1F3F5" opacity={0.7} zIndex={1} />
            <Badge
              pos="absolute"
              variant="filled"
              radius="sm"
              className={classes.badge}
            >
              coming soon
            </Badge>
            <Image
              src="https://cdn.icon-icons.com/icons2/2389/PNG/512/shopify_logo_icon_144894.png"
              alt="Your Image Alt Text"
              style={{ width: rem(38), height: rem(38) }}
            />
            <Text size="xl" fw={500} mt="md">
              Shopify
            </Text>
            <Text size="sm" mt="sm" c="dimmed">
              Enhance your Shopify store with Wandace’s robust stock management
              capabilities. Sync your inventory, automate order processing, and
              manage multiple store locations effortlessly. Keep your product
              data consistent and up-to-date across all your sales channels for
              optimal business performance.
            </Text>
          </Paper>
        </Grid.Col>
      </Grid>
    </Flex>
  );
};

export default PluginsSection;
