import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CardComponents = ({ item }) => {
  console.log(item);
  return (
    <Card className="shadow-xl">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={item?.project_img_url}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between px-5">
          <Typography color="blue-gray" className="font-medium text-xl">
            <p className="text-3xl">{item?.title}</p>
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            <Link to={item?.live_link} target="_blank">
              <button className="btn bg-black text-white">Live Link</button>
            </Link>
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {item?.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={item?.erd_link}>
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            ERD Diagram
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardComponents;