import "./WorkActivity.css";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

export function WorkActivity() {
  return (
    <ScrollArea className="activity-scroll rounded-md p-4">
      <Card className="card-container rounded-md">
        <div className="card">
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5 ">
                <Label>Time In</Label>
                <div className="rounded p-2">Time Checked In</div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Time Out</Label>
                <div className=" rounded p-2">Time Checked Out</div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>User Id</Label>
                <div className="rounded p-2">User Name</div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Store Id</Label>
                <div className="rounded p-2">Store Number</div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Resolution Code</Label>
                <div className="rounded p-2">Res Code</div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Techs Count</Label>
                <div className="rounded p-2">Number of Techs Present</div>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </ScrollArea>
  );
}

export default WorkActivity;
