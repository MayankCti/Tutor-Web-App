import React, { useEffect, useState } from "react";
import NoRecord from "../other/NoRecord";
import { useSelector } from "react-redux";
import { checkPage, getSubstring } from "../../utils/pip";

const ChatList = ({
  isDisplay = true,
  data = [],
  handleClick,
  searchTerm1 = "",
  socket,
  pageName = "",
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
      const name = checkPage(pageName)
        ? `${item?.teacher?.full_name?.toLowerCase()}`
        : `${item?.student?.first_name?.toLowerCase()} ${item?.student?.last_name?.toLowerCase()}`;
      return name.includes(searchTerm1?.toLowerCase());
    });
    setFilterData(temp);
  }, [searchTerm1, data]);

  useEffect(() => {
    const handleUnreadMessageCount = (messageData) => {
      setUnreadMessageCounts((prevCounts) => ({
        ...prevCounts,
        [messageData?.chatId]: messageData,
      }));
    };

    setUnreadMessageCounts((prevCounts) => ({
      ...prevCounts,
      [activeChatDetail?.id]: { ...prevCounts, unreadCount: 0 },
    }));

    socket.on("unread-message-count", handleUnreadMessageCount);

    return () => {
      socket.off("unread-message-count", handleUnreadMessageCount); // Cleanup on unmount
    };
  }, [activeChatDetail, socket]);

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
              <div className="flex-shrink-0 position-relative ct_img_44">
                <img
                  className="ct_img_44"
                  src={item?.profile_image ?? "../assets/img/user_profile.png"}
                  alt="user img"
                />
              </div>
              <div className="flex-grow-1">
                <h3 className="mb-0 ct_fs_14 ct_fw_600 ct_ff_roboto">
                  {checkPage(pageName)
                    ? item?.full_name
                    : `${item?.first_name} ${item?.last_name}`}
                </h3>
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
                <div className="flex-shrink-0 position-relative ct_img_44">
                  <img
                    className="ct_img_44"
                    src={
                      checkPage(pageName)
                        ? item?.teacher?.profile_image ??
                          "../assets/img/user_profile.png"
                        : item?.student?.profile_image ??
                          "../assets/img/user_profile.png"
                    }
                    alt="user img"
                  />
                </div>
                <div className="flex-grow-1">
                  <h3 className="mb-0 ct_fs_14 ct_fw_600 ct_ff_roboto">
                    {checkPage(pageName)
                      ? `${item?.teacher?.full_name ?? ""}`
                      : `${item?.student?.first_name ?? ""} ${
                          item?.student?.last_name ?? ""
                        }`}
                  </h3>
                  <p className="mb-0 ct_fs_12 ct_ff_roboto">
                    {unreadMessageCounts[item?.id] != null
                      ? getSubstring(
                          unreadMessageCounts[item?.id]?.lastMessage,
                          15
                        )
                      : getSubstring(activeChatDetail?.latestMessage)}
                  </p>
                </div>

                {activeChatDetail?.id != item?.id &&
                  unreadMessageCounts[item?.id]?.unreadCount > 0 && (
                    <div className="ct_mesg_num_1 ms-auto">
                      <span>{unreadMessageCounts[item?.id]?.unreadCount}</span>{" "}
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
      <div className="chat-lists">
        <div className="chat-list">
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
