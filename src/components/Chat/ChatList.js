import React, { useEffect, useState } from "react";
import NoRecord from "../other/NoRecord";
import { useSelector } from "react-redux";

const ChatList = ({
  isDisplay = true,
  data = [],
  handleClick,
  searchTerm1 = "",
  socket,
}) => {
  const { activeChatDetail } = useSelector((state) => state?.messageReducer);
  const [filterData, setFilterData] = useState(data);
  const [unreadMessageCounts, setUnreadMessageCounts] = useState({});

  useEffect(() => {
    if (searchTerm1 === "") {
      setFilterData(data);
      return;
    }
    let temp = data?.filter((item) => {
      const name = `${item?.student?.first_name?.toLowerCase()} ${item?.student?.last_name?.toLowerCase()}`;
      return name.includes(searchTerm1?.toLowerCase());
    });
    setFilterData(temp);
  }, [searchTerm1, data]);

  // Listen for unread message count from the server
  useEffect(() => {
    socket.on("unread-message-count", (messageData) => {
      setUnreadMessageCounts((prevCounts) => ({
        ...prevCounts,
        [messageData.chatId]: messageData.unreadCount, // Update unread count for the specific chat
      }));
    });

    return () => {
      socket.off("unread-message-count"); // Clean up the listener on unmount
    };
  }, []);

  const NewChatList = () => {
    return (
      <>
        {data?.map((item, index) => (
          <div>
            <a
              href="#"
              class={`ct_chat_user`}
              onClick={() => {
                handleClick(item?.id);
              }}
            >
              <div class="flex-shrink-0 position-relative ct_img_44">
                <img
                  class="ct_img_44"
                  src={item?.profile_image ?? "assets/img/user_profile.png"}
                  alt="user img"
                />
              </div>
              <div class="flex-grow-1">
                <h3 class="mb-0 ct_fs_14 ct_fw_600 ct_ff_roboto">
                  {`${item?.first_name} ${item?.last_name}`}
                </h3>
                <p class="mb-0 ct_fs_12 ct_ff_roboto">Pesquisar chat</p>
              </div>
            </a>
          </div>
        ))}
      </>
    );
  };

  const OldChatlist = () => {
    return (
      <>
        {filterData?.length != 0 ? (
          filterData?.map((item, index) => (
            <div>
              <a
                href="#"
                class={`ct_chat_user ${
                  activeChatDetail?.id == item?.id ? "ct_user_active" : ""
                }`}
                onClick={() => {
                  handleClick(item);
                }}
              >
                <div class="flex-shrink-0 position-relative ct_img_44">
                  <img
                    class="ct_img_44"
                    src={
                      item?.student?.profile_image ??
                      "assets/img/user_profile.png"
                    }
                    alt="user img"
                  />
                  {isDisplay && <span class="active"></span>}
                </div>
                <div class="flex-grow-1">
                  <h3 class="mb-0 ct_fs_14 ct_fw_600 ct_ff_roboto">
                    {`${item?.student?.first_name} ${item?.student?.last_name}`}
                  </h3>
                  <p class="mb-0 ct_fs_12 ct_ff_roboto">
                    {item?.latestMessage}
                  </p>
                </div>
                {unreadMessageCounts[item?.id] > 0 && (
                  <div className="ct_mesg_num_1 ms-auto">
                    <span>{unreadMessageCounts[item?.id]}</span>{" "}
                    {/* Display unread count */}
                  </div>
                )}
              </a>
            </div>
          ))
        ) : (
          <NoRecord />
        )}
      </>
    );
  };
  return (
    <>
      <div class="chat-lists">
        <div class="chat-list">
          {data?.length != 0 ? (
            isDisplay ? (
              <OldChatlist />
            ) : (
              <NewChatList />
            )
          ) : (
            <NoRecord />
          )}
        </div>
      </div>
    </>
  );
};

export default ChatList;
