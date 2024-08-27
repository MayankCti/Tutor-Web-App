import React from "react";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../../routes/pageRoutes";

function Logout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate(pageRoutes?.studentlogin);
  };
  return (
    <>
      <div
        class="modal fade ct_assets_modal"
        id="ct_logout_modal"
        tabindex="-1"
        aria-labelledby="ct_logout_modalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header border-0 pt-0">
              <button
                type="button"
                class="btn-close ct_cloose_btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div class="modal-body border-0 ">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0117 0C4.51172 0 0.0117188 4.5 0.0117188 10C0.0117188 15.5 4.51172 20 10.0117 20C15.5117 20 20.0117 15.5 20.0117 10C20.0117 4.5 15.5117 0 10.0117 0ZM10.0117 15.9C6.81172 15.9 4.11172 13.3 4.11172 10C4.11172 8.3 4.91172 6.6 6.21172 5.5C6.61172 5.2 7.31172 5.2 7.61172 5.6C8.01172 6.1 7.91172 6.7 7.51172 7.1C6.61172 7.8 6.11172 8.9 6.11172 10.1C6.11172 12.2 7.81172 14 10.0117 14C12.2117 14 13.9117 12.3 13.9117 10.1C13.9117 9 13.4117 7.9 12.5117 7.1C12.1117 6.8 12.0117 6.1 12.4117 5.7C12.8117 5.3 13.4117 5.2 13.8117 5.6C15.1117 6.7 15.9117 8.4 15.9117 10.1C15.9117 13.3 13.2117 15.9 10.0117 15.9ZM10.0117 3.5C10.5117 3.5 11.0117 3.9 11.0117 4.5V8.2C11.0117 8.7 10.5117 9.2 10.0117 9.2C9.51172 9.2 9.01172 8.7 9.01172 8.2V4.5C9.01172 3.9 9.51172 3.5 10.0117 3.5Z"
                  fill="#DC0202"
                ></path>
              </svg>
              <h4 class="text-center mb-4 ct_fw_600">Log Out Account</h4>
              <p class="text-center ct_grey_text">
                Are you sure, you want to logout? once you logout <br /> you
                need to login again.
              </p>
              <div class="modal-footer border-0 justify-content-center">
                <button
                  type="button"
                  class="ct_purple_btn ct_outline_blue"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <a
                  href="javascript:void(0)"
                  data-bs-dismiss="modal"
                  type="button"
                  class=" bg-danger  ct_purple_btn  justify-content-center"
                  style={{ borderColor: "rgb(220, 53, 69)" }}
                  onClick={handleLogout}
                >
                  Yes Logout!
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logout;
