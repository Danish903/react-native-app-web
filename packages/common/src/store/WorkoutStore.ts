import { createContext } from "react";

type WorkoutDay = "a" | "b";
interface WorkoutHistory {
   [key: string]: Array<{
      excercise: string;
      value: number;
   }>;
}
class WorkoutStore {
   currentSquat: number;
   currentBenchPress: number;
   currentOverHeadPress: number;
   currentDeadlift: number;
   currentBarbellRow: number;

   lastWorkoutType: WorkoutDay;

   history: WorkoutHistory;
}
export const WorkoutStoreStoreContext = createContext(new WorkoutStore());
