import {
  Badge,
  Button,
  Card,
  Flex,
  Grid,
  Group,
  List,
  Text,
} from "@mantine/core";
import { createStyles } from "@mantine/styles";
import { motion } from "framer-motion";
import { IconBuildingWarehouse } from "@tabler/icons-react";
import { IconShoppingBagPlus } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  title: {
    color: "#002466",
    display: "flex",
    alignItems: "center",
    padding: "2rem",
    [theme.fn.smallerThan("md")]: {
      fontSize: 70,
    },
    [theme.fn.smallerThan("sm")]: {
      fontSize: 40,
    },
  },
  container: {
    height: "100%",
    width: "100%",
    marginBottom: "xl",
    justifyContent: "center",
    alignContent: "center",
    [theme.fn.smallerThan("md")]: {
      flexWrap: "wrap",
    },
    [theme.fn.smallerThan("sm")]: {
      flexWrap: "wrap",
    },
  },
}));

const SubscriptionsSection = () => {
  const { classes } = useStyles();

  return (
    <Flex className={classes.container} p="5rem">
      <Text className={classes.title} fz="80" fw={700} c="navy.8">
        Get started with Wandace
      </Text>
      <Grid w="100%">
        <Grid.Col span={6}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card shadow="sm" padding="lg" radius="md" withBorder h="auto">
              <Group justify="center" mt="md" mb="xs">
                <Text size="lg" fw={700}>
                  Wandace Warehouse
                </Text>
              </Group>
              <Group justify="center" mt="md" mb="xs">
                <Flex direction="column" justify="center" align="center">
                  <IconBuildingWarehouse stroke={2} />
                  <Badge size="lg" radius="sm" m="md">
                    Warehouse included
                  </Badge>
                </Flex>
              </Group>

              <Group justify="center" mt="md" mb="xs">
                <Text size="md" c="dimmed">
                  Here is what you get with Wandace Warehouse:
                </Text>
              </Group>
              <Group justify="center" m="lg">
                <List>
                  <List.Item>Unlimited access to all plugins</List.Item>
                  <List.Item>Unlimited access to all content</List.Item>
                </List>
              </Group>
              <Group justify="center">
                <Text size="2rem">59 €</Text>
                <Text size="xs"> EUR monthly</Text>
                <Button variant="gradient" radius="sm" m="md">
                  GET STARTED
                </Button>
              </Group>
            </Card>
          </motion.div>
        </Grid.Col>

        <Grid.Col span={6}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card shadow="sm" padding="lg" radius="md" withBorder h="auto">
              <Group justify="center" mt="md" mb="xs">
                <Text size="lg" fw={700}>
                  Wandace Shop
                </Text>
              </Group>
              <Group justify="center" mt="md" mb="xs">
                <IconBuildingWarehouse stroke={2} />
                <Text fw={600}> + </Text>
                <IconShoppingBagPlus stroke={2} />
                <Badge size="lg" radius="sm" mb="md">
                  Warehouse & Point of sale included
                </Badge>
              </Group>
              <Group justify="center" mt="md" mb="xs">
                <Text size="md" c="dimmed">
                  Here is what you get with Wandace Shop:
                </Text>
              </Group>

              <Group justify="center" m="lg">
                <List>
                  <List.Item>Unlimited access to all plugins</List.Item>
                  <List.Item>Unlimited access to all content</List.Item>
                </List>
              </Group>
              <Group justify="center">
                <Text size="2rem">79 €</Text>
                <Text size="xs">EUR monthly</Text>
                <Button variant="gradient" radius="sm" m="md">
                  GET STARTED
                </Button>
              </Group>
            </Card>
          </motion.div>
        </Grid.Col>
      </Grid>
    </Flex>
  );
};

export default SubscriptionsSection;
