import { createContext, useState } from "react";

type MyComponentChildren = React.PropsWithChildren;

export type LevelModel = "iniciante" | "intermediário" | "avançado";

type nameType = {
  name: string;
  daysTraining: string[];
  level: LevelModel;
  typeTraining: string[];
  dailyProgress: string[];
  saveName: (name: string) => void;
  saveDaysTraining: (day: string) => string;
  saveLevel: (level: LevelModel) => void;
  saveTypeTraining: (typeTraining: string) => void;
  removeTypeTraining: (nameTraining: string) => void;
  saveDailyProgress: (progress: string) => void;
};

const ProfileContext = createContext<nameType>({} as nameType);

function ProfileProviver({ children }: MyComponentChildren) {
  const [name, setName] = useState<string>("");
  const [daysTraining, setDaysTraining] = useState<string[]>([]);
  const [level, setLevel] = useState<LevelModel>("iniciante");
  const [typeTraining, setTypeTraining] = useState<string[]>([]);
  const [dailyProgress, setDailyProgress] = useState<string[]>([]);

  function saveName(name: string) {
    setName(name);
  }

  function saveDaysTraining(day: string): string {
    if (daysTraining.indexOf(day) === -1) {
      setDaysTraining([...daysTraining, day]);
      return "green";
    } else {
      setDaysTraining(daysTraining.filter((item) => item !== day));
      return "#d80042";
    }
  }

  function saveLevel(level: LevelModel) {
    setLevel(level);
  }

  function saveTypeTraining(type: string) {
    setTypeTraining([...typeTraining, type]);
  }

  function removeTypeTraining(nameTraining: string) {
    setTypeTraining(typeTraining.filter((item) => item !== nameTraining));
  }

  function saveDailyProgress(progress: string) {
    setDailyProgress([...dailyProgress, progress]);
  }

  return (
    <ProfileContext.Provider
      value={{
        name,
        saveName,
        daysTraining,
        saveDaysTraining,
        level,
        saveLevel,
        typeTraining,
        saveTypeTraining,
        removeTypeTraining,
        dailyProgress,
        saveDailyProgress,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export { ProfileContext, ProfileProviver };
