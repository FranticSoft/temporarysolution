import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'The first company to make Pay-As-You-Go mainstream.',
  description:
    'Pay only for what you use, never any extra. Plus, we offer a free tier for almost all of our services.',
  plans: [
     {
      id: 'cloudstore',
      title: 'Cloud Store',
      description: 'Welcome to the big cloud.',
      price: 'Free for the first 5gb, then $0.01/additional gigabyte stored',
      isRecommended: true,
      features: [
        {
          title: 'Virtually infinite storage',
        },
        {
          title: 'Never lose any data. 99.999999999% durability',
        },
        {
          title: 'Never locked in',
        },
        {
          title: 'Simple to use, intuitive UI',
        },
        {
          title: 'Integration with Satellite CDN',
        },
      ],
      action: {
        href: '/signup',
      },
    },
    {
      id: 'satellitedp',
      title: 'Satellite Download pages',
      description: 'Create a donwnload page for your files and share it with your friends.',
      price: 'Free forever.',
      features: [
        {
          title: 'Super quick setup',
        },
        {
          title: 'Makes sharing easy',
        },
        {
          title: 'Integration with Cloud Store',
        },
        {
          title: 'Permissions settings for your files',
        },
        {
          title: 'Sharable QR code for easy access',
        },
      ],
      action: {
        href: '/signup',
      },
    },
    {
      id: 'satellitecdn',
      title: 'Satellite CDN',
      description: 'Distribute your content at blazing fast speeds.',
      price: 'Free for the first 1GB, then $0.005/additional gigabyte distributed',
      features: [
        {
          title: 'Built on Cloudflare CDN',
        },
        {
          title: 'Makes sharing easy',
        },
        {
          title: 'Integration with Cloud Store',
        },
        {
          title: 'Worldwide availibility',
        },
        {
          title: 'Lower load times on distributed content',
        },
      ],
      action: {
        href: '/signup',
      },
    },
    {
      id: 'planwise',
      title: 'PlanWise',
      description: 'Schedule your calender with AI',
      price: 'Free forever.',
      features: [
        {
          title: 'Easy to use interface',
        },
        {
          title: 'AI powered scheduling',
        },
        {
          title: 'Easily chat with your AI assistant',
        },
        {
          title: 'Companion mobile app to notify you',
        },
      ],
      action: {
        href: '/signup',
      },
    },
   
   
    
  ],
}
