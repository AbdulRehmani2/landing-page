import React from "react";
import Card from "./Card";

function Services() {
  return (
    <div className="my-24 px-24">
      <h1 className="text-4xl text-center mb-8">Our Services</h1>
      <div className="flex flex-row flex-wrap items-center justify-center gap-10 lg:flex-nowrap">
        <Card width={35} height={12}>
          <h3 className="text-2xl mb-3">Energy-Efficient Hardware Solutions</h3>
          <p>
            Upgrade your infrastructure with our energy-efficient servers, data
            centers, and devices that consume up to 30% less power.
          </p>
        </Card>
        <Card width={35} height={12}>
          <h3 className="text-2xl mb-3">Sustainable Cloud Solutions</h3>
          <p>
            Leverage our green cloud services, powered by renewable energy
            sources, to reduce your company&apos;s carbon footprint.
          </p>
        </Card>
        <Card width={35} height={12}>
          <h3 className="text-2xl mb-3">Eco-Friendly Software</h3>
          <p>
            We develop custom software that optimizes resource usage and reduces
            environmental impact.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Services;
