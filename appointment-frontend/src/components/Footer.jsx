import React from "react";

export default function Footer() {
  return (
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h5>
              Copyright © 2022:
              <a
                href=""
                target="_blank"
              >
                {" IISC "}
              </a>
            </h5>
            <div class="social-links">
              <a href="" target="_blank">
                <i class="fab fa-github"></i>
              </a>

              {/* <a
                href=""
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
              </a> */}
              <a
                href=""
                target="_blank"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}