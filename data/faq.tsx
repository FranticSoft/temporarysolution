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
      q: 'How much can I store in Cloud Store?',
      a: "You can store a virtually unlimited amount in Cloud Store. Since you're not locked into tiers, you have no limits on how much you can store. Just pay for what you use.",
    },
    {
      q: 'How do I contact support?',
      a: 'Email support@fcloud.app.',
    },
    {
      q: "I'm a big business, can I use FCloud?",
      a: 'Absolutely! If you have any special needs for your business, contact support and we can help you.',
    },
  ],
}

export default faq
