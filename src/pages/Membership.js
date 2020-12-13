import React from "react";
import SectionTitle from "../components/SectionTitle";
import MembershipCard from "../components/MembershipCard";
import { MEMBERSHIP_ITEMS } from "../data/data";

const Membership = () => {
  return (
    <section class="bg-light text-center p-5">
      <div class="container-fluid">
        <SectionTitle
          titleName="Become a Member"
          text="We are a full service photography service"
          textColor="dark"
        />
        <div class="row align-items-center">
          {MEMBERSHIP_ITEMS.map((item) => (
            <div class="col-lg-4">
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
