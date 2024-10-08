import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom"; // Import Link

const IPtypes = () => {
  const cardsData = [
    {
      image:
        "https://img.freepik.com/free-photo/hand-arrange-white-letters-brand_1384-104.jpg?uid=R156478938&ga=GA1.1.1824907262.1727070553&semt=ais_hybrid",
      title: "Trademark",
      description:
        "A trademark is a symbol, word, phrase, logo, or combination of these elements that identifies and differentiates the products or services of a business from its competitors. It protects the brand identity of a business by granting the owner exclusive rights to use the mark.",
      link: "/trademark", // Add link for navigation
    },
    {
      image:
        "https://img.freepik.com/free-photo/copyright-design-license-patent-trademark-value-concept_53876-123644.jpg?uid=R156478938&ga=GA1.1.1824907262.1727070553&semt=ais_hybrid",
      title: "Copyright",
      description:
        "Copyright protects the original works of artistic, musical, and dramatic works. It grants the creator exclusive rights over the reproduction, distribution, performance, and adaptation of their works. Copyright is granted upon the creation of a work but can be registered for better legal protection.",
      link: "/copyright", // Add link for navigation
    },
    {
      image:
        "https://img.freepik.com/free-photo/patented-brand-identity-license-product-copyright-concept_53876-122707.jpg?uid=R156478938&ga=GA1.1.1824907262.1727070553&semt=ais_hybrid",
      title: "Patent",
      description:
        "A patent is a legal right granted to an inventor that provides them with exclusive rights to make, use, and sell their invention for a specified period, usually 20 years. Patents are typically granted for inventions that offer a new and useful solution to a problem.",
      link: "/patent", // Add link for navigation
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center my-10">
      {cardsData.map((card, index) => (
        <Link key={index} to={card.link} className="no-underline">
          <Card className="w-full max-w-[26rem] shadow-lg">
            <CardHeader floated={false} color="blue-gray">
              <img src={card.image} alt={card.title} />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-medium"
                >
                  {card.title}
                </Typography>
              </div>
              <Typography color="gray">{card.description}</Typography>
            </CardBody>
            <CardFooter className="flex justify-end">
              <Button variant="">Book Now</Button>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default IPtypes;
