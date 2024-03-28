import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import "./formResponse.css";

function FormResponse({ form, formState, isLoading }) {
  // get userId from local storage
  // const userId = JSON.parse(localStorage.getItem("userId")); can only get after login

  // when isLoading is false(when data is loaded), fetchLocation and fetchWorkActivity should be called
  function fetchLocation(locationId) {
    // Fetch location data from API
  }

  function fetchWorkActivity(workActivityId) {
    // Fetch work activity data from API
  }

  function handleResponse(formState) {
    console.log("data:", formState);
    if (form === "workOrderSearch") {
      if (formState.statusText === "OK") {
        // if work order is found, fetch location and work activity data in batch
        //   const [locationData, workActivityData] = await Promise.all([
        //   fetchLocation(locationId),
        //   fetchWorkActivity(workActivityId)
        // ]);
        return "Work Order found!";
      } else {
        return "Work Order not found!";
      }
    }
  }

  if (isLoading) {
    return (
      <Card className="form-response-layout">
        <CardHeader>
          <CardTitle>
            <div className="form-loading-skeleton">
              <Skeleton className="h-4" />
            </div>
          </CardTitle>
        </CardHeader>
        <Separator />
        <CardContent>
          <div className="form-loading-skeleton">
            <Skeleton className="h-4" />
            <Skeleton className="h-1" />
            <Skeleton className="h-1" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!formState) {
    return (
      <Card className="form-response-layout">
        <CardHeader>
          <CardTitle>Form Response</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent>
          <br />
          <p>Waiting for form submission...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="form-response-layout">
      <CardHeader>
        <CardTitle
          dangerouslySetInnerHTML={{ __html: handleResponse(formState) }}
        />
      </CardHeader>
      <Separator />
      <CardContent>
        <br />
        <p>
          <strong>Work Order Id:</strong> {formState.data.Id}
        </p>
        <p>
          <strong>Status:</strong> {formState.data.Status.Extended || "None"}
        </p>
        <p>
          <strong>Location ID:</strong> {formState.data.LocationId}
        </p>
        <p>
          <strong>Trade:</strong> {formState.data.Trade}
        </p>
        {console.log('location:', formState.data.Location)}
        {formState.data.Location && (
          <>
            <p>
              <strong>Latitude:</strong> {formState.data.Location.Latitude}
            </p>
            <p>
              <strong>Longitude:</strong> {formState.data.Location.Longitude}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default FormResponse;
