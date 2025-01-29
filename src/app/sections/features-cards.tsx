'use client';

import { FeatureCard } from '@/components/app/feature-card';
import { motion } from 'framer-motion';
import {
  ChartBreakoutSquareIcon,
  MessageDone01Icon,
  SmartWatch03Icon,
} from 'hugeicons-react';

export const FeaturesCardsSection = () => {
  const fadeInVariants = {
    left: { opacity: 1, x: 0 },
    top: { opacity: 1, y: 0 },
    right: { opacity: 1, x: 0 },
    leftHidden: { opacity: 0, x: -20 },
    topHidden: { opacity: 0, y: -20 },
    rightHidden: { opacity: 0, x: 20 },
  };

  return (
    <section
      id="features"
      className="flex w-full flex-col bg-background/50 py-12"
    >
      <div className="container">
        <div className="grid grid-cols-2 items-center justify-items-center gap-4 lg:grid-cols-3">
          <motion.div
            className="col-span-3 w-full lg:col-span-1"
            initial="leftHidden"
            whileInView="left"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInVariants}
            transition={{ duration: 1 }}
          >
            <FeatureCard
              icon={
                <SmartWatch03Icon
                  className="size-12 min-h-12 min-w-12 text-primary"
                  strokeWidth={0.5}
                />
              }
              bigLabel="15+"
              description={
                <>
                  Anos de
                  <br />
                  experiência
                </>
              }
            />
          </motion.div>

          <motion.div
            className="col-span-3 w-full lg:col-span-1"
            initial="topHidden"
            whileInView="top"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInVariants}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <FeatureCard
              icon={
                <ChartBreakoutSquareIcon
                  className="size-12 min-h-12 min-w-12 text-primary"
                  strokeWidth={0.5}
                />
              }
              description={
                <>
                  Criativo, responsável, veloz
                  <br />e cheio de garra.
                </>
              }
            />
          </motion.div>

          {/* Direita */}
          <motion.div
            className="col-span-3 w-full lg:col-span-1"
            initial="rightHidden"
            whileInView="right"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInVariants}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <FeatureCard
              icon={
                <MessageDone01Icon
                  className="size-12 min-h-12 min-w-12 text-primary"
                  strokeWidth={0.5}
                />
              }
              description="Desenrolado, dedicado e apaixonado por tecnologia."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
