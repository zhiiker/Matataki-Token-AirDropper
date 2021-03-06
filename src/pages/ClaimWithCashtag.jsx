import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bulma-components";
const { Field, Control, Input } = Form;

export default function ClaimWithCashtag() {
  const history = useHistory();
  const [cashtag, setCashTag] = useState("");
  useEffect(() => {
    if (cashtag.slice(0, 1) === "$") {
      setCashTag(cashtag.slice(1));
    }
  }, [cashtag]);
  function goToClaimPage(e) {
    e.preventDefault();
    history.push(`/claim/${cashtag}`);
  }

  return (
    <div
      className="cashtag has-text-centered panel is-primary"
      style={{ maxWidth: "650px", margin: "10px auto" }}
    >
      <p className="panel-heading">Claim airdrop with $cashtag</p>
      <div style={{ padding: "10px" }}>
        <Field>
          <Control iconLeft>
            <Input
              onChange={(e) => setCashTag(e.target.value)}
              name="cashtag"
              type="text"
              value={cashtag}
              placeholder="Enter the cashtag to claim your airdrop..."
            />
            <span className="icon is-small is-left">
              <i className="fas fa-dollar-sign"></i>
            </span>
          </Control>
        </Field>
        <Button
          type="primary"
          className="is-rounded"
          onClick={(e) => goToClaimPage(e)}
        >
          Try to Claim
        </Button>
      </div>
    </div>
  );
}
