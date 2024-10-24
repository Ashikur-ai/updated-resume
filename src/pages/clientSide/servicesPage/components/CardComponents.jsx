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
        <div className="mb-2 border flex items-center justify-between rounded-lg px-2 py-1">
          <div className="w-3/4 ">
            <p className="text-3xl font-semibold">{item?.title}</p>
          </div>
          <div className="w-1/4  flex justify-end">
            <Link to={item?.live_link} target="_blank">
              <button className="btn bg-black text-white">Live Link</button>
            </Link>
          </div>
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
        {/* <Link to={item?.erd_link}>
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            ERD Diagram
          </Button>
        </Link> */}
      </CardFooter>
    </Card>
  );
};

export default CardComponents;