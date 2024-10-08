import "@/styles/global.css";
import "@/styles/components.css";

import React, { useEffect } from "react";
import TabNavigation from "@/components/navigation";

import TabPrompt from "@/tab-prompt";
import SettingsProfilePage from "@/components/settings/settings";
import TabChat from "@/tab-chat";

import { useAppSelector,useAppDispatch } from "@/store";
import { currentTab } from "./store/navigator";
import { asyncPromptsInit } from "./store/prompts";
import { asyncInitConfig } from "./store/app-config";
const ChatInterface: React.FC = () => {
  const selectedTabState = useAppSelector(currentTab);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(asyncPromptsInit());
    dispatch(asyncInitConfig());
  }, []);

  return (
    <div className="flex flex-row w-full h-full">
      {/* Left-side Tab Navigation */}
      <div className="left-side-bar w-[40px] h-full">
        <TabNavigation />
      </div>

      <div className="main-area flex flex-row flex-1">
        {selectedTabState === "chat" && <TabChat />}
        {selectedTabState === "prompt" && <TabPrompt />}
        {selectedTabState === "settings" && <SettingsProfilePage />}
      </div>
    </div>
  );
};

export default ChatInterface;
