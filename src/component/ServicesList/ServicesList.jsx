import { ServicesListItem } from "../ServicesListItem/ServicesListItem";
import data from "../../data/data.json";
export const ServicesList = () => {
  return (
    <>
      <div className="list-services">
        {data.plans &&
          data.plans.map(
            ({ id, logo, price, type, subtitle, text, cashback }) => (
              <ServicesListItem
                key={id}
                logo={logo}
                price={price}
                type={type}
                subtitle={subtitle}
                text={text}
                cashback={cashback}
              />
            )
          )}
      </div>
    </>
  );
};
