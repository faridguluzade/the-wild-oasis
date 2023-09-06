import BookingTableOperations from "../features/bookings/BookingTableOperations";
import BookingTable from "../features/bookings/BookingTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Bookings() {
  return (
    <Row>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>

      <BookingTable />
    </Row>
  );
}

export default Bookings;
