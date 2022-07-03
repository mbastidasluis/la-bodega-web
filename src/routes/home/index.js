import { h } from 'preact';
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  LockClosedIcon,
  ScaleIcon,
} from '@heroicons/react/outline';
import { useState } from 'preact/hooks';

const Home = () => {
  // TODO make static or add from db
  const features = [
    {
      name: 'Competitive exchange rates',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: GlobeAltIcon,
    },
    {
      name: 'No hidden fees',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: ScaleIcon,
    },
    {
      name: 'Transfers are instant',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: LightningBoltIcon,
    },
    {
      name: 'Mobile notifications',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: AnnotationIcon,
    },
  ];

  return (
    <>
      {/* HERO SECTION*/}
      <div className="bg-indigo-100 overflow-hidden px-4 md:px-6 lg:px-8 xl:px-0 min-h-screen">
        <div class="min-h-screen lg:flex items-center justify-center max-w-7xl mx-auto">
          <div className="relative lg:pl-8 z-10 bg-indigo-100 lg:bg-white lg:max-w-4xl lg:w-full lg:pb-28 lg:ml-0 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-indigo-100 lg:text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main className="lg:my-auto max-w-4xl px-4">
              <div className="text-center lg:text-left pt-10">
                <h1 className="text-4xl tracking-tight font-extrabold text-indigo-900 sm:text-5xl md:text-6xl xl:py-8">
                  <span className="block my-6">La Bodega</span>{' '}
                  <span className="block text-indigo-600 my-6">WEB</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 relative z-20">
                  Conoce nuestra oferta de productos y servicios. Al alcance de
                  tu mano.
                </p>
                <div className="my-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div>
                    <a
                      href="/products"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      productos
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>

          <div class="max-w-xl xl:max-w-2xl mx-auto">
            <img
              className="w-full h-1/3 object-cover object-bottom lg:object-center xl:object-right"
              src="/assets/images/ZpIskW1Tuvc-unsplash.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* FEATURES SECTION*/}
      {/*
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Transactions
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to send money
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      */}
    </>
  );
};
export default Home;
