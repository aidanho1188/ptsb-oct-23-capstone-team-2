import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./dashboardCards.css";

// TODO: RENAME THIS COMPONENT
function DashboardCards({ title, data, onHover }) {
  const [workorders, setWorkorders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(!data);

    if (data) {
      setWorkorders(data);
      setIsLoading(false);
    }
  }, [data]);

  function reformatTime(time) {
    let date = new Date(time);
    let formattedDate = date.toLocaleString();
    return formattedDate;
  }

  return (
    <div className="table">
      <h2>{title}</h2>
      <Table className="table-container">
        <ScrollArea className="scroll rounded-md border p-4">
          <TableHeader>
            <TableRow className="table-headers">
              <TableHead className="p-1">Work Order</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Location Id</TableHead>
              <TableHead className="text-right">Trade</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={4}>
                  <div className="loading-skeleton">
                    <Skeleton className="h-4" />
                    <Skeleton className="h-4" />
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              <>
                {Array.isArray(data) &&
                  data.map((workorder) => (
                    <TableRow key={workorder.Id}>
                      <HoverCard>
                        <HoverCardTrigger>
                          <TableCell className="w-[100px]">
                            {workorder.Id}
                          </TableCell>
                        </HoverCardTrigger>
                        <HoverCardContent className="card-main-content">
                          <p>
                            <strong>Work Order:</strong> {workorder.Id}
                          </p>
                          <p>
                            <strong>Full Status:</strong>{" "}
                            {`${workorder.Status.Primary} ${
                              workorder.Status.Extended
                                ? "/ " + workorder.Status.Extended
                                : ""
                            }`}
                          </p>
                          <p>
                            <strong>Call Date:</strong>{" "}
                            {reformatTime(workorder.CallDate)}
                          </p>
                          <p>
                            <strong>Last Updated:</strong>{" "}
                            {reformatTime(workorder.UpdatedDate)}
                          </p>
                        </HoverCardContent>
                      </HoverCard>
                      <TableCell>
                        {workorder.Status.Extended ||
                          workorder.Status.Primary ||
                          "None"}
                      </TableCell>
                      <TableCell>{workorder.LocationId}</TableCell>
                      <TableCell className="text-right">
                        {workorder.Trade}
                      </TableCell>
                    </TableRow>
                  ))}
              </>
            )}
          </TableBody>
        </ScrollArea>
      </Table>
    </div>
  );
}
export default DashboardCards;
