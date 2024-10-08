import { ChatFolder, Conversation } from "@/types";
import { FC } from "react";
import { Folder } from "./folder";

interface Props {
  searchTerm: string;
  conversations: Conversation[];
  folders: ChatFolder[];
  onDeleteFolder: (folder: number) => void;
  onUpdateFolder: (folder: number, name: string) => void;
  // conversation props
  selectedConversation: Conversation | null;
  loading: boolean;
  onSelectConversation: (conversation: Conversation) => void;
  onDeleteConversation: (conversation: Conversation) => void;
  onUpdateConversation: (conversation: Conversation) => void;
}

export const Folders: FC<Props> = ({
  searchTerm,
  conversations,
  folders,
  onDeleteFolder,
  onUpdateFolder,
  selectedConversation,
  loading,
  onSelectConversation,
  onDeleteConversation,
  onUpdateConversation,
}) => {
  return (
    <div className="flex w-full flex-col gap-1 pt-2">
      {folders.map((folder, index) => (
        <Folder
          key={index}
          searchTerm={searchTerm}
          conversations={conversations.filter((c) => c.folderId)}
          currentFolder={folder}
          onDeleteFolder={onDeleteFolder}
          onUpdateFolder={onUpdateFolder}
          // conversation props
          selectedConversation={selectedConversation}
          loading={loading}
          onSelectConversation={onSelectConversation}
          onDeleteConversation={onDeleteConversation}
          onUpdateConversation={onUpdateConversation}
        />
      ))}
    </div>
  );
};
