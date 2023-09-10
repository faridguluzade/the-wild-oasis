import { useCheckout } from "./useCheckout";

import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
    >
      {!isCheckingOut ? "Check out" : <SpinnerMini />}
    </Button>
  );
}

export default CheckoutButton;
