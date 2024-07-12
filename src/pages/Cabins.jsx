import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabin } from "../services/aipCabins";

function Cabins() {

  useEffect(function () {
    getCabin().then(data => console.log(data))
  }, [])
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>

      <img src="https://nojqefutxjjfdvrlmnrq.supabase.co/storage/v1/object/public/cabin-images/cabin_001.jpg" alt="" />
    </Row>
  );
}

export default Cabins;
