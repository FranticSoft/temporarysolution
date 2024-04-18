import * as React from 'react'

const faq = {
  title: 'Frequently asked questions',
  // description: '',
  items: [
    {
      q: 'What is Pay-as-you-go pricing?',
      a: (
        <>
          Pay-as-you-go is a way to pay for your subscription based on the amount you use. Think of it like your water bill every month, with your water bill
           you only pay for the water you use, never any unused water. It's the same principle with pay-as-you-go pricing. It helps eliminate paying for what you dont use and
          helps you save money.
        </>
      ),
    },
    {
      q: 'Is my data secure in FCloud?',
      a: "Yes, we take security very seriously. We use the latest security measures to keep your data safe. We partner with Backblaze, a cloud infrastructure provider to keep your data safe, from upload to the physical security of the datacenter.",
    },
    {
      q: 'How do I contact support?',
      a: 'Email support@fcloud.app or call +1 (551)-FRANTIC.',
    },
    {
      q: "I own a business, can I use FCloud?",
      a: 'Absolutely! If you have any special needs for your business, contact support and we can help you. We offer special pricing for businesses as well.',
    },
    {
      q: 'Are there any minimum fees?',
      a: 'Yes, there is a $1 minimum fee per month. This is only applied if you use more than the free tier of any one service. Read more about this base fee at docs.fcloud.app',
    },
  ],
}

export default faq
