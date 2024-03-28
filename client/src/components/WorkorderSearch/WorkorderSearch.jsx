import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import "./workorderSearch.css";

function WorkorderSearch({ setWorkorderInfo, setIsLoading }) {
  const [workorderId, setWorkorderId] = useState(""); //state to store workorder id

  const handleInputChange = (event) => {
    setWorkorderId(event.target.value); //update workorderId state with input value
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Getting work order info... with id: ", workorderId);
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8080/api/workorders/${workorderId}`
      );
      if (response.status === 200) {
        const data = {
          ...response,
          status: status,
        };
        setWorkorderInfo(data);
        setIsLoading(false);
        console.log("Response:", data);
      } else {
        console.log("Error:", response);
        throw new Error(response);
      }
    } catch (error) {
      console.error("Error fetching work order:", error);
    }
  };

  return (
    <div className="search-form-container">
      <h4 className="search-form-title">Work Order: </h4>
      <form className="form-container space-y-8" onSubmit={handleSubmit}>
        <Input
          placeholder="Enter work order ID..."
          onChange={handleInputChange}
          className="search-input"
        />
        <Button type="search" className="search-btn">
          Search
        </Button>
      </form>
    </div>
  );
}

export default WorkorderSearch;
