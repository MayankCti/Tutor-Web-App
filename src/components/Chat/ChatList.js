import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleChatBar } from '../../redux/reducers/messageReducer'

const ChatList = () => {
    const dispatch = useDispatch()
  const {toggleSlider}= useSelector(state=>state?.messageReducer);
  return (
    <>
         <div class="chat-lists">
                  <div class="chat-list">
                    {['','','','']?.map((item, index) => (
                      <div>
                        <a href="#" class={`ct_chat_user ${index==0 ? "ct_user_active" : ""}`} onClick={()=>{dispatch(toggleChatBar(true))}}>
                          <div class="flex-shrink-0 position-relative ct_img_44">
                            <img
                              class="ct_img_44"
                              src="assets/img/user_profile.png"
                              alt="user img"
                            />
                            <span class="active"></span>
                          </div>
                          <div class="flex-grow-1">
                            <h3 class="mb-0 ct_fs_14 ct_fw_600 ct_ff_roboto">
                              Ms. Lynda Bradtke
                            </h3>
                            <p class="mb-0 ct_fs_12 ct_ff_roboto">
                              Pesquisar chat
                            </p>
                          </div>
                          <div class="ct_mesg_num_1 ms-auto">
                            <span>1</span>
                          </div>
                        </a>
                        <a href="#" class="ct_chat_user" onClick={()=>{dispatch(toggleChatBar(true))}}>
                          <div class="flex-shrink-0 position-relative ct_img_44">
                            <img
                              class="ct_img_44"
                              src="assets/img/user_profile.png"
                              alt="user img"
                            />
                          </div>
                          <div class="flex-grow-1">
                            <h3 class="mb-0 ct_fs_14 ct_fw_600 ct_ff_roboto">
                              Ms. Lynda Bradtke
                            </h3>
                            <p class="mb-0 ct_fs_12 ct_ff_roboto">
                              Pesquisar chat
                            </p>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div> 
    </>
  )
}

export default ChatList
