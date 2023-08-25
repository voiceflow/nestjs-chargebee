import { TimeMachine } from "chargebee-typescript/lib/resources";
import { ChargebeeResource } from "../chargebee-resource.class";
export class TimeMachineResource extends ChargebeeResource {
  public readonly waitForTimeTravelCompletion = super
    .processWait("time_machine", "wait_for_time_travel_completion")
    .returns<{ time_machine: TimeMachine }>();
  public readonly retrieve = super
    .request("time_machine", "retrieve")
    .returns<{ time_machine: TimeMachine }>();
  public readonly startAfresh = super
    .request("time_machine", "start_afresh")
    .returns<{ time_machine: TimeMachine }>();
  public readonly travelForward = super
    .request("time_machine", "travel_forward")
    .returns<{ time_machine: TimeMachine }>();
}
