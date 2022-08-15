import React from "react";

function Address() {
  return (
    <div className="flex justify-center">
      <div className="bg-primary rounded-3xl flex flex-col space-y-10 p-10 text-white">
        <h1 className="text-3xl font-semibol">Get In Touch</h1>
        <p>
          SEYGENCY is a digital marketing agency, we provide marketing and
          development services
        </p>

        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-[#ffa60021] p-2 rounded">
            <i class="ri-map-pin-line text-3xl text-secondary"></i>
          </div>
          <div>
            <p className="font-semibold text-xl">Visit Us</p>
            <p> Houston, TX 77072, USA</p>
          </div>
        </div>
        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-[#ffa60021] p-2 rounded">
            <i class="ri-mail-line text-3xl text-secondary"></i>
          </div>
          <div>
            <p className="font-semibold text-xl">Mail Us</p>
            <p>contact@marketingagency.com</p>
          </div>
        </div>
        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-[#ffa60021] p-2 rounded">
            <i class="ri-mail-line text-3xl text-secondary"></i>
          </div>
          <div>
            <p className="font-semibold text-xl">Phone Us</p>
            <p>(321) 310-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
