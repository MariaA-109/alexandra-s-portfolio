import { Card, Center, Flex, Grid, Text, createStyles } from '@mantine/core';
import { motion } from 'framer-motion';

const useStyles = createStyles((theme) => ({
  subtitle: {
    color: '#002466',
    fontSize: 30,
    textAlign: 'center',
  },
}));

const ReviewsSection = () => {
  const { classes } = useStyles();

  return (
    <Flex direction="column" justify="center" align="center">
      <Center
        sx={(theme) => ({
          padding: '5rem',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        })}
      >
        <Text size="xl" mb="xl" className={classes.subtitle}>
          This is what they say about us
        </Text>

        <Grid gutter="md" mt="xl" m={0}>
          <Grid.Col span={4}>
            <Card
              shadow="sm"
              padding="xl"
              component="a"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <Text weight={500} size="lg" mt="md">
                Vestibulum suscipit dignissim tellus sit amet commodo.
              </Text>

              <Text mt="xs" color="dimmed" size="sm">
                Vestibulum suscipit dignissim tellus sit amet commodo.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card
              shadow="sm"
              padding="xl"
              component="a"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <Text weight={500} size="lg" mt="md">
                Vestibulum suscipit dignissim tellus sit amet commodo.
              </Text>

              <Text mt="xs" color="dimmed" size="sm">
                Vestibulum suscipit dignissim tellus sit amet commodo.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card
              shadow="sm"
              padding="xl"
              component="a"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <Text weight={500} size="lg" mt="md">
                Vestibulum suscipit dignissim tellus sit amet commodo.
              </Text>

              <Text mt="xs" color="dimmed" size="sm">
                Vestibulum suscipit dignissim tellus sit amet commodo.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card
              shadow="sm"
              padding="xl"
              component="a"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <Text weight={500} size="lg" mt="md">
                Vestibulum suscipit dignissim tellus sit amet commodo.
              </Text>

              <Text mt="xs" color="dimmed" size="sm">
                Vestibulum suscipit dignissim tellus sit amet commodo.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card
              shadow="sm"
              padding="xl"
              component="a"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <Text weight={500} size="lg" mt="md">
                Vestibulum suscipit dignissim tellus sit amet commodo.
              </Text>

              <Text mt="xs" color="dimmed" size="sm">
                Vestibulum suscipit dignissim tellus sit amet commodo.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card
              shadow="sm"
              padding="xl"
              component="a"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <Text weight={500} size="lg" mt="md">
                Vestibulum suscipit dignissim tellus sit amet commodo.
              </Text>

              <Text mt="xs" color="dimmed" size="sm">
                Vestibulum suscipit dignissim tellus sit amet commodo.
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Center>
    </Flex>
  );
};

export default ReviewsSection;
