"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((group) => (
          <div key={group.group} className="mb-8">
            {/* Group Heading */}
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-5 text-center">
              {group.group}
            </h2>
            {group.faqs.map((item) => (
              <div key={item.question} className="mb-5">
                <Disclosure>
                  {({ open }) => (
                    <div>
                      <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                        <span>{item.question}</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 text-indigo-500`}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                        {item.answer}
                      </DisclosurePanel>
                    </div>
                  )}
                </Disclosure>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    group: "General Questions",
    faqs: [
      {
        question: "What services does Bee Craft Handyman Service provide?",
        answer:
          "We specialize in safe and humane bee and wasp removal, hive relocation, and preventive measures. We also offer general handyman services for property maintenance and repairs.",
      },
      {
        question: "Where do you operate?",
        answer:
          "We proudly serve the Inland Empire and surrounding Southern California areas, including Redlands, Riverside, and San Bernardino.",
      },
      {
        question: "Are your bee removal methods humane?",
        answer:
          "Yes! We prioritize live bee removal and relocation whenever possible, ensuring bees are safely transported to local beekeepers or sanctuaries.",
      },
    ],
  },
  {
    group: "Bee & Wasp Removal",
    faqs: [
      {
        question: "Why are there so many bees around my property?",
        answer:
          "The Inland Empire’s warm climate and citrus groves create an ideal environment for bees. If you see a sudden increase in bee activity, they might be scouting for a new hive location or attracted to nearby flowering plants.",
      },
      {
        question: "What should I do if I find a beehive on my property?",
        answer:
          "Do not attempt to remove or disturb the hive yourself. Contact us for a safe inspection and removal. We use professional techniques to relocate the bees without harm.",
      },
      {
        question: "How do I know if I have bees or wasps?",
        answer:
          "Bees are typically rounder and fuzzy, while wasps are sleek and more aggressive. Wasps build paper-like nests under eaves, in attics, or on trees, while bees build wax hives inside walls, trees, or near citrus orchards.",
      },
      {
        question: "Do you remove wasps as well?",
        answer:
          "Yes! Unlike honeybees, wasps can be more aggressive and don’t produce honey. We safely remove and prevent wasp infestations using eco-friendly methods.",
      },
    ],
  },
  {
    group: "Seasonal & Weather-Related Concerns",
    faqs: [
      {
        question: "Are bees more active in summer?",
        answer:
          "Yes, summer in SoCal brings higher temperatures, leading to increased bee activity. Swarms are more common as colonies expand.",
      },
      {
        question: "Do you provide emergency bee removal during heatwaves?",
        answer:
          "Yes! Extreme heat can cause bees to seek shelter in homes, especially near air vents or shaded areas. We offer urgent bee removal services during peak heat periods.",
      },
      {
        question: "Do bees affect citrus groves and crops?",
        answer:
          "Absolutely! Bees are essential for pollinating citrus trees, avocados, and other local crops. We work closely with local farmers to provide eco-friendly hive relocation that supports agriculture.",
      },
    ],
  },
  {
    group: "Prevention & Home Protection",
    faqs: [
      {
        question: "How can I prevent bees from nesting near my home?",
        answer:
          "Seal gaps and cracks in walls, roofs, and sheds. Remove unused yard items where bees could settle. Keep trash cans sealed to avoid attracting wasps. Schedule a bee-proofing service with us for added protection.",
      },
      {
        question: "Do you offer maintenance plans?",
        answer:
          "Yes! Our seasonal maintenance plans help prevent bee and wasp infestations, especially before spring and summer when colonies expand.",
      },
    ],
  },
  {
    group: "Safety & Pricing",
    faqs: [
      {
        question: "Is bee removal safe for pets and children?",
        answer:
          "Yes, our methods are safe and non-toxic. If necessary, we recommend keeping pets and children indoors until the removal process is complete.",
      },
      {
        question: "How much does bee or wasp removal cost?",
        answer:
          "Pricing varies based on hive size, location, and accessibility. Contact us for a free estimate!",
      },
      {
        question: "Do you provide same-day service?",
        answer:
          "We offer same-day or next-day service for urgent situations, especially when bees pose an immediate safety risk.",
      },
    ],
  },
  {
    group: "Booking & Contact",
    faqs: [
      {
        question: "How can I schedule an appointment?",
        answer:
          "Call us or visit our website to book an inspection. We respond quickly to all inquiries.",
      },
      {
        question: "Do you work with businesses and farms?",
        answer:
          "Yes! We provide bee and wasp management solutions for residential, commercial, and agricultural properties.",
      },
    ],
  },
];

