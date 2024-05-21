import { Card, Divider, Flex, Grid, Group, Image, Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import WandaceLogo from "../../../public/landingpage/Wandace_Logo_SinFondo_1000x500.png";

const FooterSection = () => {
  return (
    <Card shadow="sm" radius="lg" withBorder bg="gray.0" mt="3rem">
      <Grid w="70%" mx="auto">
        <Grid.Col span={3}>
          <Text size="sm" fw={700} c="black" mb="xs">
            Resources
          </Text>
          <Text size="xs" fw={400} c="dimmed">
            Docs
          </Text>
          <Text size="xs" fw={400} c="dimmed">
            Learn
          </Text>
        </Grid.Col>
        <Grid.Col span={3}>
          <Text size="sm" fw={700} c="black" mb="xs">
            About
          </Text>
          <Text size="xs" fw={400} c="dimmed">
            Wandace Agency
          </Text>
        </Grid.Col>
        <Grid.Col span={3}>
          <Text size="sm" fw={700} c="black" mb="xs">
            Legal
          </Text>
          <Text size="xs" fw={400} c="dimmed">
            Privacy Policy
          </Text>
          <Text size="xs" fw={400} c="dimmed">
            Legal Notice
          </Text>
        </Grid.Col>
        <Grid.Col span={3}>
          <Text size="sm" fw={700} c="black" mb="xs">
            More
          </Text>
          <Text size="xs" fw={400} c="dimmed">
            Contact Sales
          </Text>
        </Grid.Col>
      </Grid>

      <Divider my="2rem" />

      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
      >
        <Image
          src={WandaceLogo.src}
          alt="Wandace 1"
          maw={140}
          mb={{ base: "1rem", md: 0 }}
        />
        <Flex gap="1rem">
          <IconBrandInstagram size={20} />
          <IconBrandLinkedin size={20} />
          <IconBrandGithub size={20} />
        </Flex>
      </Flex>
      <Group justify="center" align="center">
        <Text size="xs" c="dimmed">
          © {new Date().getFullYear()} Wandace. All rights reserved.
        </Text>
      </Group>
    </Card>
  );
};

export default FooterSection;
