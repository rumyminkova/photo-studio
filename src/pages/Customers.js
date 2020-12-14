import React from "react";
import SectionTitle from "../components/SectionTitle";
import CustomersCarousel from "../components/CustomersCarousel";

const Customers = () => {
  return (
    <section className="p-5 customers">
      <SectionTitle
        titleName="Our Customers"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        textColor="light"
      />
      <div className="container-fluid my-5">
        <div class="row">
          <div class="col-md-6 mx-auto">
            <CustomersCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
