import { Button, Grid, Image } from "@mantine/core";
import "@mantine/core/styles.css";
import WandaceLogo from "../../../../../public/landingpage/Wandace_Logo_SinFondo_1000x500.png";

const HeaderLayout = () => {
  // const router = useRouter();
  // const pathname = router.pathname;
  // const { data: session } = useSession();

  return (
    <Grid justify="center" align="center">
      <Grid.Col span={4}>
        <Image
          src={WandaceLogo.src}
          alt="Wandace"
          style={{ maxWidth: "200px", height: "auto" }}
          ml="sm"
        />
      </Grid.Col>
      <Grid.Col span={8}>
        <Button
          size="xs"
          variant="transparent"
          component="a"
          href="/#workfields"
        >
          ABOUT
        </Button>

        <Button size="xs" variant="transparent" component="a" href="/#plugins">
          PLUGINS
        </Button>
        <Button
          size="xs"
          variant="transparent"
          component="a"
          href="/#subscriptions"
        >
          SUBSCRIPTIONS
        </Button>
        <Button size="xs" variant="transparent" component="a" href="/#reviews">
          REVIEWS
        </Button>
        <Button size="xs" variant="transparent" component="a" href="/#contact">
          CONTACT
        </Button>
      </Grid.Col>
      {/* <Group position="right" spacing="md">
          {!session ? (
            <>
              {pathname !== "/auth/login" && (
                <Link href="/auth/login">
                  <Button variant="outline">Log in</Button>
                </Link>
              )}
              {pathname !== "/auth/signup" && (
                <Link href="/auth/signup">
                  <SignupButton />
                </Link>
              )}
            </>
          ) : (
            <>
              <Button
                variant="outline"
                onClick={async () => {
                  await signOut({
                    redirect: false,
                  });
                }}
              >
                Sign out
              </Button>
              <Link href="/adminarea/company">
                <Button variant="gradient">Admin Area</Button>
              </Link>
            </>
          )}
        </Group> */}
    </Grid>
  );
};

export default HeaderLayout;
