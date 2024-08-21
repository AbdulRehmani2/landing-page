import React from "react";
import Card from "./Card";

function Testimonials() {
  return (
    <div className="my-24 flex flex-col justify-center items-center px-10">
      <h1 className="text-4xl mb-5 text-center">What Our Clients Say</h1>
      <Card height={11} width={40}>
        <p className="mt-5">
          EcoTech Solutions transformed our IT infrastructure, reducing our
          energy costs by 25% while helping us meet our sustainability targets.
        </p>
        <q className="text-right mt-5 block">
          <i>Jane Doe, CEO of GreenTech Innovations</i>
        </q>
      </Card>
      <br />
      <br />
      <Card height={11} width={40}>
        <p className="mt-5">
          Their sustainable cloud services have been a game-changer for us,
          providing reliable performance with a significantly lower
          environmental impact.
        </p>
        <q className="text-right mt-5 block">
          <i>John Smith, CTO of FutureTech Inc.</i>
        </q>
      </Card>
    </div>
  );
}

export default Testimonials;
