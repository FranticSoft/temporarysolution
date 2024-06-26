import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
  Avatar,
  useColorModeValue,
  Card,
  CardBody
} from "@chakra-ui/react";

import { SEO } from "components/seo/seo";
import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { FCloudLogo, ChakraLogo } from "components/logos";
import {
  FiArrowUpRight,
  FiCloudLightning,
  FiCreditCard,
  FiDollarSign,
  FiEye,
  FiPower,
  FiSearch,
  FiSmartphone,
  FiSmile,
  FiUserPlus,
  FiLink,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";
import { Pay } from "components/pay";

import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";
import pay from "data/pay";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

import { FaBolt, FaItalic } from "react-icons/fa";


const Home: NextPage = () => {
  return (
    <Box> 
      <SEO
        title="FCloud | Your Entire Digital Toolkit, All in One Place."
        description="Cheap cloud services have never been easier to use"
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <Stats />

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

// <TestimonalsSection/> goes after <FeaturesSection/> but is commented out for now because we dont have any lmao

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Your Entire Digital Life,
                <br/> All in One Place.
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                FCloud brings multiple services <Em>together</Em> in one easy platform, with <Em>flexible, pay-as-you-go pricing</Em> anyone can use.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
              </HStack>

                <Button colorScheme="cyan" onClick={() => window.location.href = '/signup'}>Sign up now</Button>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/dashboard.png"
                  layout="fixed"
                  width={1200}
                  height={762}
                  alt="Screenshot of the FCloud dashboard"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
            <Box>

            </Box>
          </Box>
        </Stack>
      </Container>
      

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Accessible",
            icon: FiSmile,
            description: "Tailored to be a great experience for users of all skill levels.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Cost effective",
            icon: FiDollarSign,
            description:
              "Uses Pay-As-You-Go pricing instead of different plans so you never pay for what you dont use.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Connected",
            icon: FiLink,
            description:
              "All our services work seamlessly together, creating a more cohesive experience for you.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Unlimited",
            icon: FiArrowUpRight,
            description:
              "Unlimited storage, unlimited messages, unlimited everything. No more worrying about hitting your limit.",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};


const HighlightsSection = () => {

  return (
    <Highlights bg="#22272b">
      <HighlightsItem colSpan={[1, null, 2]} title="Multitude of services">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Get started today with our <Em>several great services</Em>.
            Including Cloud Store, our high-capacity, cheap cloud storage service. And Satellite, an amazing way to share files to your friends and family. But thats not all. New services are coming all the time, keep yourself updated for when a new service drops, because you'll want to know!
          </Text>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Solid foundations">
        <Text color="muted" fontSize="lg">
          Our services are built on top-notch, hard as nails infrastucture, so you never have to worry about a thing. Our services are built using AWS and Backblaze.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Jacob Leuthardt"
        description="Founder and CEO of Frantic Software"
        avatar="https://fstatic.click/jacobleuthardt.jfif"
        gradient={["blue.500", "cyan.200"]}
      >
        “FCloud takes a different approach from other cloud platforms that tie you down with fixed plans and restrictions. Instead, we offer flexibility and choice, allowing you to pay for what you use, when you use it. It's like having the freedom to pick and choose your TV channels instead of being stuck with a bundled package. ”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Not just cloud storage"
      >
        <Text color="muted" fontSize="lg">
          We took care of your storage needs, whats next? We've got more than just Cloud Store, check out whats in currently in development.
        </Text>
        <Wrap mt="8">
          {[
            "Satellite Download pages",
            "Satellite CDN",
            "PlanWise",
            "Cloud Store Archival",
            "Mobile App",
            "Even more to come...",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="cyan"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};

const StatsCard = ({ title, children, description, gridColumn, ...rest }) => {
  return (
    <Card
      gridColumn={gridColumn}
      borderRadius="lg"
      variant="solid"
      gap="2"
      py="4"
      px="4"
      bg="gray.50"
      boxShadow="sm"
      borderWidth="1px"
      borderColor="inherit"
      position="relative"
      overflow="hidden"
      _dark={{
        bg: 'gray.800',
        borderColor: 'transparent',
      }}
    >
      <CardBody>
        <Stack {...rest}>
          <Box>
            <Heading
              as="h3"
              color="cyan.500"
              fontWeight="medium"
              fontSize="lg"
              mb="2"
              _dark={{
                color: 'cyan.300',
              }}
            >
              {title}
            </Heading>

            <Text fontWeight="medium" fontSize="1.3em" maxW="80%">
              {description}
            </Text>
          </Box>

          {children}
        </Stack>
      </CardBody>
    </Card>
  )
}

const Stats = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '75vw',
      margin: 'auto',
    }}>

    <VStack>
      <Heading
        as="h2"
        fontSize="4xl"
        textAlign="center"
        mb="8">
          That was a lot of information, let's recap.
        </Heading>

      <Box
        display="grid"
        gridTemplateColumns={{ base: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)' }}
        gap={{
          base: '32px 0',
          md: 8,
        }}
      >
        <StatsCard
          title="4+ Services"
          description="Multiple services, all in one place. Cloud Store, PlanWise, and more."
          flexDirection={{
            base: 'column',
            md: 'row',
          }}
          alignItems="center"
          gridColumn="span 3"
        >
          <Box
            width={{
              base: '100%',
              md: '240px',
            }}
            height={{ base: '140px', md: '280px' }}
          >
            <Box
              overflow="hidden"
              borderRadius="md"
              position="absolute"
              boxShadow="xl"
              right={{ base: 'auto', md: 8 }}
              bottom={{ base: '-220px', md: 'auto' }}
              _dark={{ display: 'none' }}
            >
              <Image
                src="/static/images/services.svg"
                width="229"
                height="369"
                alt="List of FCloud services"
              />
            </Box>
            <Box
              overflow="hidden"
              position="absolute"
              boxShadow="xl"
              right={{ base: 'auto', md: 8 }}
              bottom={{ base: '-220px', md: 'auto' }}
              _light={{ display: 'none' }}
            >
              <Image
                src="/static/images/services.svg"
                width="263"
                height="424"
                alt="List of FCloud services"
              />
            </Box>
          </Box>
        </StatsCard>
        <StatsCard
          title="Slash your bill"
          description="Most services have a free tier, so you can try them all out without paying anything."
          gridColumn="span 3"
        >
          <Box width="100%" height="140px">
            <Box
              overflow="hidden"
              borderRadius="md"
              position="absolute"
              right="50"
            >
              <Image
                src="/static/images/cutthetag.svg"
                width="2186"
                height="270"
                alt="Cut the tag illustration"
              />
            </Box>
          </Box>
        </StatsCard>
        <StatsCard
          title="Pay-as-you-go pricing"
          description={
            <>
              All our services use pay-as-you-go pricing, so you never pay for what you dont use.
            </>
          }
          gridColumn="span 4"
          flexDirection={{
            base: 'column',
            md: 'row',
          }}
          alignItems="center"
        >
          <Box
            width="1240px"
            height={{
              base: '150px',
              md: '300px',
            }}
          >
            <Box>
              <Image
                src="/static/images/payasyougo.svg"
                width="2480"
                height="1600"
                quality={100}
                alt="Example blocks"
              />
            </Box>
          </Box>
        </StatsCard>
        <StatsCard
          title="Better together"
          description="Our services work together seamlessly, creating a more cohesive experience for you."
          gridColumn={{
            base: 'span 3',
            md: 'span 2',
          }}
          flexDirection="column-reverse"
        >
                  <Box height="160px">
            <Box
              position="absolute"
              top="-100px"
              left="0"
              width="100%"
              _dark={{ display: 'none' }}
            >
              <Image
                src="/static/images/bettertogether.svg"
                width="400"
                height="400"
                quality="100"
                alt="Icon preview"
                style={{ objectFit: 'contain' }}
              />
            </Box>
            <Box
              position="absolute"
              top="-100px"
              left="0"
              width="100%"
              _light={{ display: 'none' }}
            >
              <Image
                src="/static/images/bettertogether.svg"
                width="400"
                height="400"
                quality="100"
                alt="Icon preview"
                style={{ objectFit: 'contain' }}
              />
            </Box>
          </Box>
        </StatsCard>
      </Box>
      </VStack>
    </div>
  )
}



const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Not just for developers
          <Br /> and businesses anymore.
        </Heading>
      }
      description={
        <>
          Who said the cloud wasn't for the everyday man?
          <Br />
          From your grandmother, to a big business, everyone is a able to harness the low prices and freedom of FCloud.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Simple interfaces.",
          icon: FiSmartphone,
          description:
            "All interfaces are meant to be easily understandable to anyone, regardless of skill level.",
          variant: "inline",
        },
        {
          title: "Easy reading.",
          icon: FaItalic,
          description:
            "With large, easily readible text on contrasting backgrounds, it's easy to read text in the dashboard.",
          variant: "inline",
        },
        {
          title: "Documentation.",
          icon: FiSearch,
          description:
            "All interfaces are documented, with a short explaination about how to use them and what the buttons do.",
          variant: "inline",
        },
        {
          title: "Advanced features.",
          icon: FaBolt,
          description:
            "Just because FCloud is meant for everyone doesn't mean it's lacking in features. Visit our documentation to find featues power users will love.",
          variant: "inline",
        },
        {
          title: "Billing control.",
          icon: FiCreditCard,
          description:
            "Control your billing and change account settings with ease. Don't worry if you get a new credit card or move houses, it's all in the settings page.",
          variant: "inline",
        },
        {
          title: "See it all.",
          icon: FiEye,
          description:
            "in the dashboard, you can see everything about your account, and visit FCloud services. See how much storage you're using, or how much your bill will be all from the dashboard.",
          variant: "inline",
        }
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        Sales tax may be applicable depending on your location.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "Wanna try it out? Sign up for the beta!",
        href: "https://fcloud.app/signup",
        action: false,
      },
    },
  };
}
