import { ChargebeeResource } from "./abstract-resource";
export class TimeMachineResource extends ChargebeeResource {
  public readonly waitForTimeTravelCompletion = super.processWait(
    "time_machine",
    "wait_for_time_travel_completion",
    { time_machine: { optional: false } },
  );
  public readonly retrieve = super.request("time_machine", "retrieve", {
    time_machine: { optional: false },
  });
  public readonly startAfresh = super.request("time_machine", "start_afresh", {
    time_machine: { optional: false },
  });
  public readonly travelForward = super.request(
    "time_machine",
    "travel_forward",
    { time_machine: { optional: false } },
  );
}