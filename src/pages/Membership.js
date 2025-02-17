import React from "react";
import SectionTitle from "../components/SectionTitle";
import MembershipCard from "../components/MembershipCard";
import { MEMBERSHIP_ITEMS } from "../data/data";

const Membership = () => {
  return (
    <section class="bg-light text-center p-5" id="membership">
      <div class="container-fluid">
        <SectionTitle
          titleName="Join Us"
          text="Become a Member"
          textColor="dark"
        />
        <div class="row align-items-center">
          {MEMBERSHIP_ITEMS.map((item) => (
            <div class="col-lg-4" key={item.title}>
              <MembershipCard
                title={item.title}
                cost={item.cost}
                itemsIncluded={item.itemsIncluded}
              />{" "}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
