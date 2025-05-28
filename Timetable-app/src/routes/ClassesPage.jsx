import React from "react";
import ClassInfoCard from "../components/ClassInfoCard";
import { useAuth } from "../context/AuthContext";
import { useGlobalInfo } from "../context/GlobalInfoContext";

export default function ClassesPage() {
  const { user } = useAuth();
  const { classes } = useGlobalInfo();
  return (
    <div className="p-8 w-full mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-primary">Classes</h1>
      <div className="flex gap-6 ">
        {classes.map(cls => (
          <ClassInfoCard key={cls.id || cls.code} classInfo={cls} />
        ))}
      </div>
    </div>
  );
}
