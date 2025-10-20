"use client";

import { PiPaperPlaneTiltBold } from "react-icons/pi";
import Editor from "../components/Editor";
import SelectProfile from "../components/SelectProfile";
import SelectTags from "../components/SelectTags";
import UserProfile from "./profile-view/page";

export default function ClientPage({ tags, session }: any) {
  return (
    <form className="flex flex-col items-center gap-y-6 px-8 py-6">
      <h1 className="text-2xl font-bold">Create a Post</h1>

      <SelectProfile profiles={[{
        name: "Bob Joe",
        id: "100",
        type: "user",
        image: null,
        createdAt: new Date(),
        updatedAt: null,
      }]} />
      <Editor />
      <button className="flex items-center gap-3 rounded-sm border-b-2 border-sky-900 bg-sky-800 px-6 py-1 text-lg font-medium text-white shadow-sm ring-1 ring-sky-950 transition-colors hover:bg-sky-50 hover:text-sky-800 focus:mt-0.5 focus:border-b-0">
        <span className="contents">
          Publish <PiPaperPlaneTiltBold />
        </span>
      </button>
    </form>
  );
}
