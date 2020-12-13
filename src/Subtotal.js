import React from "react";
import "./Subtotal.css";
import CurrencyForamt from "react-currency-format";
import { useStateValue } from "./StateProvider";
// import { AmpStoriesOutlined } from "@material-ui/icons";
import { countSubtotal } from "./reducer.js";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyForamt
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This contains a gift
            </small>
          </>
        )}
        value={countSubtotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
