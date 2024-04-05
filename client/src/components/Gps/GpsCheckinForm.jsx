import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";
import "./GpsCheckinForm.css";

function GpsCheckinForm({ btnName, formState, isLoading, setIsLoading }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      workTypeId: 1,
      userId: 0,
      techsCount: 1,
      latitude: 0,
      longitude: 0,
    },
  });

  const onSubmit = async (event) => {
    event.preventDefault;
    // send workorder id in the url params
    // localhost:8080/api/workorders/checkIn/:workorderId
    const workorderId = formState.workorder.data.Id;
    // send these data with the body
    const { workTypeId, userId, techsCount, latitude, longitude } = event;
    setIsLoading(true);
    // console.log('workTypeId: ', workTypeId)
    const response = await axios.post(
      `http://localhost:8080/api/workorders/checkIn/${workorderId}`,
      {
        workTypeId: workTypeId,
        userId: userId,
        techsCount: techsCount,
        latitude: latitude,
        longitude: longitude,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        responseType: "json",
      }
    );
    console.log(" check in response:", response);
    if (response.data.success === true) {
      formState.success = `Check In Successful!`;
    } else {
      // this is bad
      formState.workorder = response.data;
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (formState && formState.userId && formState.location) {
      console.log("location:", formState.location.data);
      reset({
        workTypeId: 1,
        userId: formState.userId.data,
        techsCount: 1,
        latitude: formState.location.data.Latitude,
        longitude: formState.location.data.Longitude,
      });
    }
  }, [isLoading]);

  return (
    <div className="gps-layout">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="workTypeId">Work Type ID</label>
          <Input
            placeholder="Enter Work Type ID"
            {...register("workTypeId")}
            required
          />
        </div>

        <div>
          <label htmlFor="userId">User ID</label>
          <Input placeholder="Enter User ID" {...register("userId")} required />
        </div>

        <div>
          <label htmlFor="techsCount">Number of Technicians Present</label>
          <Input
            placeholder="Number of Technicians Present"
            {...register("techsCount")}
            required
          />
        </div>

        <div>
          <label htmlFor="latitude">Latitude</label>
          <Input placeholder="Latitude" {...register("latitude")} required />
        </div>

        <div>
          <label htmlFor="longitude">Longitude</label>
          <Input placeholder="Longitude" {...register("longitude")} required />
        </div>

        <br></br>
        <Button type="submit">{btnName}</Button>
      </form>
    </div>
  );
}
export default GpsCheckinForm;
